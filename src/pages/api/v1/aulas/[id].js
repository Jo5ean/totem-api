import { prisma } from '../../../../lib/db.js';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  // Validar que el ID sea un número
  const aulaId = parseInt(id);
  if (isNaN(aulaId)) {
    return res.status(400).json({ error: 'ID de aula inválido' });
  }

  try {
    switch (method) {
      case 'GET':
        return await getAula(req, res, aulaId);
      case 'PUT':
        return await updateAula(req, res, aulaId);
      case 'DELETE':
        return await deleteAula(req, res, aulaId);
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ error: `Método ${method} no permitido` });
    }
  } catch (error) {
    console.error('Error en endpoint aula individual:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      message: error.message 
    });
  } finally {
    await prisma.$disconnect();
  }
}

// GET /api/v1/aulas/[id] - Obtener aula específica
async function getAula(req, res, aulaId) {
  try {
    const aula = await prisma.aula.findUnique({
      where: { id: aulaId },
      include: {
        examenes: {
          include: {
            carrera: true,
            facultad: true
          },
          orderBy: [
            { fecha: 'asc' },
            { hora: 'asc' }
          ]
        },
        ocupaciones: {
          orderBy: [
            { fecha: 'asc' },
            { hora: 'asc' }
          ]
        }
      }
    });

    if (!aula) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    // Calcular estadísticas detalladas
    const estadisticas = {
      examenes_total: aula.examenes.length,
      examenes_futuros: aula.examenes.filter(e => new Date(e.fecha) >= new Date()).length,
      ocupacion_actual: aula.ocupaciones.reduce((sum, occ) => sum + occ.utilizados, 0),
      porcentaje_uso: aula.capacidad > 0 ? 
        Math.round((aula.ocupaciones.reduce((sum, occ) => sum + occ.utilizados, 0) / aula.capacidad) * 100) : 0,
      ultima_actualizacion: aula.updatedAt
    };

    return res.status(200).json({
      success: true,
      aula: {
        ...aula,
        estadisticas
      }
    });

  } catch (error) {
    console.error('Error obteniendo aula:', error);
    return res.status(500).json({ 
      error: 'Error obteniendo aula',
      message: error.message 
    });
  }
}

// PUT /api/v1/aulas/[id] - Actualizar aula
async function updateAula(req, res, aulaId) {
  try {
    const { nombre, sede, capacidad, activa } = req.body;

    // Verificar que el aula existe
    const aulaExistente = await prisma.aula.findUnique({
      where: { id: aulaId }
    });

    if (!aulaExistente) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    // Preparar datos de actualización
    const datosActualizacion = {};
    
    if (nombre !== undefined) {
      const nombreTrim = nombre.trim();
      if (!nombreTrim) {
        return res.status(400).json({ error: 'El nombre no puede estar vacío' });
      }
      
      // Verificar que no exista otra aula con el mismo nombre en la misma sede
      const conflicto = await prisma.aula.findFirst({
        where: {
          nombre: nombreTrim,
          sede: sede || aulaExistente.sede,
          id: { not: aulaId }
        }
      });
      
      if (conflicto) {
        return res.status(400).json({ 
          error: 'Ya existe otra aula con ese nombre en la sede especificada'
        });
      }
      
      datosActualizacion.nombre = nombreTrim;
    }

    if (sede !== undefined) {
      const sedeTrim = sede.trim();
      if (!sedeTrim) {
        return res.status(400).json({ error: 'La sede no puede estar vacía' });
      }
      datosActualizacion.sede = sedeTrim;
    }

    if (capacidad !== undefined) {
      const capacidadNum = parseInt(capacidad);
      if (isNaN(capacidadNum) || capacidadNum <= 0) {
        return res.status(400).json({ error: 'La capacidad debe ser un número mayor a 0' });
      }
      
      // Verificar que la nueva capacidad no sea menor a la ocupación actual
      const ocupacionActual = await prisma.ocupacionAula.aggregate({
        where: { 
          aula_id: aulaId,
          fecha: { gte: new Date() }
        },
        _max: { utilizados: true }
      });
      
      if (ocupacionActual._max.utilizados && capacidadNum < ocupacionActual._max.utilizados) {
        return res.status(400).json({ 
          error: `La nueva capacidad (${capacidadNum}) no puede ser menor a la ocupación actual máxima (${ocupacionActual._max.utilizados})`
        });
      }
      
      datosActualizacion.capacidad = capacidadNum;
    }

    if (activa !== undefined) {
      datosActualizacion.activa = Boolean(activa);
      
      // Si se está desactivando, verificar que no tenga exámenes futuros
      if (!datosActualizacion.activa) {
        const examenesFuturos = await prisma.examen.count({
          where: {
            aulaId: aulaId,
            fecha: { gte: new Date() }
          }
        });
        
        if (examenesFuturos > 0) {
          return res.status(400).json({ 
            error: `No se puede desactivar el aula. Tiene ${examenesFuturos} exámenes programados`
          });
        }
      }
    }

    // Actualizar aula
    const aulaActualizada = await prisma.aula.update({
      where: { id: aulaId },
      data: datosActualizacion
    });

    return res.status(200).json({
      success: true,
      aula: aulaActualizada,
      message: 'Aula actualizada exitosamente'
    });

  } catch (error) {
    console.error('Error actualizando aula:', error);
    return res.status(500).json({ 
      error: 'Error actualizando aula',
      message: error.message 
    });
  }
}

// DELETE /api/v1/aulas/[id] - Eliminar aula
async function deleteAula(req, res, aulaId) {
  try {
    // Verificar que el aula exists
    const aulaExistente = await prisma.aula.findUnique({
      where: { id: aulaId },
      include: {
        examenes: {
          where: {
            fecha: { gte: new Date() }
          }
        },
        ocupaciones: {
          where: {
            fecha: { gte: new Date() }
          }
        }
      }
    });

    if (!aulaExistente) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    // Verificar que no tenga exámenes futuros
    if (aulaExistente.examenes.length > 0) {
      return res.status(400).json({ 
        error: `No se puede eliminar el aula. Tiene ${aulaExistente.examenes.length} exámenes programados`
      });
    }

    // Verificar que no tenga ocupaciones futuras
    if (aulaExistente.ocupaciones.length > 0) {
      return res.status(400).json({ 
        error: `No se puede eliminar el aula. Tiene ${aulaExistente.ocupaciones.length} ocupaciones programadas`
      });
    }

    // Eliminar aula (soft delete - marcar como inactiva)
    const aulaEliminada = await prisma.aula.update({
      where: { id: aulaId },
      data: { 
        activa: false,
        nombre: `${aulaExistente.nombre}_ELIMINADA_${Date.now()}`
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Aula eliminada exitosamente'
    });

  } catch (error) {
    console.error('Error eliminando aula:', error);
    return res.status(500).json({ 
      error: 'Error eliminando aula',
      message: error.message 
    });
  }
} 