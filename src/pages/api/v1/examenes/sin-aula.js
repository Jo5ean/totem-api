import prisma from '../../../../lib/db.js';

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Método ${method} no permitido` });
  }

  try {
    return await obtenerExamenesSinAula(req, res);
  } catch (error) {
    console.error('Error obteniendo exámenes sin aula:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      message: error.message 
    });
  }
}

// GET /api/v1/examenes/sin-aula - Obtener exámenes que necesitan asignación de aula
async function obtenerExamenesSinAula(req, res) {
  try {
    const { 
      fecha, 
      facultadId, 
      carreraId, 
      minInscriptos,
      maxInscriptos,
      page = 1, 
      limit = 20,
      sortBy = 'fecha',
      sortOrder = 'asc'
    } = req.query;

    // Construir filtros
    const filtros = {
      aulaId: null, // Solo exámenes sin aula asignada
      activo: true
    };

    if (fecha) {
      if (fecha === 'hoy') {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        filtros.fecha = { gte: hoy };
      } else if (fecha === 'futuros') {
        filtros.fecha = { gte: new Date() };
      } else {
        filtros.fecha = new Date(fecha);
      }
    }

    if (facultadId) {
      filtros.facultadId = parseInt(facultadId);
    }

    if (carreraId) {
      filtros.carreraId = parseInt(carreraId);
    }

    // Configurar paginación
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;

    // Configurar ordenamiento
    const validSortFields = ['fecha', 'hora', 'nombreMateria', 'cantidadInscriptos', 'createdAt'];
    const sortField = validSortFields.includes(sortBy) ? sortBy : 'fecha';
    const direction = sortOrder === 'desc' ? 'desc' : 'asc';

    // Obtener exámenes con paginación
    const [examenes, total] = await Promise.all([
      prisma.examen.findMany({
        where: filtros,
        include: {
          carrera: {
            include: { facultad: true }
          },
          estudianteExamenes: {
            select: { id: true }
          }
        },
        orderBy: [
          { [sortField]: direction },
          { id: 'asc' } // Orden secundario para consistencia
        ],
        skip: offset,
        take: limitNum
      }),
      prisma.examen.count({ where: filtros })
    ]);

    // Obtener estadísticas de aulas disponibles para cada examen
    const examenesConSugerencias = await Promise.all(
      examenes.map(async (examen) => {
        const cantidadInscriptos = examen.estudianteExamenes.length;
        
        // Buscar aulas que puedan acomodar este examen
        let aulasCompatibles = [];
        
        if (examen.fecha && examen.hora) {
          aulasCompatibles = await prisma.aula.findMany({
            where: {
              activa: true,
              capacidad: { gte: cantidadInscriptos }
            },
            include: {
              examenes: {
                where: {
                  fecha: examen.fecha,
                  hora: examen.hora,
                  activo: true
                },
                select: { id: true }
              }
            }
          });
          
          // Filtrar aulas que no tengan conflictos de horario
          aulasCompatibles = aulasCompatibles.filter(aula => aula.examenes.length === 0);
        } else {
          // Si no tiene fecha/hora, buscar todas las aulas con capacidad suficiente
          aulasCompatibles = await prisma.aula.findMany({
            where: {
              activa: true,
              capacidad: { gte: cantidadInscriptos }
            }
          });
        }

        return {
          id: examen.id,
          nombreMateria: examen.nombreMateria,
          materia_codigo: examen.materia_codigo,
          areatema: examen.areatema,
          fecha: examen.fecha?.toISOString().split('T')[0],
          hora: examen.hora?.toTimeString().substring(0, 5),
          cantidadInscriptos,
          carrera: {
            id: examen.carrera.id,
            nombre: examen.carrera.nombre,
            facultad: {
              id: examen.carrera.facultad.id,
              nombre: examen.carrera.facultad.nombre
            }
          },
          estadoAsignacion: {
            aulasCompatibles: aulasCompatibles.length,
            puedeAsignarse: aulasCompatibles.length > 0,
            problemas: aulasCompatibles.length === 0 ? 
              (cantidadInscriptos > 72 ? 'Excede capacidad máxima' : 'Sin aulas disponibles en horario') : 
              null
          },
          prioridadAsignacion: calcularPrioridad(examen, cantidadInscriptos),
          createdAt: examen.createdAt,
          updatedAt: examen.updatedAt
        };
      })
    );

    // Aplicar filtros adicionales si se proporcionaron
    let examenesFiltrados = examenesConSugerencias;

    if (minInscriptos) {
      examenesFiltrados = examenesFiltrados.filter(e => e.cantidadInscriptos >= parseInt(minInscriptos));
    }

    if (maxInscriptos) {
      examenesFiltrados = examenesFiltrados.filter(e => e.cantidadInscriptos <= parseInt(maxInscriptos));
    }

    // Calcular estadísticas
    const estadisticas = {
      total_examenes: examenesFiltrados.length,
      con_aulas_compatibles: examenesFiltrados.filter(e => e.estadoAsignacion.puedeAsignarse).length,
      sin_solucion: examenesFiltrados.filter(e => !e.estadoAsignacion.puedeAsignarse).length,
      por_facultad: {}
    };

    // Agrupar por facultad
    examenesFiltrados.forEach(examen => {
      const facultad = examen.carrera.facultad.nombre;
      if (!estadisticas.por_facultad[facultad]) {
        estadisticas.por_facultad[facultad] = {
          total: 0,
          con_solucion: 0,
          sin_solucion: 0
        };
      }
      estadisticas.por_facultad[facultad].total++;
      if (examen.estadoAsignacion.puedeAsignarse) {
        estadisticas.por_facultad[facultad].con_solucion++;
      } else {
        estadisticas.por_facultad[facultad].sin_solucion++;
      }
    });

    // Información de paginación
    const totalPages = Math.ceil(total / limitNum);
    const paginacion = {
      page: pageNum,
      limit: limitNum,
      total,
      totalPages,
      hasNext: pageNum < totalPages,
      hasPrev: pageNum > 1
    };

    return res.status(200).json({
      success: true,
      examenes: examenesFiltrados,
      estadisticas,
      paginacion,
      filtros_aplicados: {
        fecha: fecha || 'todos',
        facultadId: facultadId || 'todas',
        carreraId: carreraId || 'todas',
        minInscriptos: minInscriptos || 'sin mínimo',
        maxInscriptos: maxInscriptos || 'sin máximo'
      }
    });

  } catch (error) {
    console.error('Error obteniendo exámenes sin aula:', error);
    return res.status(500).json({ 
      error: 'Error obteniendo exámenes sin aula',
      message: error.message 
    });
  }
}

// Función auxiliar para calcular prioridad de asignación
function calcularPrioridad(examen, cantidadInscriptos) {
  let prioridad = 'media';
  let razon = [];

  // Fecha próxima = alta prioridad
  if (examen.fecha) {
    const diasHastaExamen = Math.ceil((new Date(examen.fecha) - new Date()) / (1000 * 60 * 60 * 24));
    
    if (diasHastaExamen <= 7) {
      prioridad = 'alta';
      razon.push(`Examen en ${diasHastaExamen} días`);
    } else if (diasHastaExamen <= 30) {
      prioridad = 'media';
      razon.push(`Examen en ${diasHastaExamen} días`);
    } else {
      prioridad = 'baja';
    }
  }

  // Muchos inscriptos = mayor prioridad
  if (cantidadInscriptos > 50) {
    prioridad = prioridad === 'baja' ? 'media' : 'alta';
    razon.push(`${cantidadInscriptos} inscriptos`);
  }

  // Examen con PC requerida = mayor prioridad
  if (examen.requierePc) {
    prioridad = prioridad === 'baja' ? 'media' : 'alta';
    razon.push('Requiere PC');
  }

  return {
    nivel: prioridad,
    razon: razon.join(', ') || 'Prioridad estándar'
  };
} 