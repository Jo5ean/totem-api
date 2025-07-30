import prisma from '../../../../lib/db.js';
import { withCors } from '../../../../lib/cors.js';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  try {
    const { 
      fecha, 
      facultadId, 
      sinAula, 
      conInscriptos,
      page = 1, 
      limit = 50 
    } = req.query;

    // Construir filtros dinámicos
    const whereClause = {
      activo: true
    };

    // Filtro por fecha específica
    if (fecha) {
      whereClause.fecha = new Date(fecha);
    }

    // Filtro por facultad
    if (facultadId && !isNaN(parseInt(facultadId))) {
      whereClause.facultadId = parseInt(facultadId);
    }

    // Filtro por exámenes sin aula
    if (sinAula === 'true') {
      whereClause.aulaId = null;
    }

    // Filtro por exámenes con inscriptos
    if (conInscriptos === 'true') {
      whereClause.cantidadInscriptos = {
        gt: 0
      };
    }

    // Paginación
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 50;
    const skip = (pageNum - 1) * limitNum;

    // Consultar exámenes con toda la información necesaria
    const [examenes, totalCount] = await Promise.all([
      prisma.examen.findMany({
        where: whereClause,
        include: {
          carrera: {
            include: {
              facultad: true
            }
          },
          aula: true,
          examenTotem: {
            select: {
              materiaTotem: true,
              areaTemaTotem: true,
              sectorTotem: true,
              carreraTotem: true
            }
          },
          estudianteExamenes: {
            select: {
              id: true,
              dni: true,
              asistencia: true,
              aprobado: true
            }
          }
        },
        orderBy: [
          { fecha: 'asc' },
          { hora: 'asc' }
        ],
        skip,
        take: limitNum
      }),
      prisma.examen.count({ where: whereClause })
    ]);

    // Formatear respuesta para el backoffice
    const examenesFormateados = examenes.map(examen => {
      const inscriptosReales = examen.estudianteExamenes.length;
      const necesitaAula = !examen.aula && examen.cantidadInscriptos > 0;
      const tieneConflictoInscriptos = examen.aula && examen.cantidadInscriptos > examen.aula.capacidad;

      return {
        id: examen.id,
        nombreMateria: examen.nombreMateria,
        fecha: examen.fecha?.toISOString().split('T')[0],
        hora: examen.hora?.toTimeString().split(' ')[0],
        tipoExamen: examen.tipoExamen,
        modalidadExamen: examen.modalidadExamen,
        
        // Información de inscriptos
        cantidadInscriptos: examen.cantidadInscriptos || 0,
        inscriptosReales: inscriptosReales,
        fechaUltConsulta: examen.fechaUltConsulta,
        necesitaActualizacion: !examen.fechaUltConsulta || 
          (Date.now() - new Date(examen.fechaUltConsulta).getTime()) > (24 * 60 * 60 * 1000), // Más de 24h
        
        // Información académica
        carrera: {
          id: examen.carrera.id,
          nombre: examen.carrera.nombre,
          codigo: examen.carrera.codigo
        },
        facultad: {
          id: examen.facultad.id,
          nombre: examen.facultad.nombre,
          codigo: examen.facultad.codigo
        },
        
        // Información de aula
        aula: examen.aula ? {
          id: examen.aula.id,
          nombre: examen.aula.nombre,
          capacidad: examen.aula.capacidad,
          sede: examen.aula.sede,
          ocupacion: examen.cantidadInscriptos,
          porcentajeOcupacion: Math.round((examen.cantidadInscriptos / examen.aula.capacidad) * 100)
        } : null,
        
        // Estados y alertas
        estados: {
          necesitaAula: necesitaAula,
          tieneConflictoCapacidad: tieneConflictoInscriptos,
          tieneInscriptos: examen.cantidadInscriptos > 0,
          puedeAsignarAula: examen.cantidadInscriptos > 0 && !examen.aula,
          requiereRevision: necesitaAula || tieneConflictoInscriptos
        },
        
        // Información TOTEM original
        totem: examen.examenTotem ? {
          materiaCode: examen.examenTotem.materiaTotem,
          areaTema: examen.examenTotem.areaTemaTotem,
          sector: examen.examenTotem.sectorTotem,
          carrera: examen.examenTotem.carreraTotem
        } : null,
        
        // Control
        activo: examen.activo,
        createdAt: examen.createdAt,
        updatedAt: examen.updatedAt
      };
    });

    // Estadísticas generales
    const estadisticas = {
      total: totalCount,
      enPagina: examenesFormateados.length,
      pagina: pageNum,
      totalPaginas: Math.ceil(totalCount / limitNum),
      
      // Contadores útiles
      sinAula: examenesFormateados.filter(e => e.estados.necesitaAula).length,
      conConflictos: examenesFormateados.filter(e => e.estados.tieneConflictoCapacidad).length,
      sinInscriptos: examenesFormateados.filter(e => !e.estados.tieneInscriptos).length,
      requierenRevision: examenesFormateados.filter(e => e.estados.requiereRevision).length,
      necesitanActualizacion: examenesFormateados.filter(e => e.necesitaActualizacion).length
    };

    return res.status(200).json({
      success: true,
      data: {
        examenes: examenesFormateados,
        estadisticas,
        filtros: {
          fecha,
          facultadId: facultadId ? parseInt(facultadId) : null,
          sinAula: sinAula === 'true',
          conInscriptos: conInscriptos === 'true'
        },
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error obteniendo exámenes para backoffice:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
}

export default withCors(handler);
