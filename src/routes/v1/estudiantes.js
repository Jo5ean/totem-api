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
    const fechaDesde = new Date().toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
    
    const fechaHasta = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

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
      console.log(`   📚 Materia Externa: "${examenExterno.nombreMateria}"`);
      console.log(`   🎓 Carrera: "${examenExterno.carrera}"`);
      console.log(`   📅 Fecha: "${examenExterno.fecActa}"`);
      
      // Buscar por nombre de materia directamente en la tabla Examen
      console.log(`\n🔎 BÚSQUEDA 1 - Nombre completo: "${examenExterno.nombreMateria}"`);
      let matchPorNombre = await prisma.examen.findFirst({
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
      
      if (matchPorNombre) {
        console.log(`   ✅ MATCH DIRECTO ENCONTRADO: "${matchPorNombre.nombreMateria}"`);
      } else {
        console.log(`   ❌ No se encontró match directo`);
      }

      // Si no encuentra con el nombre completo, buscar por palabras clave
      if (!matchPorNombre) {
        const palabrasClave = examenExterno.nombreMateria.split(' ').filter(p => p.length > 3);
        console.log(`\n🔎 BÚSQUEDA 2 - Por palabras clave:`);
        console.log(`   🔤 Palabras clave extraídas: [${palabrasClave.join(', ')}]`);
        
        for (const palabra of palabrasClave) {
          console.log(`\n   🔍 Probando palabra: "${palabra}"`);
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
            console.log(`   ✅ BINGO! Match encontrado por palabra "${palabra}"`);
            console.log(`   📝 Materia en BD: "${matchPorNombre.nombreMateria}"`);
            console.log(`   🏫 Aula: ${matchPorNombre.aula?.nombre || 'Sin aula'}`);
            console.log(`   ⏰ Hora: ${matchPorNombre.hora ? matchPorNombre.hora.toTimeString().split(' ')[0] : 'Sin hora'}`);
            break;
          } else {
            console.log(`   ❌ No match para palabra: "${palabra}"`);
          }
        }
        
        if (!matchPorNombre) {
          console.log(`\n❌ RESULTADO FINAL: No se encontró ningún match para "${examenExterno.nombreMateria}"`);
        }
      }

      console.log(`\n📊 RESULTADO PROCESAMIENTO:`);
      
      if (matchPorNombre) {
        console.log(`✅ MATCH EXITOSO - Agregando examen completo con datos locales`);
        console.log(`   🎯 Match ID: ${matchPorNombre.id}`);
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
            source: 'name_match',
            matchedBy: ['nombreMateria']
          }
        });
      } else {
        console.log(`❌ SIN MATCH - Agregando solo datos de API externa`);
        console.log(`   📚 Solo con fecha de API: "${examenExterno.fecActa}"`);
        
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
            message: 'Examen registrado solo en sistema externo'
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
    console.log(`   ✅ Exámenes con match local: ${examenesEncontrados}`);
    console.log(`   📅 Solo fecha externa: ${examenesCompletos.length - examenesEncontrados}`);

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
          materia: item.examen.materia.codigo,
          carrera: item.examen.carrera.codigo,
          found: item.matchStatus.found,
          source: item.matchStatus.source
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