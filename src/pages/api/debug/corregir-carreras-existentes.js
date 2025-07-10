import { PrismaClient } from '../../../generated/prisma/index.js';

const prisma = new PrismaClient();

// Mapeo correcto de carreras a facultades
const MAPEO_CARRERAS_CORRECTO = {
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
  '383': 'ING'   // Tecnicatura en Operaciones Mineras
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log('🔧 INICIANDO CORRECCIÓN DE CARRERAS EXISTENTES...');

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

    // 2. Obtener carreras mal asignadas
    const carrerasCorregir = Object.keys(MAPEO_CARRERAS_CORRECTO);
    const carreras = await prisma.carrera.findMany({
      where: {
        codigo: { in: carrerasCorregir }
      },
      include: { facultad: true }
    });

    console.log(`\n🎯 Encontradas ${carreras.length} carreras para corregir`);

    let corregidas = 0;
    let yaCorrectas = 0;
    let errores = 0;

    const resultados = [];

    // 3. Corregir cada carrera
    for (const carrera of carreras) {
      const codigoFacultadCorrecta = MAPEO_CARRERAS_CORRECTO[carrera.codigo];
      const facultadCorrecta = facultadesPorCodigo[codigoFacultadCorrecta];

      if (!facultadCorrecta) {
        console.log(`❌ Facultad ${codigoFacultadCorrecta} no encontrada para carrera ${carrera.codigo}`);
        errores++;
        continue;
      }

      const resultado = {
        carrera: carrera.codigo,
        nombre: carrera.nombre,
        facultadAnterior: carrera.facultad?.nombre || 'Sin facultad',
        facultadNueva: facultadCorrecta.nombre,
        necesitaCorreccion: carrera.facultadId !== facultadCorrecta.id
      };

      // Verificar si ya está correcta
      if (carrera.facultadId === facultadCorrecta.id) {
        console.log(`✅ Carrera ${carrera.codigo} (${carrera.nombre}) - Ya está correcta: ${facultadCorrecta.nombre}`);
        resultado.estado = 'YA_CORRECTA';
        yaCorrectas++;
      } else {
        // Corregir la asignación
        try {
          await prisma.carrera.update({
            where: { id: carrera.id },
            data: { facultadId: facultadCorrecta.id }
          });

          console.log(`🔧 CORREGIDA: ${carrera.codigo} (${carrera.nombre})`);
          console.log(`   ${carrera.facultad?.nombre || 'Sin facultad'} → ${facultadCorrecta.nombre}`);
          
          resultado.estado = 'CORREGIDA';
          corregidas++;
        } catch (error) {
          console.log(`❌ Error corrigiendo carrera ${carrera.codigo}: ${error.message}`);
          resultado.estado = 'ERROR';
          resultado.error = error.message;
          errores++;
        }
      }

      resultados.push(resultado);
    }

    // 4. Verificar resultado final
    console.log('\n📊 Verificando resultado...');
    const carrerasVerificacion = await prisma.carrera.findMany({
      where: {
        codigo: { in: carrerasCorregir }
      },
      include: { facultad: true }
    });

    const distribucionFinal = {};
    carrerasVerificacion.forEach(carrera => {
      const facultadNombre = carrera.facultad?.nombre || 'Sin facultad';
      distribucionFinal[facultadNombre] = (distribucionFinal[facultadNombre] || 0) + 1;
    });

    console.log('\n📈 Distribución final:');
    Object.entries(distribucionFinal).forEach(([facultad, cantidad]) => {
      console.log(`  ${facultad}: ${cantidad} carreras`);
    });

    res.status(200).json({
      success: true,
      data: {
        resumen: {
          totalProcesadas: carreras.length,
          corregidas: corregidas,
          yaCorrectas: yaCorrectas,
          errores: errores
        },
        resultados: resultados,
        distribucionFinal: distribucionFinal
      },
      message: `Corrección completada: ${corregidas} carreras corregidas, ${yaCorrectas} ya correctas, ${errores} errores`
    });

  } catch (error) {
    console.error('💥 Error en corrección:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
} 