import prisma from '../../../../lib/db.js';
import ActaExternaService from '../../../../services/actaExternaService.js';
import { withCors } from '../../../../lib/cors.js';
import {
  isBatchRunning,
  startBatch,
  setBatchTotal,
  recordBatchResult,
  finishBatch,
  getBatchStatus
} from '../../../../lib/inscriptosBatchStore.js';

const actaService = new ActaExternaService();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Usar POST.'
    });
  }

  const { fecha } = req.query;

  if (!fecha) {
    return res.status(400).json({
      success: false,
      error: 'Parámetro "fecha" requerido (formato YYYY-MM-DD)'
    });
  }

  // Evitar corridas concurrentes (el job se ejecuta en background)
  if (isBatchRunning()) {
    return res.status(409).json({
      success: false,
      alreadyRunning: true,
      message: 'Ya hay una sincronización de inscriptos en curso. Esperá a que termine.',
      status: getBatchStatus()
    });
  }

  // Marcar el job como iniciado y responder de inmediato (patrón async + polling)
  startBatch(fecha);
  res.status(202).json({
    success: true,
    message: 'Sincronización de inscriptos iniciada',
    status: 'processing',
    fecha,
    timestamp: new Date().toISOString()
  });

  // Procesar en background sin bloquear la respuesta HTTP
  procesarBatch(fecha).catch(err => {
    console.error('💥 Error en sync batch (background):', err);
    finishBatch(err.message || 'Error desconocido');
  });
}

async function procesarBatch(fecha) {
  try {
    // 1. Obtener todos los exámenes de la fecha que tienen datos TOTEM
    const fechaDate = new Date(fecha + 'T00:00:00Z');
    const fechaSiguiente = new Date(fecha + 'T00:00:00Z');
    fechaSiguiente.setUTCDate(fechaSiguiente.getUTCDate() + 1);

    const examenes = await prisma.examen.findMany({
      where: {
        fecha: {
          gte: fechaDate,
          lt: fechaSiguiente
        },
        examenTotem: {
          isNot: null
        }
      },
      include: {
        carrera: { include: { facultad: true } },
        aula: true,
        examenTotem: true
      },
      orderBy: [{ hora: 'asc' }, { nombreMateria: 'asc' }]
    });

    console.log(`🔄 Sync batch: ${examenes.length} exámenes para fecha ${fecha}`);
    setBatchTotal(examenes.length);

    if (examenes.length === 0) {
      console.log('ℹ️ No hay exámenes con datos TOTEM para esta fecha');
      finishBatch();
      return;
    }

    // 2. Configurar rango de fechas para consulta API externa
    const fechaDesdeDate = new Date(fechaDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const fechaHastaDate = new Date(fechaDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const fechaDesde = actaService.formatDateDDMMYYYY(fechaDesdeDate);
    const fechaHasta = actaService.formatDateDDMMYYYY(fechaHastaDate);

    // 3. Agrupar por materiaTotem para no consultar la misma materia varias veces
    const materiaCache = new Map();

    // Detectar "hermanos": exámenes con mismo materia+areaTema+carrera+fecha
    // (típicamente, mismas filas del Sheet con distinta cátedra/docente).
    const siblingsCount = new Map(); // key -> count
    const siblingsKey = (ex) => `${ex.examenTotem.materiaTotem}|${ex.examenTotem.areaTemaTotem || ''}|${ex.examenTotem.carreraTotem || ''}`;
    for (const ex of examenes) {
      const k = siblingsKey(ex);
      siblingsCount.set(k, (siblingsCount.get(k) || 0) + 1);
    }

    for (const examen of examenes) {
      const totem = examen.examenTotem;
      const materiaId = totem.materiaTotem;
      const areaTema = totem.areaTemaTotem;

      if (!materiaId) {
        recordBatchResult({
          id: examen.id,
          nombre: examen.nombreMateria,
          inscriptos: 0,
          estado: 'sin_materia'
        }, false);
        continue;
      }

      try {
        // Usar cache si ya consultamos esta materia
        const cacheKey = `${materiaId}_${areaTema}`;
        let datosCompletos;

        if (materiaCache.has(cacheKey)) {
          datosCompletos = materiaCache.get(cacheKey);
        } else {
          datosCompletos = await actaService.consultarActasPorMateria(materiaId, {
            rendida: false,
            fechaDesde,
            fechaHasta
          });
          if (!Array.isArray(datosCompletos)) datosCompletos = [];
          materiaCache.set(cacheKey, datosCompletos);
          // Pausa entre consultas a API externa
          await new Promise(resolve => setTimeout(resolve, 150));
        }

        // Filtrar actas por areaTema, modo=7 y carrera (para no mezclar inscriptos de distintas carreras)
        const carreraTotem = totem.carreraTotem;
        let actasFiltradas = datosCompletos.filter(acta => {
          const matchAreaTema = areaTema ? acta.areaTema?.toString() === areaTema?.toString() : true;
          const matchModo = acta.modo?.toString() === "7";
          const matchCarrera = carreraTotem ? acta.carrera?.toString() === carreraTotem.toString() : true;
          return matchAreaTema && matchModo && matchCarrera;
        });

        // DISCRIMINACIÓN POR DOCENTE + CÁTEDRA
        // strict=true si el examen tiene cátedra explícita (A/B/C/etc.),
        // porque eso garantiza que hay hermanos — no mezclar inscriptos.
        // También strict si hay >1 hermano visible en el batch actual.
        const tieneCatedraExplicita = examen.catedra && examen.catedra !== '-' && examen.catedra.trim() !== '';
        const hermanos = siblingsCount.get(siblingsKey(examen)) || 1;
        const strict = tieneCatedraExplicita || hermanos > 1;
        if (examen.docente || examen.catedra) {
          actasFiltradas = actaService.discriminarActasPorDocente(
            actasFiltradas, materiaId, examen.docente, examen.catedra,
            { umbral: 0.4, strict }
          );
        }

        // Extraer alumnos con lugar=3 y modo=7
        let totalInscriptos = 0;
        actasFiltradas.forEach(acta => {
          if (acta.alumnos && Array.isArray(acta.alumnos)) {
            acta.alumnos.forEach(alumno => {
              if (alumno.lugar?.toString() === "3" && alumno.modo?.toString() === "7") {
                totalInscriptos++;
              }
            });
          }
        });

        // Guardar en DB
        await prisma.examen.update({
          where: { id: examen.id },
          data: {
            cantidadInscriptos: totalInscriptos,
            fechaUltConsulta: new Date()
          }
        });

        recordBatchResult({
          id: examen.id,
          nombre: examen.nombreMateria,
          inscriptos: totalInscriptos,
          estado: 'ok'
        }, true);

      } catch (error) {
        console.error(`❌ Error sync examen ${examen.id}:`, error.message);
        recordBatchResult({
          id: examen.id,
          nombre: examen.nombreMateria,
          inscriptos: examen.cantidadInscriptos || 0,
          estado: 'error',
          error: error.message
        }, false);
      }
    }

    const { exitosos, procesados, errores } = getBatchStatus();
    console.log(`✅ Sync batch completado: ${exitosos}/${procesados} exitosos, ${errores} errores`);
    finishBatch();

  } catch (error) {
    console.error('💥 Error en sync batch:', error);
    finishBatch(error.message || 'Error interno del servidor');
  }
}

export default withCors(handler);
