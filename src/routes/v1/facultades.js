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
        },
        _count: {
          select: {
            carreras: { where: { activa: true } }
            // syncLogs removido - no existe en FacultadCountOutputType
          }
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

// POST /api/v1/facultades - Crear nueva facultad
router.post('/', async (req, res) => {
  try {
    const { nombre, codigo, sheetId } = req.body;

    // Validaciones
    if (!nombre || !codigo) {
      return res.status(400).json({
        success: false,
        error: 'Datos requeridos faltantes',
        message: 'Los campos nombre y código son obligatorios'
      });
    }

    // Verificar que el código no exista
    const facultadExistente = await prisma.facultad.findFirst({
      where: { 
        OR: [
          { codigo: codigo },
          { nombre: nombre }
        ]
      }
    });

    if (facultadExistente) {
      return res.status(409).json({
        success: false,
        error: 'Facultad ya existe',
        message: `Ya existe una facultad con código "${codigo}" o nombre "${nombre}"`
      });
    }

    // Crear facultad
    const facultad = await prisma.facultad.create({
      data: {
        nombre: nombre.trim(),
        codigo: codigo.trim(),
        sheetId: sheetId?.trim() || null,
        activa: true
      },
      include: {
        _count: {
          select: {
            carreras: { where: { activa: true } }
            // syncLogs removido - no existe en FacultadCountOutputType
          }
        }
      }
    });

    console.log(`✅ Facultad creada: ${facultad.nombre} (${facultad.codigo})`);

    return res.status(201).json({
      success: true,
      message: 'Facultad creada exitosamente',
      data: facultad
    });
    
  } catch (error) {
    console.error('Error creando facultad:', error);
    return res.status(500).json({
      success: false,
      error: 'Error creando facultad',
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

// PUT /api/v1/facultades/:id - Actualizar facultad
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, codigo, sheetId, activa } = req.body;

    // Verificar que la facultad existe
    const facultadExistente = await prisma.facultad.findUnique({
      where: { id: parseInt(id) }
    });

    if (!facultadExistente) {
      return res.status(404).json({
        success: false,
        error: 'Facultad no encontrada',
        message: `No se encontró facultad con ID ${id}`
      });
    }

    // Validaciones de duplicados
    if (nombre && nombre.trim() !== facultadExistente.nombre) {
      const nombreExistente = await prisma.facultad.findFirst({
        where: { 
          nombre: nombre.trim(),
          id: { not: parseInt(id) }
        }
      });

      if (nombreExistente) {
        return res.status(409).json({
          success: false,
          error: 'Nombre ya existe',
          message: `Ya existe otra facultad con el nombre "${nombre}"`
        });
      }
    }

    if (codigo && codigo.trim() !== facultadExistente.codigo) {
      const codigoExistente = await prisma.facultad.findFirst({
        where: { 
          codigo: codigo.trim(),
          id: { not: parseInt(id) }
        }
      });

      if (codigoExistente) {
        return res.status(409).json({
          success: false,
          error: 'Código ya existe',
          message: `Ya existe otra facultad con el código "${codigo}"`
        });
      }
    }

    // Preparar datos para actualización
    const datosActualizacion = {};
    if (nombre !== undefined) datosActualizacion.nombre = nombre.trim();
    if (codigo !== undefined) datosActualizacion.codigo = codigo.trim();
    if (sheetId !== undefined) datosActualizacion.sheetId = sheetId?.trim() || null;
    if (activa !== undefined) datosActualizacion.activa = Boolean(activa);

    // Actualizar facultad
    const facultadActualizada = await prisma.facultad.update({
      where: { id: parseInt(id) },
      data: datosActualizacion,
      include: {
        carreras: {
          where: { activa: true }
        },
        sectores: {
          where: { activo: true }
        },
        _count: {
          select: {
            carreras: { where: { activa: true } }
          }
        }
      }
    });

    console.log(`✅ Facultad actualizada: ${facultadActualizada.nombre} (ID: ${id})`);

    return res.status(200).json({
      success: true,
      message: 'Facultad actualizada exitosamente',
      data: facultadActualizada
    });
    
  } catch (error) {
    console.error('Error actualizando facultad:', error);
    return res.status(500).json({
      success: false,
      error: 'Error actualizando facultad',
      message: error.message
    });
  }
});

// DELETE /api/v1/facultades/:id - Eliminar facultad (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { force = false } = req.query; // Parámetro para eliminación física

    // Verificar que la facultad existe
    const facultad = await prisma.facultad.findUnique({
      where: { id: parseInt(id) },
      include: {
        carreras: {
          where: { activa: true }
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

    // Verificar si tiene carreras o sectores activos
    const tieneCarreras = facultad.carreras.length > 0;
    const tieneSectores = facultad.sectores.length > 0;
    
    if ((tieneCarreras || tieneSectores) && force !== 'true') {
      return res.status(400).json({
        success: false,
        error: 'Facultad tiene dependencias activas',
        message: `La facultad "${facultad.nombre}" tiene ${facultad.carreras.length} carreras y ${facultad.sectores.length} sectores activos. Use force=true para eliminar de todas formas.`,
        data: {
          carrerasActivas: facultad.carreras.length,
          sectoresActivos: facultad.sectores.length,
          carreras: facultad.carreras.map(c => ({ id: c.id, nombre: c.nombre })),
          sectores: facultad.sectores.map(s => ({ id: s.id, nombre: s.nombre }))
        }
      });
    }

    let facultadEliminada;
    
    if (force === 'true') {
      // Eliminación física (solo para casos especiales)
      // Primero desactivar todas las carreras y sectores
      await prisma.carrera.updateMany({
        where: { facultadId: parseInt(id) },
        data: { activa: false }
      });
      
      await prisma.sector.updateMany({
        where: { facultadId: parseInt(id) },
        data: { activo: false }
      });
      
      // Luego eliminar la facultad
      facultadEliminada = await prisma.facultad.delete({
        where: { id: parseInt(id) }
      });
      
      console.log(`🗑️ Facultad eliminada físicamente: ${facultadEliminada.nombre} (ID: ${id})`);
    } else {
      // Soft delete (marcar como inactiva)
      facultadEliminada = await prisma.facultad.update({
        where: { id: parseInt(id) },
        data: { activa: false }
      });
      
      console.log(`🚫 Facultad desactivada: ${facultadEliminada.nombre} (ID: ${id})`);
    }

    return res.status(200).json({
      success: true,
      message: force === 'true' ? 'Facultad eliminada exitosamente' : 'Facultad desactivada exitosamente',
      data: {
        id: facultadEliminada.id,
        nombre: facultadEliminada.nombre,
        codigo: facultadEliminada.codigo,
        eliminacionFisica: force === 'true'
      }
    });
    
  } catch (error) {
    console.error('Error eliminando facultad:', error);
    return res.status(500).json({
      success: false,
      error: 'Error eliminando facultad',
      message: error.message
    });
  }
});

export default router;
