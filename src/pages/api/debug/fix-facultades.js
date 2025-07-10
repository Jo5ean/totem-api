import { PrismaClient } from '../../../generated/prisma/index.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    console.log('🔧 CORRECCIÓN RÁPIDA DE FACULTADES...');

    // 1. Obtener facultad de Ciencias Jurídicas
    const facultadCJ = await prisma.facultad.findFirst({
      where: { codigo: 'CJ' }
    });

    if (!facultadCJ) {
      return res.status(404).json({
        success: false,
        error: 'Facultad CJ no encontrada'
      });
    }

    console.log(`✅ Facultad CJ encontrada: ${facultadCJ.nombre} (ID: ${facultadCJ.id})`);

    // 2. Corregir carreras jurídicas específicas
    const carrerasJuridicas = ['16', '355', '361', '363'];
    
    const resultados = [];
    for (const codigo of carrerasJuridicas) {
      const resultado = await prisma.carrera.updateMany({
        where: { codigo: codigo },
        data: { facultadId: facultadCJ.id }
      });
      
      console.log(`🔧 Carrera ${codigo} - ${resultado.count} registros actualizados`);
      resultados.push({ codigo, actualizados: resultado.count });
    }

    // 3. Verificar resultado
    const carrerasActualizadas = await prisma.carrera.findMany({
      where: { codigo: { in: carrerasJuridicas } },
      include: { facultad: true }
    });

    console.log('\n📊 RESULTADO FINAL:');
    carrerasActualizadas.forEach(c => {
      console.log(`  ${c.codigo} (${c.nombre}) → ${c.facultad.nombre}`);
    });

    res.status(200).json({
      success: true,
      data: {
        facultadCJ: facultadCJ.nombre,
        carrerasCorregidas: resultados,
        verificacion: carrerasActualizadas.map(c => ({
          codigo: c.codigo,
          nombre: c.nombre,
          facultad: c.facultad.nombre
        }))
      },
      message: 'Carreras jurídicas corregidas exitosamente'
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
} 