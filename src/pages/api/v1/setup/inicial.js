// 🚀 SETUP INICIAL AUTOMÁTICO PARA RAILWAY
import prisma from '../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log('🚀 Iniciando setup automático...');
    
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

    for (const f of facultades) {
      await prisma.facultad.upsert({
        where: { codigo: f.codigo },
        update: { nombre: f.nombre },
        create: f
      });
    }
    
    // 3. Crear aulas
    const aulas = [
      { nombre: 'Aula 4', capacidad: 72 },
      { nombre: 'Aula 8', capacidad: 71 },
      { nombre: 'Aula 12', capacidad: 69 },
      { nombre: 'Lab Informático', capacidad: 34 }
    ];

    for (const a of aulas) {
      await prisma.aula.upsert({
        where: { nombre: a.nombre },
        update: { capacidad: a.capacidad },
        create: a
      });
    }

    // 4. Mapear sectores
    const sectores = {
      '2': 'CEA', '3': 'CJ', '4': 'ING', 
      '5': 'ARQ', '7': 'CECS', '8': 'CS', '21': 'EE'
    };

    for (const [sector, codigo] of Object.entries(sectores)) {
      const facultad = await prisma.facultad.findFirst({ where: { codigo } });
      if (facultad) {
        await prisma.sectorFacultad.upsert({
          where: { sector },
          update: { facultadId: facultad.id },
          create: { sector, facultadId: facultad.id }
        });
      }
    }

    // 5. Estadísticas
    const stats = {
      facultades: await prisma.facultad.count(),
      aulas: await prisma.aula.count(),
      sectores: await prisma.sectorFacultad.count()
    };

    res.json({
      success: true,
      message: '🎉 Setup completado exitosamente',
      stats,
      nextStep: 'Visitar /api/v1/totem/simple-sync para sincronizar'
    });

  } catch (error) {
    console.error('❌ Error en setup:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
} 