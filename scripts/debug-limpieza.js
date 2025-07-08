#!/usr/bin/env node

console.log('🔍 DEBUG: Iniciando script de limpieza...');

try {
  console.log('🔍 DEBUG: Importando Prisma...');
  const { PrismaClient } = await import('../src/generated/prisma/index.js');
  console.log('✅ DEBUG: Prisma importado correctamente');

  const prisma = new PrismaClient();
  console.log('✅ DEBUG: Cliente Prisma creado');

  console.log('🚨 LIMPIEZA DE EMERGENCIA - REGISTROS DUPLICADOS');
  console.log('================================================');

  // 1. Verificar estado actual
  console.log('🔍 DEBUG: Consultando estado actual...');
  const totalExamenes = await prisma.examen.count();
  const totalTotem = await prisma.examenTotem.count();
  const totalRegistrosTotem = await prisma.totemData.count();
  
  console.log(`📊 Estado actual:`);
  console.log(`   - Exámenes: ${totalExamenes}`);
  console.log(`   - ExamenTotem: ${totalTotem}`);
  console.log(`   - RegistrosTotem: ${totalRegistrosTotem}`);
  
  if (totalExamenes <= 10) {
    console.log('✅ La base de datos parece estar limpia. No se requiere acción.');
    await prisma.$disconnect();
    process.exit(0);
  }

  console.log('\n¿Deseas continuar con la limpieza? Esto eliminará TODOS los exámenes y los recreará.');
  console.log('Presiona Ctrl+C para cancelar o espera 10 segundos para continuar...');
  
  await new Promise(resolve => setTimeout(resolve, 10000));

  // 2. LIMPIEZA COMPLETA
  console.log('\n🗑️ PASO 1: Eliminando todos los exámenes...');
  
  console.log('🔍 DEBUG: Eliminando ActaExamen...');
  await prisma.actaExamen.deleteMany({});
  console.log('   ✅ ActaExamen eliminadas');
  
  console.log('🔍 DEBUG: Eliminando ExamenTotem...');
  await prisma.examenTotem.deleteMany({});
  console.log('   ✅ ExamenTotem eliminados');
  
  console.log('🔍 DEBUG: Eliminando Examen...');
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
  console.log('🔍 DEBUG: Haciendo llamada a API local...');
  
  const response = await fetch('http://localhost:3000/api/v1/totem/simple-sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  
  console.log(`🔍 DEBUG: Response status: ${response.status}`);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.log(`🔍 DEBUG: Error response: ${errorText}`);
    throw new Error(`Error en sincronización: ${response.status}`);
  }
  
  const resultado = await response.json();
  console.log('🔍 DEBUG: Resultado:', JSON.stringify(resultado, null, 2));
  
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

  await prisma.$disconnect();
  console.log('\n🎉 LIMPIEZA DE EMERGENCIA COMPLETADA');
  
} catch (error) {
  console.error('❌ Error en limpieza de emergencia:', error);
  console.error('❌ Stack trace:', error.stack);
  process.exit(1);
} 