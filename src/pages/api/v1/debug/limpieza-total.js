import prisma from '../../../../lib/db.js';
import { withCors } from '../../../../lib/cors.js';
import TotemService from '../../../../services/totemService.js';

const totemService = new TotemService();

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Usa POST.'
    });
  }

  try {
    console.log('🚨 INICIANDO LIMPIEZA TOTAL Y RESINCRONIZACIÓN...');

    // 1. Verificar estado inicial
    const estadoInicial = await totemService.getEstadisticasTotem();
    console.log(`📊 Estado inicial: ${estadoInicial.totalExamenesCreados} exámenes, ${estadoInicial.totalRegistrosTotem} registros TOTEM`);

    // 2. LIMPIEZA TOTAL - Eliminar todos los exámenes
    console.log('\n🗑️ PASO 1: Eliminando todos los exámenes existentes...');
    
    // Eliminar en orden correcto debido a foreign keys
    await prisma.actaExamen.deleteMany({});
    console.log('   ✅ ActaExamen eliminadas');
    
    await prisma.examenTotem.deleteMany({});
    console.log('   ✅ ExamenTotem eliminados');
    
    await prisma.examen.deleteMany({});
    console.log('   ✅ Examen eliminados');

    // 3. Verificar limpieza
    const verificacionLimpieza = await prisma.examen.count();
    console.log(`📊 Verificación: ${verificacionLimpieza} exámenes restantes`);
    
    if (verificacionLimpieza > 0) {
      throw new Error(`Error: Aún quedan ${verificacionLimpieza} exámenes después de la limpieza`);
    }

    // 4. RESINCRONIZACIÓN CON LÓGICA MEJORADA
    console.log('\n📥 PASO 2: Resincronizando con lógica anti-duplicados mejorada...');
    
    const resultadoSync = await totemService.syncTotemData();
    
    // 5. Verificar estado final
    const estadoFinal = await totemService.getEstadisticasTotem();
    console.log(`📊 Estado final: ${estadoFinal.totalExamenesCreados} exámenes, ${estadoFinal.totalRegistrosTotem} registros TOTEM`);
    
    // 6. Calcular ratio para verificar que no hay duplicación excesiva
    const ratio = estadoFinal.totalRegistrosTotem > 0 ? 
      (estadoFinal.totalExamenesCreados / estadoFinal.totalRegistrosTotem) : 0;
    
    const duplicacionEliminada = ratio <= 2.0; // Máximo 2 exámenes por registro TOTEM (razonable)
    
    console.log(`📊 Ratio exámenes/registros: ${ratio.toFixed(2)} (${duplicacionEliminada ? 'ACEPTABLE' : 'EXCESIVO'})`);

    return res.status(200).json({
      success: true,
      message: 'Limpieza total y resincronización completadas exitosamente',
      data: {
        estadoInicial: {
          examenes: estadoInicial.totalExamenesCreados,
          registrosTotem: estadoInicial.totalRegistrosTotem
        },
        estadoFinal: {
          examenes: estadoFinal.totalExamenesCreados,
          registrosTotem: estadoFinal.totalRegistrosTotem,
          ratio: ratio.toFixed(2),
          duplicacionEliminada
        },
        sincronizacion: resultadoSync,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error en limpieza total:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error durante la limpieza total',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

export default withCors(handler); 