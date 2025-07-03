import express from 'express';
import prisma from '../lib/db.js';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'API Debug - En desarrollo', data: [] });
});

// POST /api/debug/migrate - Crear tablas con Prisma
router.post('/migrate', async (req, res) => {
  try {
    console.log('🚀 Ejecutando migraciones de Prisma...');
    
    // Ejecutar prisma db push para crear las tablas
    const { stdout, stderr } = await execPromise('npx prisma db push --accept-data-loss', {
      cwd: '/app'
    });
    
    console.log('✅ Migraciones completadas');
    console.log('STDOUT:', stdout);
    if (stderr) console.log('STDERR:', stderr);
    
    return res.status(200).json({
      success: true,
      message: 'Migraciones de base de datos ejecutadas exitosamente',
      output: stdout,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error ejecutando migraciones:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error ejecutando migraciones',
      message: error.message,
      output: error.stdout || '',
      errorOutput: error.stderr || ''
    });
  }
});

// POST /api/debug/setup - Crear tablas y datos iniciales
router.post('/setup', async (req, res) => {
  try {
    console.log('🚀 Iniciando setup automático de base de datos...');
    
    // 1. Verificar conexión BD
    await prisma.$connect();
    console.log('✅ BD conectada');
    
    // 2. Crear facultades
    const facultades = [
      { nombre: 'Ciencias Económicas', codigo: 'CEA' },
      { nombre: 'Ciencias Jurídicas', codigo: 'CJ' },
      { nombre: 'Ingeniería', codigo: 'ING' },
      { nombre: 'Arquitectura', codigo: 'ARQ' },
      { nombre: 'Ciencias de la Educación', codigo: 'CECS' },
      { nombre: 'Ciencias de la Salud', codigo: 'CS' },
      { nombre: 'Escuela de Educación', codigo: 'EE' }
    ];

    let facultadesCreadas = 0;
    for (const f of facultades) {
      const result = await prisma.facultad.upsert({
        where: { nombre: f.nombre },
        update: { codigo: f.codigo },
        create: f
      });
      facultadesCreadas++;
      console.log(`✅ Facultad: ${f.nombre}`);
    }
    
    // 3. Crear aulas
    const aulas = [
      { nombre: 'Aula 4', capacidad: 72 },
      { nombre: 'Aula 8', capacidad: 71 },
      { nombre: 'Aula 12', capacidad: 69 },
      { nombre: 'Lab Informático', capacidad: 34 }
    ];

    let aulasCreadas = 0;
    for (const a of aulas) {
      const result = await prisma.aula.upsert({
        where: { nombre: a.nombre },
        update: { capacidad: a.capacidad },
        create: a
      });
      aulasCreadas++;
      console.log(`✅ Aula: ${a.nombre}`);
    }

    // 4. Mapear sectores básicos
    const sectores = [
      { sector: '2', facultadId: 1 }, // CEA
      { sector: '3', facultadId: 2 }, // CJ
      { sector: '4', facultadId: 3 }, // ING
      { sector: '5', facultadId: 4 }, // ARQ
      { sector: '7', facultadId: 5 }, // CECS
      { sector: '8', facultadId: 6 }, // CS
      { sector: '21', facultadId: 7 } // EE
    ];

    let sectoresCreados = 0;
    for (const s of sectores) {
      try {
        await prisma.sectorFacultad.upsert({
          where: { sector: s.sector },
          update: { facultadId: s.facultadId },
          create: s
        });
        sectoresCreados++;
        console.log(`✅ Sector: ${s.sector}`);
      } catch (error) {
        console.log(`⚠️ Sector ${s.sector} ya existe o error: ${error.message}`);
      }
    }

    await prisma.$disconnect();

    return res.status(200).json({
      success: true,
      message: 'Setup de base de datos completado exitosamente',
      data: {
        facultadesCreadas,
        aulasCreadas,
        sectoresCreados,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ Error en setup de base de datos:', error);
    await prisma.$disconnect();
    
    return res.status(500).json({
      success: false,
      error: 'Error en setup de base de datos',
      message: error.message,
      stack: error.stack
    });
  }
});

// GET /api/debug/verify - Verificar estado de las tablas
router.get('/verify', async (req, res) => {
  try {
    await prisma.$connect();
    
    const facultades = await prisma.facultad.count();
    const aulas = await prisma.aula.count();
    const examenes = await prisma.examen.count();
    const carreras = await prisma.carrera.count();
    const sectores = await prisma.sectorFacultad.count();
    
    await prisma.$disconnect();
    
    return res.status(200).json({
      success: true,
      message: 'Base de datos verificada correctamente',
      data: {
        tablas: {
          facultades,
          aulas,
          examenes,
          carreras,
          sectores
        },
        estado: 'Operacional',
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error verificando base de datos:', error);
    await prisma.$disconnect();
    
    return res.status(500).json({
      success: false,
      error: 'Error verificando base de datos',
      message: error.message
    });
  }
});

// POST /api/debug/reset-database - Limpiar duplicados y resetear BD
router.post('/reset-database', async (req, res) => {
  try {
    console.log('🧹 LIMPIEZA COMPLETA DE BASE DE DATOS - RAILWAY EXPRESS');
    
    // 1. Limpiar datos de sincronización (preservar estructura)
    console.log('🗑️ Eliminando exámenes duplicados...');
    await prisma.examenTotem.deleteMany({});
    await prisma.examen.deleteMany({});
    
    console.log('🗑️ Eliminando mapeos obsoletos...');
    await prisma.carreraTotem.deleteMany({});
    await prisma.sectorFacultad.deleteMany({});
    
    console.log('🗑️ Limpiando datos TOTEM...');
    await prisma.totemData.deleteMany({});
    
    // 2. Mantener solo aulas correctas
    console.log('🏫 Configurando aulas correctas...');
    await prisma.aula.deleteMany({});
    
    const aulasCorrectas = [
      { nombre: 'Aula 4', capacidad: 72, ubicacion: 'Edificio Principal' },
      { nombre: 'Aula 8', capacidad: 71, ubicacion: 'Edificio Principal' },
      { nombre: 'Aula 12', capacidad: 69, ubicacion: 'Edificio Principal' },
      { nombre: 'Laboratorio Informático', capacidad: 34, ubicacion: 'Laboratorio de Computación' }
    ];
    
    for (const aula of aulasCorrectas) {
      await prisma.aula.create({ data: aula });
    }
    
    // 3. Verificar mapeos de sectores
    const sectoresMapeados = await prisma.sectorFacultad.count();
    if (sectoresMapeados === 0) {
      console.log('🗺️ Recreando mapeos de sectores...');
      const mapeosSectores = {
        '2': 'CEA', '3': 'CJ', '4': 'ING', 
        '5': 'ARQ', '7': 'CECS', '8': 'CS', '21': 'EE'
      };
      
      for (const [sector, codigoFacultad] of Object.entries(mapeosSectores)) {
        const facultad = await prisma.facultad.findFirst({ where: { codigo: codigoFacultad } });
        if (facultad) {
          await prisma.sectorFacultad.create({
            data: { sector, facultadId: facultad.id, activo: true }
          });
        }
      }
    }
    
    // 4. Estadísticas finales
    const stats = await Promise.all([
      prisma.facultad.count(),
      prisma.carrera.count(),
      prisma.aula.count(),
      prisma.examen.count(),
      prisma.sectorFacultad.count()
    ]);
    
    const [facultades, carreras, aulas, examenes, sectores] = stats;
    
    res.json({
      success: true,
      message: '🎉 Base de datos limpia y lista para nueva sincronización',
      stats: {
        facultades,
        carreras,
        aulas,
        examenes,
        sectores
      },
      nextStep: 'Ejecutar sincronización: POST /api/v1/totem/simple-sync'
    });

  } catch (error) {
    console.error('❌ Error en reset:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router; 