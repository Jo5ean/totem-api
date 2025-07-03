import prisma from '../../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log('🧹 LIMPIEZA COMPLETA DE BASE DE DATOS - RAILWAY');
    
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
} 