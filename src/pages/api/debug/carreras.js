import prisma from '../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { facultadId, fix } = req.query;
    
    console.log('=== DEBUG CARRERAS ===');
    console.log('Query params:', req.query);
    console.log('Fix parameter:', fix);
    console.log('Fix === sectores:', fix === 'sectores');

    // CORRECCIÓN TEMPORAL DE SECTORES
    if (fix === 'sectores') {
      const resultados = [];
      
      // Actualizar sectores según CSV del usuario
      const updates = [
        { codigo: 'CEA', sector: 2, nombre: 'ECONOMÍA Y ADMINISTRACIÓN' },
        { codigo: 'CJ', sector: 3, nombre: 'CIENCIAS JURÍDICAS' },
        { codigo: 'ING', sector: 4, nombre: 'INGENIERÍA' },
        { codigo: 'EE', sector: 21, nombre: 'FACULTAD DE EDUCACIÓN' }
      ];
      
      for (const update of updates) {
        const result = await prisma.facultad.updateMany({
          where: { codigo: update.codigo },
          data: { sector: update.sector }
        });
        resultados.push({
          codigo: update.codigo,
          nombre: update.nombre,
          sector: update.sector,
          actualizados: result.count
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Sectores corregidos',
        resultados
      });
    }

    const whereClause = {};
    if (facultadId) {
      whereClause.facultadId = parseInt(facultadId);
    }

    const carreras = await prisma.carrera.findMany({
      where: whereClause,
      include: {
        facultad: true,
        _count: {
          select: { examenes: true }
        }
      },
      orderBy: { codigo: 'asc' }
    });

    const carrerasFormateadas = carreras.map(carrera => ({
      id: carrera.id,
      codigo: carrera.codigo,
      nombre: carrera.nombre,
      facultad: carrera.facultad.nombre,
      totalExamenes: carrera._count.examenes,
      activa: carrera.activa,
      fechaCreacion: carrera.createdAt.toISOString().split('T')[0]
    }));

    return res.status(200).json({
      total: carreras.length,
      carreras: carrerasFormateadas
    });

  } catch (error) {
    console.error('Error obteniendo carreras:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      details: error.message 
    });
  }
} 