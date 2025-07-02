import prisma from './src/lib/db.js';

async function testQuery() {
  console.log('🧪 TESTING QUERY LOCALMENTE...\n');
  
  try {
    console.log('1️⃣ Probando consulta ExamenTotem...');
    
    // Esta es la consulta exacta que está fallando
    const result = await prisma.examenTotem.findFirst({
      where: {
        materiaTotem: {
          contains: "DERECHO INTERNACIONAL PRIVADO"
          // SIN mode: "insensitive" porque String básico no lo soporta
        }
      },
      include: {
        examen: {
          include: {
            aula: true,
            carrera: {
              include: {
                facultad: true
              }
            }
          }
        }
      }
    });
    
    console.log('✅ Query ejecutada exitosamente!');
    
    if (result) {
      console.log('✅ Resultado encontrado:', {
        id: result.id,
        materiaTotem: result.materiaTotem,
        examenId: result.examenId,
        nombreMateria: result.examen?.nombreMateria,
        carrera: result.examen?.carrera?.nombre
      });
    } else {
      console.log('⚠️ No se encontró resultado, pero la query es válida');
    }
    
  } catch (error) {
    console.log('❌ ERROR EN QUERY:');
    console.log('Message:', error.message);
    console.log('Code:', error.code);
    return false;
  }
  
  return true;
}

async function testFullFlow() {
  console.log('\n2️⃣ Probando flujo completo API externa...');
  
  try {
    // Simular datos de API externa
    const examenExterno = {
      "tdocu": "DNI-LE-LC",
      "ndocu": "43638860",
      "lugar": "3",
      "sector": "3",
      "carrera": "16",
      "modo": "7",
      "anio": "2019",
      "areaTema": "60",
      "materia": "550",
      "acta": "162",
      "folio": "190",
      "fecActa": "02/07/2025",
      "apen": "BUSELLATO VERWILT, FREDERIK LUIS",
      "usuario": "fbusellato175",
      "nombreMateria": "DERECHO INTERNACIONAL PRIVADO",
      "nombreLugar": "SALTA - DISTANCIA",
      "nombreSector": "CIENCIAS JURÍDICAS",
      "nombreModo": "CAMPUS VIRTUAL"
    };
    
    console.log('Buscando coincidencias para:', examenExterno.nombreMateria);
    
    const matchPorNombre = await prisma.examenTotem.findFirst({
      where: {
        materiaTotem: {
          contains: examenExterno.nombreMateria
          // SIN mode: "insensitive"
        }
      },
      include: {
        examen: {
          include: {
            aula: true,
            carrera: {
              include: {
                facultad: true
              }
            }
          }
        }
      }
    });
    
    if (matchPorNombre) {
      console.log('✅ Match encontrado:', {
        materiaTotem: matchPorNombre.materiaTotem,
        nombreMateria: matchPorNombre.examen?.nombreMateria,
        carrera: matchPorNombre.examen?.carrera?.nombre,
        aula: matchPorNombre.examen?.aula?.nombre
      });
    } else {
      console.log('⚠️ No se encontró match - esto es normal para datos de prueba');
    }
    
    return true;
    
  } catch (error) {
    console.log('❌ ERROR EN FLUJO COMPLETO:');
    console.log('Message:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 INICIANDO TESTING SISTEMÁTICO\n');
  
  const queryTest = await testQuery();
  const flowTest = await testFullFlow();
  
  await prisma.$disconnect();
  
  console.log('\n📊 RESULTADOS:');
  console.log('Query Test:', queryTest ? '✅ PASS' : '❌ FAIL');
  console.log('Flow Test:', flowTest ? '✅ PASS' : '❌ FAIL');
  
  if (queryTest && flowTest) {
    console.log('\n🎯 ¡TODO LISTO PARA DEPLOY!');
    process.exit(0);
  } else {
    console.log('\n🚫 NO DESPLEGAR - HAY ERRORES');
    process.exit(1);
  }
}

main().catch(console.error); 