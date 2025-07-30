import express from 'express';
import prisma from '../../lib/db.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'API Estudiantes - En desarrollo', data: [] });
});

// Ruta para consultar exámenes por DNI
router.get('/examenes/:dni', async (req, res) => {
  const { dni } = req.params;

  if (!dni || !/^[0-9]{7,8}$/.test(dni)) {
    return res.status(400).json({
      success: false,
      error: 'DNI inválido. Debe contener 7-8 dígitos'
    });
  }

  try {
    // 1. Consultar API externa de UCASAL
    // ✅ FORMATO CORRECTO: dd/mm/yyyy con CEROS OBLIGATORIOS como espera la API de UCASAL
    const hoy = new Date();
    const fechaDesde = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
    
    const futuro = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const fechaHasta = `${futuro.getDate().toString().padStart(2, '0')}/${(futuro.getMonth() + 1).toString().padStart(2, '0')}/${futuro.getFullYear()}`;

    const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/DNI-LE-LC/${dni}?fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
    
    console.log('Consultando API externa:', apiUrl);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error('Error en API externa:', response.status, response.statusText);
      return res.status(404).json({
        success: false,
        error: 'No se encontraron datos para el DNI proporcionado'
      });
    }

    const examenesExternos = await response.json();
    
    if (!Array.isArray(examenesExternos) || examenesExternos.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No se encontraron exámenes programados para este DNI',
        data: { dni, examenes: [] }
      });
    }

    console.log(`Encontrados ${examenesExternos.length} exámenes en API externa`);

    // 2. Para cada examen externo, buscar match en base de datos local
    const examenesCompletos = [];
    
    for (const examenExterno of examenesExternos) {
      console.log(`\n🔍 PROCESANDO EXAMEN:`);
      console.log(`   📚 Materia: "${examenExterno.nombreMateria}"`);
      console.log(`   🔑 Códigos: M${examenExterno.materia}-C${examenExterno.carrera}-A${examenExterno.areaTema}`);
      console.log(`   📅 Fecha: "${examenExterno.fecActa}"`);
      
      // 🎯 BÚSQUEDA EXACTA por clave compuesta (materia + carrera + areaTema)
      console.log(`\n🔎 BÚSQUEDA 1 - Clave compuesta: materia="${examenExterno.materia}" + carrera="${examenExterno.carrera}" + areaTema="${examenExterno.areaTema}"`);
      
      let matchExacto = await prisma.examenTotem.findFirst({
        where: {
          AND: [
            { materiaTotem: examenExterno.materia },
            { carreraTotem: examenExterno.carrera },
            { areaTemaTotem: examenExterno.areaTema }
          ]
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
      
      let matchPorNombre = null;
      if (matchExacto) {
        matchPorNombre = matchExacto.examen;
        console.log(`   ✅ MATCH EXACTO por clave compuesta: "${matchPorNombre.nombreMateria}"`);
      } else {
        console.log(`   ❌ No match con clave compuesta`);
        
        // FALLBACK: Buscar por nombre de materia como último recurso
        console.log(`\n🔎 BÚSQUEDA 2 - Fallback por nombre: "${examenExterno.nombreMateria}"`);
        matchPorNombre = await prisma.examen.findFirst({
          where: {
            nombreMateria: {
              contains: examenExterno.nombreMateria
            }
          },
          include: {
            aula: true,
            carrera: {
              include: {
                facultad: true
              }
            }
          }
        });
      }
      
      if (matchPorNombre) {
        if (matchExacto) {
          console.log(`   ✅ MATCH EXACTO por clave compuesta encontrado`);
        } else {
          console.log(`   ⚠️ Match por nombre (fallback): "${matchPorNombre.nombreMateria}"`);
        }
      } else {
        console.log(`   ❌ No se encontró match con ningún método`);
        
        // ÚLTIMO RECURSO: Buscar por palabras clave  
        console.log(`\n🔎 BÚSQUEDA 3 - Último recurso por palabras clave:`);
        const palabrasClave = examenExterno.nombreMateria.split(' ').filter(p => p.length > 3);
        console.log(`   🔤 Palabras: [${palabrasClave.join(', ')}]`);
        
        for (const palabra of palabrasClave) {
          console.log(`\n   🔍 Probando: "${palabra}"`);
          matchPorNombre = await prisma.examen.findFirst({
            where: {
              nombreMateria: {
                contains: palabra
              }
            },
            include: {
              aula: true,
              carrera: {
                include: {
                  facultad: true
                }
              }
            }
          });
          if (matchPorNombre) {
            console.log(`   ⚠️ Match parcial por palabra "${palabra}"`);
            console.log(`   📝 "${examenExterno.nombreMateria}" → "${matchPorNombre.nombreMateria}"`);
            break;
          }
        }
        
        if (!matchPorNombre) {
          console.log(`\n❌ RESULTADO FINAL: Sin matches para "${examenExterno.nombreMateria}"`);
        }
      }

      console.log(`\n📊 RESULTADO PROCESAMIENTO:`);
      
      if (matchPorNombre) {
        const tipoMatch = matchExacto ? 'EXACTO' : 'FALLBACK';
        console.log(`✅ MATCH ${tipoMatch} - Examen encontrado con datos locales`);
        console.log(`   🎯 ExamenID: ${matchPorNombre.id}`);
        console.log(`   🔑 Clave: M${examenExterno.materia}-C${examenExterno.carrera}-A${examenExterno.areaTema}`);
        console.log(`   📚 "${examenExterno.nombreMateria}" → "${matchPorNombre.nombreMateria}"`);
        
        examenesCompletos.push({
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          },
          examen: {
            id: matchPorNombre.id,
            materia: {
              codigo: examenExterno.materia,
              nombre: examenExterno.nombreMateria,
              nombreCorto: matchPorNombre.nombreMateria,
              areaTema: examenExterno.areaTema
            },
            carrera: {
              codigo: examenExterno.carrera,
              nombre: matchPorNombre.carrera?.nombre || 'No disponible',
              facultad: matchPorNombre.carrera?.facultad?.nombre || 'No disponible'
            },
            fecha: matchPorNombre.fecha ? matchPorNombre.fecha.toISOString().split('T')[0] : null,
            hora: matchPorNombre.hora ? matchPorNombre.hora.toTimeString().split(' ')[0] : null,
            fechaExterna: examenExterno.fecActa,
            aula: matchPorNombre.aula ? {
              id: matchPorNombre.aula.id,
              nombre: matchPorNombre.aula.nombre,
              capacidad: matchPorNombre.aula.capacidad,
              ubicacion: matchPorNombre.aula.ubicacion
            } : null,
            tipoExamen: matchPorNombre.tipoExamen || 'No especificado',
            modalidad: matchPorNombre.modalidadExamen || 'presencial',
            observaciones: matchPorNombre.observaciones,
            materialPermitido: matchPorNombre.materialPermitido,
            requierePc: matchPorNombre.requierePc || false
          },
          matchStatus: {
            found: true,
            source: matchExacto ? 'exact_key_match' : 'fallback_name_match',
            matchedBy: matchExacto ? ['materia', 'carrera', 'areaTema'] : ['nombreMateria']
          }
        });
      } else {
        console.log(`❌ SIN MATCH - Solo datos externos disponibles`);
        console.log(`   🔑 Clave buscada: M${examenExterno.materia}-C${examenExterno.carrera}-A${examenExterno.areaTema}`);
        console.log(`   📅 Solo fecha externa: "${examenExterno.fecActa}"`);
        
        // No se encontró match, pero incluir datos básicos de la API externa
        examenesCompletos.push({
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          },
          examen: {
            materia: {
              codigo: examenExterno.materia,
              nombre: examenExterno.nombreMateria,
              areaTema: examenExterno.areaTema
            },
            carrera: {
              codigo: examenExterno.carrera
            },
            fechaExterna: examenExterno.fecActa,
            aula: null, // Sin asignar
            tipoExamen: 'No especificado',
            modalidad: 'presencial',
            observaciones: 'Examen no encontrado en base de datos local'
          },
          matchStatus: {
            found: false,
            source: 'external_only',
            searchedBy: ['materia', 'carrera', 'areaTema', 'nombreMateria'],
            message: 'No encontrado en base de datos local con clave compuesta ni por nombre'
          }
        });
      }
    }

    // 3. Construir respuesta final
    const estudianteInfo = examenesCompletos[0]?.estudiante || {
      dni: dni,
      nombre: 'No disponible'
    };
    
    const examenesEncontrados = examenesCompletos.filter(item => item.matchStatus.found).length;
    
    console.log(`\n🎯 RESUMEN FINAL:`);
    console.log(`   👤 Estudiante: ${estudianteInfo.nombre}`);
    console.log(`   📊 Total exámenes: ${examenesCompletos.length}`);
    console.log(`   ✅ Matches por clave compuesta: ${examenesCompletos.filter(e => e.matchStatus.source === 'exact_key_match').length}`);
    console.log(`   ⚠️ Matches por fallback: ${examenesCompletos.filter(e => e.matchStatus.source === 'fallback_name_match').length}`);
    console.log(`   ❌ Solo datos externos: ${examenesCompletos.length - examenesEncontrados}`);

    return res.status(200).json({
      success: true,
      data: {
        estudiante: estudianteInfo,
        examenes: examenesCompletos.map(item => item.examen),
        totalExamenes: examenesCompletos.length,
        examenesEncontrados: examenesEncontrados,
        consultadoEn: new Date().toISOString()
      },
      debug: {
        apiExterna: {
          url: apiUrl,
          totalRespuesta: examenesExternos.length
        },
        matches: examenesCompletos.map(item => ({
          materia: item.examen.materia?.codigo,
          carrera: item.examen.carrera?.codigo,
          areaTema: item.examen.materia?.areaTema,
          found: item.matchStatus.found,
          source: item.matchStatus.source,
          matchedBy: item.matchStatus.matchedBy || item.matchStatus.searchedBy
        }))
      }
    });

  } catch (error) {
    console.error('Error en consulta de exámenes:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      details: error.message,
      stack: error.stack
    });
  }
});

export default router; 