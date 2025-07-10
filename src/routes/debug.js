import express from 'express';
import prisma from '../lib/db.js';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'API Debug - En desarrollo', data: [] });
});

// POST /api/debug/migrate - Crear tablas con Prisma
router.post('/migrate', async (req, res) => {
  try {
    console.log('🚀 Ejecutando migraciones de Prisma...');
    
    // Ejecutar prisma db push para crear las tablas
    const { stdout, stderr } = await execPromise('npx prisma db push --accept-data-loss', {
      cwd: '/app'
    });
    
    console.log('✅ Migraciones completadas');
    console.log('STDOUT:', stdout);
    if (stderr) console.log('STDERR:', stderr);
    
    return res.status(200).json({
      success: true,
      message: 'Migraciones de base de datos ejecutadas exitosamente',
      output: stdout,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error ejecutando migraciones:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error ejecutando migraciones',
      message: error.message,
      output: error.stdout || '',
      errorOutput: error.stderr || ''
    });
  }
});

// POST /api/debug/setup - Crear tablas y datos iniciales
router.post('/setup', async (req, res) => {
  try {
    console.log('🚀 Iniciando setup automático de base de datos...');
    
    // 1. Verificar conexión BD
    await prisma.$connect();
    console.log('✅ BD conectada');
    
    // 2. Crear facultades
    const facultades = [
      { nombre: 'Ciencias Económicas', codigo: 'CEA' },
      { nombre: 'Ciencias Jurídicas', codigo: 'CJ' },
      { nombre: 'Ingeniería', codigo: 'ING' },
      { nombre: 'Arquitectura', codigo: 'ARQ' },
      { nombre: 'Ciencias de la Educación', codigo: 'CECS' },
      { nombre: 'Ciencias de la Salud', codigo: 'CS' },
      { nombre: 'Escuela de Educación', codigo: 'EE' }
    ];

    let facultadesCreadas = 0;
    for (const f of facultades) {
      const result = await prisma.facultad.upsert({
        where: { nombre: f.nombre },
        update: { codigo: f.codigo },
        create: f
      });
      facultadesCreadas++;
      console.log(`✅ Facultad: ${f.nombre}`);
    }
    
    // 3. Crear aulas
    const aulas = [
      { nombre: 'Aula 4', capacidad: 72 },
      { nombre: 'Aula 8', capacidad: 71 },
      { nombre: 'Aula 12', capacidad: 69 },
      { nombre: 'Lab Informático', capacidad: 34 }
    ];

    let aulasCreadas = 0;
    for (const a of aulas) {
      const result = await prisma.aula.upsert({
        where: { nombre: a.nombre },
        update: { capacidad: a.capacidad },
        create: a
      });
      aulasCreadas++;
      console.log(`✅ Aula: ${a.nombre}`);
    }

    // 4. Mapear sectores básicos
    const sectores = [
      { sector: '2', facultadId: 1 }, // CEA
      { sector: '3', facultadId: 2 }, // CJ
      { sector: '4', facultadId: 3 }, // ING
      { sector: '5', facultadId: 4 }, // ARQ
      { sector: '7', facultadId: 5 }, // CECS
      { sector: '8', facultadId: 6 }, // CS
      { sector: '21', facultadId: 7 } // EE
    ];

    let sectoresCreados = 0;
    for (const s of sectores) {
      try {
        await prisma.sectorFacultad.upsert({
          where: { sector: s.sector },
          update: { facultadId: s.facultadId },
          create: s
        });
        sectoresCreados++;
        console.log(`✅ Sector: ${s.sector}`);
      } catch (error) {
        console.log(`⚠️ Sector ${s.sector} ya existe o error: ${error.message}`);
      }
    }

    await prisma.$disconnect();

    return res.status(200).json({
      success: true,
      message: 'Setup de base de datos completado exitosamente',
      data: {
        facultadesCreadas,
        aulasCreadas,
        sectoresCreados,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ Error en setup de base de datos:', error);
    await prisma.$disconnect();
    
    return res.status(500).json({
      success: false,
      error: 'Error en setup de base de datos',
      message: error.message,
      stack: error.stack
    });
  }
});

// GET /api/debug/verify - Verificar estado de las tablas
router.get('/verify', async (req, res) => {
  try {
    await prisma.$connect();
    
    const facultades = await prisma.facultad.count();
    const aulas = await prisma.aula.count();
    const examenes = await prisma.examen.count();
    const carreras = await prisma.carrera.count();
    const sectores = await prisma.sectorFacultad.count();
    
    await prisma.$disconnect();
    
    return res.status(200).json({
      success: true,
      message: 'Base de datos verificada correctamente',
      data: {
        tablas: {
          facultades,
          aulas,
          examenes,
          carreras,
          sectores
        },
        estado: 'Operacional',
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error verificando base de datos:', error);
    await prisma.$disconnect();
    
    return res.status(500).json({
      success: false,
      error: 'Error verificando base de datos',
      message: error.message
    });
  }
});

// POST /api/debug/reset-database - Limpiar duplicados y resetear BD
router.post('/reset-database', async (req, res) => {
  try {
    console.log('🧹 LIMPIEZA COMPLETA DE BASE DE DATOS - RAILWAY EXPRESS');
    
    // 1. Limpiar datos de sincronización (preservar estructura)
    console.log('🗑️ Eliminando exámenes duplicados...');
    await prisma.examenTotem.deleteMany({});
    await prisma.examen.deleteMany({});
    
    console.log('🗑️ Eliminando mapeos obsoletos...');
    await prisma.carreraTotem.deleteMany({});
    await prisma.sectorFacultad.deleteMany({});
    
    console.log('🗑️ Limpiando datos TOTEM...');
    await prisma.totemData.deleteMany({});
    
    // 2. Mantener solo aulas correctas
    console.log('🏫 Configurando aulas correctas...');
    await prisma.aula.deleteMany({});
    
    const aulasCorrectas = [
      { nombre: 'Aula 4', capacidad: 72, ubicacion: 'Edificio Principal' },
      { nombre: 'Aula 8', capacidad: 71, ubicacion: 'Edificio Principal' },
      { nombre: 'Aula 12', capacidad: 69, ubicacion: 'Edificio Principal' },
      { nombre: 'Laboratorio Informático', capacidad: 34, ubicacion: 'Laboratorio de Computación' }
    ];
    
    for (const aula of aulasCorrectas) {
      await prisma.aula.create({ data: aula });
    }
    
    // 3. Verificar mapeos de sectores
    const sectoresMapeados = await prisma.sectorFacultad.count();
    if (sectoresMapeados === 0) {
      console.log('🗺️ Recreando mapeos de sectores...');
      const mapeosSectores = {
        '2': 'CEA', '3': 'CJ', '4': 'ING', 
        '5': 'ARQ', '7': 'CECS', '8': 'CS', '21': 'EE'
      };
      
      for (const [sector, codigoFacultad] of Object.entries(mapeosSectores)) {
        const facultad = await prisma.facultad.findFirst({ where: { codigo: codigoFacultad } });
        if (facultad) {
          await prisma.sectorFacultad.create({
            data: { sector, facultadId: facultad.id, activo: true }
          });
        }
      }
    }
    
    // 4. Estadísticas finales
    const stats = await Promise.all([
      prisma.facultad.count(),
      prisma.carrera.count(),
      prisma.aula.count(),
      prisma.examen.count(),
      prisma.sectorFacultad.count()
    ]);
    
    const [facultades, carreras, aulas, examenes, sectores] = stats;
    
    res.json({
      success: true,
      message: '🎉 Base de datos limpia y lista para nueva sincronización',
      stats: {
        facultades,
        carreras,
        aulas,
        examenes,
        sectores
      },
      nextStep: 'Ejecutar sincronización: POST /api/v1/totem/simple-sync'
    });

  } catch (error) {
    console.error('❌ Error en reset:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET /api/debug/carreras - Diagnóstico de carreras
router.get('/carreras', async (req, res) => {
  try {
    const { fix } = req.query;
    
    // CORRECCIÓN TEMPORAL DE SECTORES
    if (fix === 'sectores') {
      console.log('🔧 EJECUTANDO CORRECCIÓN DE SECTORES...');
      const resultados = [];
      
      // Actualizar sectores según CSV del usuario
      const updates = [
        { codigo: 'CEA', sector: 2, nombre: 'ECONOMÍA Y ADMINISTRACIÓN' },
        { codigo: 'CJ', sector: 3, nombre: 'CIENCIAS JURÍDICAS' },
        { codigo: 'ING', sector: 4, nombre: 'INGENIERÍA' },
        { codigo: 'EE', sector: 21, nombre: 'FACULTAD DE EDUCACIÓN' }
      ];
      
      for (const update of updates) {
        const result = await prisma.facultad.updateMany({
          where: { codigo: update.codigo },
          data: { sector: update.sector }
        });
        resultados.push({
          codigo: update.codigo,
          nombre: update.nombre,
          sector: update.sector,
          actualizados: result.count
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Sectores corregidos exitosamente',
        resultados
      });
    }
    
    console.log('🔍 Obteniendo diagnóstico de carreras...');
    
    // 1. Obtener carreras actuales
    const carreras = await prisma.carrera.findMany({
      include: { 
        facultad: {
          select: { nombre: true }
        }
      },
      orderBy: { codigo: 'asc' }
    });
    
    // 2. Obtener carreras TOTEM
    const carrerasTotem = await prisma.carreraTotem.findMany({
      include: {
        carrera: {
          include: { facultad: true }
        }
      },
      orderBy: { codigoTotem: 'asc' }
    });
    
    // 3. Identificar carreras problemáticas (nombres genéricos)
    const carrerasGenericas = carreras.filter(c => 
      c.nombre.includes('Carrera ') && !c.nombre.includes('Licenciatura') && !c.nombre.includes('Tecnicatura')
    );
    
    // 4. Carreras con nombres reales esperados
    const carrerasRealesEsperadas = {
      '11': 'Licenciatura en Administración de Empresas',
      '14': 'Contador Público', 
      '15': 'Licenciatura en Comercialización',
      '16': 'Abogacía',
      '17': 'Licenciatura en Relaciones Internacionales',
      '30': 'Licenciatura en Relaciones Públicas e Institucionales',
      '355': 'Escribanía',
      '363': 'Procuración',
      '336': 'Licenciatura en Recursos Humanos',
      '113': 'Licenciatura en Gestión Educativa'
    };
    
    return res.status(200).json({
      success: true,
      data: {
        resumen: {
          totalCarreras: carreras.length,
          carrerasGenericas: carrerasGenericas.length,
          carrerasTotem: carrerasTotem.length,
          carrerasMapeadas: carrerasTotem.filter(ct => ct.esMapeada).length
        },
        carreras: carreras.map(c => ({
          id: c.id,
          codigo: c.codigo,
          nombre: c.nombre,
          facultad: c.facultad?.nombre || 'Sin facultad',
          esGenerica: c.nombre.includes('Carrera ') && !c.nombre.includes('Licenciatura'),
          nombreEsperado: carrerasRealesEsperadas[c.codigo] || null
        })),
        carrerasProblematicas: carrerasGenericas.map(c => ({
          codigo: c.codigo,
          nombreActual: c.nombre,
          nombreEsperado: carrerasRealesEsperadas[c.codigo] || 'No definido'
        })),
        carrerasTotem: carrerasTotem.map(ct => ({
          id: ct.id,
          codigoTotem: ct.codigoTotem,
          esMapeada: ct.esMapeada,
          carreraAsociada: ct.carrera ? {
            codigo: ct.carrera.codigo,
            nombre: ct.carrera.nombre,
            facultad: ct.carrera.facultad?.nombre
          } : null
        }))
      }
    });
    
  } catch (error) {
    console.error('❌ Error en diagnóstico de carreras:', error);
    return res.status(500).json({
      success: false,
      error: 'Error obteniendo diagnóstico de carreras',
      message: error.message
    });
  }
});

// POST /api/debug/corregir-carreras - Corregir nombres de carreras
router.post('/corregir-carreras', async (req, res) => {
  try {
    console.log('🔧 Iniciando corrección de nombres de carreras...');
    
    // Datos reales de carreras del CSV
    const carrerasRealesCSV = {
      '0': 'Otra Carrera Presencial',
      '1': 'Licenciatura en Comunicaciones Sociales',
      '2': 'Profesorado en Filosofía',
      '4': 'Profesorado en Inglés',
      '6': 'Profesorado en Psicología',
      '7': 'Locutor Nacional',
      '9': 'Tecnicatura Universitaria en Secretariado Ejecutivo',
      '10': 'Licenciatura en Economía',
      '11': 'Licenciatura en Administración de Empresas',
      '14': 'Contador Público',
      '15': 'Licenciatura en Comercialización',
      '16': 'Abogacía',
      '17': 'Licenciatura en Relaciones Internacionales',
      '18': 'Ingeniería Civil',
      '19': 'Ingeniería Industrial',
      '26': 'Arquitectura',
      '28': 'Diseño de Interiores',
      '30': 'Licenciatura en Relaciones Públicas e Institucionales',
      '31': 'Profesorado en Educación Física',
      '32': 'Licenciatura en Educación Física',
      '33': 'Caligrafo Público Nacional',
      '37': 'Licenciatura en Informática',
      '46': 'Licenciatura en Criminalística',
      '53': 'Formación Docente para Profesionales',
      '54': 'Productor y Director para Radio y Televisión',
      '62': 'Maestría en Administración de Negocios',
      '67': 'Perito en Balística',
      '68': 'Perito en Accidentología',
      '72': 'Especialización en Seguridad e Higiene en el Trabajo',
      '83': 'Tecnicatura Universitaria en Higiene y Seguridad en el Trabajo',
      '84': 'Ingenieria en Informática',
      '86': 'Licenciatura en Turismo',
      '88': 'Tecnicatura Univ. en Gestión de Bancos y Empresas Financieras',
      '91': 'Licenciatura en Gestión Educativa',
      '94': 'Licenciatura en Inglés (Ciclo de Complementación Curricular)',
      '96': 'Tecnicatura Universitaria en Gestión de Calidad',
      '97': 'Tecnicatura Universitaria en Seguros',
      '98': 'Especialización en Dirección de Recursos Humanos',
      '100': 'Licenciatura en Filosofía',
      '104': 'Licenciatura en Educación Física - Ciclo de Complementación Curricular',
      '105': 'Licenciatura en Psicología',
      '109': 'Traductor Público en Inglés',
      '113': 'Licenciatura en Gestión Educativa',
      '117': 'Ingenieria en Telecomunicaciones',
      '121': 'Maestría en Gestión Ambiental',
      '123': 'Ciencias Veterinarias',
      '128': 'Operador Técnico de Estudio de Radio',
      '133': 'Licenciatura en Administración Agropecuaria',
      '138': 'Licenciatura en Higiene y Seguridad en el Trabajo',
      '139': 'Licenciatura en Artes Musicales',
      '141': 'Especialización en Dirección y Gestión de Alojamientos Turísticos',
      '142': 'Licenciatura en Trabajo Social',
      '148': 'Licenciatura en Diseño de Interiores - Ciclo de complementación Curricular',
      '153': 'Diplomatura Universitaria en Derecho de Familia',
      '161': 'Tecnicatura en Gestión de Bancos, Empresas Financieras y de Seguros',
      '185': 'Licenciatura en Gestión Eficiente de la Energía',
      '186': 'Licenciatura en Entrenamiento Deportivo - Ciclo de Complementación Curricular',
      '187': 'Licenciatura en Lenguajes Expresivos - Ciclo de Complementación Curricular',
      '194': 'Licenciatura en Educación Física - Ciclo de Complementación Curricular',
      '195': 'Licenciatura en Turismo - Ciclo de Complementación Curricular',
      '196': 'Licenciatura en Seguridad - Ciclo de Complementación Curricular',
      '212': 'Tecnicatura Universitaria en Ceremonial y Protocolo',
      '214': 'Licenciatura en Comercio Internacional',
      '244': 'Corredor Inmobiliario y Martillero Público',
      '250': 'Licenciatura en Administración de Negocios Digitales',
      '336': 'Licenciatura en Recursos Humanos',
      '355': 'Escribanía',
      '360': 'Tecnicatura en Seguridad Informática',
      '361': 'Licenciatura en Criminología',
      '363': 'Procuración',
      '368': 'Licenciatura en Administración y Gestión Universitaria - Ciclo de Complementación Curricular',
      '378': 'Licenciatura en Organización de Eventos',
      '383': 'Tecnicatura en Operaciones Mineras'
    };
    
    // Obtener carreras actuales
    const carreras = await prisma.carrera.findMany({
      orderBy: { codigo: 'asc' }
    });
    
    let carrerasCorregidas = 0;
    let carrerasNoCambiadas = 0;
    const resultados = [];
    
    // Corregir cada carrera
    for (const carrera of carreras) {
      const nombreReal = carrerasRealesCSV[carrera.codigo];
      
      if (nombreReal && carrera.nombre !== nombreReal) {
        // Actualizar nombre de carrera
        await prisma.carrera.update({
          where: { id: carrera.id },
          data: { nombre: nombreReal }
        });
        
        carrerasCorregidas++;
        resultados.push({
          codigo: carrera.codigo,
          nombreAnterior: carrera.nombre,
          nombreNuevo: nombreReal,
          accion: 'CORREGIDA'
        });
        
        console.log(`✅ Carrera ${carrera.codigo}: "${carrera.nombre}" → "${nombreReal}"`);
      } else if (nombreReal) {
        carrerasNoCambiadas++;
        resultados.push({
          codigo: carrera.codigo,
          nombre: carrera.nombre,
          accion: 'SIN_CAMBIOS'
        });
      } else {
        resultados.push({
          codigo: carrera.codigo,
          nombre: carrera.nombre,
          accion: 'NO_ENCONTRADA_EN_CSV'
        });
        console.log(`⚠️ Carrera ${carrera.codigo}: No encontrada en CSV`);
      }
    }
    
    console.log(`✅ Corrección completada: ${carrerasCorregidas} carreras corregidas, ${carrerasNoCambiadas} sin cambios`);
    
    return res.status(200).json({
      success: true,
      message: 'Corrección de nombres de carreras completada',
      data: {
        resumen: {
          totalCarreras: carreras.length,
          carrerasCorregidas,
          carrerasNoCambiadas,
          carrerasNoEncontradas: resultados.filter(r => r.accion === 'NO_ENCONTRADA_EN_CSV').length
        },
        resultados
      }
    });
    
  } catch (error) {
    console.error('❌ Error corrigiendo carreras:', error);
    return res.status(500).json({
      success: false,
      error: 'Error corrigiendo nombres de carreras',
      message: error.message
    });
  }
});

// GET /api/debug/mapeos-sectores - Diagnóstico de mapeos de sectores
router.get('/mapeos-sectores', async (req, res) => {
  try {
    console.log('🔍 Diagnosticando mapeos de sectores...');
    
    // 1. Obtener facultades disponibles
    const facultades = await prisma.facultad.findMany({
      orderBy: { codigo: 'asc' }
    });
    
    // 2. Obtener mapeos actuales
    const mapeosSectorFacultad = await prisma.sectorFacultad.findMany({
      include: { facultad: true },
      orderBy: { sector: 'asc' }
    });
    
    // 3. Obtener mapeos en tabla sectorTotem (si existen)
    let mapeosSectorTotem = [];
    try {
      mapeosSectorTotem = await prisma.sectorTotem.findMany({
        include: { facultad: true },
        orderBy: { sector: 'asc' }
      });
    } catch (error) {
      // Tabla puede no existir
    }
    
    // 4. Mapeos esperados
    const mapeosEsperados = {
      '2': 'CEA',  // Ciencias Económicas
      '3': 'CJ',   // Ciencias Jurídicas  
      '4': 'ING',  // Ingeniería
      '5': 'ARQ',  // Arquitectura
      '7': 'CECS', // Ciencias Económicas 
      '8': 'CS',   // Ciencias Sociales
      '21': 'EE'   // Educación
    };
    
    // 5. Verificar problemas
    const problemas = [];
    for (const [sector, codigoEsperado] of Object.entries(mapeosEsperados)) {
      const facultadEsperada = facultades.find(f => f.codigo === codigoEsperado);
      const mapeoActual = mapeosSectorFacultad.find(m => m.sector === sector);
      
      if (!mapeoActual) {
        problemas.push({
          sector,
          problema: 'NO_MAPEADO',
          codigoEsperado,
          facultadEsperada: facultadEsperada?.nombre || 'No encontrada'
        });
      } else if (mapeoActual.facultad.codigo !== codigoEsperado) {
        problemas.push({
          sector,
          problema: 'MAL_MAPEADO',
          codigoEsperado,
          codigoActual: mapeoActual.facultad.codigo,
          facultadEsperada: facultadEsperada?.nombre || 'No encontrada',
          facultadActual: mapeoActual.facultad.nombre
        });
      }
    }
    
    return res.status(200).json({
      success: true,
      data: {
        facultades: facultades.map(f => ({ id: f.id, nombre: f.nombre, codigo: f.codigo })),
        mapeosSectorFacultad,
        mapeosSectorTotem,
        mapeosEsperados,
        problemas,
        resumen: {
          totalFacultades: facultades.length,
          totalMapeosSF: mapeosSectorFacultad.length,
          totalMapeosST: mapeosSectorTotem.length,
          problemasEncontrados: problemas.length
        }
      }
    });
    
  } catch (error) {
    console.error('❌ Error diagnosticando mapeos:', error);
    return res.status(500).json({
      success: false,
      error: 'Error diagnosticando mapeos de sectores',
      message: error.message
    });
  }
});

// POST /api/debug/corregir-mapeo-sector3 - Corregir específicamente el sector 3
router.post('/corregir-mapeo-sector3', async (req, res) => {
  try {
    console.log('🔧 Corrigiendo mapeo del sector 3...');
    
    // 1. Buscar facultad de Ciencias Jurídicas
    const facultadCJ = await prisma.facultad.findFirst({
      where: { 
        OR: [
          { codigo: 'CJ' },
          { codigo: 'JURIDICAS' },
          { nombre: { contains: 'JURÍDIC' } },
          { nombre: { contains: 'DERECHO' } }
        ]
      }
    });
    
    if (!facultadCJ) {
      return res.status(404).json({
        success: false,
        error: 'Facultad de Ciencias Jurídicas no encontrada',
        message: 'Necesita existir una facultad con código CJ o nombre que contenga JURÍDIC'
      });
    }
    
    // 2. Corregir mapeo en sectorFacultad
    const mapeoCorregido = await prisma.sectorFacultad.upsert({
      where: { sector: '3' },
      update: { 
        facultadId: facultadCJ.id,
        activo: true 
      },
      create: {
        sector: '3',
        facultadId: facultadCJ.id,
        activo: true
      },
      include: { facultad: true }
    });
    
    // 3. Si existe sectorTotem, corregir también
    try {
      await prisma.sectorTotem.upsert({
        where: { sector: '3' },
        update: { 
          facultadId: facultadCJ.id,
          activo: true 
        },
        create: {
          sector: '3',
          facultadId: facultadCJ.id,
          activo: true
        }
      });
    } catch (error) {
      // Tabla puede no existir, no es crítico
    }
    
    console.log(`✅ Sector 3 corregido: ${mapeoCorregido.facultad.nombre}`);
    
    return res.status(200).json({
      success: true,
      message: 'Sector 3 corregido exitosamente',
      data: {
        sector: '3',
        facultadAnterior: 'Ciencias Económicas (incorrecto)',
        facultadCorrecta: mapeoCorregido.facultad.nombre,
        mapeo: mapeoCorregido
      }
    });
    
  } catch (error) {
    console.error('❌ Error corrigiendo sector 3:', error);
    return res.status(500).json({
      success: false,
      error: 'Error corrigiendo mapeo del sector 3',
      message: error.message
    });
  }
});

export default router; 