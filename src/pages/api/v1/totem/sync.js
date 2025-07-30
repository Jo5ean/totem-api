import TotemService from '../../../../services/totemService.js';
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

  try {
    console.log('Iniciando sincronización TOTEM centralizada...');
    
    // 🚀 INICIAR PROCESO EN BACKGROUND PARA EVITAR TIMEOUT
    const syncPromise = totemService.syncTotemData();
    
    // ⚡ RESPUESTA INMEDIATA SIN ESPERAR
    res.status(202).json({
      success: true,
      message: 'Sincronización TOTEM iniciada correctamente',
      status: 'processing',
      note: 'El proceso continúa ejecutándose en segundo plano. Consulta los logs de Railway para ver el progreso.',
      timestamp: new Date().toISOString()
    });
    
    // 🔄 CONTINUAR PROCESAMIENTO EN BACKGROUND
    syncPromise
      .then(result => {
        console.log('✅ Sincronización TOTEM completada exitosamente:', {
          examensCreated: result.data?.examensCreated || 0,
          examensUpdated: result.data?.examensUpdated || 0,
          duration: result.duration,
          timestamp: result.timestamp
        });
      })
      .catch(error => {
        console.error('❌ Error en sincronización TOTEM (background):', error.message);
      });
    
  } catch (error) {
    console.error('Error iniciando sincronización TOTEM:', error);
    return res.status(500).json({
      success: false,
      error: 'Error iniciando la sincronización TOTEM',
      message: error.message
    });
  }
}

export default withCors(handler);
