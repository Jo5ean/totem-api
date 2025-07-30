import prisma from '../../../../lib/db.js';
import { withCors } from '../../../../lib/cors.js';

async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        return await getAulas(req, res);
      case 'POST':
        return await createAula(req, res);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ error: `Método ${method} no permitido` });
    }
  } catch (error) {
    console.error('Error en endpoint aulas:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      message: error.message 
    });
  }
}

export default withCors(handler);

// GET /api/v1/aulas - Obtener todas las aulas
async function getAulas(req, res) {
  try {
    const { activa, sede } = req.query;
    
    console.log('🔍 GET /api/v1/aulas - Parámetros:', { activa, sede });
    
    const filtros = {};
    
    // Filtrar por activa (por defecto solo activas)
    if (activa !== undefined) {
      filtros.activa = activa === 'true';
    } else {
      filtros.activa = true; // Por defecto solo aulas activas
    }
    
    // Filtrar por sede
    if (sede) {
      filtros.sede = sede;
    }
    
    console.log('📋 Filtros aplicados:', filtros);
    
    const aulas = await prisma.aula.findMany({
      where: filtros,
      orderBy: [
        { sede: 'asc' },
        { nombre: 'asc' }
      ]
    });
    
    console.log(`✅ Encontradas ${aulas.length} aulas`);
    
    // Agregar estadísticas básicas
    const aulasConEstadisticas = aulas.map(aula => ({
      ...aula,
      estadisticas: {
        examenesAsignados: 0, // Se puede calcular si es necesario
        capacidadDisponible: aula.capacidad,
        porcentajeOcupacion: 0
      }
    }));
    
    return res.status(200).json({
      success: true,
      aulas: aulasConEstadisticas,
      total: aulasConEstadisticas.length,
      filtros: filtros,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error obteniendo aulas:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Error obteniendo aulas',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

// POST /api/v1/aulas - Crear nueva aula
async function createAula(req, res) {
  try {
    const { nombre, sede, capacidad } = req.body;
    
    // Validaciones
    if (!nombre || !sede || !capacidad) {
      return res.status(400).json({ 
        error: 'Datos requeridos faltantes',
        required: ['nombre', 'sede', 'capacidad']
      });
    }
    
    if (capacidad <= 0) {
      return res.status(400).json({ 
        error: 'La capacidad debe ser mayor a 0'
      });
    }
    
    // Verificar si ya existe un aula con el mismo nombre en la misma sede
    const aulaExistente = await prisma.aula.findFirst({
      where: {
        nombre: nombre.trim(),
        sede: sede.trim()
      }
    });
    
    if (aulaExistente) {
      return res.status(400).json({ 
        error: 'Ya existe un aula con ese nombre en la sede especificada'
      });
    }
    
    // Crear nueva aula
    const nuevaAula = await prisma.aula.create({
      data: {
        nombre: nombre.trim(),
        sede: sede.trim(),
        capacidad: parseInt(capacidad),
        activa: true
      }
    });
    
    return res.status(201).json({
      success: true,
      aula: nuevaAula,
      message: 'Aula creada exitosamente'
    });
    
  } catch (error) {
    console.error('Error creando aula:', error);
    return res.status(500).json({ 
      error: 'Error creando aula',
      message: error.message 
    });
  }
} 