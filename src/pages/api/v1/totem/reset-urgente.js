import prisma from '../../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Usa POST.'
    });
  }

  try {
    console.log('🚨 RESET URGENTE INICIADO...');
    
    // 1. Contar estado inicial
    const estadoInicial = await prisma.examen.count();
    console.log(`📊 Exámenes antes del reset: ${estadoInicial}`);

    // 2. ELIMINACIÓN TOTAL - Sin preguntas
    console.log('🗑️ Eliminando TODOS los exámenes...');
    
    // Eliminar en orden correcto
    await prisma.actaExamen.deleteMany({});
    await prisma.examenTotem.deleteMany({});
    await prisma.examen.deleteMany({});
    
    // 3. Verificar limpieza
    const verificacion = await prisma.examen.count();
    console.log(`✅ Verificación: ${verificacion} exámenes restantes`);
    
    if (verificacion > 0) {
      throw new Error(`Error: Aún quedan ${verificacion} exámenes`);
    }

    // 4. Solo responder con confirmación - NO resincronizar automáticamente
    console.log('✅ RESET COMPLETADO - Base de datos limpia');

    return res.status(200).json({
      success: true,
      message: 'Reset urgente completado exitosamente - Base de datos limpia',
      data: {
        estadoInicial,
        estadoFinal: verificacion,
        examenesEliminados: estadoInicial,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error en reset urgente:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error durante reset urgente',
      message: error.message
    });
  }
} 