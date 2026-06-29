import prisma from '../../../../../lib/db.js';
import { withCors } from '../../../../../lib/cors.js';
import ActaExternaService from '../../../../../services/actaExternaService.js';

const actaService = new ActaExternaService();

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  const { id } = req.query;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      error: 'ID de examen inválido'
    });
  }

  try {
    // 1. Buscar el examen en la base de datos local
    const examen = await prisma.examen.findUnique({
      where: { id: parseInt(id) },
      include: {
        carrera: {
          include: {
            facultad: true
          }
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

    // 3. Consultar inscriptos usando servicio centralizado
    const fechaExamen = examen.fecha ? new Date(examen.fecha) : new Date();
    const fechaDesdeDate = new Date(fechaExamen.getTime() - 7 * 24 * 60 * 60 * 1000);
    const fechaHastaDate = new Date(fechaExamen.getTime() + 7 * 24 * 60 * 60 * 1000);
    const fechaDesde = actaService.formatDateDDMMYYYY(fechaDesdeDate);
    const fechaHasta = actaService.formatDateDDMMYYYY(fechaHastaDate);

    let datosCompletos;
    try {
      datosCompletos = await actaService.consultarActasPorMateria(codigoMateria, {
        rendida: false,
        fechaDesde,
        fechaHasta
      });
    } catch (apiError) {
      console.error('Error en API externa:', apiError.message);
      return res.status(200).json({
        success: true,
        warning: 'API externa no disponible - mostrando datos locales únicamente',
        data: {
          examen: {
            id: examen.id,
            nombre: examen.nombreMateria,
            fecha: examen.fecha?.toISOString().split('T')[0],
            hora: examen.hora?.toTimeString().split(' ')[0],
            carrera: { nombre: examen.carrera.nombre, facultad: examen.carrera.facultad.nombre },
            aula: examen.aula ? { id: examen.aula.id, nombre: examen.aula.nombre, capacidad: examen.aula.capacidad } : null,
            codigoMateria, areaTema, carreraTotem
          },
          inscriptos: [],
          cantidadInscriptos: examen.cantidadInscriptos || 0,
          apiExternaDisponible: false,
          ultimaConsulta: examen.fechaUltConsulta
        }
      });
    }

    if (!Array.isArray(datosCompletos)) {
      datosCompletos = [];
    }

    // 4. Filtrar actas por areaTema, modo=7 y carrera (para no mezclar inscriptos de distintas carreras)
    let actasFiltradas = datosCompletos.filter(acta => {
      const matchAreaTema = areaTema ? acta.areaTema?.toString() === areaTema?.toString() : true;
      const matchModo = acta.modo?.toString() === "7";
      const matchCarrera = carreraTotem ? acta.carrera?.toString() === carreraTotem.toString() : true;
      return matchAreaTema && matchModo && matchCarrera;
    });

    // 🎯 DISCRIMINACIÓN POR DOCENTE + CÁTEDRA
    // strict=true si el examen tiene cátedra explícita (A/B/C/etc.),
    // porque eso garantiza que hay hermanos — no mezclar inscriptos.
    const tieneCatedraExplicita = examen.catedra && examen.catedra !== '-' && examen.catedra.trim() !== '';
    if (examen.docente || examen.catedra) {
      actasFiltradas = actaService.discriminarActasPorDocente(
        actasFiltradas, codigoMateria, examen.docente, examen.catedra,
        { umbral: 0.4, strict: tieneCatedraExplicita }
      );
    }
    console.log(`✅ Actas filtradas: ${actasFiltradas.length} de ${datosCompletos.length}`);

    // 5. Extraer alumnos con lugar=3 y modo=7 (filtro a nivel de alumno)
    const inscriptosVirtuales = [];
    actasFiltradas.forEach(acta => {
      if (acta.alumnos && Array.isArray(acta.alumnos)) {
        acta.alumnos.forEach(alumno => {
          // Filtrar por lugar=3 (SALTA - DISTANCIA) y modo=7 a nivel de alumno
          if (alumno.lugar?.toString() === "3" && alumno.modo?.toString() === "7") {
            inscriptosVirtuales.push(alumno);
          }
        });
      }
    });

    console.log(`🎓 Inscriptos virtuales (lugar=3, modo=7): ${inscriptosVirtuales.length}`);

    // 6. Formatear inscriptos
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
        where: { id: parseInt(id) },
        data: {
          cantidadInscriptos: inscriptosVirtuales.length,
          fechaUltConsulta: new Date()
        }
      });
      console.log(`💾 Guardado: ${inscriptosVirtuales.length} inscriptos virtuales para examen ${id}`);
    } catch (updateError) {
      console.error('Error actualizando cantidad de inscriptos:', updateError);
    }

    // 9. Determinar si necesita asignación de aula
    const necesitaAsignacion = !examen.aula && inscriptosVirtuales.length > 0;
    const sugerenciaAula = necesitaAsignacion ? await sugerirAula(inscriptosVirtuales.length) : null;

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
          carreraTotem: carreraTotem,
          tipoExamen: examen.tipoExamen,
          observaciones: examen.observaciones,
          requierePc: examen.requierePc
        },
        inscriptos: inscriptosFormateados,
        cantidadInscriptos: inscriptosVirtuales.length,
        necesitaAsignacion: necesitaAsignacion,
        sugerenciaAula: sugerenciaAula,
        apiExternaDisponible: true,
        timestamp: new Date().toISOString(),
        filtrosAplicados: {
          codigoMateria: codigoMateria,
          areaTema: areaTema,
          carrera: carreraTotem,
          fechaDesde,
          fechaHasta
        }
      }
    });

  } catch (error) {
    console.error('❌ Error consultando inscriptos:', error);
    
    // En caso de error, devolver datos básicos del examen con cantidad guardada
    try {
      const examenBasico = await prisma.examen.findUnique({
        where: { id: parseInt(id) },
        include: {
          carrera: { include: { facultad: true } },
          aula: true
        }
      });

      return res.status(200).json({
        success: false,
        error: 'Error consultando inscriptos desde API externa',
        data: {
          examen: examenBasico ? {
            id: examenBasico.id,
            nombre: examenBasico.nombreMateria,
            fecha: examenBasico.fecha?.toISOString().split('T')[0],
            hora: examenBasico.hora?.toTimeString().split(' ')[0],
            carrera: {
              nombre: examenBasico.carrera.nombre,
              facultad: examenBasico.carrera.facultad.nombre
            },
            aula: examenBasico.aula ? {
              id: examenBasico.aula.id,
              nombre: examenBasico.aula.nombre,
              capacidad: examenBasico.aula.capacidad
            } : null
          } : null,
          inscriptos: [],
          cantidadInscriptos: examenBasico?.cantidadInscriptos || 0,
          apiExternaDisponible: false
        },
        message: error.message
      });
    } catch (fallbackError) {
      return res.status(500).json({
        success: false,
        error: 'Error interno del servidor',
        message: error.message
      });
    }
  }
}

// Función auxiliar para sugerir aula basada en cantidad de inscriptos
async function sugerirAula(cantidadInscriptos) {
  try {
    const aulas = await prisma.aula.findMany({
      where: { 
        activa: true,
        capacidad: {
          gte: cantidadInscriptos
        }
      },
      orderBy: { capacidad: 'asc' }
    });

    if (aulas.length === 0) {
      return {
        sugerida: null,
        razon: `No hay aulas disponibles con capacidad para ${cantidadInscriptos} inscriptos`
      };
    }

    return {
      sugerida: {
        id: aulas[0].id,
        nombre: aulas[0].nombre,
        capacidad: aulas[0].capacidad,
        ubicacion: aulas[0].ubicacion
      },
      razon: `Aula más pequeña disponible con capacidad suficiente (${aulas[0].capacidad} >= ${cantidadInscriptos})`
    };

  } catch (error) {
    console.error('Error sugiriendo aula:', error);
    return null;
  }
}

export default withCors(handler);