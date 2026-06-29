import TotemService, { isSyncInProgress, acquireSyncLock, releaseSyncLock } from '../../../../services/totemService.js';
import GoogleSheetService from '../../../../services/googleSheetService.js';
import { withCors } from '../../../../lib/cors.js';

const totemService = new TotemService();
const googleSheetService = new GoogleSheetService();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`,
      allowedMethods: ['POST']
    });
  }

  // Adquirir lock síncronamente — antes de cualquier await
  if (!acquireSyncLock()) {
    return res.status(409).json({
      success: false,
      alreadyRunning: true,
      message: 'Ya hay una sincronización en curso. Por favor esperá a que termine antes de iniciar otra.'
    });
  }

  try {
    const sheetsResult = await googleSheetService.listSheets();

    const activeSheets = (sheetsResult?.data || []).filter(s => s && s.activo === true);
    const gids = activeSheets
      .map(s => s?.gid)
      .filter(g => g !== undefined && g !== null && g !== '')
      .map(g => g.toString());

    // 🚀 Ejecutar en background para evitar timeout
    const syncPromise = (async () => {
      for (const sheet of activeSheets) {
        const gid = sheet?.gid?.toString();
        if (!gid) continue;

        try {
          console.log(`🚀 Sync turno activo: ${sheet?.name || 'Sin nombre'} (gid=${gid})`);
          await totemService.syncTotemData({ gid, sheetName: sheet?.name ?? null });
          console.log(`✅ Sync OK gid=${gid}`);
        } catch (e) {
          console.error(`❌ Sync ERROR gid=${gid}:`, e.message);
        }
      }
    })();

    res.status(202).json({
      success: true,
      message: 'Sincronización automática iniciada para todos los turnos activos',
      status: 'processing',
      turnosActivos: activeSheets.map(s => ({
        gid: s.gid?.toString(),
        name: s.name,
        activo: s.activo
      })),
      gids,
      timestamp: new Date().toISOString()
    });

    syncPromise
      .catch(err => {
        console.error('❌ Error en sync-all (background):', err.message);
      })
      .finally(() => releaseSyncLock());

  } catch (error) {
    releaseSyncLock();
    console.error('Error iniciando sincronización TOTEM (sync-all):', error);
    return res.status(500).json({
      success: false,
      error: 'Error iniciando la sincronización automática',
      message: error.message
    });
  }
}

export default withCors(handler);
