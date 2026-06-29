/**
 * cron-daemon.js — proceso independiente que registra los cron jobs.
 * Se ejecuta en background junto a `next start` en el contenedor Docker.
 *
 * Horarios Argentina (UTC-3):
 *   03:00 ARG = 06:00 UTC → Sync exámenes (Google Sheets)
 *   04:00 ARG = 07:00 UTC → Sync inscriptos (próximos 7 días)
 */

import cron from 'node-cron';

const BASE_URL = 'http://localhost:3000';

const fmtDate = (d) => d.toISOString().split('T')[0];

// Esperar a que Next.js esté listo antes de registrar los jobs
async function waitForServer(retries = 30, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/examenes/por-fecha?fecha=2000-01-01`);
      if (res.ok || res.status < 500) {
        console.log('⏰ [CRON] Servidor listo. Registrando cron jobs...');
        return true;
      }
    } catch {
      // servidor aún no listo
    }
    console.log(`⏰ [CRON] Esperando servidor... (${i + 1}/${retries})`);
    await new Promise(r => setTimeout(r, delay));
  }
  console.error('⏰ [CRON] Servidor no respondió. Los cron jobs igual quedan registrados.');
  return false;
}

async function main() {
  await waitForServer();

  // ─── JOB 1: Sync exámenes desde Google Sheets ───
  // 06:00 UTC = 03:00 Argentina
  cron.schedule('0 6 * * *', async () => {
    const ts = new Date().toISOString();
    console.log(`\n🗓️  [CRON ${ts}] Sync exámenes (Google Sheets)...`);
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
        console.error(`❌ [CRON] Sync exámenes falló: ${data.error || data.message}`);
      }
    } catch (err) {
      console.error(`💥 [CRON] Error: ${err.message}`);
    }
  }, { timezone: 'UTC' });

  console.log('   ✅ Job 1: Sync exámenes → 03:00 ARG / 06:00 UTC');

  // ─── JOB 2: Sync inscriptos próximos 7 días ───
  // 07:00 UTC = 04:00 Argentina
  cron.schedule('0 7 * * *', async () => {
    const ts = new Date().toISOString();
    console.log(`\n👥 [CRON ${ts}] Sync inscriptos (próximos 7 días)...`);

    const fechas = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setUTCHours(0, 0, 0, 0);
      d.setUTCDate(d.getUTCDate() + i);
      fechas.push(fmtDate(d));
    }

    let exitosos = 0, errores = 0, sinExamenes = 0;

    for (const fecha of fechas) {
      try {
        const res = await fetch(
          `${BASE_URL}/api/v1/examenes/sync-inscriptos-batch?fecha=${fecha}`,
          { method: 'POST' }
        );
        const data = await res.json();
        if (data.success) {
          const procesados = data.data?.procesados ?? 0;
          if (procesados === 0) { sinExamenes++; }
          else {
            console.log(`   📅 [CRON] ${fecha}: ${data.data?.exitosos}/${procesados} sincronizados`);
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

    console.log(`✅ [CRON] Inscriptos completado — ${exitosos} fechas ok, ${sinExamenes} sin exámenes, ${errores} errores`);
  }, { timezone: 'UTC' });

  console.log('   ✅ Job 2: Sync inscriptos → 04:00 ARG / 07:00 UTC');
  console.log('⏰ [CRON] Daemon activo. Esperando próxima ejecución...\n');
}

main().catch(err => {
  console.error('💥 [CRON] Error fatal en cron-daemon:', err.message);
  process.exit(1);
});
