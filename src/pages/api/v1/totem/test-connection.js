import GoogleSheetService from '../../../../services/googleSheetService.js';
import { withCors } from '../../../../lib/cors.js';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const googleSheetService = new GoogleSheetService();
    const result = await googleSheetService.testConnection();

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: '✅ Conexión a Google Sheets exitosa',
        totalRegistros: result.totalRows,
        headers: result.headers,
        muestra: result.sampleData
      });
    } else {
      return res.status(500).json({
        success: false,
        message: '❌ Error de conexión',
        error: result.message
      });
    }
  } catch (error) {
    console.error('Error en test-connection:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno',
      error: error.message
    });
  }
}

export default withCors(handler);
