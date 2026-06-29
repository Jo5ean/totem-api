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

  try {
    const { materiaCode, areaTema } = req.body;

    if (!materiaCode) {
      return res.status(400).json({
        success: false,
        error: 'materiaCode es requerido'
      });
    }

    console.log(`🧪 Validando mapeo UCASAL para materia: ${materiaCode}, areaTema: ${areaTema}`);
    
    const validacion = await totemService.validateUcasalMapping(materiaCode, areaTema);
    
    return res.status(200).json({
      success: true,
      data: {
        materiaCode,
        areaTema,
        validacion,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error(`❌ Error validando mapeo UCASAL:`, error);
    
    return res.status(500).json({
      success: false,
      error: 'Error validando mapeo UCASAL',
      message: error.message
    });
  }
}

export default withCors(handler);
