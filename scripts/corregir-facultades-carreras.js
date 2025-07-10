const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

// Mapeo de códigos de carrera a códigos de facultad
const MAPEO_CARRERAS_FACULTADES = {
  // CIENCIAS JURÍDICAS (CJ)
  '16': 'CJ',    // Abogacía
  '355': 'CJ',   // Escribanía  
  '361': 'CJ',   // Licenciatura en Criminología
  '363': 'CJ',   // Procuración
  
  // ESCUELA DE EDUCACIÓN (EE)
  '113': 'EE',   // Licenciatura en Gestión Educativa
  '194': 'EE',   // Licenciatura en Educación Física
  '186': 'EE',   // Licenciatura en Entrenamiento Deportivo
  '187': 'EE',   // Licenciatura en Lenguajes Expresivos
  
  // INGENIERÍA (ING)
  '138': 'ING',  // Licenciatura en Higiene y Seguridad en el Trabajo
  '185': 'ING',  // Licenciatura en Gestión Eficiente de la Energía  
  '360': 'ING',  // Tecnicatura en Seguridad Informática
  '383': 'ING',  // Tecnicatura en Operaciones Mineras
  
  // CIENCIAS DE LA SALUD (CS)
  // (No hay carreras específicas en el listado actual)
  
  // ARQUITECTURA (ARQ)
  // (No hay carreras específicas en el listado actual)
  
  // CIENCIAS DE LA EDUCACIÓN (CECS)
  // (No hay carreras específicas en el listado actual)
  
  // CIENCIAS ECONÓMICAS (CEA) - Mantener las que ya están bien
  '10': 'CEA',   // Licenciatura en Economía
  '11': 'CEA',   // Licenciatura en Administración de Empresas
  '14': 'CEA',   // Contador Público
  '15': 'CEA',   // Licenciatura en Comercialización
  '30': 'CEA',   // Licenciatura en Relaciones Públicas e Institucionales
  '17': 'CEA',   // Licenciatura en Relaciones Internacionales
  '133': 'CEA',  // Licenciatura en Administración Agropecuaria
  '161': 'CEA',  // Tecnicatura en Gestión de Bancos y Empresas Financieras
  '212': 'CEA',  // Tecnicatura Universitaria en Ceremonial y Protocolo
  '214': 'CEA',  // Licenciatura en Comercio Internacional
  '244': 'CEA',  // Corredor Inmobiliario y Martillero Público
  '250': 'CEA',  // Licenciatura en Administración de Negocios Digitales
  '336': 'CEA',  // Licenciatura en Recursos Humanos
  '368': 'CEA',  // Licenciatura en Administración y Gestión Universitaria
  '378': 'CEA',  // Licenciatura en Organización de Eventos
  '86': 'CEA',   // Licenciatura en Turismo
  '88': 'CEA',   // Tecnicatura Univ. en Gestión de Bancos y Empresas Financieras
  '9': 'CEA',    // Tecnicatura Universitaria en Secretariado Ejecutivo
  '96': 'CEA',   // Tecnicatura Universitaria en Gestión de Calidad
  '97': 'CEA',   // Tecnicatura Universitaria en Seguros
  '83': 'CEA',   // Tecnicatura Universitaria en Higiene y Seguridad en el Trabajo
  '196': 'CEA',  // Licenciatura en Seguridad
  
  // Carreras genéricas - mantener en CEA por defecto
  '350': 'CEA',  // Carrera 350
  '58': 'CEA'    // Carrera 58
};

async function corregirFacultadesCarreras() {
  try {
    console.log('🚀 Iniciando corrección masiva de facultades...\n');
    
    // 1. Obtener todas las facultades
    const facultades = await prisma.facultad.findMany();
    const facultadesPorCodigo = {};
    facultades.forEach(f => {
      facultadesPorCodigo[f.codigo] = f;
    });
    
    console.log('📚 Facultades disponibles:');
    facultades.forEach(f => {
      console.log(`  ${f.codigo}: ${f.nombre} (ID: ${f.id})`);
    });
    console.log('');
    
    // 2. Obtener todas las carreras
    const carreras = await prisma.carrera.findMany({
      include: { facultad: true }
    });
    
    console.log(`📋 Total de carreras a procesar: ${carreras.length}\n`);
    
    let procesadas = 0;
    let corregidas = 0;
    let errores = 0;
    
    // 3. Procesar cada carrera
    for (const carrera of carreras) {
      const codigoFacultadEsperada = MAPEO_CARRERAS_FACULTADES[carrera.codigo];
      
      if (!codigoFacultadEsperada) {
        console.log(`⚠️ Carrera ${carrera.codigo} (${carrera.nombre}) - Sin mapeo definido, mantiene actual: ${carrera.facultad?.nombre || 'Sin facultad'}`);
        procesadas++;
        continue;
      }
      
      const facultadEsperada = facultadesPorCodigo[codigoFacultadEsperada];
      if (!facultadEsperada) {
        console.log(`❌ Carrera ${carrera.codigo} - Facultad esperada '${codigoFacultadEsperada}' no existe`);
        errores++;
        continue;
      }
      
      // Verificar si ya está correcta
      if (carrera.facultadId === facultadEsperada.id) {
        console.log(`✅ Carrera ${carrera.codigo} (${carrera.nombre}) - Ya está correcta: ${facultadEsperada.nombre}`);
        procesadas++;
        continue;
      }
      
      // Corregir la asignación
      try {
        await prisma.carrera.update({
          where: { id: carrera.id },
          data: { facultadId: facultadEsperada.id }
        });
        
        console.log(`🔧 Carrera ${carrera.codigo} (${carrera.nombre})`);
        console.log(`   Anterior: ${carrera.facultad?.nombre || 'Sin facultad'}`);
        console.log(`   Nueva: ${facultadEsperada.nombre}\n`);
        
        corregidas++;
      } catch (error) {
        console.log(`❌ Error actualizando carrera ${carrera.codigo}: ${error.message}`);
        errores++;
      }
      
      procesadas++;
    }
    
    console.log('\n=== RESUMEN DE CORRECCIÓN ===');
    console.log(`📊 Carreras procesadas: ${procesadas}`);
    console.log(`🔧 Carreras corregidas: ${corregidas}`);
    console.log(`❌ Errores: ${errores}`);
    console.log(`✅ Proceso completado exitosamente\n`);
    
    // 4. Verificar resultado final
    console.log('📈 Verificando resultado final...');
    const carrerasActualizadas = await prisma.carrera.findMany({
      include: { facultad: true }
    });
    
    const resumenFinal = {};
    carrerasActualizadas.forEach(carrera => {
      const nombreFacultad = carrera.facultad?.nombre || 'Sin facultad';
      resumenFinal[nombreFacultad] = (resumenFinal[nombreFacultad] || 0) + 1;
    });
    
    console.log('\n📊 Distribución final por facultad:');
    Object.entries(resumenFinal).forEach(([facultad, cantidad]) => {
      console.log(`  ${facultad}: ${cantidad} carreras`);
    });
    
  } catch (error) {
    console.error('💥 Error en el proceso de corrección:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar el script
corregirFacultadesCarreras(); 