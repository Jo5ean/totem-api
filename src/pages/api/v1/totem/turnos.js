import { withCors } from '../../../../lib/cors.js';
import GoogleSheetService from '../../../../services/googleSheetService.js';

const googleSheetService = new GoogleSheetService();

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`,
      allowedMethods: ['GET']
    });
  }

  try {
    const result = await googleSheetService.listSheets();

    return res.status(200).json({
      success: true,
      data: result.data,
      total: result.total,
      source: result.source,
      timestamp: result.timestamp
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo turnos desde Google Sheets',
      message: error.message
    });
  }
}

export default withCors(handler);
