/**
 * Next.js Instrumentation Hook — corre UNA VEZ al iniciar el servidor.
 * Registra los cron jobs automáticos del sistema.
 *
 * Usa fetch a las rutas internas del servidor para no depender de imports
 * de src/ (que no están en el runner stage del Docker).
 *
 * Horarios en Argentina (UTC-3):
 *   - 3:00 AM ARG = 06:00 UTC  → Sincronizar exámenes desde Google Sheets
 *   - 4:00 AM ARG = 07:00 UTC  → Sincronizar inscriptos (próximos 7 días)
 */

export async function register() {
  // Solo ejecutar en el proceso Node.js del servidor (no en Edge runtime)
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  const cron = (await import('node-cron')).default;

  const BASE_URL = 'http://localhost:3000';

  // Helper para formatear fecha como YYYY-MM-DD
  const fmtDate = (d) => d.toISOString().split('T')[0];

  console.log('⏰ [CRON] Registrando cron jobs automáticos...');

  // ─────────────────────────────────────────────────────────────
  // JOB 1: Sincronizar exámenes desde Google Sheets
  // Todos los días a las 06:00 UTC (03:00 Argentina)
  // ─────────────────────────────────────────────────────────────
  cron.schedule('0 6 * * *', async () => {
    const ts = new Date().toISOString();
    console.log(`🗓️  [CRON ${ts}] Iniciando sync de exámenes (Google Sheets)...`);
    try {
      const res = await fetch(`${BASE_URL}/api/v1/totem/sync-all`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (data.success) {
        const d = data.data || {};
        console.log(`✅ [CRON] Sync exámenes OK — creados: ${d.examensCreated ?? '?'}, actualizados: ${d.examensUpdated ?? '?'}`);
      } else {
        console.error(`❌ [CRON] Sync exámenes falló:`, data.error || data.message);
      }
    } catch (err) {
      console.error('💥 [CRON] Error crítico en sync de exámenes:', err.message);
    }
  }, { timezone: 'UTC' });

  console.log('   ✅ Job 1: Sync exámenes (Google Sheets) → 03:00 ARG / 06:00 UTC');

  // ─────────────────────────────────────────────────────────────
  // JOB 2: Sincronizar inscriptos para los próximos 7 días
  // Todos los días a las 07:00 UTC (04:00 Argentina)
  // ─────────────────────────────────────────────────────────────
  cron.schedule('0 7 * * *', async () => {
    const ts = new Date().toISOString();
    console.log(`👥 [CRON ${ts}] Iniciando sync de inscriptos (próximos 7 días)...`);

    // Calcular los próximos 7 días desde hoy
    const fechas = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setUTCHours(0, 0, 0, 0);
      d.setUTCDate(d.getUTCDate() + i);
      fechas.push(fmtDate(d));
    }

    let exitosos = 0;
    let errores = 0;
    let sinExamenes = 0;

    for (const fecha of fechas) {
      try {
        const res = await fetch(
          `${BASE_URL}/api/v1/examenes/sync-inscriptos-batch?fecha=${fecha}`,
          { method: 'POST' }
        );
        const data = await res.json();
        if (data.success) {
          const procesados = data.data?.procesados ?? 0;
          if (procesados === 0) {
            sinExamenes++;
          } else {
            console.log(`   📅 [CRON] ${fecha}: ${data.data?.exitosos}/${procesados} inscriptos sincronizados`);
            exitosos++;
          }
        } else {
          console.error(`   ❌ [CRON] ${fecha}: ${data.error || data.message}`);
          errores++;
        }
      } catch (err) {
        console.error(`   💥 [CRON] ${fecha}: ${err.message}`);
        errores++;
      }
    }

    console.log(`✅ [CRON] Sync inscriptos completado — ${exitosos} fechas con datos, ${sinExamenes} sin exámenes, ${errores} errores`);
  }, { timezone: 'UTC' });

  console.log('   ✅ Job 2: Sync inscriptos (7 días) → 04:00 ARG / 07:00 UTC');
  console.log('⏰ [CRON] Cron jobs listos.');
}
