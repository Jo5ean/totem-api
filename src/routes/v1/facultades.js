import express from 'express';
import prisma from '../../lib/db.js';

const router = express.Router();

// GET /api/v1/facultades - Obtener todas las facultades
router.get('/', async (req, res) => {
  try {
    const facultades = await prisma.facultad.findMany({
      orderBy: { nombre: 'asc' },
      include: {
        carreras: {
          where: { activa: true }
        },
        sectores: {
          where: { activo: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Facultades obtenidas exitosamente',
      data: facultades,
      total: facultades.length
    });
    
  } catch (error) {
    console.error('Error obteniendo facultades:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo facultades',
      message: error.message
    });
  }
});

// GET /api/v1/facultades/:id - Obtener facultad por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const facultad = await prisma.facultad.findUnique({
      where: { id: parseInt(id) },
      include: {
        carreras: {
          where: { activa: true },
          include: {
            examenes: {
              where: { activo: true },
              take: 10,
              orderBy: { fecha: 'desc' }
            }
          }
        },
        sectores: {
          where: { activo: true }
        }
      }
    });

    if (!facultad) {
      return res.status(404).json({
        success: false,
        error: 'Facultad no encontrada',
        message: `No se encontró facultad con ID ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Facultad obtenida exitosamente',
      data: facultad
    });
    
  } catch (error) {
    console.error('Error obteniendo facultad:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo facultad',
      message: error.message
    });
  }
});

export default router; 