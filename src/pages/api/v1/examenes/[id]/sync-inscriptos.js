import TotemService from '../../../../../services/totemService.js';
import { withCors } from '../../../../../lib/cors.js';

const totemService = new TotemService();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`,
      allowedMethods: ['POST']
    });
  }

  const { id } = req.query;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      error: 'ID de examen inválido'
    });
  }

  try {
    console.log(`🎯 Iniciando sincronización individual de inscriptos para examen ID: ${id}`);
    
    const result = await totemService.syncInscriptosIndividual(parseInt(id));
    
    return res.status(200).json({
      success: true,
      message: `Sincronización de inscriptos completada para examen ${id}`,
      data: result
    });
    
  } catch (error) {
    console.error(`❌ Error en sincronización individual de inscriptos para examen ${id}:`, error);
    
    return res.status(500).json({
      success: false,
      error: 'Error sincronizando inscriptos del examen',
      message: error.message,
      examenId: parseInt(id)
    });
  }
}

export default withCors(handler);
