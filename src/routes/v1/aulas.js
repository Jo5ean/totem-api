import express from 'express';
import prisma from '../../lib/db.js';

const router = express.Router();

// GET /api/v1/aulas - Obtener todas las aulas
router.get('/', async (req, res) => {
  try {
    const aulas = await prisma.aula.findMany({
      orderBy: { nombre: 'asc' },
      include: {
        examenes: {
          where: { activo: true },
          take: 5,
          orderBy: { fecha: 'desc' },
          select: {
            id: true,
            nombreMateria: true,
            fecha: true,
            hora: true,
            carrera: {
              select: {
                nombre: true,
                facultad: {
                  select: {
                    nombre: true
                  }
                }
              }
            }
          }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Aulas obtenidas exitosamente',
      data: aulas,
      total: aulas.length
    });
    
  } catch (error) {
    console.error('Error obteniendo aulas:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo aulas',
      message: error.message
    });
  }
});

// GET /api/v1/aulas/:id - Obtener aula por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const aula = await prisma.aula.findUnique({
      where: { id: parseInt(id) },
      include: {
        examenes: {
          where: { activo: true },
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
            }
          }
        }
      }
    });

    if (!aula) {
      return res.status(404).json({
        success: false,
        error: 'Aula no encontrada',
        message: `No se encontró aula con ID ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Aula obtenida exitosamente',
      data: aula
    });
    
  } catch (error) {
    console.error('Error obteniendo aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo aula',
      message: error.message
    });
  }
});

export default router; 