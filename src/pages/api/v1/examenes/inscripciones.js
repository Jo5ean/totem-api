import prisma from '../../../../lib/db.js';
import ActaExternaService from '../../../../services/actaExternaService.js';

const actaService = new ActaExternaService();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  try {
    console.log('🔍 Iniciando consulta de inscripciones por examen...');

    // 1. Obtener TODOS los exámenes con datos TOTEM (uno por uno, no distinct)
    //    Es crítico incluir docente para discriminar cátedras con igual materia+areaTema
    const examenesConTotem = await prisma.examenTotem.findMany({
      select: {
        materiaTotem: true,
        areaTemaTotem: true,
        carreraTotem: true,
        examen: {
          select: {
            id: true,
            nombreMateria: true,
            fecha: true,
            hora: true,
            docente: true,
            catedra: true,
            carrera: {
              select: {
                codigo: true,
                nombre: true
              }
            }
          }
        }
      }
    });

    console.log(`📊 Encontrados ${examenesConTotem.length} exámenes con datos TOTEM`);

    // 2. Para cada examen, consultar usando servicio centralizado con docente
    const resultadosInscripciones = [];

    let totalConsultas = 0;
    let consultasExitosas = 0;

    for (const examen of examenesConTotem) {
      try {
        totalConsultas++;
        console.log(`📡 Consultando materia ${examen.materiaTotem} (areaTema: ${examen.areaTemaTotem}, docente: ${examen.examen.docente || 'n/a'})`);
        
        const result = await actaService.obtenerInscriptosExamen(
          examen.materiaTotem,
          examen.areaTemaTotem,
          null,
          examen.carreraTotem,
          examen.examen.docente,
          examen.examen.catedra   // 🎯 discrimina por docente + cátedra
        );
        
        consultasExitosas++;
        const inscriptosTotal = result.totalAlumnos;

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

        console.log(`✅ Materia ${examen.materiaTotem} + docente "${examen.examen.docente || 'n/a'}": ${inscriptosTotal} inscriptos`);

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
        apiExterna: 'backprod.ucasal.edu.ar'
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