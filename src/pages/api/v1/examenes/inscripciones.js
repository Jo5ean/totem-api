import prisma from '../../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  try {
    console.log('🔍 Iniciando consulta de inscripciones por examen...');

    // 1. Obtener todas las combinaciones únicas de materia + areaTema de la BD local
    const examenesUnicos = await prisma.examenTotem.findMany({
      select: {
        materiaTotem: true,
        areaTemaTotem: true,
        examen: {
          select: {
            id: true,
            nombreMateria: true,
            fecha: true,
            hora: true,
            carrera: {
              select: {
                codigo: true,
                nombre: true
              }
            }
          }
        }
      },
      distinct: ['materiaTotem', 'areaTemaTotem']
    });

    console.log(`📊 Encontradas ${examenesUnicos.length} combinaciones únicas materia+areaTema`);

    // 2. Para cada combinación, consultar la API externa y contar inscriptos
    const resultadosInscripciones = [];
    // ✅ FORMATO CORRECTO: dd/mm/yyyy con CEROS OBLIGATORIOS como espera la API de UCASAL
    const hoy = new Date();
    const fechaDesde = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
    
    const futuro = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const fechaHasta = `${futuro.getDate().toString().padStart(2, '0')}/${(futuro.getMonth() + 1).toString().padStart(2, '0')}/${futuro.getFullYear()}`;

    let totalConsultas = 0;
    let consultasExitosas = 0;

    for (const examen of examenesUnicos) {
      try {
        totalConsultas++;
        
        // Consultar API externa por materia
        const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/materia/${examen.materiaTotem}?rendida=false&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
        
        console.log(`📡 Consultando materia ${examen.materiaTotem} (areaTema: ${examen.areaTemaTotem})`);
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          console.log(`⚠️ Sin datos para materia ${examen.materiaTotem}: ${response.status}`);
          
          resultadosInscripciones.push({
            examenId: examen.examen.id,
            materia: {
              codigo: examen.materiaTotem,
              nombre: examen.examen.nombreMateria,
              areaTema: examen.areaTemaTotem
            },
            carrera: examen.examen.carrera,
            fecha: examen.examen.fecha,
            hora: examen.examen.hora,
            inscriptos: 0,
            estado: 'sin_datos',
            mensaje: `Sin datos en API externa (${response.status})`
          });
          continue;
        }

        const datosMateria = await response.json();
        consultasExitosas++;

        // 3. Filtrar por combinación específica materia + areaTema
        let inscriptosTotal = 0;
        
        if (Array.isArray(datosMateria)) {
          for (const acta of datosMateria) {
            // Verificar que coincida la combinación materia + areaTema
            if (acta.materia === examen.materiaTotem && 
                acta.areaTema === examen.areaTemaTotem &&
                Array.isArray(acta.alumnos)) {
              inscriptosTotal += acta.alumnos.length;
            }
          }
        }

        resultadosInscripciones.push({
          examenId: examen.examen.id,
          materia: {
            codigo: examen.materiaTotem,
            nombre: examen.examen.nombreMateria,
            areaTema: examen.areaTemaTotem
          },
          carrera: examen.examen.carrera,
          fecha: examen.examen.fecha ? examen.examen.fecha.toISOString().split('T')[0] : null,
          hora: examen.examen.hora ? examen.examen.hora.toTimeString().split(' ')[0] : null,
          inscriptos: inscriptosTotal,
          estado: inscriptosTotal > 0 ? 'con_inscriptos' : 'sin_inscriptos',
          mensaje: `${inscriptosTotal} estudiantes inscriptos`
        });

        console.log(`✅ Materia ${examen.materiaTotem} + areaTema ${examen.areaTemaTotem}: ${inscriptosTotal} inscriptos`);

        // Pequeña pausa para no sobrecargar la API externa
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`❌ Error consultando materia ${examen.materiaTotem}:`, error.message);
        
        resultadosInscripciones.push({
          examenId: examen.examen.id,
          materia: {
            codigo: examen.materiaTotem,
            nombre: examen.examen.nombreMateria,
            areaTema: examen.areaTemaTotem
          },
          carrera: examen.examen.carrera,
          fecha: examen.examen.fecha,
          hora: examen.examen.hora,
          inscriptos: 0,
          estado: 'error',
          mensaje: `Error: ${error.message}`
        });
      }
    }

    // 4. Generar estadísticas
    const estadisticas = {
      totalExamenes: resultadosInscripciones.length,
      examenesConInscriptos: resultadosInscripciones.filter(r => r.inscriptos > 0).length,
      examenesSinInscriptos: resultadosInscripciones.filter(r => r.inscriptos === 0 && r.estado !== 'error').length,
      examenesConError: resultadosInscripciones.filter(r => r.estado === 'error').length,
      totalInscriptos: resultadosInscripciones.reduce((sum, r) => sum + r.inscriptos, 0),
      consultasRealizadas: totalConsultas,
      consultasExitosas: consultasExitosas,
      porcentajeExito: Math.round((consultasExitosas / totalConsultas) * 100)
    };

    // 5. Ordenar por cantidad de inscriptos (descendente)
    resultadosInscripciones.sort((a, b) => b.inscriptos - a.inscriptos);

    console.log(`📈 Consulta completada: ${estadisticas.totalInscriptos} inscriptos en ${estadisticas.examenesConInscriptos} exámenes`);

    return res.status(200).json({
      success: true,
      data: {
        inscripciones: resultadosInscripciones,
        estadisticas: estadisticas,
        consultadoEn: new Date().toISOString()
      },
      parametros: {
        fechaDesde,
        fechaHasta,
        apiExterna: 'sistemasweb-desa.ucasal.edu.ar'
      }
    });

  } catch (error) {
    console.error('💥 Error en consulta de inscripciones:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 