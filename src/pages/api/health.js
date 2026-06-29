import { prisma } from '../../lib/db.js';
import { withCors } from '../../lib/cors.js';

export default withCors(async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  try {
    // Verificar conexión a base de datos
    let dbStatus = 'unknown';
    let dbError = null;
    
    try {
      await prisma.$queryRaw`SELECT 1`;
      dbStatus = 'connected';
    } catch (error) {
      dbStatus = 'error';
      dbError = error.message;
    }

    // Obtener estadísticas básicas
    let stats = {};
    if (dbStatus === 'connected') {
      try {
        const [totalExamenes, totalAulas, totalFacultades] = await Promise.all([
          prisma.examen.count(),
          prisma.aula.count(),
          prisma.facultad.count()
        ]);
        
        stats = {
          totalExamenes,
          totalAulas,
          totalFacultades
        };
      } catch (error) {
        console.error('Error obteniendo estadísticas:', error);
      }
    }

    return res.status(200).json({
      success: true,
      status: 'funcionando',
      message: 'TOTEM API está funcionando correctamente',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      database: {
        status: dbStatus,
        error: dbError
      },
      statistics: stats,
      cors: {
        enabled: true,
        origins: [
          'http://localhost:3000',
          'http://172.16.2.80:3002',
          'http://172.16.2.80:3003',
          'https://ucasal.edu.ar'
        ],
        backofficeUrl: process.env.BACKOFFICE_URL || `http://172.16.2.80:3002`
      }
    });
  } catch (error) {
    console.error('Error en health check:', error);
    return res.status(500).json({
      success: false,
      status: 'error',
      message: 'Error interno del servidor',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});