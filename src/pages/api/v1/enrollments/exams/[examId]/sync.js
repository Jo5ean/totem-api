import TotemService from '../../../../../../services/totemService.js';
import { withCors } from '../../../../../../lib/cors.js';

const totemService = new TotemService();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`,
      allowedMethods: ['POST']
    });
  }

  const { examId } = req.query;

  if (!examId || isNaN(parseInt(examId))) {
    return res.status(400).json({
      success: false,
      error: 'ID de examen inválido'
    });
  }

  try {
    console.log(`🎯 Iniciando sincronización individual de inscriptos para examen ID: ${examId}`);
    
    const result = await totemService.syncInscriptosIndividual(parseInt(examId));
    
    return res.status(200).json({
      success: true,
      message: `Sincronización de inscriptos completada para examen ${examId}`,
      data: {
        enrollmentCount: result.inscriptos.cantidadInscriptos,
        exam: result.examen,
        lastSync: new Date()
      }
    });
    
  } catch (error) {
    console.error(`❌ Error en sincronización individual de inscriptos para examen ${examId}:`, error);
    
    return res.status(500).json({
      success: false,
      error: 'Error sincronizando inscriptos del examen',
      message: error.message,
      examId: parseInt(examId)
    });
  }
}

export default withCors(handler);
