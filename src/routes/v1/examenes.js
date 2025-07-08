import express from 'express';
import prisma from '../../lib/db.js';
import { formatearNombreAula } from '../../lib/helpers.js';

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
    
    // 🔄 ACTUALIZAR CANTIDADES DE INSCRIPTOS AUTOMÁTICAMENTE
    // Solo si está habilitado y para exámenes que no han sido consultados en las últimas 24 horas
    const examenesParaActualizar = actualizarCantidades !== 'false' ? examenes.filter(examen => {
      if (!examen.examenTotem?.materiaTotem) return false;
      
      // Si nunca se consultó, o si fue hace más de 24 horas
      if (!examen.fechaUltConsulta) return true;
      
      const ahora = new Date();
      const ultimaConsulta = new Date(examen.fechaUltConsulta);
      const horasTranscurridas = (ahora - ultimaConsulta) / (1000 * 60 * 60);
      
      return horasTranscurridas > 24; // Más de 24 horas
    }) : [];
    
    if (examenesParaActualizar.length > 0) {
      console.log(`🔄 Actualizando cantidades de inscriptos para ${examenesParaActualizar.length} exámenes no consultados recientemente...`);
      
      // Actualizar cantidades en paralelo (máximo 3 a la vez para no saturar la API)
      const batchSize = 3;
      for (let i = 0; i < examenesParaActualizar.length; i += batchSize) {
        const batch = examenesParaActualizar.slice(i, i + batchSize);
        
        await Promise.all(batch.map(async (examen) => {
          try {
            const codigoMateria = examen.examenTotem.materiaTotem;
            const areaTema = examen.examenTotem.areaTemaTotem;
            const carreraTotem = examen.examenTotem.carreraTotem;
            
            // Consultar API externa
            const fechaDesde = new Date().toLocaleDateString('es-AR', {
              day: '2-digit', month: '2-digit', year: 'numeric'
            });
            const fechaHasta = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('es-AR', {
              day: '2-digit', month: '2-digit', year: 'numeric'
            });
            
            const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/materia/${codigoMateria}?rendida=false&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
            
            const response = await fetch(apiUrl, { timeout: 8000 });
            if (!response.ok) {
              console.log(`⚠️ API externa no disponible para examen ${examen.id}`);
              return;
            }
            
            const datosCompletos = await response.json();
            if (!Array.isArray(datosCompletos)) return;
            
            // Filtrar por areaTema y carrera
            const inscriptosFiltrados = datosCompletos.filter(registro => {
              const cumpleAreaTema = areaTema ? registro.areaTema == areaTema : true;
              const cumpleCarrera = carreraTotem ? registro.carrera == carreraTotem : true;
              return cumpleAreaTema && cumpleCarrera && registro.alumnos?.length > 0;
            });
            
            // Extraer inscriptos con LUGAR = "3"
            let inscriptosLugar3 = [];
            inscriptosFiltrados.forEach(registro => {
              if (registro.alumnos) {
                const lugar3 = registro.alumnos.filter(inscripto => inscripto.lugar === "3");
                inscriptosLugar3 = inscriptosLugar3.concat(lugar3);
              }
            });
            
            // Actualizar en la base de datos
            await prisma.examen.update({
              where: { id: examen.id },
              data: {
                cantidadInscriptos: inscriptosLugar3.length,
                fechaUltConsulta: new Date()
              }
            });
            
            // Actualizar el objeto en memoria para la respuesta
            examen.cantidadInscriptos = inscriptosLugar3.length;
            
            console.log(`✅ Examen ${examen.id}: ${inscriptosLugar3.length} inscriptos con lugar=3`);
            
          } catch (error) {
            console.error(`❌ Error actualizando examen ${examen.id}:`, error.message);
            // En caso de error, marcar como consultado para evitar intentos repetidos
            try {
              await prisma.examen.update({
                where: { id: examen.id },
                data: { fechaUltConsulta: new Date() }
              });
            } catch (updateError) {
              console.error(`❌ Error marcando fecha de consulta:`, updateError);
            }
          }
        }));
      }
      
      console.log(`✅ Actualización de cantidades completada`);
    }
    
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
        cantidadInscriptos: examen.cantidadInscriptos !== null ? examen.cantidadInscriptos : 'Sin consultar',
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
    const fechaDesde = new Date().toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
    
    const fechaHasta = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

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