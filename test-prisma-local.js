import prisma from './src/lib/db.js';

async function testMatchingLocal() {
  try {
    console.log('🧪 TEST LOCAL - MATCHING CARRERA+AREATEMA\n');
    
    // Datos del estudiante DNI 43638860
    const datosEstudiante = {
      materia: "60",
      carrera: "16", 
      areaTema: "60",
      nombreMateria: "DERECHO INTERNACIONAL PRIVADO"
    };
    
    console.log('📋 DATOS ESTUDIANTE:', datosEstudiante);
    
    // 1. BÚSQUEDA EXACTA con clave compuesta
    console.log('\n🎯 BÚSQUEDA 1: Clave compuesta (materia + carrera + areaTema)');
    const matchExacto = await prisma.examenTotem.findFirst({
      where: {
        AND: [
          { materiaTotem: datosEstudiante.materia },
          { carreraTotem: datosEstudiante.carrera },
          { areaTemaTotem: datosEstudiante.areaTema }
        ]
      },
      include: {
        examen: {
          include: {
            carrera: true,
            aula: true
          }
        }
      }
    });
    
    if (matchExacto) {
      console.log('   ✅ MATCH EXACTO ENCONTRADO!');
      console.log('   📝 Materia:', matchExacto.materiaTotem);
      console.log('   🎓 Carrera:', matchExacto.carreraTotem);
      console.log('   📋 AreaTema:', matchExacto.areaTemaTotem);
      console.log('   🆔 Examen ID:', matchExacto.examen?.id);
      console.log('   📚 Nombre Materia:', matchExacto.examen?.nombreMateria);
      console.log('   🏫 Aula:', matchExacto.examen?.aula?.nombre || 'Sin aula');
    } else {
      console.log('   ❌ NO SE ENCONTRÓ MATCH EXACTO');
    }
    
    // 2. BÚSQUEDA: Solo materia + carrera
    console.log('\n🔍 BÚSQUEDA 2: Solo materia + carrera (ignorando areaTema)');
    const matchesParciales = await prisma.examenTotem.findMany({
      where: {
        AND: [
          { materiaTotem: datosEstudiante.materia },
          { carreraTotem: datosEstudiante.carrera }
        ]
      },
      include: {
        examen: {
          include: {
            carrera: true
          }
        }
      }
    });
    
    console.log(`   📊 ENCONTRADOS: ${matchesParciales.length} registros`);
    matchesParciales.forEach((match, i) => {
      console.log(`   ${i+1}. areaTema:"${match.areaTemaTotem || 'NULL'}" → "${match.examen?.nombreMateria}"`);
    });
    
    // 3. BÚSQUEDA: Todos con areaTema "60"
    console.log('\n📋 BÚSQUEDA 3: Todos los registros con areaTema "60"');
    const conAreaTema60 = await prisma.examenTotem.findMany({
      where: {
        areaTemaTotem: "60"
      },
      select: {
        materiaTotem: true,
        carreraTotem: true,
        areaTemaTotem: true,
        examen: {
          select: {
            id: true,
            nombreMateria: true
          }
        }
      },
      take: 15
    });
    
    console.log(`   📊 TOTAL CON AREATEMA "60": ${conAreaTema60.length}`);
    conAreaTema60.forEach((reg, i) => {
      console.log(`   ${i+1}. M:${reg.materiaTotem} C:${reg.carreraTotem} → "${reg.examen?.nombreMateria}"`);
    });
    
    // 4. CONCLUSIONES
    console.log('\n📊 CONCLUSIONES:');
    if (matchExacto) {
      console.log('✅ Existe registro exacto con materia:60 + carrera:16 + areaTema:60');
      console.log('✅ El matching debería funcionar perfectamente');
    } else {
      console.log('❌ NO existe registro exacto con materia:60 + carrera:16 + areaTema:60');
      console.log(`🔍 Pero hay ${matchesParciales.length} opciones con materia:60 + carrera:16`);
      
      if (matchesParciales.length > 0) {
        console.log('💡 OPCIONES DISPONIBLES:');
        matchesParciales.forEach((match, i) => {
          console.log(`   ${i+1}. Usar areaTema:"${match.areaTemaTotem || 'NULL'}" para "${match.examen?.nombreMateria}"`);
        });
      }
    }
    
  } catch (error) {
    console.error('❌ ERROR:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testMatchingLocal(); 