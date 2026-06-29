import TotemService, { isSyncInProgress, acquireSyncLock, releaseSyncLock } from '../../../../services/totemService.js';
import { withCors } from '../../../../lib/cors.js';

const totemService = new TotemService();

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
    console.log('Iniciando sincronización TOTEM...');

    const gid = req.query?.gid ?? req.body?.gid;

    // Respuesta inmediata
    res.status(202).json({
      success: true,
      message: 'Sincronización TOTEM iniciada correctamente',
      status: 'processing',
      gid: gid ?? null,
      timestamp: new Date().toISOString()
    });

    // Procesar en background
    totemService.syncTotemData({ gid })
      .then(result => {
        console.log('✅ Sync TOTEM completada:', {
          created: result.data?.examensCreated || 0,
          updated: result.data?.examensUpdated || 0,
          duration: result.duration,
        });
      })
      .catch(error => {
        console.error('❌ Error en sync TOTEM (background):', error.message);
      })
      .finally(() => releaseSyncLock());

  } catch (error) {
    releaseSyncLock();
    console.error('Error iniciando sincronización TOTEM:', error);
    return res.status(500).json({
      success: false,
      error: 'Error iniciando la sincronización TOTEM',
      message: error.message
    });
  }
}

export default withCors(handler);
