import prisma from '../../../../../lib/db.js';
import { withCors } from '../../../../../lib/cors.js';

// 🆕 FUNCIÓN PARA ELIMINAR ASIGNACIÓN DE AULA
async function eliminarAsignacionAula(req, res) {
  const { id } = req.query;

  // Validar parámetros
  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      error: 'ID de examen inválido'
    });
  }

  try {
    // 1. Verificar que el examen existe y tiene aula asignada
    const examen = await prisma.examen.findUnique({
      where: { id: parseInt(id) },
      include: {
        carrera: {
          include: { facultad: true }
        },
        aula: true
      }
    });

    if (!examen) {
      return res.status(404).json({
        success: false,
        error: 'Examen no encontrado'
      });
    }

    if (!examen.aulaId) {
      return res.status(400).json({
        success: false,
        error: 'El examen no tiene aula asignada'
      });
    }

    // 2. Obtener datos del aula antes de quitar asignación
    const aulaAnterior = examen.aula;
    const cantidadInscriptos = examen.cantidadInscriptos || 0;

    // 3. Eliminar asignación y actualizar contador de alumnos
    const [examenActualizado] = await prisma.$transaction([
      prisma.examen.update({
        where: { id: parseInt(id) },
        data: {
          aulaId: null,
          updatedAt: new Date()
        },
        include: {
          carrera: {
            include: { facultad: true }
          }
        }
      }),
      prisma.aula.update({
        where: { id: examen.aulaId },
        data: {
          alumnosAsignados: {
            decrement: cantidadInscriptos
          }
        }
      })
    ]);

    console.log(`🗑️ Asignación eliminada: Examen ${id} → Sin aula (${cantidadInscriptos} alumnos liberados)`);

    return res.status(200).json({
      success: true,
      message: `Asignación de aula eliminada exitosamente`,
      data: {
        examen: {
          id: examenActualizado.id,
          nombre: examenActualizado.nombreMateria,
          fecha: examenActualizado.fecha?.toISOString().split('T')[0],
          hora: examenActualizado.hora?.toTimeString().split(' ')[0],
          inscriptos: cantidadInscriptos,
          carrera: {
            nombre: examenActualizado.carrera.nombre,
            facultad: examenActualizado.carrera.facultad.nombre
          },
          aula: null
        },
        eliminacion: {
          realizada: true,
          timestamp: new Date().toISOString(),
          alumnosLiberados: cantidadInscriptos,
          aulaAnterior: {
            id: aulaAnterior.id,
            nombre: aulaAnterior.nombre,
            capacidad: aulaAnterior.capacidad
          }
        }
      }
    });

  } catch (error) {
    console.error('❌ Error eliminando asignación:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

async function handler(req, res) {

  // 🆕 SOPORTE PARA DELETE (borrar asignación)
  if (req.method === 'DELETE') {
    return await eliminarAsignacionAula(req, res);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Usa POST para asignar o DELETE para borrar asignación.'
    });
  }

  const { id } = req.query;
  const { aulaId, observaciones } = req.body;

  // Validar parámetros
  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      error: 'ID de examen inválido'
    });
  }

  if (!aulaId || isNaN(parseInt(aulaId))) {
    return res.status(400).json({
      success: false,
      error: 'ID de aula inválido'
    });
  }

  try {
    // 1. Verificar que el examen existe
    const examen = await prisma.examen.findUnique({
      where: { id: parseInt(id) },
      include: {
        carrera: {
          include: { facultad: true }
        },
        aula: true
      }
    });

    if (!examen) {
      return res.status(404).json({
        success: false,
        error: 'Examen no encontrado'
      });
    }

    // 2. Verificar que el aula existe y está disponible
    const aula = await prisma.aula.findUnique({
      where: { id: parseInt(aulaId) }
    });

    if (!aula) {
      return res.status(404).json({
        success: false,
        error: 'Aula no encontrada'
      });
    }

    if (!aula.disponible) {
      return res.status(400).json({
        success: false,
        error: 'El aula seleccionada no está disponible'
      });
    }

    // 3. Obtener número de inscriptos del examen
    const cantidadInscriptos = examen.cantidadInscriptos || 0;

    // 4. Si el examen ya tenía aula asignada, restar los alumnos del aula anterior
    if (examen.aulaId && examen.aulaId !== parseInt(aulaId)) {
      await prisma.aula.update({
        where: { id: examen.aulaId },
        data: {
          alumnosAsignados: {
            decrement: cantidadInscriptos
          }
        }
      });
    }

    // 5. Asignar el aula al examen y actualizar contador de alumnos
    const [examenActualizado] = await prisma.$transaction([
      prisma.examen.update({
        where: { id: parseInt(id) },
        data: {
          aulaId: parseInt(aulaId),
          observaciones: observaciones || examen.observaciones,
          updatedAt: new Date()
        },
        include: {
          carrera: {
            include: { facultad: true }
          },
          aula: true
        }
      }),
      prisma.aula.update({
        where: { id: parseInt(aulaId) },
        data: {
          alumnosAsignados: {
            increment: cantidadInscriptos
          }
        }
      })
    ]);

    // Obtener estadísticas actualizadas del aula
    const aulaActualizada = await prisma.aula.findUnique({
      where: { id: parseInt(aulaId) },
      include: {
        examenes: {
          where: { activo: true },
          select: {
            id: true,
            nombreMateria: true,
            cantidadInscriptos: true
          }
        }
      }
    });

    console.log(`✅ Aula asignada: Examen ${id} → Aula ${aula.nombre} (${cantidadInscriptos} alumnos)`);

    return res.status(200).json({
      success: true,
      message: `Aula "${aula.nombre}" asignada exitosamente`,
      data: {
        examen: {
          id: examenActualizado.id,
          nombre: examenActualizado.nombreMateria,
          fecha: examenActualizado.fecha?.toISOString().split('T')[0],
          hora: examenActualizado.hora?.toTimeString().split(' ')[0],
          inscriptos: cantidadInscriptos,
          carrera: {
            nombre: examenActualizado.carrera.nombre,
            facultad: examenActualizado.carrera.facultad.nombre
          },
          aula: {
            id: examenActualizado.aula.id,
            nombre: examenActualizado.aula.nombre,
            capacidad: examenActualizado.aula.capacidad,
            ubicacion: examenActualizado.aula.ubicacion,
            alumnosAsignados: aulaActualizada.alumnosAsignados
          },
          observaciones: examenActualizado.observaciones
        },
        asignacion: {
          realizada: true,
          timestamp: new Date().toISOString(),
          inscriptosAsignados: cantidadInscriptos,
          aulaAnterior: examen.aula ? {
            id: examen.aula.id,
            nombre: examen.aula.nombre
          } : null,
          aulaNueva: {
            id: aula.id,
            nombre: aula.nombre,
            capacidad: aula.capacidad,
            alumnosAsignados: aulaActualizada.alumnosAsignados,
            resumenUso: `${aulaActualizada.alumnosAsignados} alumnos asignados de ${aula.capacidad} disponibles`
          }
        }
      }
    });

  } catch (error) {
    console.error('❌ Error asignando aula:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

export default withCors(handler); 