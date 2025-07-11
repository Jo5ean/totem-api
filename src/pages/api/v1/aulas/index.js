import { prisma } from '../../../../lib/db.js';

export default async function handler(req, res) {
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
  } finally {
    await prisma.$disconnect();
  }
}

// GET /api/v1/aulas - Obtener todas las aulas
async function getAulas(req, res) {
  try {
    const { activa, sede } = req.query;
    
    const filtros = {};
    
    // Filtrar por activa
    if (activa !== undefined) {
      filtros.activa = activa === 'true';
    }
    
    // Filtrar por sede
    if (sede) {
      filtros.sede = sede;
    }
    
    const aulas = await prisma.aula.findMany({
      where: filtros,
      orderBy: [
        { sede: 'asc' },
        { nombre: 'asc' }
      ]
    });
    
    // Sin estadísticas por ahora - solo devolver aulas básicas
    const aulasConEstadisticas = aulas.map(aula => ({
      ...aula
    }));
    
    return res.status(200).json({
      success: true,
      aulas: aulasConEstadisticas,
      total: aulasConEstadisticas.length
    });
    
  } catch (error) {
    console.error('Error obteniendo aulas:', error);
    return res.status(500).json({ 
      error: 'Error obteniendo aulas',
      message: error.message 
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