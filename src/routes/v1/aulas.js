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

// POST /api/v1/aulas - Crear nueva aula
router.post('/', async (req, res) => {
  try {
    const { nombre, capacidad, ubicacion, tipo, activa = true } = req.body;

    // Validaciones
    if (!nombre) {
      return res.status(400).json({
        success: false,
        error: 'Datos requeridos faltantes',
        message: 'El campo nombre es obligatorio'
      });
    }

    if (capacidad && (isNaN(capacidad) || capacidad < 1)) {
      return res.status(400).json({
        success: false,
        error: 'Capacidad inválida',
        message: 'La capacidad debe ser un número mayor a 0'
      });
    }

    // Verificar que el nombre no exista
    const aulaExistente = await prisma.aula.findFirst({
      where: { nombre: nombre.trim() }
    });

    if (aulaExistente) {
      return res.status(409).json({
        success: false,
        error: 'Aula ya existe',
        message: `Ya existe un aula con el nombre "${nombre}"`
      });
    }

    // Crear aula
    const aula = await prisma.aula.create({
      data: {
        nombre: nombre.trim(),
        capacidad: capacidad ? parseInt(capacidad) : null,
        ubicacion: ubicacion?.trim() || null,
        tipo: tipo?.trim() || null,
        activa: Boolean(activa)
      }
    });

    console.log(`✅ Aula creada: ${aula.nombre} (capacidad: ${aula.capacidad || 'N/A'})`);

    return res.status(201).json({
      success: true,
      message: 'Aula creada exitosamente',
      data: aula
    });
    
  } catch (error) {
    console.error('Error creando aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error creando aula',
      message: error.message
    });
  }
});

// PUT /api/v1/aulas/:id - Actualizar aula
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, capacidad, ubicacion, tipo, activa } = req.body;

    // Verificar que el aula existe
    const aulaExistente = await prisma.aula.findUnique({
      where: { id: parseInt(id) }
    });

    if (!aulaExistente) {
      return res.status(404).json({
        success: false,
        error: 'Aula no encontrada',
        message: `No se encontró aula con ID ${id}`
      });
    }

    // Validaciones
    if (nombre && nombre.trim() !== aulaExistente.nombre) {
      const nombreExistente = await prisma.aula.findFirst({
        where: { 
          nombre: nombre.trim(),
          id: { not: parseInt(id) }
        }
      });

      if (nombreExistente) {
        return res.status(409).json({
          success: false,
          error: 'Nombre ya existe',
          message: `Ya existe otra aula con el nombre "${nombre}"`
        });
      }
    }

    if (capacidad && (isNaN(capacidad) || capacidad < 1)) {
      return res.status(400).json({
        success: false,
        error: 'Capacidad inválida',
        message: 'La capacidad debe ser un número mayor a 0'
      });
    }

    // Preparar datos para actualización
    const datosActualizacion = {};
    if (nombre !== undefined) datosActualizacion.nombre = nombre.trim();
    if (capacidad !== undefined) datosActualizacion.capacidad = capacidad ? parseInt(capacidad) : null;
    if (ubicacion !== undefined) datosActualizacion.ubicacion = ubicacion?.trim() || null;
    if (tipo !== undefined) datosActualizacion.tipo = tipo?.trim() || null;
    if (activa !== undefined) datosActualizacion.activa = Boolean(activa);

    // Actualizar aula
    const aulaActualizada = await prisma.aula.update({
      where: { id: parseInt(id) },
      data: datosActualizacion,
      include: {
        examenes: {
          where: { activo: true },
          take: 5,
          orderBy: { fecha: 'desc' },
          select: {
            id: true,
            nombreMateria: true,
            fecha: true,
            hora: true
          }
        }
      }
    });

    console.log(`✅ Aula actualizada: ${aulaActualizada.nombre} (ID: ${id})`);

    return res.status(200).json({
      success: true,
      message: 'Aula actualizada exitosamente',
      data: aulaActualizada
    });
    
  } catch (error) {
    console.error('Error actualizando aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error actualizando aula',
      message: error.message
    });
  }
});

// DELETE /api/v1/aulas/:id - Eliminar aula (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { force = false } = req.query; // Parámetro para eliminación física

    // Verificar que el aula existe
    const aula = await prisma.aula.findUnique({
      where: { id: parseInt(id) },
      include: {
        examenes: {
          where: { activo: true }
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

    // Verificar si tiene exámenes activos asignados
    if (aula.examenes.length > 0 && force !== 'true') {
      return res.status(400).json({
        success: false,
        error: 'Aula tiene exámenes asignados',
        message: `El aula "${aula.nombre}" tiene ${aula.examenes.length} exámenes activos asignados. Use force=true para eliminar de todas formas.`,
        data: {
          examenesAsignados: aula.examenes.length,
          examenes: aula.examenes.map(e => ({
            id: e.id,
            materia: e.nombreMateria,
            fecha: e.fecha,
            hora: e.hora
          }))
        }
      });
    }

    let aulaEliminada;
    
    if (force === 'true') {
      // Eliminación física (solo para casos especiales)
      // Primero desasignar todos los exámenes
      await prisma.examen.updateMany({
        where: { aulaId: parseInt(id) },
        data: { aulaId: null }
      });
      
      // Luego eliminar el aula
      aulaEliminada = await prisma.aula.delete({
        where: { id: parseInt(id) }
      });
      
      console.log(`🗑️ Aula eliminada físicamente: ${aulaEliminada.nombre} (ID: ${id})`);
    } else {
      // Soft delete (marcar como inactiva)
      aulaEliminada = await prisma.aula.update({
        where: { id: parseInt(id) },
        data: { activa: false }
      });
      
      console.log(`🚫 Aula desactivada: ${aulaEliminada.nombre} (ID: ${id})`);
    }

    return res.status(200).json({
      success: true,
      message: force === 'true' ? 'Aula eliminada exitosamente' : 'Aula desactivada exitosamente',
      data: {
        id: aulaEliminada.id,
        nombre: aulaEliminada.nombre,
        eliminacionFisica: force === 'true'
      }
    });
    
  } catch (error) {
    console.error('Error eliminando aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error eliminando aula',
      message: error.message
    });
  }
});

export default router;