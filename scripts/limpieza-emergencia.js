#!/usr/bin/env node

import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function limpiezaEmergencia() {
  console.log('🚨 LIMPIEZA DE EMERGENCIA - REGISTROS DUPLICADOS');
  console.log('================================================');

  try {
    // 1. Verificar estado actual
    const totalExamenes = await prisma.examen.count();
    const totalTotem = await prisma.examenTotem.count();
    const totalRegistrosTotem = await prisma.totemData.count();
    
    console.log(`📊 Estado actual:`);
    console.log(`   - Exámenes: ${totalExamenes}`);
    console.log(`   - ExamenTotem: ${totalTotem}`);
    console.log(`   - RegistrosTotem: ${totalRegistrosTotem}`);
    
    if (totalExamenes <= 10) {
      console.log('✅ La base de datos parece estar limpia. No se requiere acción.');
      return;
    }

    // 2. LIMPIEZA COMPLETA - Eliminar todo y empezar de cero
    console.log('\n🗑️ PASO 1: Eliminando todos los exámenes...');
    
    // Eliminar en orden correcto debido a foreign keys
    await prisma.actaExamen.deleteMany({});
    console.log('   ✅ ActaExamen eliminadas');
    
    await prisma.examenTotem.deleteMany({});
    console.log('   ✅ ExamenTotem eliminados');
    
    await prisma.examen.deleteMany({});
    console.log('   ✅ Examen eliminados');

    // 3. Verificar limpieza
    const verificacionExamenes = await prisma.examen.count();
    const verificacionTotem = await prisma.examenTotem.count();
    
    console.log(`\n📊 Verificación post-limpieza:`);
    console.log(`   - Exámenes: ${verificacionExamenes}`);
    console.log(`   - ExamenTotem: ${verificacionTotem}`);
    
    if (verificacionExamenes > 0 || verificacionTotem > 0) {
      throw new Error('❌ Error: Aún quedan registros después de la limpieza');
    }

    // 4. Sincronización desde TOTEM
    console.log('\n📥 PASO 2: Sincronizando desde Sheet.best...');
    
    const response = await fetch('http://localhost:3000/api/v1/totem/simple-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error(`Error en sincronización: ${response.status}`);
    }
    
    const resultado = await response.json();
    
    if (resultado.success) {
      console.log(`✅ ${resultado.data.fetched} registros obtenidos`);
      console.log(`✅ ${resultado.data.processed} registros procesados`);
      console.log(`✅ ${resultado.data.examensCreated} exámenes creados`);
    } else {
      throw new Error(`Error en sincronización: ${resultado.error}`);
    }

    // 5. Verificación final
    const finalExamenes = await prisma.examen.count();
    const finalTotem = await prisma.examenTotem.count();
    const finalRegistros = await prisma.totemData.count();
    
    console.log('\n📊 ESTADO FINAL:');
    console.log(`   - Exámenes: ${finalExamenes}`);
    console.log(`   - ExamenTotem: ${finalTotem}`);
    console.log(`   - RegistrosTotem: ${finalRegistros}`);
    
    // Verificar que no hay duplicación
    const ratio = finalRegistros > 0 ? finalExamenes / finalRegistros : 0;
    console.log(`   - Ratio exámenes/registros: ${ratio.toFixed(2)}`);
    
    if (ratio > 50) {
      console.log('⚠️  ADVERTENCIA: Aún parece haber duplicación excesiva');
    } else {
      console.log('✅ Limpieza exitosa. Duplicación eliminada.');
    }

  } catch (error) {
    console.error('❌ Error en limpieza de emergencia:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  limpiezaEmergencia()
    .then(() => {
      console.log('\n🎉 LIMPIEZA DE EMERGENCIA COMPLETADA');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 FALLO EN LIMPIEZA DE EMERGENCIA:', error.message);
      process.exit(1);
    });
}

export default limpiezaEmergencia; 