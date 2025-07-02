import express from 'express';
import prisma from '../../lib/db.js';

const router = express.Router();

// GET /api/v1/examenes - Obtener todos los exámenes
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20, facultad, fecha } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const where = {
      activo: true,
      ...(facultad && {
        carrera: {
          facultad: {
            nombre: {
              contains: facultad
            }
          }
        }
      }),
      ...(fecha && {
        fecha: {
          gte: new Date(fecha),
          lt: new Date(new Date(fecha).getTime() + 24 * 60 * 60 * 1000)
        }
      })
    };

    const [examenes, total] = await Promise.all([
      prisma.examen.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { fecha: 'asc' },
        include: {
          carrera: {
            select: {
              nombre: true,
              facultad: {
                select: {
                  nombre: true
                }
              }
            }
          },
          aula: {
            select: {
              nombre: true,
              capacidad: true
            }
          }
        }
      }),
      prisma.examen.count({ where })
    ]);

    return res.status(200).json({
      success: true,
      message: 'Exámenes obtenidos exitosamente',
      data: examenes,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit))
      }
    });
    
  } catch (error) {
    console.error('Error obteniendo exámenes:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo exámenes',
      message: error.message
    });
  }
});

// GET /api/v1/examenes/:id - Obtener examen por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Excluir rutas específicas que no son IDs
    const rutasEspeciales = ['por-fecha', 'asignacion-masiva', 'inscripciones', 'sincronizar-inscripciones'];
    if (rutasEspeciales.includes(id)) {
      return res.status(404).json({
        success: false,
        error: 'Ruta no encontrada en este router',
        message: `La ruta "/examenes/${id}" debe ser manejada por otro endpoint`
      });
    }
    
    // Validar que el ID sea un número válido
    const examenId = parseInt(id);
    if (isNaN(examenId) || examenId <= 0) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        message: `El ID del examen debe ser un número válido. Recibido: "${id}"`
      });
    }
    
    const examen = await prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        carrera: {
          include: {
            facultad: true
          }
        },
        aula: true,
        examenTotem: true,
        actasExamen: {
          include: {
            estudiante: true
          }
        }
      }
    });

    if (!examen) {
      return res.status(404).json({
        success: false,
        error: 'Examen no encontrado',
        message: `No se encontró examen con ID ${examenId}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Examen obtenido exitosamente',
      data: examen
    });
    
  } catch (error) {
    console.error('Error obteniendo examen:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo examen',
      message: error.message
    });
  }
});

export default router; 