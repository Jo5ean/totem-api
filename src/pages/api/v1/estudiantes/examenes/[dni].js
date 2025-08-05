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
    const examenesEncontrados = [];
    
    for (const examenExterno of examenesExternos) {
      console.log('🔍 Procesando examen externo:', {
        materia: examenExterno.materia,
        carrera: examenExterno.carrera,
        nombreMateria: examenExterno.nombreMateria
      });

      // 🔥 CONSULTA CORREGIDA: Buscar TODOS los exámenes de esa materia/carrera
      const examenesCompletos = await prisma.examen.findMany({
        where: {
          materia_codigo: examenExterno.materia,
          carrera: {
            codigo: examenExterno.carrera
          },
          // Opcional: también match por areaTema si existe
          ...(examenExterno.areaTema ? { areatema: examenExterno.areaTema } : {})
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
            fecha: examenCompleto.fecha ? examenCompleto.fecha.toISOString().split('T')[0] : examenExterno.fecActa,
            hora: examenCompleto.hora ? examenCompleto.hora.toTimeString().split(' ')[0] : 'Hora no especificada',
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
          fecha: examenExterno.fecActa,
          hora: 'Hora no especificada',
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
      // Convertir fechas y horas a objetos Date para comparación
      const fechaA = new Date(`${a.fecha}T${a.hora || '00:00:00'}`);
      const fechaB = new Date(`${b.fecha}T${b.hora || '00:00:00'}`);
      
      // Obtener fecha actual (solo día, sin hora)
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      
      // Fechas de los exámenes (solo día, sin hora)
      const diaA = new Date(fechaA);
      diaA.setHours(0, 0, 0, 0);
      const diaB = new Date(fechaB);
      diaB.setHours(0, 0, 0, 0);
      
      // Calcular diferencia en días
      const diasA = Math.floor((diaA.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
      const diasB = Math.floor((diaB.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
      
      // Si son el mismo día, ordenar por hora (más temprano primero)
      if (diasA === diasB) {
        return fechaA.getTime() - fechaB.getTime();
      }
      
      // Ordenar por proximidad de día (hoy=0, mañana=1, etc.)
      return diasA - diasB;
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