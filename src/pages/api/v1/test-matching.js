import prisma from '../../../lib/db.js';

export default async function handler(req, res) {
  try {
    console.log('🧪 INICIANDO TEST DE MATCHING CARRERA+AREATEMA');
    
    // Simular datos del estudiante 43638860
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

    console.log('📊 RESULTADO BÚSQUEDA EXACTA:', matchExacto ? '✅ ENCONTRADO' : '❌ NO ENCONTRADO');
    if (matchExacto) {
      console.log('   📝 Materia Totem:', matchExacto.materiaTotem);
      console.log('   🎓 Carrera Totem:', matchExacto.carreraTotem);
      console.log('   📋 AreaTema Totem:', matchExacto.areaTemaTotem);
      console.log('   📚 Examen ID:', matchExacto.examen?.id);
    }

    // 2. BÚSQUEDA ALTERNATIVA: Solo materia + carrera
    console.log('\n🔍 BÚSQUEDA 2: Solo materia + carrera (sin areaTema)');
    const matchParcial = await prisma.examenTotem.findMany({
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

    console.log(`📊 RESULTADO BÚSQUEDA PARCIAL: ${matchParcial.length} registros encontrados`);
    matchParcial.forEach((match, index) => {
      console.log(`   ${index + 1}. areaTema: "${match.areaTemaTotem}", examen: ${match.examen?.id}`);
    });

    // 3. BÚSQUEDA: Ver todos los registros con areaTema "60"
    console.log('\n🔎 BÚSQUEDA 3: Todos los registros con areaTema "60"');
    const registrosAreaTema = await prisma.examenTotem.findMany({
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
      take: 10
    });

    console.log(`📊 REGISTROS CON AREATEMA "60": ${registrosAreaTema.length} encontrados`);
    registrosAreaTema.forEach((reg, index) => {
      console.log(`   ${index + 1}. materia:${reg.materiaTotem} carrera:${reg.carreraTotem} → ${reg.examen?.nombreMateria}`);
    });

    return res.json({
      success: true,
      data: {
        datosEstudiante,
        matchExacto: matchExacto ? {
          found: true,
          materiaTotem: matchExacto.materiaTotem,
          carreraTotem: matchExacto.carreraTotem,
          areaTemaTotem: matchExacto.areaTemaTotem,
          examenId: matchExacto.examen?.id,
          nombreMateria: matchExacto.examen?.nombreMateria
        } : null,
        matchesParciales: matchParcial.map(m => ({
          materiaTotem: m.materiaTotem,
          carreraTotem: m.carreraTotem,
          areaTemaTotem: m.areaTemaTotem,
          examenId: m.examen?.id
        })),
        registrosAreaTema60: registrosAreaTema.map(r => ({
          materia: r.materiaTotem,
          carrera: r.carreraTotem,
          areaTema: r.areaTemaTotem,
          nombreMateria: r.examen?.nombreMateria
        }))
      }
    });

  } catch (error) {
    console.error('❌ ERROR EN TEST:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
} 