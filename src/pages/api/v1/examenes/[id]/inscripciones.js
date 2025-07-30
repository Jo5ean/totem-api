import prisma from '../../../../../lib/db.js';
import { withCors } from '../../../../../lib/cors.js';

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

    // 3. Consultar inscriptos desde API externa de UCASAL
    // ✅ FORMATO CORRECTO: dd/mm/yyyy con BARRAS y CEROS OBLIGATORIOS como espera la API de UCASAL
    const hoy = new Date();
    const fechaDesde = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
    
    const futuro = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const fechaHasta = `${futuro.getDate().toString().padStart(2, '0')}/${(futuro.getMonth() + 1).toString().padStart(2, '0')}/${futuro.getFullYear()}`;

    const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/materia/${codigoMateria}?rendida=false&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
    
    console.log(`📡 URL de consulta: ${apiUrl}`);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error('Error en API externa:', response.status, response.statusText);
      
      // Si la API está caída, devolver información básica del examen con cantidad guardada
      return res.status(200).json({
        success: true,
        warning: 'API externa no disponible - mostrando datos locales únicamente',
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
          inscriptos: [],
          cantidadInscriptos: examen.cantidadInscriptos || 0,
          apiExternaDisponible: false,
          ultimaConsulta: examen.fechaUltConsulta
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
          inscriptos: [],
          cantidadInscriptos: 0,
          apiExternaDisponible: true
        }
      });
    }

    // 4. FILTRAR CORRECTAMENTE por areaTema y carrera como indica el usuario
    console.log(`🔍 Aplicando filtro: areaTema=${areaTema} && carrera=${carreraTotem}`);
    
    const inscriptosFiltrados = datosCompletos.filter(registro => {
      const cumpleAreaTema = areaTema ? registro.areaTema == areaTema : true;
      const cumpleCarrera = carreraTotem ? registro.carrera == carreraTotem : true;
      const tieneAlumnos = registro.alumnos && registro.alumnos.length > 0;
      
      console.log(`Registro: areaTema=${registro.areaTema}, carrera=${registro.carrera}, alumnos=${registro.alumnos?.length || 0}`);
      console.log(`Cumple filtros: areaTema=${cumpleAreaTema}, carrera=${cumpleCarrera}, tieneAlumnos=${tieneAlumnos}`);
      
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

    // 6. FILTRAR OBLIGATORIAMENTE POR LUGAR "3" (SALTA - DISTANCIA)
    // ⚠️ CRITERIO OBLIGATORIO Y EXCLUYENTE: Solo inscriptos con lugar === "3"
    // NO importa el sector, modo, etc. - SOLO lugar "3" es válido
    const inscriptosVirtuales = todosLosInscriptos.filter(inscripto => {
      const esLugarTres = inscripto.lugar === "3";
      
      console.log(`🎯 Inscripto ${inscripto.apen}: lugar="${inscripto.lugar}", nombreLugar="${inscripto.nombreLugar}", modo="${inscripto.nombreModo}", ✅OBLIGATORIO_lugar_3=${esLugarTres}`);
      
      return esLugarTres;
    });

    console.log(`🎓 Inscriptos de modalidad virtual: ${inscriptosVirtuales.length} de ${todosLosInscriptos.length} totales`);

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