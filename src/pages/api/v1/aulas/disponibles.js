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
      hora, 
      capacidadMinima,
      examenId 
    } = req.query;

    // Obtener todas las aulas activas
    let whereClause = {
      activa: true
    };

    // Filtro por capacidad mínima
    if (capacidadMinima && !isNaN(parseInt(capacidadMinima))) {
      whereClause.capacidad = {
        gte: parseInt(capacidadMinima)
      };
    }

    const aulas = await prisma.aula.findMany({
      where: whereClause,
      orderBy: [
        { capacidad: 'asc' },
        { nombre: 'asc' }
      ]
    });

    // Si se proporciona fecha y hora, verificar disponibilidad
    let aulasConDisponibilidad = [];
    
    if (fecha && hora) {
      const fechaConsulta = new Date(fecha);
      const horaConsulta = hora;
      
      for (const aula of aulas) {
        // Buscar conflictos en esa fecha/hora
        const conflictos = await prisma.examen.findMany({
          where: {
            aulaId: aula.id,
            fecha: fechaConsulta,
            hora: {
              // Comparar solo la parte de tiempo (HH:MM)
              gte: new Date(`1970-01-01T${horaConsulta}:00`),
              lt: new Date(`1970-01-01T${horaConsulta}:59`)
            },
            activo: true,
            // Excluir el examen actual si se está reasignando
            ...(examenId && { id: { not: parseInt(examenId) } })
          },
          include: {
            carrera: true
          }
        });

        // Calcular ocupación total en esa fecha/hora
        const ocupacionTotal = conflictos.reduce((total, examen) => {
          return total + (examen.cantidadInscriptos || 0);
        }, 0);

        aulasConDisponibilidad.push({
          id: aula.id,
          nombre: aula.nombre,
          sede: aula.sede,
          capacidad: aula.capacidad,
          disponible: conflictos.length === 0,
          ocupacionActual: ocupacionTotal,
          capacidadDisponible: Math.max(0, aula.capacidad - ocupacionTotal),
          porcentajeOcupacion: Math.round((ocupacionTotal / aula.capacidad) * 100),
          conflictos: conflictos.map(c => ({
            id: c.id,
            materia: c.nombreMateria,
            carrera: c.carrera.nombre,
            inscriptos: c.cantidadInscriptos
          }))
        });
      }
    } else {
      // Sin filtro de fecha/hora, solo mostrar información básica
      aulasConDisponibilidad = aulas.map(aula => ({
        id: aula.id,
        nombre: aula.nombre,
        sede: aula.sede,
        capacidad: aula.capacidad,
        disponible: null, // No se puede determinar sin fecha/hora
        ocupacionActual: null,
        capacidadDisponible: aula.capacidad,
        porcentajeOcupacion: 0,
        conflictos: []
      }));
    }

    // Ordenar por disponibilidad y capacidad
    aulasConDisponibilidad.sort((a, b) => {
      // Primero las disponibles
      if (a.disponible !== b.disponible) {
        return b.disponible - a.disponible;
      }
      // Luego por capacidad (menor primero para optimizar)
      return a.capacidad - b.capacidad;
    });

    // Estadísticas
    const estadisticas = {
      totalAulas: aulasConDisponibilidad.length,
      disponibles: aulasConDisponibilidad.filter(a => a.disponible === true).length,
      ocupadas: aulasConDisponibilidad.filter(a => a.disponible === false).length,
      capacidadTotal: aulasConDisponibilidad.reduce((sum, a) => sum + a.capacidad, 0),
      capacidadDisponible: aulasConDisponibilidad.reduce((sum, a) => sum + (a.capacidadDisponible || 0), 0)
    };

    return res.status(200).json({
      success: true,
      data: {
        aulas: aulasConDisponibilidad,
        estadisticas,
        filtros: {
          fecha,
          hora,
          capacidadMinima: capacidadMinima ? parseInt(capacidadMinima) : null,
          examenId: examenId ? parseInt(examenId) : null
        },
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error obteniendo aulas disponibles:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
}

export default withCors(handler);
