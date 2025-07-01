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

export default router; 