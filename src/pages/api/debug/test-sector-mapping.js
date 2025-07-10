import { PrismaClient } from '../../../generated/prisma/index.js';
import TotemService from '../../../services/totemService.js';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log('🔍 TESTING SECTOR MAPPING...');

    const totemService = new TotemService();
    
    // 1. Obtener sectores del TOTEM
    const sheetResult = await totemService.sheetBestService.fetchAndProcessData();
    const detection = totemService.sheetBestService.detectExamTypes(sheetResult.data);
    const sectoresDelTotem = detection.sectors;
    
    console.log('📊 Sectores del TOTEM:', sectoresDelTotem);
    
    // 2. Obtener sectores mapeados en BD
    const sectoresMapeados = await prisma.sectorFacultad.findMany({
      where: { activo: true },
      include: { facultad: true },
      orderBy: { sector: 'asc' }
    });
    
    console.log('🗺️ Sectores mapeados en BD:', sectoresMapeados.map(s => ({ 
      sector: s.sector, 
      facultad: s.facultad.nombre 
    })));
    
    // 3. Probar mapeo de cada sector del TOTEM
    const resultadosPrueba = [];
    
    for (const sector of sectoresDelTotem) {
      console.log(`\n🧪 Probando sector: "${sector}"`);
      
      // Probar mapeo directo
      const facultadMapeada = await totemService.mapSectorToFacultad(sector);
      
      // Probar búsqueda manual
      const mappingManual = await prisma.sectorFacultad.findFirst({
        where: { 
          sector: sector.toString(),
          activo: true 
        },
        include: { facultad: true }
      });
      
      resultadosPrueba.push({
        sector: sector,
        sectorTipo: typeof sector,
        facultadEncontrada: facultadMapeada?.nombre || 'NO ENCONTRADA',
        mappingManual: mappingManual ? mappingManual.facultad.nombre : 'NO ENCONTRADO',
        existeMapping: !!mappingManual
      });
      
      console.log(`   Resultado: ${facultadMapeada?.nombre || 'NO ENCONTRADA'}`);
    }
    
    // 4. Verificar datos específicos de carreras problemáticas
    const carrerasProblema = ['16', '355', '361', '363']; // Carreras que deberían ser CJ
    const datosCarrerasProblema = [];
    
    for (const carreraCode of carrerasProblema) {
      // Buscar en datos del TOTEM qué sector tiene asignado
      const filaConCarrera = sheetResult.data.find(row => 
        row.CARRERA?.toString().trim() === carreraCode
      );
      
      if (filaConCarrera) {
        const sectorAsignado = filaConCarrera.SECTOR?.toString().trim();
        const facultadMapeada = await totemService.mapSectorToFacultad(sectorAsignado);
        
        datosCarrerasProblema.push({
          carrera: carreraCode,
          sectorAsignado: sectorAsignado,
          facultadMapeada: facultadMapeada?.nombre || 'NO ENCONTRADA',
          facultadEsperada: 'Ciencias Jurídicas'
        });
      }
    }
    
    console.log('\n📋 Análisis de carreras problema:', datosCarrerasProblema);
    
    res.status(200).json({
      success: true,
      data: {
        sectoresDelTotem,
        sectoresMapeadosEnBD: sectoresMapeados.map(s => ({
          sector: s.sector,
          facultad: s.facultad.nombre,
          facultadCodigo: s.facultad.codigo,
          activo: s.activo
        })),
        resultadosPrueba,
        datosCarrerasProblema,
        resumen: {
          totalSectoresDelTotem: sectoresDelTotem.length,
          totalSectoresMapeados: sectoresMapeados.length,
          sectoresConProblema: resultadosPrueba.filter(r => !r.existeMapping).length
        }
      }
    });

  } catch (error) {
    console.error('💥 Error en test de mapeo:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
} 