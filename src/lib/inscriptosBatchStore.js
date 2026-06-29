// Singleton in-memory store para el job de sincronización de inscriptos por fecha.
// Permite que el endpoint responda 202 de inmediato y procese en background,
// mientras el endpoint de estado reporta el progreso (patrón async + polling).
// Funciona porque la API corre como un único proceso Node (next start) en el contenedor.

const store = {
  running: false,
  fecha: null,
  total: 0,
  procesados: 0,
  exitosos: 0,
  errores: 0,
  startedAt: null,
  finishedAt: null,
  error: null,
  resultados: []
};

// Auto-reset de seguridad: si un job quedó "running" colgado por más de 15 min,
// se considera muerto para no bloquear futuras corridas.
const MAX_RUNTIME_MS = 15 * 60 * 1000;

export function isBatchRunning() {
  if (store.running && store.startedAt) {
    const elapsed = Date.now() - new Date(store.startedAt).getTime();
    if (elapsed > MAX_RUNTIME_MS) {
      store.running = false;
      store.finishedAt = new Date().toISOString();
      store.error = 'Job reseteado por timeout de seguridad (>15min)';
    }
  }
  return store.running;
}

export function startBatch(fecha) {
  if (isBatchRunning()) return false;
  store.running = true;
  store.fecha = fecha;
  store.total = 0;
  store.procesados = 0;
  store.exitosos = 0;
  store.errores = 0;
  store.startedAt = new Date().toISOString();
  store.finishedAt = null;
  store.error = null;
  store.resultados = [];
  return true;
}

export function setBatchTotal(total) {
  store.total = total;
}

export function recordBatchResult(result, ok) {
  store.procesados += 1;
  if (ok) store.exitosos += 1;
  else store.errores += 1;
  store.resultados.push(result);
}

export function finishBatch(error = null) {
  store.running = false;
  store.finishedAt = new Date().toISOString();
  if (error) store.error = error;
}

export function getBatchStatus() {
  // Forzar evaluación del auto-reset antes de devolver el estado
  isBatchRunning();
  return { ...store, resultados: store.resultados.slice() };
}
