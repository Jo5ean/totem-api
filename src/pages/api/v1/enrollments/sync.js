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
    console.log('🔄 Iniciando sincronización completa (enrollments/sync)...');
    
    // Usar el método principal de sincronización del TotemService
    const result = await totemService.syncTotemData();
    
    return res.status(200).json({
      success: true,
      message: 'Sincronización completa exitosa',
      data: {
        totalExams: result.data.totalProcessed,
        totalUpdated: result.data.examensCreated + result.data.examensUpdated,
        examensCreated: result.data.examensCreated,
        examensUpdated: result.data.examensUpdated,
        duration: result.duration,
        timestamp: new Date()
      }
    });
    
  } catch (error) {
    console.error('❌ Error en sincronización completa (enrollments):', error);
    return res.status(500).json({
      success: false,
      error: 'Error en sincronización completa',
      message: error.message
    });
  }
}

export default withCors(handler);
