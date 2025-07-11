import { prisma } from '../../../../lib/db.js';

export default async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'POST':
        return await asignacionMasiva(req, res);
      case 'GET':
        return await obtenerSugerenciasAsignacion(req, res);
      default:
        res.setHeader('Allow', ['POST', 'GET']);
        return res.status(405).json({ error: `Método ${method} no permitido` });
    }
  } catch (error) {
    console.error('Error en asignación masiva:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      message: error.message 
    });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/v1/asignacion/masiva - Asignar múltiples exámenes a aulas
async function asignacionMasiva(req, res) {
  try {
    const { asignaciones, forzar = false } = req.body;

    // Validar formato de entrada
    if (!Array.isArray(asignaciones) || asignaciones.length === 0) {
      return res.status(400).json({ 
        error: 'Se requiere un array de asignaciones',
        formato: 'asignaciones: [{ examenId: number, aulaId: number }]'
      });
    }

    // Validar cada asignación
    for (const asignacion of asignaciones) {
      if (!asignacion.examenId || !asignacion.aulaId) {
        return res.status(400).json({ 
          error: 'Cada asignación debe tener examenId y aulaId',
          asignacion_invalida: asignacion
        });
      }
    }

    const resultados = {
      exitosas: [],
      errores: [],
      conflictos: [],
      resumen: {
        total: asignaciones.length,
        procesadas: 0,
        exitosas: 0,
        errores: 0
      }
    };

    // Procesar cada asignación
    for (const asignacion of asignaciones) {
      try {
        const { examenId, aulaId } = asignacion;
        
        // Validar que el examen existe
        const examen = await prisma.examen.findUnique({
          where: { id: parseInt(examenId) },
          include: {
            carrera: true,
            facultad: true,
            estudianteExamenes: { select: { id: true } }
          }
        });

        if (!examen) {
          resultados.errores.push({
            examenId,
            aulaId,
            error: 'Examen no encontrado'
          });
          continue;
        }

        // Validar que el aula existe y está activa
        const aula = await prisma.aula.findUnique({
          where: { id: parseInt(aulaId) }
        });

        if (!aula || !aula.activa) {
          resultados.errores.push({
            examenId,
            aulaId,
            error: !aula ? 'Aula no encontrada' : 'Aula no activa'
          });
          continue;
        }

        const cantidadInscriptos = examen.estudianteExamenes.length;

        // Verificar capacidad
        if (cantidadInscriptos > aula.capacidad && !forzar) {
          resultados.conflictos.push({
            examenId,
            aulaId,
            tipo: 'capacidad',
            mensaje: `Capacidad insuficiente: ${cantidadInscriptos} inscriptos > ${aula.capacidad} capacidad`,
            examen: {
              materia: examen.nombreMateria,
              inscriptos: cantidadInscriptos
            },
            aula: {
              nombre: aula.nombre,
              capacidad: aula.capacidad
            }
          });
          continue;
        }

        // Verificar conflictos de horario
        if (examen.fecha && examen.hora) {
          const conflictosHorario = await prisma.examen.findMany({
            where: {
              aulaId: parseInt(aulaId),
              fecha: examen.fecha,
              hora: examen.hora,
              id: { not: parseInt(examenId) },
              activo: true
            },
            include: { carrera: true }
          });

          if (conflictosHorario.length > 0 && !forzar) {
            resultados.conflictos.push({
              examenId,
              aulaId,
              tipo: 'horario',
              mensaje: `Conflicto de horario en ${examen.fecha.toISOString().split('T')[0]} ${examen.hora.toTimeString().substring(0, 5)}`,
              conflictos: conflictosHorario.map(c => ({
                id: c.id,
                materia: c.nombreMateria,
                carrera: c.carrera.nombre
              }))
            });
            continue;
          }
        }

        // Realizar asignación
        const examenActualizado = await prisma.examen.update({
          where: { id: parseInt(examenId) },
          data: { 
            aulaId: parseInt(aulaId),
            cantidadInscriptos: cantidadInscriptos
          }
        });

        // Actualizar ocupación del aula
        if (examen.fecha && examen.hora) {
          const horaString = examen.hora.toTimeString().substring(0, 5);
          
          await prisma.ocupacionAula.upsert({
            where: {
              aula_id_fecha_hora: {
                aula_id: parseInt(aulaId),
                fecha: examen.fecha,
                hora: horaString
              }
            },
            update: {
              utilizados: { increment: cantidadInscriptos },
              capacidad_teorica: aula.capacidad
            },
            create: {
              aula_id: parseInt(aulaId),
              fecha: examen.fecha,
              hora: horaString,
              utilizados: cantidadInscriptos,
              capacidad_teorica: aula.capacidad,
              observaciones: `Examen: ${examen.nombreMateria}`
            }
          });
        }

        resultados.exitosas.push({
          examenId,
          aulaId,
          examen: {
            materia: examen.nombreMateria,
            carrera: examen.carrera.nombre,
            fecha: examen.fecha?.toISOString().split('T')[0],
            hora: examen.hora?.toTimeString().substring(0, 5),
            inscriptos: cantidadInscriptos
          },
          aula: {
            nombre: aula.nombre,
            capacidad: aula.capacidad,
            ocupacion: Math.round((cantidadInscriptos / aula.capacidad) * 100)
          }
        });

        resultados.resumen.exitosas++;

      } catch (error) {
        resultados.errores.push({
          examenId: asignacion.examenId,
          aulaId: asignacion.aulaId,
          error: error.message
        });
      }

      resultados.resumen.procesadas++;
    }

    // Calcular totales
    resultados.resumen.errores = resultados.errores.length + resultados.conflictos.length;

    const statusCode = resultados.resumen.exitosas > 0 ? 200 : 400;

    return res.status(statusCode).json({
      success: resultados.resumen.exitosas > 0,
      message: `Procesadas ${resultados.resumen.procesadas} asignaciones: ${resultados.resumen.exitosas} exitosas, ${resultados.resumen.errores} con errores`,
      ...resultados
    });

  } catch (error) {
    console.error('Error en asignación masiva:', error);
    return res.status(500).json({ 
      error: 'Error en asignación masiva',
      message: error.message 
    });
  }
}

// GET /api/v1/asignacion/masiva - Obtener sugerencias de asignación automática
async function obtenerSugerenciasAsignacion(req, res) {
  try {
    const { fecha, facultadId } = req.query;

    // Filtros para exámenes
    const filtrosExamen = {
      aulaId: null, // Solo exámenes sin aula asignada
      activo: true
    };

    if (fecha) {
      filtrosExamen.fecha = new Date(fecha);
    }

    if (facultadId) {
      filtrosExamen.facultadId = parseInt(facultadId);
    }

    // Obtener exámenes sin aula asignada
    const examenesSinAula = await prisma.examen.findMany({
      where: filtrosExamen,
      include: {
        carrera: true,
        facultad: true,
        estudianteExamenes: { select: { id: true } }
      },
      orderBy: [
        { fecha: 'asc' },
        { hora: 'asc' }
      ]
    });

    // Obtener aulas disponibles
    const aulas = await prisma.aula.findMany({
      where: { activa: true },
      include: {
        examenes: {
          where: {
            fecha: fecha ? new Date(fecha) : { gte: new Date() }
          }
        }
      },
      orderBy: { capacidad: 'desc' }
    });

    // Generar sugerencias
    const sugerencias = [];

    for (const examen of examenesSinAula) {
      const cantidadInscriptos = examen.estudianteExamenes.length;
      
      // Buscar aulas que puedan acomodar el examen
      const aulasCompatibles = aulas.filter(aula => {
        // Verificar capacidad
        if (cantidadInscriptos > aula.capacidad) return false;

        // Verificar disponibilidad de horario si el examen tiene fecha/hora
        if (examen.fecha && examen.hora) {
          const conflictos = aula.examenes.filter(e => {
            return e.fecha.getTime() === examen.fecha.getTime() && 
                   e.hora && examen.hora &&
                   e.hora.toTimeString() === examen.hora.toTimeString();
          });
          
          if (conflictos.length > 0) return false;
        }

        return true;
      });

      // Ordenar por mejor ajuste (menor desperdicio de capacidad)
      aulasCompatibles.sort((a, b) => {
        const desperdicioA = a.capacidad - cantidadInscriptos;
        const desperdicioB = b.capacidad - cantidadInscriptos;
        return desperdicioA - desperdicioB;
      });

      if (aulasCompatibles.length > 0) {
        const mejorAula = aulasCompatibles[0];
        
        sugerencias.push({
          examenId: examen.id,
          aulaId: mejorAula.id,
          examen: {
            materia: examen.nombreMateria,
            carrera: examen.carrera.nombre,
            facultad: examen.facultad.nombre,
            fecha: examen.fecha?.toISOString().split('T')[0],
            hora: examen.hora?.toTimeString().substring(0, 5),
            inscriptos: cantidadInscriptos
          },
          aula: {
            nombre: mejorAula.nombre,
            sede: mejorAula.sede,
            capacidad: mejorAula.capacidad,
            ocupacion_proyectada: Math.round((cantidadInscriptos / mejorAula.capacidad) * 100),
            espacios_libres: mejorAula.capacidad - cantidadInscriptos
          },
          alternativas: aulasCompatibles.slice(1, 3).map(aula => ({
            id: aula.id,
            nombre: aula.nombre,
            capacidad: aula.capacidad,
            ocupacion_proyectada: Math.round((cantidadInscriptos / aula.capacidad) * 100)
          }))
        });
      } else {
        // Examen sin aulas compatibles
        sugerencias.push({
          examenId: examen.id,
          aulaId: null,
          examen: {
            materia: examen.nombreMateria,
            carrera: examen.carrera.nombre,
            facultad: examen.facultad.nombre,
            fecha: examen.fecha?.toISOString().split('T')[0],
            hora: examen.hora?.toTimeString().substring(0, 5),
            inscriptos: cantidadInscriptos
          },
          problema: cantidadInscriptos > Math.max(...aulas.map(a => a.capacidad)) ? 
            'Excede capacidad máxima disponible' : 'Conflicto de horario en todas las aulas'
        });
      }
    }

    return res.status(200).json({
      success: true,
      examenes_analizados: examenesSinAula.length,
      aulas_disponibles: aulas.length,
      sugerencias,
      estadisticas: {
        con_sugerencia: sugerencias.filter(s => s.aulaId).length,
        sin_solucion: sugerencias.filter(s => !s.aulaId).length,
        ocupacion_promedio: sugerencias
          .filter(s => s.aula)
          .reduce((sum, s) => sum + s.aula.ocupacion_proyectada, 0) / 
          sugerencias.filter(s => s.aula).length || 0
      }
    });

  } catch (error) {
    console.error('Error generando sugerencias:', error);
    return res.status(500).json({ 
      error: 'Error generando sugerencias',
      message: error.message 
    });
  }
} 