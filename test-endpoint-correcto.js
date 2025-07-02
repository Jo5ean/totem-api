import fetch from 'node-fetch';

async function probarEndpointCorrecto() {
  try {
    console.log('🎯 PROBANDO ENDPOINT CORRECTO (Con matching carrera+areaTema)\n');
    
    // Este es el endpoint que YA EXISTE y usa matching correcto
    const urlCorrecto = 'https://totem-api-production.up.railway.app/api/v1/estudiantes/examenes/43638860';
    
    console.log('📡 URL CORRECTO:', urlCorrecto);
    console.log('🔧 Este endpoint usa: materia + carrera + areaTema\n');
    
    const response = await fetch(urlCorrecto);
    
    if (!response.ok) {
      console.error('❌ ERROR:', response.status, response.statusText);
      return;
    }
    
    const data = await response.json();
    
    console.log('✅ RESPUESTA EXITOSA');
    console.log('📊 SUCCESS:', data.success);
    console.log('📋 TOTAL EXAMENES:', data.data?.totalExamenes || 0);
    console.log('🎯 EXAMENES CON MATCH:', data.data?.examenesEncontrados || 0);
    
    if (data.data?.examenes) {
      console.log('\n📚 EXAMENES ENCONTRADOS:');
      data.data.examenes.forEach((examen, i) => {
        console.log(`\n${i+1}. 📝 MATERIA: "${examen.materia?.nombre}"`);
        console.log(`   🎓 CARRERA: "${examen.carrera?.nombre}"`);
        console.log(`   📋 AREA_TEMA: "${examen.materia?.areaTema}"`);
        console.log(`   📅 FECHA: ${examen.fecha || 'Sin fecha'}`);
        console.log(`   ⏰ HORA: ${examen.hora || 'Sin hora'}`);
        console.log(`   🏫 AULA: ${examen.aula?.nombre || 'Sin aula'}`);
        console.log(`   🔗 MATCH: ${data.data.debug ? 'Con debug' : 'OK'}`);
      });
    }
    
    if (data.data?.estudiante) {
      console.log('\n👤 DATOS ESTUDIANTE:');
      console.log('   🆔 DNI:', data.data.estudiante.dni);
      console.log('   👨‍🎓 NOMBRE:', data.data.estudiante.nombre);
      console.log('   🏢 SECTOR:', data.data.estudiante.sector);
    }
    
    console.log('\n🔍 ANÁLISIS:');
    if (data.data?.examenesEncontrados > 0) {
      console.log('✅ El matching con carrera+areaTema FUNCIONA!');
      console.log('✅ Se encontraron datos locales completos');
    } else {
      console.log('❌ No se encontró match con carrera+areaTema');
      console.log('🔍 Podría ser que no existe el registro exacto');
    }
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
  }
}

// Comparación con endpoint incorrecto
async function compararEndpoints() {
  console.log('🔍 COMPARANDO AMBOS ENDPOINTS:\n');
  
  console.log('1️⃣ ENDPOINT INCORRECTO (solo nombreMateria):');
  try {
    const urlIncorrecto = 'https://totem-api-production.up.railway.app/api/estudiantes/examenes/43638860';
    const respIncorrecto = await fetch(urlIncorrecto);
    const dataIncorrecto = await respIncorrecto.json();
    console.log('   📊 Examenes encontrados:', dataIncorrecto.data?.examenesEncontrados || 0);
  } catch (error) {
    console.log('   ❌ Error:', error.message);
  }
  
  console.log('\n2️⃣ ENDPOINT CORRECTO (carrera+areaTema):');
  await probarEndpointCorrecto();
}

compararEndpoints(); 