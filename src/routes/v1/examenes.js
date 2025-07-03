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

// GET /api/v1/examenes/por-fecha - Obtener exámenes agrupados por fecha
router.get('/por-fecha', async (req, res) => {
  try {
    const { soloSinAula, soloConAula, fechaDesde, fechaHasta } = req.query;
    
    // APLICAR FILTRO DESDE HOY EN ADELANTE por defecto
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Desde inicio del día de hoy
    
    // Construir filtros
    const where = {
      activo: true,
      // ✅ FILTRO CRÍTICO: Solo exámenes desde hoy en adelante
      fecha: { 
        gte: fechaDesde ? new Date(fechaDesde) : hoy,
        ...(fechaHasta && { lte: new Date(fechaHasta) })
      },
      ...(soloSinAula === 'true' && { aulaId: null }),
      ...(soloConAula === 'true' && { aulaId: { not: null } })
    };
    
    // Obtener exámenes
    const examenes = await prisma.examen.findMany({
      where,
      orderBy: [
        { fecha: 'asc' },
        { hora: 'asc' }
      ],
      include: {
        carrera: {
          include: {
            facultad: {
              select: { nombre: true }
            }
          }
        },
        aula: {
          select: {
            id: true,
            nombre: true,
            capacidad: true,
            ubicacion: true
          }
        },
        examenTotem: {
          select: {
            materiaTotem: true
          }
        }
      }
    });
    
    // Agrupar por fecha
    const examenesPorFecha = examenes.reduce((grupos, examen) => {
      const fechaStr = examen.fecha.toISOString().split('T')[0];
      
      if (!grupos[fechaStr]) {
        grupos[fechaStr] = [];
      }
      
      grupos[fechaStr].push({
        id: examen.id,
        nombre: examen.nombreMateria || `Materia ${examen.examenTotem?.materiaTotem}` || 'Examen sin nombre',
        codigoMateria: examen.examenTotem?.materiaTotem || null,
        hora: examen.hora ? examen.hora.toTimeString().slice(0, 5) : null,
        carrera: {
          codigo: examen.carrera.codigo,
          nombre: examen.carrera.nombre,
          facultad: examen.carrera.facultad?.nombre || 'Sin facultad'
        },
        aula: examen.aula,
        cantidadInscriptos: examen.cantidadInscriptos || 0,
        necesitaAsignacion: !examen.aulaId
      });
      
      return grupos;
    }, {});
    
    // Obtener aulas disponibles
    const aulasDisponibles = await prisma.aula.findMany({
      where: { disponible: true },
      select: {
        id: true,
        nombre: true,
        capacidad: true,
        ubicacion: true
      },
      orderBy: { nombre: 'asc' }
    });
    
    return res.status(200).json({
      success: true,
      message: 'Exámenes por fecha obtenidos exitosamente',
      data: {
        examenesPorFecha,
        aulasDisponibles,
        totalExamenes: examenes.length,
        fechas: Object.keys(examenesPorFecha).sort()
      }
    });
    
  } catch (error) {
    console.error('Error obteniendo exámenes por fecha:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo exámenes por fecha',
      message: error.message
    });
  }
});

// ❌ ENDPOINT ELIMINADO: Las inscripciones se manejan en src/pages/api/v1/examenes/[id]/inscripciones.js
// Este endpoint MOCK interfería con la consulta real a la API de UCASAL que aplica filtro LUGAR = 3

// POST /api/v1/examenes/:id/asignar-aula - Asignar aula a un examen
router.post('/:id/asignar-aula', async (req, res) => {
  try {
    const { id } = req.params;
    const { aulaId, observaciones } = req.body;
    
    // Validar ID del examen
    const examenId = parseInt(id);
    if (isNaN(examenId) || examenId <= 0) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        message: `El ID del examen debe ser un número válido. Recibido: "${id}"`
      });
    }
    
    // Validar que aulaId sea válido
    if (!aulaId || isNaN(parseInt(aulaId))) {
      return res.status(400).json({
        success: false,
        error: 'ID de aula inválido',
        message: 'El aulaId es requerido y debe ser un número válido'
      });
    }
    
    // Verificar que el examen existe
    const examen = await prisma.examen.findUnique({
      where: { id: examenId },
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
        error: 'Examen no encontrado',
        message: `No se encontró examen con ID ${examenId}`
      });
    }
    
    // Verificar que el aula existe
    const aula = await prisma.aula.findUnique({
      where: { id: parseInt(aulaId) }
    });
    
    if (!aula) {
      return res.status(404).json({
        success: false,
        error: 'Aula no encontrada',
        message: `No se encontró aula con ID ${aulaId}`
      });
    }
    
    // Asignar el aula al examen
    const examenActualizado = await prisma.examen.update({
      where: { id: examenId },
      data: {
        aulaId: parseInt(aulaId),
        ...(observaciones && { observaciones })
      },
      include: {
        carrera: {
          include: { facultad: true }
        },
        aula: true
      }
    });
    
    console.log(`✅ Aula asignada: Examen ${examenId} → Aula ${aulaId} (${aula.nombre})`);
    
    return res.status(200).json({
      success: true,
      message: `Aula "${aula.nombre}" asignada exitosamente al examen`,
      data: {
        examen: examenActualizado,
        asignacion: {
          aulaAnterior: examen.aula,
          aulaNueva: aula,
          fechaAsignacion: new Date().toISOString()
        }
      }
    });
    
  } catch (error) {
    console.error('❌ Error asignando aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error asignando aula',
      message: error.message
    });
  }
});

// GET /api/v1/examenes/:id - Obtener examen por ID (DEBE IR AL FINAL)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
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