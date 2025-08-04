import prisma from '../../../../../lib/db.js';

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

    // 🚀 CONSULTA DIRECTA A API EXTERNA UCASAL
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
    
    if (!response.ok) {
      return res.status(502).json({
        success: false,
        error: 'Error en API externa',
        details: `API respondió ${response.status}: ${response.statusText}`
      });
    }

    const examenesExternos = await response.json();
    
    if (!Array.isArray(examenesExternos)) {
      return res.status(502).json({
        success: false,
        error: 'Respuesta inválida de API externa',
        details: 'Se esperaba un array'
      });
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

    // 🚀 PROCESAR EXÁMENES ENCONTRADOS - BUSCAR DATOS COMPLETOS EN BD LOCAL
    const examenesCompletos = [];
    
    for (const examenExterno of examenesExternos) {
      console.log('🔍 Procesando examen externo:', {
        materia: examenExterno.materia,
        carrera: examenExterno.carrera,
        nombreMateria: examenExterno.nombreMateria
      });

      // Buscar match en tabla examenes_totem para obtener datos completos
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

      if (matchTotem && matchTotem.examen) {
        // ✅ Match encontrado - datos completos
        const examen = matchTotem.examen;
        
        examenesCompletos.push({
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
          facultad: examen.carrera.facultad.nombre, // Campo facultad independiente para fácil acceso
          fecha: examen.fecha ? examen.fecha.toISOString().split('T')[0] : examenExterno.fecActa,
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
          docente: matchTotem.docenteTotem,
          monitoreo: matchTotem.monitoreoTotem,
          control: matchTotem.controlTotem,
          url: matchTotem.urlTotem,
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          }
        });
      } else {
        // ⚠️ No match - solo datos de API externa
        examenesCompletos.push({
          materia: {
            codigo: examenExterno.materia,
            nombre: examenExterno.nombreMateria,
            areaTema: examenExterno.areaTema
          },
          carrera: {
            codigo: examenExterno.carrera,
            nombre: 'No especificado'
          },
          facultad: 'No especificada', // Campo facultad independiente
          fecha: examenExterno.fecActa,
          hora: null,
          aula: null,
          tipoExamen: 'No especificado',
          modalidad: 'presencial',
          observaciones: 'Examen registrado solo en sistema externo',
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

    // 🚀 ORDENAR EXÁMENES POR FECHA Y HORA (más próximos primero)
    examenesCompletos.sort((a, b) => {
      const fechaA = new Date(`${a.fecha}T${a.hora || '00:00:00'}`);
      const fechaB = new Date(`${b.fecha}T${b.hora || '00:00:00'}`);
      return fechaA - fechaB; // Orden ascendente (más próximo primero)
    });

    // 🚀 RESPUESTA FINAL
    const estudianteInfo = examenesCompletos[0]?.estudiante || {
      dni: dni,
      nombre: 'No disponible'
    };

    return res.status(200).json({
      success: true,
      data: {
        estudiante: estudianteInfo,
        examenes: examenesCompletos,
        totalExamenes: examenesCompletos.length
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