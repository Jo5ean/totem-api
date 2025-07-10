import prisma from '../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Definir el mapeo directo según el CSV del usuario
    const mapeo = {
      2: "ECONOMÍA Y ADMINISTRACIÓN",
      3: "CIENCIAS JURÍDICAS", 
      4: "INGENIERÍA",
      21: "FACULTAD DE EDUCACIÓN"
    };

    const resultados = [];

    // Actualizar cada facultad según su sector
    for (const [sector, nombreEsperado] of Object.entries(mapeo)) {
      const result = await prisma.facultad.updateMany({
        where: {
          codigo: sector === '2' ? 'CEA' : 
                  sector === '3' ? 'CJ' :
                  sector === '4' ? 'ING' :
                  sector === '21' ? 'EE' : undefined
        },
        data: {
          sector: parseInt(sector)
        }
      });
      
      resultados.push({
        sector: parseInt(sector),
        nombre: nombreEsperado,
        actualizados: result.count
      });
    }

    return res.status(200).json({
      success: true,
      resultados,
      mensaje: 'Sectores actualizados correctamente'
    });

  } catch (error) {
    console.error('Error al actualizar sectores:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
} 