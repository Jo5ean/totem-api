import express from 'express';
import prisma from '../../lib/db.js';
import TotemService from '../../services/totemService.js';

const router = express.Router();
const totemService = new TotemService();

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
    const { soloSinAula, soloConAula, fechaDesde, fechaHasta, actualizarCantidades } = req.query;
    
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
    
    // 📊 MOSTRAR ESTADO CLARO DE INSCRIPCIONES
    // Las inscripciones se consultan bajo demanda usando el endpoint /inscripciones
    
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
        aula: examen.aula ? {
          ...examen.aula,
          nombre: formatearNombreAula(examen.aula.nombre)
        } : null,
        cantidadInscriptos: examen.cantidadInscriptos !== null ? examen.cantidadInscriptos : 0,
        inscriptosConsultados: examen.cantidadInscriptos !== null, // Indicador si fue consultado
        fechaUltConsulta: examen.fechaUltConsulta,
        necesitaAsignacion: !examen.aulaId
      });
      
      return grupos;
    }, {});
    
    // Obtener todas las aulas (no filtrar por disponible)
    const aulasDisponibles = await prisma.aula.findMany({
      select: {
        id: true,
        nombre: true,
        capacidad: true,
        sede: true,
        activa: true // Incluir el campo activa para referencia
      },
      orderBy: { nombre: 'asc' }
    });
    
    console.log(` Aulas encontradas: ${aulasDisponibles.length} (activas: ${aulasDisponibles.filter(a => a.activa).length})`);
    
    // NUEVA FUNCIONALIDAD: Agrupar carreras por estado de inscriptos
    const carrerasPorEstado = await agruparCarrerasPorInscriptos(examenes);
    
    return res.status(200).json({
      success: true,
      message: 'Exámenes por fecha obtenidos exitosamente',
      data: {
        examenesPorFecha,
        aulasDisponibles,
        carrerasPorEstado, // Nueva agrupación de carreras
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

// GET /api/v1/examenes/:id/inscripciones - Obtener inscripciones REALES con filtro LUGAR = 3
router.get('/:id/inscripciones', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar ID del examen
    const examenId = parseInt(id);
    if (isNaN(examenId) || examenId <= 0) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        message: `El ID del examen debe ser un número válido. Recibido: "${id}"`
      });
    }
    
    // 1. Buscar el examen en la base de datos local
    const examen = await prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        carrera: {
          include: { facultad: true }
        },
        aula: true,
        examenTotem: true
      }
    });

    if (!examen) {
      return res.status(404).json({
        success: false,
        error: 'Examen no encontrado'
      });
    }

    // 2. Obtener datos del TOTEM para materia y areaTema
    let codigoMateria = null;
    let areaTema = null;
    let carreraTotem = null;
    
    if (examen.examenTotem) {
      codigoMateria = examen.examenTotem.materiaTotem;
      areaTema = examen.examenTotem.areaTemaTotem;
      carreraTotem = examen.examenTotem.carreraTotem;
    }

    if (!codigoMateria) {
      return res.status(404).json({
        success: false,
        error: 'No se encontró código de materia para consultar inscriptos',
        data: {
          examen: {
            id: examen.id,
            nombre: examen.nombreMateria,
            fecha: examen.fecha,
            hora: examen.hora,
            cantidadInscriptos: examen.cantidadInscriptos || 0
          }
        }
      });
    }

    console.log(`📡 Consultando materia ${codigoMateria} con areaTema ${areaTema} y carrera ${carreraTotem}`);

    // 3. Consultar inscriptos desde API externa de UCASAL
    // ✅ FORMATO CORRECTO: dd/mm/yyyy con CEROS OBLIGATORIOS como espera la API de UCASAL
    const hoy = new Date();
    const fechaDesde = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
    
    const futuro = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const fechaHasta = `${futuro.getDate().toString().padStart(2, '0')}/${(futuro.getMonth() + 1).toString().padStart(2, '0')}/${futuro.getFullYear()}`;

    const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/materia/${codigoMateria}?rendida=false&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
    
    console.log(`🌐 Consultando API: ${apiUrl}`);
    
    const response = await fetch(apiUrl, { 
      timeout: 8000 // 🔥 TIMEOUT DE 8 SEGUNDOS - CRÍTICO PARA EVITAR CUELGUES
    });
    
    if (!response.ok) {
      console.warn(`⚠️ API externa no disponible: ${response.status}`);
      return res.status(200).json({
        success: false,
        error: 'API externa no disponible',
        data: {
          examen: {
            id: examen.id,
            nombre: examen.nombreMateria,
            fecha: examen.fecha?.toISOString().split('T')[0],
            hora: examen.hora?.toTimeString().split(' ')[0],
            carrera: {
              nombre: examen.carrera.nombre,
              facultad: examen.carrera.facultad.nombre
            }
          },
          inscriptos: [],
          cantidadInscriptos: examen.cantidadInscriptos || 0,
          apiExternaDisponible: false
        }
      });
    }

    const datosCompletos = await response.json();
    
    if (!Array.isArray(datosCompletos)) {
      console.warn('Respuesta de API externa no es un array:', datosCompletos);
      return res.status(200).json({
        success: true,
        data: {
          examen: {
            id: examen.id,
            nombre: examen.nombreMateria,
            fecha: examen.fecha?.toISOString().split('T')[0],
            hora: examen.hora?.toTimeString().split(' ')[0],
            carrera: {
              nombre: examen.carrera.nombre,
              facultad: examen.carrera.facultad.nombre
            }
          },
          inscriptos: [],
          cantidadInscriptos: 0,
          apiExternaDisponible: true
        }
      });
    }

    // 4. FILTRAR CORRECTAMENTE por areaTema y carrera
    console.log(`🔍 Aplicando filtro: areaTema=${areaTema} && carrera=${carreraTotem}`);
    
    const inscriptosFiltrados = datosCompletos.filter(registro => {
      const cumpleAreaTema = areaTema ? registro.areaTema == areaTema : true;
      const cumpleCarrera = carreraTotem ? registro.carrera == carreraTotem : true;
      const tieneAlumnos = registro.alumnos && registro.alumnos.length > 0;
      
      return cumpleAreaTema && cumpleCarrera && tieneAlumnos;
    });

    console.log(`✅ Después del filtro: ${inscriptosFiltrados.length} registros válidos`);

    // 5. Extraer todos los alumnos de los registros filtrados
    let todosLosInscriptos = [];
    inscriptosFiltrados.forEach(registro => {
      if (registro.alumnos && Array.isArray(registro.alumnos)) {
        todosLosInscriptos = todosLosInscriptos.concat(registro.alumnos);
      }
    });

    console.log(`📊 Total de inscriptos encontrados: ${todosLosInscriptos.length}`);

    // 6. 🎯 FILTRO CRÍTICO: ÚNICAMENTE POR LUGAR "3" (SALTA - DISTANCIA)
    const inscriptosVirtuales = todosLosInscriptos.filter(inscripto => {
      const esLugarTres = inscripto.lugar === "3";
      
      console.log(`🎯 Inscripto ${inscripto.apen}: lugar="${inscripto.lugar}", nombreLugar="${inscripto.nombreLugar}", cumpleFiltro=${esLugarTres}`);
      
      return esLugarTres;
    });

    console.log(`🎓 Inscriptos con LUGAR=3: ${inscriptosVirtuales.length} de ${todosLosInscriptos.length} totales`);

    // 7. Formatear inscriptos virtuales
    const inscriptosFormateados = inscriptosVirtuales.map(inscripto => ({
      dni: inscripto.ndocu,
      nombre: inscripto.apen,
      lugar: inscripto.nombreLugar,
      sector: inscripto.nombreSector,
      modo: inscripto.nombreModo,
      fechaInscripcion: inscripto.fecActa
    }));

    // 8. GUARDAR cantidad de inscriptos virtuales en la base de datos
    try {
      await prisma.examen.update({
        where: { id: examenId },
        data: {
          cantidadInscriptos: inscriptosVirtuales.length,
          fechaUltConsulta: new Date()
        }
      });
      console.log(`💾 Guardado: ${inscriptosVirtuales.length} inscriptos virtuales para examen ${id}`);
    } catch (updateError) {
      console.error('Error actualizando cantidad de inscriptos:', updateError);
    }

    return res.status(200).json({
      success: true,
      data: {
        examen: {
          id: examen.id,
          nombre: examen.nombreMateria,
          fecha: examen.fecha?.toISOString().split('T')[0],
          hora: examen.hora?.toTimeString().split(' ')[0],
          carrera: {
            nombre: examen.carrera.nombre,
            facultad: examen.carrera.facultad.nombre
          },
          aula: examen.aula ? {
            id: examen.aula.id,
            nombre: examen.aula.nombre,
            capacidad: examen.aula.capacidad
          } : null,
          codigoMateria: codigoMateria,
          areaTema: areaTema,
          carreraTotem: carreraTotem
        },
        inscriptos: inscriptosFormateados,
        cantidadInscriptos: inscriptosVirtuales.length,
        apiExternaDisponible: true,
        filtrosAplicados: {
          codigoMateria: codigoMateria,
          areaTema: areaTema,
          carrera: carreraTotem,
          lugarFiltrado: "3 (SALTA - DISTANCIA)",
          fechaDesde,
          fechaHasta
        }
      }
    });

  } catch (error) {
    console.error('❌ Error consultando inscriptos:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error consultando inscriptos desde API externa',
      message: error.message
    });
  }
});

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
    
    // Determinar si es asignación nueva o cambio
    const esReasignacion = !!examen.aulaId;
    const aulaAnterior = examen.aula;
    
    // Asignar/cambiar el aula al examen
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
    
    const mensaje = esReasignacion 
      ? `Aula cambiada de "${aulaAnterior?.nombre}" a "${aula.nombre}"`
      : `Aula "${aula.nombre}" asignada exitosamente`;
    
    console.log(`✅ ${esReasignacion ? 'Cambio' : 'Asignación'}: Examen ${examenId} → ${aula.nombre}`);
    
    return res.status(200).json({
      success: true,
      message: mensaje,
      data: {
        examen: examenActualizado,
        asignacion: {
          tipo: esReasignacion ? 'CAMBIO' : 'NUEVA',
          aulaAnterior: aulaAnterior,
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

// PUT /api/v1/examenes/:id/cambiar-aula - Endpoint específico para cambiar aulas
router.put('/:id/cambiar-aula', async (req, res) => {
  try {
    const { id } = req.params;
    const { aulaId, motivo } = req.body;
    
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
    
    // Verificar que el examen existe Y ya tiene un aula asignada
    const examen = await prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        carrera: { include: { facultad: true } },
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
    
    if (!examen.aulaId) {
      return res.status(400).json({
        success: false,
        error: 'Examen sin aula asignada',
        message: 'Este examen no tiene un aula asignada. Use el endpoint de asignación en su lugar.'
      });
    }
    
    // Verificar que la nueva aula existe
    const nuevaAula = await prisma.aula.findUnique({
      where: { id: parseInt(aulaId) }
    });
    
    if (!nuevaAula) {
      return res.status(404).json({
        success: false,
        error: 'Nueva aula no encontrada',
        message: `No se encontró aula con ID ${aulaId}`
      });
    }
    
    // Verificar que no sea la misma aula
    if (examen.aulaId === parseInt(aulaId)) {
      return res.status(400).json({
        success: false,
        error: 'Misma aula',
        message: `El examen ya está asignado al aula "${nuevaAula.nombre}"`
      });
    }
    
    const aulaAnterior = examen.aula;
    
    // Cambiar el aula
    const examenActualizado = await prisma.examen.update({
      where: { id: examenId },
      data: {
        aulaId: parseInt(aulaId),
        observaciones: motivo ? `Cambio de aula: ${motivo}` : 'Aula cambiada'
      },
      include: {
        carrera: { include: { facultad: true } },
        aula: true
      }
    });
    
    console.log(`🔄 Cambio de aula: Examen ${examenId} | "${aulaAnterior?.nombre}" → "${nuevaAula.nombre}"`);
    
    return res.status(200).json({
      success: true,
      message: `Aula cambiada exitosamente de "${aulaAnterior?.nombre}" a "${nuevaAula.nombre}"`,
      data: {
        examen: examenActualizado,
        cambio: {
          aulaAnterior: {
            id: aulaAnterior?.id,
            nombre: aulaAnterior?.nombre
          },
          aulaNueva: {
            id: nuevaAula.id,
            nombre: nuevaAula.nombre
          },
          motivo: motivo || 'No especificado',
          fechaCambio: new Date().toISOString()
        }
      }
    });
    
  } catch (error) {
    console.error('❌ Error cambiando aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error cambiando aula',
      message: error.message
    });
  }
});

// DELETE /api/v1/examenes/:id/asignar-aula - Eliminar asignación de aula
router.delete('/:id/asignar-aula', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar ID del examen
    const examenId = parseInt(id);
    if (isNaN(examenId) || examenId <= 0) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        message: `El ID del examen debe ser un número válido. Recibido: "${id}"`
      });
    }
    
    // Verificar que el examen existe y tiene aula asignada
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

    if (!examen.aulaId) {
      return res.status(400).json({
        success: false,
        error: 'El examen no tiene aula asignada',
        message: 'No se puede eliminar una asignación que no existe'
      });
    }

    // Obtener datos del aula antes de quitar asignación
    const aulaAnterior = examen.aula;
    const cantidadInscriptos = examen.cantidadInscriptos || 0;

    // Eliminar asignación y actualizar contador de alumnos en transacción
    const [examenActualizado] = await prisma.$transaction([
      prisma.examen.update({
        where: { id: examenId },
        data: {
          aulaId: null,
          observaciones: 'Asignación de aula eliminada',
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

    console.log(`🗑️ Asignación eliminada: Examen ${examenId} → Sin aula (${cantidadInscriptos} alumnos liberados)`);

    return res.status(200).json({
      success: true,
      message: 'Asignación de aula eliminada exitosamente',
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

// GET /api/v1/examenes/por-dni/:dni - Obtener exámenes de un estudiante específico
router.get('/por-dni/:dni', async (req, res) => {
  try {
    const { dni } = req.params;
    
    console.log(`🔍 Buscando exámenes para DNI: ${dni}`);
    
    const estudianteExamenes = await prisma.estudianteExamen.findMany({
      where: { dni: dni },
      include: {
        examen: {
          include: {
            carrera: true,
            facultad: true,
            aula: true,
            examenTotem: true
          }
        },
        estudiante: true
      },
      orderBy: {
        examen: {
          fecha: 'desc'
        }
      }
    });
    
    if (estudianteExamenes.length === 0) {
      return res.status(404).json({
        success: false,
        error: `No se encontraron exámenes para el DNI ${dni}`,
        data: []
      });
    }
    
    // Formatear respuesta
    const examenes = estudianteExamenes.map(rel => ({
      examen: {
        id: rel.examen.id,
        nombreMateria: rel.examen.nombreMateria,
        fecha: rel.examen.fecha,
        hora: rel.examen.hora,
        carrera: rel.examen.carrera.nombre,
        facultad: rel.examen.facultad.nombre,
        aula: rel.examen.aula ? rel.examen.aula.nombre : 'Sin asignar',
        datosTotem: {
          materiaTotem: rel.examen.examenTotem?.materiaTotem,
          areaTemaTotem: rel.examen.examenTotem?.areaTemaTotem,
          sectorTotem: rel.examen.examenTotem?.sectorTotem,
          carreraTotem: rel.examen.examenTotem?.carreraTotem
        }
      },
      estudiante: {
        dni: rel.estudiante.dni,
        nombre: rel.estudiante.nombre,
        apellido: rel.estudiante.apellido
      },
      resultado: {
        asistencia: rel.asistencia,
        aprobado: rel.aprobado,
        nota: rel.nota
      }
    }));
    
    return res.json({
      success: true,
      dni: dni,
      totalExamenes: examenes.length,
      data: examenes
    });
    
  } catch (error) {
    console.error('Error buscando exámenes por DNI:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
});

// POST /api/v1/examenes/:id/obtener-inscriptos - Obtener inscriptos desde UCASAL
router.post('/:id/obtener-inscriptos', async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log(`🌐 Obteniendo inscriptos de UCASAL para examen ID: ${id}`);
    
    const resultado = await totemService.obtenerInscriptosUcasal(parseInt(id));
    
    return res.json({
      success: true,
      message: 'Inscriptos obtenidos exitosamente desde UCASAL',
      data: resultado
    });
    
  } catch (error) {
    console.error('Error obteniendo inscriptos UCASAL:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo inscriptos desde UCASAL',
      message: error.message
    });
  }
});

// PUT /api/v1/examenes/:id/asignar-aula - Asignar aula manualmente (simulando backoffice)
router.put('/:id/asignar-aula', async (req, res) => {
  try {
    const { id } = req.params;
    const { aulaId } = req.body;
    
    if (!aulaId) {
      return res.status(400).json({
        success: false,
        error: 'aulaId es requerido'
      });
    }
    
    console.log(`🏢 Asignando aula ${aulaId} al examen ${id}`);
    
    // Verificar que el aula existe
    const aula = await prisma.aula.findUnique({
      where: { id: parseInt(aulaId) }
    });
    
    if (!aula) {
      return res.status(404).json({
        success: false,
        error: 'Aula no encontrada'
      });
    }
    
    // Obtener datos del examen
    const examen = await prisma.examen.findUnique({
      where: { id: parseInt(id) },
      include: { estudianteExamenes: true }
    });
    
    if (!examen) {
      return res.status(404).json({
        success: false,
        error: 'Examen no encontrado'
      });
    }
    
    // Actualizar examen con aula
    const examenActualizado = await prisma.examen.update({
      where: { id: parseInt(id) },
      data: { aulaId: parseInt(aulaId) },
      include: {
        carrera: true,
        facultad: true,
        aula: true,
        examenTotem: true,
        estudianteExamenes: {
          include: { estudiante: true }
        }
      }
    });
    
    // Crear/actualizar ocupación de aula
    const horaStr = examen.hora ? 
      `${examen.hora.getHours()}:${String(examen.hora.getMinutes()).padStart(2, '0')}` : 
      '00:00';
    
    await prisma.ocupacionAula.upsert({
      where: {
        aula_id_fecha_hora: {
          aula_id: parseInt(aulaId),
          fecha: examen.fecha,
          hora: horaStr
        }
      },
      update: {
        utilizados: examen.cantidadInscriptos || 0,
        capacidad_teorica: aula.capacidad
      },
      create: {
        aula_id: parseInt(aulaId),
        fecha: examen.fecha,
        hora: horaStr,
        utilizados: examen.cantidadInscriptos || 0,
        capacidad_teorica: aula.capacidad,
        observaciones: examen.cantidadInscriptos > aula.capacidad ? 'SOBREOCUPADA' : null
      }
    });
    
    return res.json({
      success: true,
      message: `Aula ${aula.nombre} asignada exitosamente al examen`,
      data: {
        examen: examenActualizado,
        ocupacion: {
          aula: aula.nombre,
          capacidad: aula.capacidad,
          utilizados: examen.cantidadInscriptos || 0,
          disponible: (aula.capacidad - (examen.cantidadInscriptos || 0)),
          porcentajeOcupacion: Math.round(((examen.cantidadInscriptos || 0) / aula.capacidad) * 100)
        }
      }
    });
    
  } catch (error) {
    console.error('Error asignando aula:', error);
    return res.status(500).json({
      success: false,
      error: 'Error asignando aula',
      message: error.message
    });
  }
});

// GET /api/v1/examenes - Listar exámenes con filtros
router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0, fecha, materiaId } = req.query;
    
    const where = {};
    if (fecha) where.fecha = new Date(fecha);
    if (materiaId) where.materia_codigo = materiaId;
    
    const examenes = await prisma.examen.findMany({
      where,
      include: {
        carrera: true,
        facultad: true,
        aula: true,
        examenTotem: true,
        _count: {
          select: { estudianteExamenes: true }
        }
      },
      orderBy: { fecha: 'desc' },
      take: parseInt(limit),
      skip: parseInt(offset)
    });
    
    return res.json({
      success: true,
      data: examenes,
      total: examenes.length
    });
    
  } catch (error) {
    console.error('Error listando exámenes:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
});

/**
 * 🎯 FUNCIÓN HELPER: Agrupar carreras por estado de inscriptos
 * Organiza las carreras en dos grupos: con inscriptos y sin inscriptos
 */
async function agruparCarrerasPorInscriptos(examenes) {
  console.log(`📊 Agrupando ${examenes.length} exámenes por estado de inscriptos...`);
  
  const carrerasConInscriptos = new Map();
  const carrerasSinInscriptos = new Map();
  
  // Procesar cada examen
  for (const examen of examenes) {
    const carreraKey = `${examen.carrera.codigo}-${examen.carrera.nombre}`;
    const tieneInscriptos = examen.cantidadInscriptos > 0;
    
    const carreraData = {
      codigo: examen.carrera.codigo,
      nombre: examen.carrera.nombre,
      facultad: examen.carrera.facultad.nombre,
      examenes: []
    };
    
    const examenData = {
      id: examen.id,
      nombre: examen.nombreMateria || `Materia ${examen.examenTotem?.materiaTotem}` || 'Sin nombre',
      fecha: examen.fecha.toISOString().split('T')[0],
      hora: examen.hora ? examen.hora.toTimeString().split(' ')[0] : null,
      cantidadInscriptos: examen.cantidadInscriptos || 0,
      aula: examen.aula ? {
        id: examen.aula.id,
        nombre: examen.aula.nombre,
        capacidad: examen.aula.capacidad
      } : null
    };
    
    if (tieneInscriptos) {
      // Carrera CON inscriptos
      if (carrerasConInscriptos.has(carreraKey)) {
        carrerasConInscriptos.get(carreraKey).examenes.push(examenData);
      } else {
        carrerasConInscriptos.set(carreraKey, {
          ...carreraData,
          examenes: [examenData]
        });
      }
    } else {
      // Carrera SIN inscriptos
      if (carrerasSinInscriptos.has(carreraKey)) {
        carrerasSinInscriptos.get(carreraKey).examenes.push(examenData);
      } else {
        carrerasSinInscriptos.set(carreraKey, {
          ...carreraData,
          examenes: [examenData]
        });
      }
    }
  }
  
  // Convertir Maps a arrays y ordenar
  const conInscriptos = Array.from(carrerasConInscriptos.values())
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  const sinInscriptos = Array.from(carrerasSinInscriptos.values())
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  // Calcular estadísticas
  const totalCarreras = conInscriptos.length + sinInscriptos.length;
  const porcentajeConInscriptos = totalCarreras > 0 ? 
    Math.round((conInscriptos.length / totalCarreras) * 100) : 0;
  
  console.log(`✅ Agrupación completada: ${conInscriptos.length} con inscriptos, ${sinInscriptos.length} sin inscriptos`);
  
  return {
    conInscriptos: {
      total: conInscriptos.length,
      carreras: conInscriptos
    },
    sinInscriptos: {
      total: sinInscriptos.length,
      carreras: sinInscriptos
    },
    resumen: {
      totalCarreras,
      carrerasConInscriptos: conInscriptos.length,
      carrerasSinInscriptos: sinInscriptos.length,
      porcentajeConInscriptos
    }
  };
}

export default router;