import { PrismaClient } from '../../../generated/prisma/index.js';

const prisma = new PrismaClient();

// Mapeo CORRECTO según el CSV del usuario
const MAPEO_SECTORES_FACULTADES = {
  2: { nombre: "Ciencias Económicas", codigo: "CEA" },
  3: { nombre: "Ciencias Jurídicas", codigo: "CJ" },
  4: { nombre: "Ingeniería", codigo: "ING" },
  5: { nombre: "Arquitectura", codigo: "ARQ" },
  8: { nombre: "Ciencias de la Salud", codigo: "CS" },
  7: { nombre: "Ciencias de la Educación", codigo: "CECS" },
  21: { nombre: "Escuela de Educación", codigo: "EE" }
};

export default async function handler(req, res) {
  try {
    console.log('🔄 REESTRUCTURANDO FACULTADES CON SECTOR DIRECTO...');

    const resultados = [];

    // 1. Actualizar cada facultad con su sector correspondiente
    for (const [sector, datosF] of Object.entries(MAPEO_SECTORES_FACULTADES)) {
      console.log(`🏛️ Procesando Sector ${sector} → ${datosF.nombre}`);

      // Buscar facultad existente por codigo
      const facultadExistente = await prisma.facultad.findFirst({
        where: { codigo: datosF.codigo }
      });

      if (facultadExistente) {
        // Actualizar facultad existente con sector
        const facultadActualizada = await prisma.facultad.update({
          where: { id: facultadExistente.id },
          data: { 
            sector: parseInt(sector),
            nombre: datosF.nombre // Asegurar nombre correcto
          }
        });

        console.log(`✅ ACTUALIZADA: ${datosF.nombre} (sector: ${sector})`);
        resultados.push({
          sector: parseInt(sector),
          facultad: datosF.nombre,
          accion: 'ACTUALIZADA',
          id: facultadActualizada.id
        });
      } else {
        // Crear nueva facultad si no existe
        const nuevaFacultad = await prisma.facultad.create({
          data: {
            nombre: datosF.nombre,
            codigo: datosF.codigo,
            sector: parseInt(sector),
            activa: true
          }
        });

        console.log(`🆕 CREADA: ${datosF.nombre} (sector: ${sector})`);
        resultados.push({
          sector: parseInt(sector),
          facultad: datosF.nombre,
          accion: 'CREADA',
          id: nuevaFacultad.id
        });
      }
    }

    // 2. Actualizar función de mapeo para usar sector directo
    console.log('\n🔧 REESTRUCTURACIÓN COMPLETADA');

    // 3. Verificar resultado final
    const facultadesActualizadas = await prisma.facultad.findMany({
      where: { activa: true },
      orderBy: { sector: 'asc' }
    });

    console.log('\n📊 FACULTADES CON SECTORES:');
    facultadesActualizadas.forEach(f => {
      console.log(`  Sector ${f.sector || 'NULL'}: ${f.nombre} (${f.codigo})`);
    });

    res.status(200).json({
      success: true,
      data: {
        resultados,
        facultadesFinales: facultadesActualizadas.map(f => ({
          id: f.id,
          sector: f.sector,
          nombre: f.nombre,
          codigo: f.codigo
        })),
        resumen: {
          actualizadas: resultados.filter(r => r.accion === 'ACTUALIZADA').length,
          creadas: resultados.filter(r => r.accion === 'CREADA').length,
          total: resultados.length
        }
      },
      message: 'Facultades reestructuradas con sector directo exitosamente'
    });

  } catch (error) {
    console.error('❌ Error reestructurando:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
} 