import express from 'express';
import TotemService from '../../services/totemService.js';
import SheetBestService from '../../services/sheetBestService.js';
import prisma from '../../lib/db.js';

const router = express.Router();
const totemService = new TotemService();
const sheetBestService = new SheetBestService();

// POST /api/v1/totem/sync - Sincronizar datos del TOTEM usando Sheet.best
router.post('/sync', async (req, res) => {
  try {
    console.log('Iniciando sincronización TOTEM con Sheet.best...');
    
    const result = await totemService.syncTotemData();
    
    return res.status(200).json({
      success: true,
      message: 'Sincronización TOTEM completada exitosamente con Sheet.best',
      data: result
    });
    
  } catch (error) {
    console.error('Error en sincronización TOTEM:', error);
    return res.status(500).json({
      success: false,
      error: 'Error en la sincronización TOTEM',
      message: error.message
    });
  }
});

// GET /api/v1/totem/detect-sheets - Detectar datos disponibles desde Sheet.best
router.get('/detect-sheets', async (req, res) => {
  try {
    console.log('🔍 Obteniendo datos desde Sheet.best...');
    
    const startTime = Date.now();
    
    // Obtener y procesar datos desde Sheet.best
    const result = await sheetBestService.fetchAndProcessData();
    
    // Detectar tipos y categorías
    const analysis = sheetBestService.detectExamTypes(result.data);
    
    const duration = Date.now() - startTime;
    
    return res.status(200).json({
      success: true,
      data: {
        source: 'sheet.best',
        totalRows: result.metadata.totalRows,
        validRows: result.metadata.validRows,
        examTypes: analysis.examTypes,
        sectors: analysis.sectors,
        careers: analysis.careers,
        detectionTime: `${duration}ms`
      },
      message: `Datos obtenidos desde Sheet.best: ${result.metadata.validRows} filas válidas encontradas`
    });
    
  } catch (error) {
    console.error('❌ Error obteniendo datos desde Sheet.best:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo datos desde Sheet.best',
      message: error.message
    });
  }
});

// GET /api/v1/totem/hojas-disponibles - Información disponible desde Sheet.best
router.get('/hojas-disponibles', async (req, res) => {
  try {
    const result = await sheetBestService.fetchAndProcessData();
    const analysis = sheetBestService.detectExamTypes(result.data);
    
    return res.status(200).json({
      success: true,
      data: {
        source: 'sheet.best',
        totalRows: result.metadata.totalRows,
        validRows: result.metadata.validRows,
        availableData: {
          examTypes: analysis.examTypes,
          sectors: analysis.sectors,
          careers: analysis.careers
        }
      },
      total: result.metadata.validRows
    });
    
  } catch (error) {
    console.error('Error obteniendo datos disponibles:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo datos disponibles',
      message: error.message
    });
  }
});

// GET /api/v1/totem/csv-download - Obtener datos desde Sheet.best
router.get('/csv-download', async (req, res) => {
  try {
    const result = await sheetBestService.fetchAndProcessData();
    
    return res.status(200).json({
      success: true,
      data: result,
      message: 'Datos obtenidos desde Sheet.best exitosamente'
    });
    
  } catch (error) {
    console.error('Error obteniendo datos desde Sheet.best:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo datos desde Sheet.best',
      message: error.message
    });
  }
});

// GET /api/v1/totem/debug - Debug del procesamiento
router.get('/debug', async (req, res) => {
  try {
    const debug = await totemService.getEstadisticasTotem();
    
    return res.status(200).json({
      success: true,
      data: debug
    });
    
  } catch (error) {
    console.error('Error en debug TOTEM:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo debug',
      message: error.message
    });
  }
});

// GET /api/v1/totem/debug-processing - Debug detallado del procesamiento
router.get('/debug-processing', async (req, res) => {
  try {
    const sectoresNoMapeados = await totemService.getSectoresNoMapeados();
    const carrerasNoMapeadas = await totemService.getCarrerasTotemNoMapeadas();
    
    return res.status(200).json({
      success: true,
      data: {
        sectoresNoMapeados,
        carrerasNoMapeadas,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error en debug processing:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo debug processing',
      message: error.message
    });
  }
});

// GET /api/v1/totem/estadisticas - Estadísticas del TOTEM
router.get('/estadisticas', async (req, res) => {
  try {
    const estadisticas = await totemService.getEstadisticasTotem();
    
    return res.status(200).json({
      success: true,
      data: estadisticas
    });
    
  } catch (error) {
    console.error('Error obteniendo estadísticas TOTEM:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo estadísticas',
      message: error.message
    });
  }
});

// GET /api/v1/totem/consulta - Consulta general
router.get('/consulta', async (req, res) => {
  try {
    const { tipo } = req.query;
    
    let resultado;
    switch (tipo) {
      case 'sectores':
        resultado = await totemService.getSectoresNoMapeados();
        break;
      case 'carreras':
        resultado = await totemService.getCarrerasTotemNoMapeadas();
        break;
      default:
        resultado = await totemService.getEstadisticasTotem();
    }
    
    return res.status(200).json({
      success: true,
      data: resultado
    });
    
  } catch (error) {
    console.error('Error en consulta TOTEM:', error);
    return res.status(500).json({
      success: false,
      error: 'Error en consulta',
      message: error.message
    });
  }
});

// POST /api/v1/totem/aplicar-mapeos-carreras - Aplicar mapeos específicos de carreras
router.post('/aplicar-mapeos-carreras', async (req, res) => {
  try {
    console.log('🚀 Aplicando mapeos de carreras...');
    
    // Mapeos críticos que necesitamos
    const mapeosCriticos = [
      { codigo: '16', nombre: 'Abogacía' },
      { codigo: '88', nombre: 'Tecnicatura Univ. en Gestión de Bancos y Empresas Financieras' },
      { codigo: '17', nombre: 'Licenciatura en Relaciones Internacionales' },
      { codigo: '96', nombre: 'Tecnicatura Universitaria en Gestión de Calidad' },
      { codigo: '97', nombre: 'Tecnicatura Universitaria en Seguros' }
    ];
    
    let mapeosAplicados = 0;
    
    for (const mapeo of mapeosCriticos) {
      // 1. Buscar si existe la carrera con ese código
      const carreraExistente = await prisma.carrera.findFirst({
        where: { codigo: mapeo.codigo }
      });
      
      if (carreraExistente) {
        // 2. Actualizar el nombre si es diferente
        if (carreraExistente.nombre !== mapeo.nombre) {
          await prisma.carrera.update({
            where: { id: carreraExistente.id },
            data: { nombre: mapeo.nombre }
          });
          
          console.log(`✅ Actualizada carrera código "${mapeo.codigo}": "${carreraExistente.nombre}" → "${mapeo.nombre}"`);
          mapeosAplicados++;
        } else {
          console.log(`✓ Carrera código "${mapeo.codigo}" ya tiene el nombre correcto: "${mapeo.nombre}"`);
        }
      } else {
        console.log(`❌ No se encontró carrera con código "${mapeo.codigo}"`);
      }
    }
    
    return res.status(200).json({
      success: true,
      message: `Mapeos de carreras aplicados exitosamente`,
      data: {
        mapeosAplicados,
        totalProcesados: mapeosCriticos.length
      }
    });
    
  } catch (error) {
    console.error('Error aplicando mapeos de carreras:', error);
    return res.status(500).json({
      success: false,
      error: 'Error aplicando mapeos de carreras',
      message: error.message
    });
  }
});

// ============================================================================
// ENDPOINTS PARA BACKOFFICE - MAPEOS
// ============================================================================

// GET /api/v1/totem/mapeos/carreras - Obtener mapeos de carreras
router.get('/mapeos/carreras', async (req, res) => {
  try {
    const { soloNoMapeadas } = req.query;
    
    const where = soloNoMapeadas === 'true' ? { esMapeada: false } : {};
    
    const carrerasTotem = await prisma.carreraTotem.findMany({
      where,
      include: {
        carrera: {
          include: {
            facultad: {
              select: { id: true, nombre: true, codigo: true }
            }
          }
        }
      },
      orderBy: { codigoTotem: 'asc' }
    });

    return res.status(200).json({
      success: true,
      message: 'Mapeos de carreras obtenidos exitosamente',
      data: carrerasTotem
    });
    
  } catch (error) {
    console.error('Error obteniendo mapeos de carreras:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo mapeos de carreras',
      message: error.message
    });
  }
});

// POST /api/v1/totem/mapeos/carreras - Crear mapeo de carrera
router.post('/mapeos/carreras', async (req, res) => {
  try {
    const { codigoTotem, carreraId } = req.body;

    // Validaciones
    if (!codigoTotem || !carreraId) {
      return res.status(400).json({
        success: false,
        error: 'Datos requeridos faltantes',
        message: 'Los campos codigoTotem y carreraId son obligatorios'
      });
    }

    // Verificar que la carrera existe
    const carrera = await prisma.carrera.findUnique({
      where: { id: parseInt(carreraId) },
      include: { facultad: true }
    });

    if (!carrera) {
      return res.status(404).json({
        success: false,
        error: 'Carrera no encontrada',
        message: `No se encontró carrera con ID ${carreraId}`
      });
    }

    // Buscar o crear carrera TOTEM
    let carreraTotem = await prisma.carreraTotem.findFirst({
      where: { codigoTotem: codigoTotem }
    });

    if (!carreraTotem) {
      // Crear nueva carrera TOTEM
      carreraTotem = await prisma.carreraTotem.create({
        data: {
          codigoTotem: codigoTotem,
          carreraId: parseInt(carreraId),
          esMapeada: true
        }
      });
    } else {
      // Actualizar mapeo existente
      carreraTotem = await prisma.carreraTotem.update({
        where: { id: carreraTotem.id },
        data: {
          carreraId: parseInt(carreraId),
          esMapeada: true
        }
      });
    }

    // Obtener resultado completo
    const resultado = await prisma.carreraTotem.findUnique({
      where: { id: carreraTotem.id },
      include: {
        carrera: {
          include: { facultad: true }
        }
      }
    });

    console.log(`✅ Mapeo carrera creado: ${codigoTotem} → ${carrera.nombre}`);

    return res.status(201).json({
      success: true,
      message: 'Mapeo de carrera creado exitosamente',
      data: resultado
    });
    
  } catch (error) {
    console.error('Error creando mapeo de carrera:', error);
    return res.status(500).json({
      success: false,
      error: 'Error creando mapeo de carrera',
      message: error.message
    });
  }
});

// GET /api/v1/totem/mapeos/sectores - Obtener mapeos de sectores
router.get('/mapeos/sectores', async (req, res) => {
  try {
    const { incluirNoMapeados } = req.query;
    
    // Obtener mapeos existentes
    const mapeos = await prisma.sectorTotem.findMany({
      include: {
        facultad: {
          select: { id: true, nombre: true, codigo: true }
        }
      },
      orderBy: { sector: 'asc' }
    });

    let response = { mapeos };

    // Si se solicita, incluir sectores no mapeados
    if (incluirNoMapeados === 'true') {
      // Obtener todos los sectores únicos del TOTEM
      const sectoresEnTotem = await prisma.examenTotem.findMany({
        select: { sectorTotem: true },
        distinct: ['sectorTotem'],
        where: { sectorTotem: { not: null } }
      });

      // Sectores mapeados
      const sectoresMapeados = mapeos.map(m => m.sector);
      
      // Sectores no mapeados
      const sectoresNoMapeados = sectoresEnTotem
        .map(e => e.sectorTotem)
        .filter(sector => sector && !sectoresMapeados.includes(sector))
        .sort((a, b) => parseInt(a) - parseInt(b));

      response.sectoresNoMapeados = sectoresNoMapeados;
    }

    return res.status(200).json({
      success: true,
      message: 'Mapeos de sectores obtenidos exitosamente',
      data: response
    });
    
  } catch (error) {
    console.error('Error obteniendo mapeos de sectores:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo mapeos de sectores',
      message: error.message
    });
  }
});

// POST /api/v1/totem/mapeos/sectores - Crear mapeo de sector
router.post('/mapeos/sectores', async (req, res) => {
  try {
    const { sector, facultadId } = req.body;

    // Validaciones
    if (!sector || !facultadId) {
      return res.status(400).json({
        success: false,
        error: 'Datos requeridos faltantes',
        message: 'Los campos sector y facultadId son obligatorios'
      });
    }

    // Verificar que la facultad existe
    const facultad = await prisma.facultad.findUnique({
      where: { id: parseInt(facultadId) }
    });

    if (!facultad) {
      return res.status(404).json({
        success: false,
        error: 'Facultad no encontrada',
        message: `No se encontró facultad con ID ${facultadId}`
      });
    }

    // Verificar que el sector no esté ya mapeado
    const mapeoExistente = await prisma.sectorTotem.findFirst({
      where: { sector: sector }
    });

    if (mapeoExistente) {
      return res.status(409).json({
        success: false,
        error: 'Sector ya mapeado',
        message: `El sector ${sector} ya está mapeado`
      });
    }

    // Crear mapeo
    const mapeo = await prisma.sectorTotem.create({
      data: {
        sector: sector,
        facultadId: parseInt(facultadId),
        activo: true
      },
      include: {
        facultad: {
          select: { id: true, nombre: true, codigo: true }
        }
      }
    });

    console.log(`✅ Mapeo sector creado: Sector ${sector} → ${facultad.nombre}`);

    return res.status(201).json({
      success: true,
      message: 'Mapeo de sector creado exitosamente',
      data: mapeo
    });
    
  } catch (error) {
    console.error('Error creando mapeo de sector:', error);
    return res.status(500).json({
      success: false,
      error: 'Error creando mapeo de sector',
      message: error.message
    });
  }
});

// DELETE /api/v1/totem/mapeos/sectores/:id - Eliminar mapeo de sector
router.delete('/mapeos/sectores/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar que el mapeo existe
    const mapeo = await prisma.sectorTotem.findUnique({
      where: { id: parseInt(id) },
      include: { facultad: true }
    });

    if (!mapeo) {
      return res.status(404).json({
        success: false,
        error: 'Mapeo no encontrado',
        message: `No se encontró mapeo con ID ${id}`
      });
    }

    // Eliminar mapeo
    await prisma.sectorTotem.delete({
      where: { id: parseInt(id) }
    });

    console.log(`✅ Mapeo sector eliminado: Sector ${mapeo.sector} → ${mapeo.facultad.nombre}`);

    return res.status(200).json({
      success: true,
      message: 'Mapeo de sector eliminado exitosamente',
      data: { id: parseInt(id), sector: mapeo.sector }
    });
    
  } catch (error) {
    console.error('Error eliminando mapeo de sector:', error);
    return res.status(500).json({
      success: false,
      error: 'Error eliminando mapeo de sector',
      message: error.message
    });
  }
});

// GET /api/v1/totem - Lista de endpoints disponibles
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API TOTEM - Node.js/Express',
    endpoints: {
      sync: 'POST /sync - Sincronizar datos del TOTEM',
      detectSheets: 'GET /detect-sheets - Detectar hojas disponibles',
      hojasDisponibles: 'GET /hojas-disponibles - Listar hojas',
      csvDownload: 'GET /csv-download - Descargar datos desde Sheet.best',
      debug: 'GET /debug - Debug del procesamiento',
      debugProcessing: 'GET /debug-processing - Debug detallado',
      estadisticas: 'GET /estadisticas - Estadísticas del TOTEM',
      consulta: 'GET /consulta?tipo=X - Consulta general'
    }
  });
});

export default router; 