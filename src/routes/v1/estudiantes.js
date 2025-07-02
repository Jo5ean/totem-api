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
      console.log(`Procesando examen: ${examenExterno.nombreMateria} - ${examenExterno.carrera}`);
      
      // Buscar por nombre de materia con múltiples estrategias
      let matchPorNombre = await prisma.examenTotem.findFirst({
        where: {
          materiaTotem: {
            contains: examenExterno.nombreMateria
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

      // Si no encuentra con el nombre completo, buscar por palabras clave
      if (!matchPorNombre) {
        const palabrasClave = examenExterno.nombreMateria.split(' ').filter(p => p.length > 3);
        for (const palabra of palabrasClave) {
          matchPorNombre = await prisma.examenTotem.findFirst({
            where: {
              materiaTotem: {
                contains: palabra
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
            console.log(`Match encontrado por palabra clave: "${palabra}"`);
            break;
          }
        }
      }

      if (matchPorNombre) {
        examenesCompletos.push({
          estudiante: {
            dni: examenExterno.ndocu,
            nombre: examenExterno.apen,
            lugar: examenExterno.nombreLugar,
            sector: examenExterno.nombreSector,
            modo: examenExterno.nombreModo
          },
          examen: {
            id: matchPorNombre.examen.id,
            materia: {
              codigo: examenExterno.materia,
              nombre: examenExterno.nombreMateria,
              nombreCorto: matchPorNombre.examen.nombreMateria,
              areaTema: examenExterno.areaTema
            },
            carrera: {
              codigo: examenExterno.carrera,
              nombre: matchPorNombre.examen.carrera?.nombre || 'No disponible',
              facultad: matchPorNombre.examen.carrera?.facultad?.nombre || 'No disponible'
            },
            fecha: matchPorNombre.examen.fecha ? matchPorNombre.examen.fecha.toISOString().split('T')[0] : null,
            hora: matchPorNombre.examen.hora ? matchPorNombre.examen.hora.toTimeString().split(' ')[0] : null,
            fechaExterna: examenExterno.fecActa,
            aula: matchPorNombre.examen.aula ? {
              id: matchPorNombre.examen.aula.id,
              nombre: matchPorNombre.examen.aula.nombre,
              capacidad: matchPorNombre.examen.aula.capacidad,
              ubicacion: matchPorNombre.examen.aula.ubicacion
            } : null,
            tipoExamen: matchPorNombre.examen.tipoExamen || 'No especificado',
            modalidad: matchPorNombre.examen.modalidadExamen || 'presencial',
            observaciones: matchPorNombre.examen.observaciones,
            materialPermitido: matchPorNombre.examen.materialPermitido,
            requierePc: matchPorNombre.examen.requierePc || false
          },
          matchStatus: {
            found: true,
            source: 'name_match',
            matchedBy: ['nombreMateria']
          }
        });
      } else {
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

    return res.status(200).json({
      success: true,
      data: {
        estudiante: estudianteInfo,
        examenes: examenesCompletos.map(item => item.examen),
        totalExamenes: examenesCompletos.length,
        examenesEncontrados: examenesCompletos.filter(item => item.matchStatus.found).length,
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