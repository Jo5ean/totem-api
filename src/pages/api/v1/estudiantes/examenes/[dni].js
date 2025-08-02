import prisma from '../../../../../lib/db.js';

// Cache en memoria para consultas frecuentes (TTL: 5 minutos)
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

function getCacheKey(dni) {
  return `dni_${dni}`;
}

function getCachedData(key) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`🎯 ===== CACHE HIT ===== para ${key} (${Math.round((Date.now() - cached.timestamp) / 1000)}s de antigüedad)`);
    return cached.data;
  }
  if (cached) {
    cache.delete(key); // Limpiar cache expirado
    console.log(`⏰ ===== CACHE EXPIRED ===== para ${key}`);
  } else {
    console.log(`🔍 ===== CACHE MISS ===== para ${key} (primera consulta)`);
  }
  return null;
}

function setCacheData(key, data) {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
  console.log(`💾 ===== CACHE GUARDADO ===== para ${key} (válido por ${CACHE_TTL/1000}s)`);
}

export default async function handler(req, res) {
  // 🚀 CORS FIX: Agregar headers CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Manejar preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  const { dni } = req.query;

  if (!dni || !/^[0-9]{7,8}$/.test(dni)) {
    return res.status(400).json({
      success: false,
      error: 'DNI inválido. Debe contener 7-8 dígitos'
    });
  }

  // 🚀 PASO 1: Verificar cache primero
  const cacheKey = getCacheKey(dni);
  const cachedResult = getCachedData(cacheKey);
  
  if (cachedResult) {
    return res.status(200).json({
      ...cachedResult,
      cached: true,
      cacheTimestamp: new Date().toISOString()
    });
  }

  try {
    console.log(`🔍 Consultando exámenes para DNI: ${dni}`);

    // 🚀 PASO 2: Intentar consulta a BD local primero (más rápido)
    const examenesLocales = await consultarExamenesLocal(dni);
    
    // 🚀 PASO 3: Consulta a API externa UCASAL
    let examenesExternos = [];
    let apiExternaDisponible = true;
    
    try {
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

      const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/DNI-LE-LC/${dni}?fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
      
      console.log('📡 Consultando API externa:', apiUrl);
      
      const response = await fetch(apiUrl, {
        timeout: 10000 // 10 segundos timeout
      });
      
      if (response.ok) {
        examenesExternos = await response.json();
        if (!Array.isArray(examenesExternos)) {
          examenesExternos = [];
        }
        console.log(`✅ API externa: ${examenesExternos.length} exámenes encontrados`);
      } else {
        console.warn(`⚠️ API externa respondió ${response.status}: ${response.statusText}`);
        apiExternaDisponible = false;
      }
    } catch (apiError) {
      console.warn(`⚠️ Error en API externa (fallback a BD local): ${apiError.message}`);
      apiExternaDisponible = false;
    }

    // 🚀 PASO 4: Procesar según disponibilidad de datos
    let resultado;
    
    if (examenesExternos.length > 0) {
      // Hay datos externos, procesar normalmente
      resultado = await procesarExamenesConApiExterna(dni, examenesExternos);
      console.log(`✅ Procesamiento con API externa: ${resultado.data.examenes.length} exámenes`);
    } else if (examenesLocales.length > 0) {
      // No hay datos externos pero sí locales, usar solo BD local
      resultado = await procesarExamenesLocalSolo(dni, examenesLocales);
      resultado.warning = apiExternaDisponible 
        ? 'No se encontraron exámenes en el sistema externo, mostrando datos locales disponibles'
        : 'API externa no disponible, mostrando datos locales disponibles';
      console.log(`⚠️ Fallback a BD local: ${resultado.data.examenes.length} exámenes`);
    } else {
      // No hay datos en ningún lado
      const mensaje = apiExternaDisponible 
        ? 'No se encontraron exámenes programados para este DNI'
        : 'API externa no disponible y no hay datos locales para este DNI';
        
      return res.status(404).json({
        success: false,
        error: mensaje,
        data: { dni, examenes: [] },
        apiExternaDisponible
      });
    }

    // 🚀 PASO 5: Guardar en cache y retornar
    setCacheData(cacheKey, resultado);
    
    return res.status(200).json({
      ...resultado,
      cached: false,
      apiExternaDisponible,
      consultadoEn: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error en consulta de exámenes:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// 🚀 FUNCIONES AUXILIARES PARA CACHE Y OPTIMIZACIÓN

async function consultarExamenesLocal(dni) {
  try {
    // Buscar estudiante y sus exámenes en BD local
    const estudiante = await prisma.estudiante.findUnique({
      where: { dni },
      include: {
        examenes: {
          include: {
            examen: {
              include: {
                carrera: {
                  include: { facultad: true }
                },
                aula: true,
                examenTotem: true
              }
            }
          }
        }
      }
    });

    return estudiante?.examenes || [];
  } catch (error) {
    console.error('Error consultando BD local:', error);
    return [];
  }
}

async function procesarExamenesConApiExterna(dni, examenesExternos) {
  // Esta es la lógica original, mantenemos el comportamiento actual
  const examenesCompletos = [];
  
  for (const examenExterno of examenesExternos) {
    console.log('Procesando examen externo:', {
      materia: examenExterno.materia,
      areaTema: examenExterno.areaTema,
      carrera: examenExterno.carrera,
      nombreMateria: examenExterno.nombreMateria
    });

    // Buscar match en tabla examenes_totem primero
    const matchTotem = await prisma.examenTotem.findFirst({
      where: {
        AND: [
          { materiaTotem: examenExterno.materia },
          { carreraTotem: examenExterno.carrera },
          ...(examenExterno.areaTema ? [{ areaTemaTotem: examenExterno.areaTema }] : [])
        ]
      },
      include: {
        examen: {
          include: {
            carrera: {
              include: {
                facultad: true
              }
            },
            aula: true
          }
        }
      }
    });

    if (matchTotem) {
      // Match encontrado en examenes_totem
      const examen = matchTotem.examen;
      
      examenesCompletos.push({
        // Datos del estudiante desde API externa
        estudiante: {
          dni: examenExterno.ndocu,
          nombre: examenExterno.apen,
          lugar: examenExterno.nombreLugar,
          sector: examenExterno.nombreSector,
          modo: examenExterno.nombreModo
        },
        
        // Datos del examen combinados
        examen: {
          id: examen.id,
          materia: {
            codigo: examenExterno.materia,
            nombre: examenExterno.nombreMateria,
            nombreCorto: examen.nombreMateria,
            areaTema: examenExterno.areaTema
          },
          carrera: {
            codigo: examenExterno.carrera,
            nombre: examen.carrera.nombre,
            facultad: examen.carrera.facultad.nombre
          },
          fecha: examen.fecha ? examen.fecha.toISOString().split('T')[0] : null,
          hora: examen.hora ? examen.hora.toTimeString().split(' ')[0] : null,
          fechaExterna: examenExterno.fecActa,
          aula: examen.aula ? {
            id: examen.aula.id,
            nombre: examen.aula.nombre,
            capacidad: examen.aula.capacidad,
            sede: examen.aula.sede
          } : null,
          tipoExamen: examen.tipoExamen || 'No especificado',
          modalidad: examen.modalidadExamen || 'presencial',
          observaciones: examen.observaciones,
          materialPermitido: examen.materialPermitido,
          requierePc: examen.requierePc || false,
          // Datos adicionales del tótem
          docente: matchTotem.docenteTotem,
          monitoreo: matchTotem.monitoreoTotem,
          control: matchTotem.controlTotem,
          url: matchTotem.urlTotem
        },
        
        // Estado del match
        matchStatus: {
          found: true,
          source: 'totem_database',
          matchedBy: ['materia', 'carrera', 'areaTema'].filter(field => 
            examenExterno[field] && matchTotem[`${field}Totem`]
          )
        }
      });
    } else {
      // No se encontró match exacto, buscar por nombre de materia
      const matchPorNombre = await prisma.examen.findFirst({
        where: {
          nombreMateria: {
            contains: examenExterno.nombreMateria
          },
          carrera: {
            codigo: examenExterno.carrera
          }
        },
        include: {
          carrera: {
            include: {
              facultad: true
            }
          },
          aula: true
        }
      });

      if (matchPorNombre) {
        examenesCompletos.push({
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          },
          examen: {
            id: matchPorNombre.id,
            materia: {
              codigo: examenExterno.materia,
              nombre: examenExterno.nombreMateria,
              nombreCorto: matchPorNombre.nombreMateria,
              areaTema: examenExterno.areaTema
            },
            carrera: {
              codigo: examenExterno.carrera,
              nombre: matchPorNombre.carrera.nombre,
              facultad: matchPorNombre.carrera.facultad.nombre
            },
            fecha: matchPorNombre.fecha ? matchPorNombre.fecha.toISOString().split('T')[0] : null,
            hora: matchPorNombre.hora ? matchPorNombre.hora.toTimeString().split(' ')[0] : null,
            fechaExterna: examenExterno.fecActa,
            aula: matchPorNombre.aula ? {
              id: matchPorNombre.aula.id,
              nombre: matchPorNombre.aula.nombre,
              capacidad: matchPorNombre.aula.capacidad,
              sede: matchPorNombre.aula.sede
            } : null,
            tipoExamen: matchPorNombre.tipoExamen || 'No especificado',
            modalidad: matchPorNombre.modalidadExamen || 'presencial',
            observaciones: matchPorNombre.observaciones,
            materialPermitido: matchPorNombre.materialPermitido,
            requierePc: matchPorNombre.requierePc || false
          },
          matchStatus: {
            found: true,
            source: 'name_match',
            matchedBy: ['nombreMateria', 'carrera']
          }
        });
      } else {
        // No se encontró match, pero incluir datos básicos de la API externa
        examenesCompletos.push({
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          },
          examen: {
            materia: {
              codigo: examenExterno.materia,
              nombre: examenExterno.nombreMateria,
              areaTema: examenExterno.areaTema
            },
            carrera: {
              codigo: examenExterno.carrera
            },
            fechaExterna: examenExterno.fecActa,
            aula: null, // Sin asignar
            tipoExamen: 'No especificado',
            modalidad: 'presencial',
            observaciones: 'Examen no encontrado en base de datos local'
          },
          matchStatus: {
            found: false,
            source: 'external_only',
            message: 'Examen registrado solo en sistema externo'
          }
        });
      }
    }
  }

  // Construir respuesta final
  const estudianteInfo = examenesCompletos[0]?.estudiante || {
    dni: dni,
    nombre: 'No disponible'
  };

  return {
    success: true,
    data: {
      estudiante: estudianteInfo,
      examenes: examenesCompletos.map(item => item.examen),
      totalExamenes: examenesCompletos.length,
      examenesEncontrados: examenesCompletos.filter(item => item.matchStatus.found).length
    },
    debug: {
      source: 'api_externa_con_bd_local',
      matches: examenesCompletos.map(item => ({
        materia: item.examen.materia.codigo,
        carrera: item.examen.carrera?.codigo,
        found: item.matchStatus.found,
        source: item.matchStatus.source
      }))
    }
  };
}

async function procesarExamenesLocalSolo(dni, examenesLocales) {
  // Procesar solo con datos de BD local
  const examenesProcesados = examenesLocales.map(estudianteExamen => {
    const examen = estudianteExamen.examen;
    
    return {
      id: examen.id,
      materia: {
        codigo: examen.materia_codigo,
        nombre: examen.nombreMateria,
        nombreCorto: examen.nombreMateria,
        areaTema: examen.areatema
      },
      carrera: {
        codigo: examen.carrera.codigo,
        nombre: examen.carrera.nombre,
        facultad: examen.carrera.facultad.nombre
      },
      fecha: examen.fecha ? examen.fecha.toISOString().split('T')[0] : null,
      hora: examen.hora ? examen.hora.toTimeString().split(' ')[0] : null,
      aula: examen.aula ? {
        id: examen.aula.id,
        nombre: examen.aula.nombre,
        capacidad: examen.aula.capacidad,
        sede: examen.aula.sede
      } : null,
      tipoExamen: examen.tipoExamen || 'No especificado',
      modalidad: examen.modalidadExamen || 'presencial',
      observaciones: examen.observaciones,
      materialPermitido: examen.materialPermitido,
      requierePc: examen.requierePc || false,
      // Datos del tótem si están disponibles
      docente: examen.examenTotem?.docenteTotem,
      monitoreo: examen.examenTotem?.monitoreoTotem,
      control: examen.examenTotem?.controlTotem,
      url: examen.examenTotem?.urlTotem
    };
  });

  return {
    success: true,
    data: {
      estudiante: {
        dni: dni,
        nombre: 'Disponible en base de datos local'
      },
      examenes: examenesProcesados,
      totalExamenes: examenesProcesados.length,
      examenesEncontrados: examenesProcesados.length
    },
    debug: {
      source: 'solo_bd_local',
      totalExamenesLocal: examenesProcesados.length
    }
  };
}