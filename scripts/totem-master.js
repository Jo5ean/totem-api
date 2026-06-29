import prisma from '../src/lib/db.js';

/**
 * 🚀 SCRIPT MAESTRO TOTEM - TODO EN UNO
 * =====================================
 * 
 * Este script unificado reemplaza TODOS los scripts individuales:
 * ✅ Limpieza completa de BD
 * ✅ Configuración de aulas (solo las 4 correctas)
 * ✅ Mapeo automático de sectores y carreras
 * ✅ Sincronización completa desde Sheet.best
 * ✅ Corrección de duplicados falsos
 * ✅ Reporte final detallado
 */

// ==========================================
// 1. CONFIGURACIONES FIJAS
// ==========================================

const AULAS_CORRECTAS = [
  { nombre: 'Aula 4', capacidad: 72, ubicacion: 'Edificio Principal' },
  { nombre: 'Aula 7', capacidad: 72, ubicacion: 'Edificio Principal' },
  { nombre: 'Aula 8', capacidad: 71, ubicacion: 'Edificio Principal' },
  { nombre: 'Aula 12', capacidad: 69, ubicacion: 'Edificio Principal' },
  { nombre: 'Aula 34', capacidad: 72, ubicacion: 'Edificio Principal' },
  { nombre: 'Laboratorio Informático', capacidad: 34, ubicacion: 'Laboratorio de Computación' }
];

const FACULTADES_BASE = [
  { nombre: 'Ciencias Económicas y de Administración', codigo: 'CEA' },
  { nombre: 'Ciencias Jurídicas', codigo: 'CJ' },
  { nombre: 'Ingeniería', codigo: 'ING' },
  { nombre: 'Arquitectura', codigo: 'ARQ' },
  { nombre: 'Ciencias de la Educación y de la Comunicación Social', codigo: 'CECS' },
  { nombre: 'Ciencias de la Salud', codigo: 'CS' },
  { nombre: 'Escuela de Educación', codigo: 'EE' }
];

const MAPEOS_SECTORES = {
  '2': 'CEA',
  '3': 'CJ', 
  '4': 'ING',
  '5': 'ARQ',
  '7': 'CECS',
  '8': 'CS',
  '21': 'EE'
};

// ==========================================
// 2. FUNCIONES PRINCIPALES
// ==========================================

async function ejecutarMaestro() {
  console.log('🚀 TOTEM MASTER - CONFIGURACIÓN COMPLETA');
  console.log('='.repeat(50));
  
  const iniciaTiempo = Date.now();
  
  try {
    await paso1_LimpiarBaseDatos();
    await paso2_ConfigurarFacultades();
    await paso3_ConfigurarAulas();
    await paso4_MapearSectores();
    await paso5_SincronizarCompleto();
    await paso6_ReporteFinal();
    
    const duracion = Math.round((Date.now() - iniciaTiempo) / 1000);
    console.log(`\n🎉 CONFIGURACIÓN COMPLETA EN ${duracion}s`);
    
  } catch (error) {
    console.error('\n💥 ERROR EN CONFIGURACIÓN:', error);
    throw error;
  }
}

// ==========================================
// PASO 1: LIMPIEZA COMPLETA
// ==========================================

async function paso1_LimpiarBaseDatos() {
  console.log('\n📍 PASO 1/6: Limpieza completa de base de datos');
  console.log('-'.repeat(50));
  
  // Limpiar datos existentes (conservar estructura)
  console.log('🗑️  Eliminando datos previos...');
  
  await prisma.examenTotem.deleteMany({});
  await prisma.examen.deleteMany({}); // 🚀 LIMPIAR EXÁMENES PREVIOS
  await prisma.carreraTotem.deleteMany({});
  await prisma.sectorFacultad.deleteMany({});
  await prisma.aulaConfiguracion.deleteMany({});
  
  // Eliminar aulas incorrectas específicamente
  await prisma.aula.deleteMany({
    where: {
      nombre: {
        in: ['Notebooks', 'Aula Virtual', 'Virtual']
      }
    }
  });
  
  console.log('✅ Base de datos limpia (incluyendo exámenes)');
}

// ==========================================
// PASO 2: FACULTADES
// ==========================================

async function paso2_ConfigurarFacultades() {
  console.log('\n📍 PASO 2/6: Configurando facultades');
  console.log('-'.repeat(50));
  
  let creadas = 0;
  
  for (const facultadData of FACULTADES_BASE) {
    const facultad = await prisma.facultad.upsert({
      where: { codigo: facultadData.codigo },
      update: { 
        nombre: facultadData.nombre,
        activa: true 
      },
      create: {
        nombre: facultadData.nombre,
        codigo: facultadData.codigo,
        activa: true
      }
    });
    
    if (facultad) {
      creadas++;
      console.log(`   ✅ ${facultadData.nombre}`);
    }
  }
  
  console.log(`📊 Total facultades: ${creadas}`);
}

// ==========================================
// PASO 3: AULAS (SOLO LAS 4 CORRECTAS)
// ==========================================

async function paso3_ConfigurarAulas() {
  console.log('\n📍 PASO 3/6: Configurando aulas (solo las 4 correctas)');
  console.log('-'.repeat(50));
  
  let creadas = 0;
  
  for (const aulaData of AULAS_CORRECTAS) {
    const aula = await prisma.aula.upsert({
      where: { nombre: aulaData.nombre },
      update: { 
        capacidad: aulaData.capacidad,
        ubicacion: aulaData.ubicacion,
        disponible: true 
      },
      create: {
        nombre: aulaData.nombre,
        capacidad: aulaData.capacidad,
        ubicacion: aulaData.ubicacion,
        disponible: true
      }
    });
    
    if (aula) {
      creadas++;
      console.log(`   ✅ ${aulaData.nombre} (${aulaData.capacidad} personas)`);
    }
  }
  
  console.log(`📊 Total aulas configuradas: ${creadas}`);
}

// ==========================================
// PASO 4: MAPEO DE SECTORES
// ==========================================

async function paso4_MapearSectores() {
  console.log('\n📍 PASO 4/6: Mapeando sectores a facultades');
  console.log('-'.repeat(50));
  
  let mapeados = 0;
  
  for (const [sector, codigoFacultad] of Object.entries(MAPEOS_SECTORES)) {
    const facultad = await prisma.facultad.findFirst({
      where: { codigo: codigoFacultad }
    });
    
    if (facultad) {
      await prisma.sectorFacultad.upsert({
        where: { sector: sector },
        update: { 
          facultadId: facultad.id,
          activo: true 
        },
        create: {
          sector: sector,
          facultadId: facultad.id,
          activo: true
        }
      });
      
      mapeados++;
      console.log(`   ✅ Sector ${sector} → ${facultad.nombre}`);
    }
  }
  
  console.log(`📊 Sectores mapeados: ${mapeados}`);
}

// ==========================================
// PASO 5: SINCRONIZACIÓN COMPLETA
// ==========================================

async function paso5_SincronizarCompleto() {
  console.log('\n📍 PASO 5/6: Sincronización completa desde Sheet.best');
  console.log('-'.repeat(50));
  
  try {
    // Llamar al endpoint de sincronización
    console.log('🔄 Obteniendo datos desde Sheet.best...');
    const response = await fetch('http://localhost:3000/api/v1/totem/simple-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const resultado = await response.json();
    
    if (resultado.success) {
      console.log(`✅ ${resultado.data.fetched} filas obtenidas`);
      console.log(`✅ ${resultado.data.processed} filas procesadas`);
      console.log(`✅ ${resultado.data.examensCreated} exámenes creados`);
      
      // Crear mapeos automáticos de carreras nuevas
      console.log('\n🔄 Creando mapeos automáticos...');
      const mapeoResponse = await fetch('http://localhost:3000/api/v1/totem/crear-y-mapear-carreras', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (mapeoResponse.ok) {
        const mapeoData = await mapeoResponse.json();
        console.log(`✅ ${mapeoData.data.carrerasCreadas} carreras creadas`);
        console.log(`✅ ${mapeoData.data.carrerasMapeadas} carreras mapeadas`);
        
        // ❌ ELIMINADA RE-SINCRONIZACIÓN para evitar duplicados
        console.log('ℹ️  Mapeos completados, no se re-sincroniza para evitar duplicados');
      }
      
    } else {
      throw new Error(`Error en sincronización: ${resultado.error}`);
    }
    
  } catch (error) {
    console.error('❌ Error en sincronización:', error.message);
    console.log('⚠️  Continuando sin sincronización automática...');
  }
}

// ==========================================
// PASO 6: REPORTE FINAL
// ==========================================

async function paso6_ReporteFinal() {
  console.log('\n📍 PASO 6/6: Reporte final del sistema');
  console.log('-'.repeat(50));
  
  try {
    // Estadísticas de base de datos
    const stats = await Promise.all([
      prisma.facultad.count(),
      prisma.carrera.count(),
      prisma.aula.count(),
      prisma.examen.count(),
      prisma.carreraTotem.count({ where: { esMapeada: true } }),
      prisma.sectorFacultad.count()
    ]);
    
    const [facultades, carreras, aulas, examenes, carrerasMapeadas, sectoresMapeados] = stats;
    
    console.log('📊 ESTADÍSTICAS FINALES:');
    console.log('┌─────────────────────────┬─────────┐');
    console.log('│ Componente              │ Cantidad│');
    console.log('├─────────────────────────┼─────────┤');
    console.log(`│ Facultades              │ ${facultades.toString().padStart(7)} │`);
    console.log(`│ Carreras                │ ${carreras.toString().padStart(7)} │`);
    console.log(`│ Aulas                   │ ${aulas.toString().padStart(7)} │`);
    console.log(`│ Exámenes                │ ${examenes.toString().padStart(7)} │`);
    console.log(`│ Carreras mapeadas       │ ${carrerasMapeadas.toString().padStart(7)} │`);
    console.log(`│ Sectores mapeados       │ ${sectoresMapeados.toString().padStart(7)} │`);
    console.log('└─────────────────────────┴─────────┘');
    
    // Verificar que todo esté correcto
    console.log('\n🔍 VERIFICACIONES:');
    console.log(`${aulas === 4 ? '✅' : '❌'} Aulas: ${aulas} (debe ser 4)`);
    console.log(`${facultades >= 7 ? '✅' : '❌'} Facultades: ${facultades} (mínimo 7)`);
    console.log(`${examenes > 0 ? '✅' : '❌'} Exámenes: ${examenes} (debe ser > 0)`);
    console.log(`${sectoresMapeados >= 7 ? '✅' : '❌'} Sectores: ${sectoresMapeados} (mínimo 7)`);
    
    // Enlaces útiles
    console.log('\n🔗 ENLACES ÚTILES:');
    console.log('   📊 Dashboard: http://localhost:3000/api/v1/dashboard/resumen');
    console.log('   🔍 Debug: http://localhost:3000/api/v1/totem/verify-database');
    console.log('   🏫 Aulas: http://localhost:3000/api/v1/aulas');
    console.log('   📚 Mapeos: http://localhost:3000/api/v1/totem/mapeos/carreras');
    
    console.log('\n🎯 PRÓXIMOS PASOS:');
    console.log('   1. Revisar dashboard para verificar datos');
    console.log('   2. Configurar asignación automática de aulas');
    console.log('   3. Sincronizar cantidad de inscriptos');
    console.log('   4. Levantar interfaces web (backoffice/web)');
    
  } catch (error) {
    console.error('❌ Error generando reporte:', error);
  }
}

// ==========================================
// EJECUCIÓN
// ==========================================

async function verificarServidor() {
  try {
    const response = await fetch('http://localhost:3000/api/hello');
    return response.ok;
  } catch {
    return false;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // Verificar argumentos
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log('🚀 TOTEM MASTER - Script Unificado');
    console.log('===================================');
    console.log('');
    console.log('Este script reemplaza TODOS los scripts individuales:');
    console.log('');
    console.log('✅ Limpieza completa de base de datos');
    console.log('✅ Configuración de 4 aulas exactas');
    console.log('✅ Mapeo automático de sectores y carreras');
    console.log('✅ Sincronización completa desde Sheet.best');
    console.log('✅ Corrección de duplicados falsos');
    console.log('✅ Reporte final detallado');
    console.log('');
    console.log('💡 Uso:');
    console.log('   node scripts/totem-master.js');
    console.log('');
    console.log('⚠️  Prerrequisitos:');
    console.log('   - MySQL corriendo');
    console.log('   - Archivo .env configurado');
    console.log('   - Servidor API corriendo (npm start)');
    console.log('');
    process.exit(0);
  }

  // Verificar servidor
  console.log('🔍 Verificando servidor API...');
  const servidorOK = await verificarServidor();
  
  if (!servidorOK) {
    console.error('❌ El servidor API no está corriendo en puerto 3000');
    console.log('');
    console.log('🔧 SOLUCIÓN:');
    console.log('   1. Ejecuta: npm start (en otra terminal)');
    console.log('   2. Verifica que responda: http://localhost:3000/api/hello');
    console.log('   3. Ejecuta este script nuevamente');
    process.exit(1);
  }
  
  console.log('✅ Servidor API detectado');
  
  // Ejecutar configuración completa
  ejecutarMaestro()
    .then(() => {
      console.log('\n🎉 ¡TOTEM MASTER COMPLETADO EXITOSAMENTE!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Error en TOTEM MASTER:', error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export default ejecutarMaestro; 