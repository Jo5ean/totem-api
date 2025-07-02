import fetch from 'node-fetch';

async function probarMatching() {
  try {
    console.log('🧪 PROBANDO ENDPOINT DE TEST MATCHING...\n');
    
    const url = 'https://totem-api-production.up.railway.app/api/v1/test-matching';
    console.log('📡 URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('❌ ERROR:', response.status, response.statusText);
      return;
    }
    
    const data = await response.json();
    
    console.log('✅ RESPUESTA EXITOSA\n');
    console.log('📋 DATOS ESTUDIANTE:', data.data.datosEstudiante);
    
    console.log('\n🎯 MATCH EXACTO (materia + carrera + areaTema):');
    if (data.data.matchExacto) {
      console.log('   ✅ ENCONTRADO:', data.data.matchExacto);
    } else {
      console.log('   ❌ NO ENCONTRADO');
    }
    
    console.log('\n🔍 MATCHES PARCIALES (materia + carrera):');
    console.log(`   📊 Total: ${data.data.matchesParciales.length}`);
    data.data.matchesParciales.forEach((match, i) => {
      console.log(`   ${i+1}. areaTema:"${match.areaTemaTotem}" examen:${match.examenId}`);
    });
    
    console.log('\n📋 REGISTROS CON AREA_TEMA "60":');
    console.log(`   📊 Total: ${data.data.registrosAreaTema60.length}`);
    data.data.registrosAreaTema60.forEach((reg, i) => {
      console.log(`   ${i+1}. materia:${reg.materia} carrera:${reg.carrera} → "${reg.nombreMateria}"`);
    });
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
  }
}

probarMatching(); 