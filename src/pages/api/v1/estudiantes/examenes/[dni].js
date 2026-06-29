import prisma from '../../../../../lib/db.js';
import ActaExternaService, { scoreMatchActaConDocente } from '../../../../../services/actaExternaService.js';

const actaService = new ActaExternaService();

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

  // 🚀 PASO 1: Sin cache - consulta directa

  try {
    console.log(`🔍 Consultando exámenes para DNI: ${dni}`);

    // 🚀 CONSULTA USANDO SERVICIO CENTRALIZADO
    // Buscar exámenes en rango: 30 días atrás y 365 días adelante
    const fechaDesdeDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const fechaHastaDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const fechaDesde = actaService.formatDateDDMMYYYY(fechaDesdeDate);
    const fechaHasta = actaService.formatDateDDMMYYYY(fechaHastaDate);

    let examenesExternos;
    try {
      examenesExternos = await actaService.consultarActasPorDNI(dni, { fechaDesde, fechaHasta });
    } catch (apiError) {
      return res.status(502).json({
        success: false,
        error: 'Error en API externa',
        details: apiError.message
      });
    }
    
    if (!Array.isArray(examenesExternos)) {
      examenesExternos = [];
    }

    console.log(`✅ API externa respondió: ${examenesExternos.length} exámenes encontrados`);

    if (examenesExternos.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No se encontraron exámenes programados para este DNI',
        data: { dni, examenes: [] },
        message: 'La consulta fue exitosa pero no hay exámenes registrados para este estudiante'
      });
    }

    // 🗓️ FILTRAR EXÁMENES DE HOY EN ADELANTE
    const hoyDate = new Date();
    hoyDate.setHours(0, 0, 0, 0);
    const hoyStr = `${hoyDate.getDate().toString().padStart(2,'0')}/${(hoyDate.getMonth()+1).toString().padStart(2,'0')}/${hoyDate.getFullYear()}`;
    examenesExternos = examenesExternos.filter(e => {
      const [d, m, y] = e.fecActa.split('/').map(Number);
      const fechaExamen = new Date(y, m - 1, d);
      return fechaExamen >= hoyDate;
    });

    console.log(`📅 Exámenes desde hoy (${hoyStr}): ${examenesExternos.length}`);

    // Deduplicar: UCASAL a veces devuelve el mismo registro múltiples veces
    const vistosDedup = new Map();
    examenesExternos = examenesExternos.filter(e => {
      const key = `${e.materia}-${e.carrera}-${e.fecActa}-${e.areaTema ?? ''}`;
      if (vistosDedup.has(key)) return false;
      vistosDedup.set(key, true);
      return true;
    });
    console.log(`🔁 Tras deduplicar: ${examenesExternos.length} exámenes únicos`);

    if (examenesExternos.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No tienes exámenes programados',
        data: { dni, examenes: [] },
        message: 'No hay exámenes registrados próximos. Si creés que es un error, consultá en sede.'
      });
    }

    // 🚀 PROCESAR EXÁMENES ENCONTRADOS - BUSCAR DATOS COMPLETOS EN BD LOCAL
    const examenesEncontrados = [];
    
    for (const examenExterno of examenesExternos) {
      console.log('🔍 Procesando examen externo:', {
        materia: examenExterno.materia,
        carrera: examenExterno.carrera,
        nombreMateria: examenExterno.nombreMateria
      });

      // 🔥 CONSULTA CORREGIDA: Buscar exámenes de esa materia/carrera en la fecha exacta del acta
      const [diaActa, mesActa, anioActa] = examenExterno.fecActa.split('/').map(Number);
      const fechaExamenInicio = new Date(anioActa, mesActa - 1, diaActa, 0, 0, 0);
      const fechaExamenFin = new Date(anioActa, mesActa - 1, diaActa, 23, 59, 59);

      let examenesCompletos = await prisma.examen.findMany({
        where: {
          materia_codigo: examenExterno.materia?.toString(),
          carrera: {
            codigo: examenExterno.carrera?.toString()
          },
          fecha: {
            gte: fechaExamenInicio,
            lte: fechaExamenFin
          },
          // Opcional: también match por areaTema si existe
          ...(examenExterno.areaTema ? { areatema: examenExterno.areaTema?.toString() } : {})
        },
        include: {
          carrera: {
            include: {
              facultad: true
            }
          },
          aula: true,
          facultad: true
        },
        orderBy: [
          { fecha: 'asc' },
          { hora: 'asc' }
        ]
      });

      if (examenesCompletos.length > 0) {
        // ✅ Datos encontrados en tabla principal - INFORMACIÓN COMPLETA
        console.log(`✅ ${examenesCompletos.length} examen(es) encontrado(s) en BD para materia ${examenExterno.materia}`);

        // 🎯 DISCRIMINAR POR CÁTEDRA: una misma materia/carrera/fecha puede tener
        // varias cátedras en la BD local (distintos docentes). El alumno pertenece a
        // UNA sola, identificada por los profesores del acta externa (profTit/prof1/prof2).
        if (examenesCompletos.length > 1) {
          const UMBRAL_CATEDRA = 0.4;
          const conScore = examenesCompletos.map(ex => ({
            ex,
            score: scoreMatchActaConDocente(examenExterno, ex.docente)
          }));
          conScore.forEach(({ ex, score }) => {
            console.log(`   🔎 Cátedra examen ID ${ex.id} (docente="${ex.docente}") vs acta (profTit="${examenExterno.profTit}") → score=${score.toFixed(2)}`);
          });
          const coincidentes = conScore.filter(c => c.score >= UMBRAL_CATEDRA);
          if (coincidentes.length > 0) {
            const maxScore = Math.max(...coincidentes.map(c => c.score));
            examenesCompletos = coincidentes.filter(c => c.score === maxScore).map(c => c.ex);
            console.log(`   🎯 Cátedra discriminada por docente: ${examenesCompletos.length} examen(es) seleccionado(s) (score=${maxScore.toFixed(2)})`);
          } else {
            console.log(`   ⚠️ Sin match de docente sobre umbral ${UMBRAL_CATEDRA}; se conservan todas las cátedras como fallback`);
          }
        }

        // Procesar cada examen encontrado en la BD local
        for (const examenCompleto of examenesCompletos) {
          console.log(`   ✅ Examen ID ${examenCompleto.id}: ${examenCompleto.nombreMateria} - ${examenCompleto.hora?.toTimeString().split(' ')[0] || 'Sin hora'}`);
          
          examenesEncontrados.push({
            id: examenCompleto.id,
            materia: {
              codigo: examenExterno.materia,
              nombre: examenExterno.nombreMateria,
              nombreCorto: examenCompleto.nombreMateria,
              areaTema: examenExterno.areaTema
            },
            carrera: {
              codigo: examenExterno.carrera,
              nombre: examenCompleto.carrera.nombre,
              facultad: examenCompleto.carrera.facultad.nombre
            },
            facultad: examenCompleto.carrera.facultad.nombre,
            fecha: examenCompleto.fecha ? examenCompleto.fecha.toISOString().split('T')[0] : null,
            hora: examenCompleto.hora ? examenCompleto.hora.toTimeString().split(' ')[0] : 'Hora no especificada',
            yaRealizado: (() => {
              if (!examenCompleto.hora || !examenCompleto.fecha) return false;
              const horaStr = examenCompleto.hora.toTimeString().split(' ')[0]; // HH:MM:SS
              const fechaStr = examenCompleto.fecha.toISOString().split('T')[0]; // YYYY-MM-DD
              // Construir con timezone argentina explícita (-03:00) para evitar
              // problemas de UTC en el servidor Docker
              const fechaHoraExamen = new Date(`${fechaStr}T${horaStr}-03:00`);
              return fechaHoraExamen < new Date();
            })(),
            aula: examenCompleto.aula ? {
              id: examenCompleto.aula.id,
              nombre: examenCompleto.aula.nombre,
              capacidad: examenCompleto.aula.capacidad,
              sede: examenCompleto.aula.sede
            } : 'Sin asignar',
            tipoExamen: examenCompleto.tipoExamen || 'Final',
            modalidad: examenCompleto.modalidadExamen || 'Presencial',
            observaciones: examenCompleto.observaciones || 'Sin observaciones',
            materialPermitido: examenCompleto.materialPermitido || 'Consultar con cátedra',
            requierePc: examenCompleto.requierePc || false,
            docente: examenCompleto.docente || 'Por confirmar',
            monitoreo: examenCompleto.monitoreo || 'Por asignar',
            control: examenCompleto.control_cargo || 'Por asignar',
            estudiante: {
              dni: examenExterno.ndocu,
              nombre: examenExterno.apen,
              lugar: examenExterno.nombreLugar,
              sector: examenExterno.nombreSector,
              modo: examenExterno.nombreModo
            }
          });
        }
      } else {
        // ⚠️ No encontrado en BD local - Buscar carrera por código para al menos tener facultad
        console.log(`⚠️ Examen no encontrado en BD local para materia ${examenExterno.materia}, carrera ${examenExterno.carrera}`);
        
        // Buscar carrera por código para obtener facultad correcta
        const carreraInfo = await prisma.carrera.findFirst({
          where: {
            codigo: examenExterno.carrera
          },
          include: {
            facultad: true
          }
        });
        
        const carreraData = carreraInfo ? {
          nombre: carreraInfo.nombre,
          facultad: carreraInfo.facultad.nombre
        } : {
          nombre: `Carrera código ${examenExterno.carrera}`,
          facultad: 'Facultad no identificada'
        };
        
        examenesEncontrados.push({
          materia: {
            codigo: examenExterno.materia,
            nombre: examenExterno.nombreMateria,
            areaTema: examenExterno.areaTema
          },
          carrera: {
            codigo: examenExterno.carrera,
            nombre: carreraData.nombre
          },
          facultad: carreraData.facultad,
          fecha: (() => { const [d,mo,y] = examenExterno.fecActa.split('/'); return `${y}-${mo}-${d}`; })(),
          hora: 'Hora no especificada',
          yaRealizado: false,
          aula: 'Sin asignar',
          tipoExamen: 'Final',
          modalidad: 'Presencial',
          observaciones: 'Examen pendiente de asignación de aula y horario',
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          }
        });
      }
    }

    // 🚀 ORDENAR EXÁMENES POR PROXIMIDAD (hoy primero, luego por horario)
    examenesEncontrados.sort((a, b) => {
      // Comparar fecha YYYY-MM-DD directamente como string (ordena correctamente)
      if (a.fecha < b.fecha) return -1;
      if (a.fecha > b.fecha) return 1;

      // Mismo día: ordenar por hora (validar que sea formato HH:MM)
      const horaA = (a.hora && /^\d{2}:\d{2}/.test(a.hora)) ? a.hora : '00:00:00';
      const horaB = (b.hora && /^\d{2}:\d{2}/.test(b.hora)) ? b.hora : '00:00:00';
      return horaA.localeCompare(horaB);
    });

    // 🚀 RESPUESTA FINAL
    const estudianteInfo = examenesEncontrados[0]?.estudiante || {
      dni: dni,
      nombre: 'No disponible'
    };

    return res.status(200).json({
      success: true,
      data: {
        estudiante: estudianteInfo,
        examenes: examenesEncontrados,
        totalExamenes: examenesEncontrados.length
      },
      consultadoEn: new Date().toISOString(),
      fuente: 'api_externa_con_datos_locales'
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