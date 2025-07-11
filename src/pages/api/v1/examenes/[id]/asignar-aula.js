import { prisma } from '../../../../../lib/db.js';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  // Validar que el ID sea un número
  const examenId = parseInt(id);
  if (isNaN(examenId)) {
    return res.status(400).json({ error: 'ID de examen inválido' });
  }

  try {
    switch (method) {
      case 'POST':
        return await asignarAula(req, res, examenId);
      case 'DELETE':
        return await desasignarAula(req, res, examenId);
      default:
        res.setHeader('Allow', ['POST', 'DELETE']);
        return res.status(405).json({ error: `Método ${method} no permitido` });
    }
  } catch (error) {
    console.error('Error en asignación de aula:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      message: error.message 
    });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/v1/examenes/[id]/asignar-aula - Asignar aula a examen
async function asignarAula(req, res, examenId) {
  try {
    const { aulaId, forzar = false } = req.body;

    // Validaciones básicas
    if (!aulaId) {
      return res.status(400).json({ error: 'aulaId es requerido' });
    }

    const aulaIdNum = parseInt(aulaId);
    if (isNaN(aulaIdNum)) {
      return res.status(400).json({ error: 'aulaId debe ser un número válido' });
    }

    // Verificar que el examen existe
    const examen = await prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        carrera: true,
        facultad: true,
        estudianteExamenes: {
          select: { id: true }
        }
      }
    });

    if (!examen) {
      return res.status(404).json({ error: 'Examen no encontrado' });
    }

    // Verificar que el aula existe y está activa
    const aula = await prisma.aula.findUnique({
      where: { id: aulaIdNum }
    });

    if (!aula) {
      return res.status(404).json({ error: 'Aula no encontrada' });
    }

    if (!aula.activa) {
      return res.status(400).json({ error: 'El aula no está activa' });
    }

    // Verificar capacidad vs inscriptos
    const cantidadInscriptos = examen.estudianteExamenes.length;
    
    if (cantidadInscriptos > aula.capacidad && !forzar) {
      return res.status(400).json({ 
        error: 'Capacidad insuficiente',
        message: `El aula tiene capacidad para ${aula.capacidad} personas, pero el examen tiene ${cantidadInscriptos} inscriptos`,
        sugerencia: 'Usa forzar=true para asignar de todas formas',
        capacidad_aula: aula.capacidad,
        inscriptos_examen: cantidadInscriptos
      });
    }

    // Verificar disponibilidad del aula en la fecha/hora
    if (examen.fecha && examen.hora) {
      const horaString = examen.hora.toTimeString().substring(0, 5); // HH:MM
      
      // Buscar conflictos en la misma fecha y hora
      const conflictos = await prisma.examen.findMany({
        where: {
          aulaId: aulaIdNum,
          fecha: examen.fecha,
          hora: examen.hora,
          id: { not: examenId }, // Excluir el examen actual
          activo: true
        },
        include: {
          carrera: true
        }
      });

      if (conflictos.length > 0 && !forzar) {
        return res.status(400).json({ 
          error: 'Conflicto de horario',
          message: `El aula ya está ocupada en esa fecha y hora`,
          conflictos: conflictos.map(c => ({
            id: c.id,
            materia: c.nombreMateria,
            carrera: c.carrera.nombre,
            inscriptos: c.cantidadInscriptos
          })),
          sugerencia: 'Usa forzar=true para asignar de todas formas'
        });
      }

      // Actualizar/crear ocupación del aula
      const ocupacionExistente = await prisma.ocupacionAula.findUnique({
        where: {
          aula_id_fecha_hora: {
            aula_id: aulaIdNum,
            fecha: examen.fecha,
            hora: horaString
          }
        }
      });

      if (ocupacionExistente) {
        // Actualizar ocupación existente
        await prisma.ocupacionAula.update({
          where: { id: ocupacionExistente.id },
          data: {
            utilizados: ocupacionExistente.utilizados + cantidadInscriptos,
            capacidad_teorica: aula.capacidad
          }
        });
      } else {
        // Crear nueva ocupación
        await prisma.ocupacionAula.create({
          data: {
            aula_id: aulaIdNum,
            fecha: examen.fecha,
            hora: horaString,
            utilizados: cantidadInscriptos,
            capacidad_teorica: aula.capacidad,
            observaciones: `Examen: ${examen.nombreMateria} - ${examen.carrera.nombre}`
          }
        });
      }
    }

    // Asignar aula al examen
    const examenActualizado = await prisma.examen.update({
      where: { id: examenId },
      data: { 
        aulaId: aulaIdNum,
        cantidadInscriptos: cantidadInscriptos
      },
      include: {
        aula: true,
        carrera: true,
        facultad: true
      }
    });

    return res.status(200).json({
      success: true,
      examen: examenActualizado,
      message: `Aula "${aula.nombre}" asignada exitosamente`,
      asignacion: {
        aula: aula.nombre,
        capacidad: aula.capacidad,
        inscriptos: cantidadInscriptos,
        disponibilidad: aula.capacidad - cantidadInscriptos,
        porcentaje_ocupacion: Math.round((cantidadInscriptos / aula.capacidad) * 100)
      }
    });

  } catch (error) {
    console.error('Error asignando aula:', error);
    return res.status(500).json({ 
      error: 'Error asignando aula',
      message: error.message 
    });
  }
}

// DELETE /api/v1/examenes/[id]/asignar-aula - Desasignar aula de examen
async function desasignarAula(req, res, examenId) {
  try {
    // Verificar que el examen existe y tiene aula asignada
    const examen = await prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        aula: true,
        estudianteExamenes: {
          select: { id: true }
        }
      }
    });

    if (!examen) {
      return res.status(404).json({ error: 'Examen no encontrado' });
    }

    if (!examen.aulaId) {
      return res.status(400).json({ error: 'El examen no tiene aula asignada' });
    }

    const aulaAnterior = examen.aula;
    const cantidadInscriptos = examen.estudianteExamenes.length;

    // Actualizar ocupación del aula si existe
    if (examen.fecha && examen.hora) {
      const horaString = examen.hora.toTimeString().substring(0, 5);
      
      const ocupacionExistente = await prisma.ocupacionAula.findUnique({
        where: {
          aula_id_fecha_hora: {
            aula_id: examen.aulaId,
            fecha: examen.fecha,
            hora: horaString
          }
        }
      });

      if (ocupacionExistente) {
        const nuevosUtilizados = Math.max(0, ocupacionExistente.utilizados - cantidadInscriptos);
        
        if (nuevosUtilizados === 0) {
          // Eliminar ocupación si no queda nadie
          await prisma.ocupacionAula.delete({
            where: { id: ocupacionExistente.id }
          });
        } else {
          // Actualizar ocupación
          await prisma.ocupacionAula.update({
            where: { id: ocupacionExistente.id },
            data: { utilizados: nuevosUtilizados }
          });
        }
      }
    }

    // Desasignar aula del examen
    const examenActualizado = await prisma.examen.update({
      where: { id: examenId },
      data: { aulaId: null },
      include: {
        carrera: true,
        facultad: true
      }
    });

    return res.status(200).json({
      success: true,
      examen: examenActualizado,
      message: `Aula "${aulaAnterior.nombre}" desasignada exitosamente`,
      aula_anterior: {
        id: aulaAnterior.id,
        nombre: aulaAnterior.nombre,
        capacidad: aulaAnterior.capacidad
      }
    });

  } catch (error) {
    console.error('Error desasignando aula:', error);
    return res.status(500).json({ 
      error: 'Error desasignando aula',
      message: error.message 
    });
  }
} 