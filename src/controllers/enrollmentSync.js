import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

// Configuration for external enrollment API
const EXTERNAL_API_URL = process.env.EXTERNAL_ENROLLMENT_API_URL || 'https://api-externa-inscripciones.ucasal.edu.ar';
const API_KEY = process.env.EXTERNAL_API_KEY;

/**
 * Daily enrollment synchronization (cron job)
 * Syncs all active exams with external enrollment system
 */
export const dailyEnrollmentSync = async (req, res) => {
  const syncStart = new Date();
  let totalUpdated = 0;
  let totalErrors = 0;

  try {
    console.log('🔄 Starting daily enrollment sync...');
    
    // Get all active exams
    const exams = await prisma.examen.findMany({
      where: { activo: true },
      include: { 
        carrera: { include: { facultad: true } },
        facultad: true 
      }
    });

    console.log(`📊 Found ${exams.length} active exams to sync`);

    // Process each exam
    for (const exam of exams) {
      try {
        const enrollmentCount = await fetchEnrollmentFromExternalAPI(exam);
        
        if (enrollmentCount !== null) {
          await prisma.examen.update({
            where: { id: exam.id },
            data: { 
              cantidadInscriptos: enrollmentCount,
              fechaUltConsulta: new Date()
            }
          });
          totalUpdated++;
          console.log(`✅ Updated exam ${exam.id}: ${enrollmentCount} students`);
        } else {
          console.log(`⚠️ No enrollment data for exam ${exam.id}`);
        }
      } catch (error) {
        totalErrors++;
        console.error(`❌ Error syncing exam ${exam.id}:`, error.message);
        // Continue with next exam
      }
    }

    // Log the sync operation
    await logSyncOperation('DAILY_ENROLLMENT_SYNC', true, {
      totalExams: exams.length,
      totalUpdated,
      totalErrors,
      duration: new Date() - syncStart
    }, syncStart);

    const result = {
      success: true,
      message: `Daily sync completed: ${totalUpdated}/${exams.length} exams updated`,
      data: {
        totalExams: exams.length,
        totalUpdated,
        totalErrors,
        timestamp: new Date()
      }
    };

    console.log('✅ Daily enrollment sync completed:', result.message);
    
    if (res) {
      return res.json(result);
    }
    return result;

  } catch (error) {
    console.error('❌ Daily enrollment sync failed:', error);
    
    await logSyncOperation('DAILY_ENROLLMENT_SYNC', false, {
      error: error.message,
      totalUpdated,
      totalErrors
    }, syncStart);

    const errorResult = {
      success: false,
      error: 'Daily enrollment sync failed',
      details: error.message
    };

    if (res) {
      return res.status(500).json(errorResult);
    }
    throw error;
  }
};

/**
 * Manual sync for single exam
 * Triggered by "Ver Inscriptos" button in UI
 * ACTUALIZADO: Usar la lógica real de UCASAL en lugar de mock data
 */
export const syncSingleExamEnrollment = async (req, res) => {
  const { examId } = req.params;

  try {
    console.log(`🔄 Syncing enrollment for exam ${examId} using UCASAL API...`);

    const exam = await prisma.examen.findUnique({
      where: { id: parseInt(examId) },
      include: { 
        carrera: { include: { facultad: true } },
        aula: true,
        examenTotem: true
      }
    });

    if (!exam) {
      return res.status(404).json({ 
        success: false, 
        error: 'Examen no encontrado' 
      });
    }

    // Obtener datos del TOTEM para materia y areaTema
    let codigoMateria = null;
    let areaTema = null;
    let carreraTotem = null;
    
    if (exam.examenTotem) {
      codigoMateria = exam.examenTotem.materiaTotem;
      areaTema = exam.examenTotem.areaTemaTotem;
      carreraTotem = exam.examenTotem.carreraTotem;
    }

    if (!codigoMateria) {
      return res.status(400).json({
        success: false,
        error: 'No se encontró código de materia para consultar inscriptos',
        data: {
          exam: {
            id: exam.id,
            nombre: exam.nombreMateria,
            cantidadInscriptos: exam.cantidadInscriptos || 0
          }
        }
      });
    }

    // Usar la lógica real de consulta a UCASAL (igual que en examenes.js)
    const enrollmentResult = await fetchRealEnrollmentFromUcasal(exam, codigoMateria, areaTema, carreraTotem);
    
    if (!enrollmentResult.success) {
      return res.status(400).json({
        success: false,
        error: enrollmentResult.error || 'Error consultando API de UCASAL',
        data: {
          exam: {
            id: exam.id,
            nombre: exam.nombreMateria,
            cantidadInscriptos: exam.cantidadInscriptos || 0
          }
        }
      });
    }

    // Update exam with new enrollment count
    const updatedExam = await prisma.examen.update({
      where: { id: exam.id },
      data: { 
        cantidadInscriptos: enrollmentResult.cantidadInscriptos,
        fechaUltConsulta: new Date()
      },
      include: {
        carrera: { include: { facultad: true } },
        aula: true
      }
    });

    console.log(`✅ Exam ${examId} updated with ${enrollmentResult.cantidadInscriptos} students`);

    res.json({
      success: true,
      message: `Inscripciones actualizadas: ${enrollmentResult.cantidadInscriptos} estudiantes`,
      data: {
        exam: updatedExam,
        cantidadInscriptos: enrollmentResult.cantidadInscriptos,
        inscriptos: enrollmentResult.inscriptos || [],
        lastSync: new Date()
      }
    });

  } catch (error) {
    console.error(`❌ Error syncing exam ${examId}:`, error);
    res.status(500).json({ 
      success: false, 
      error: 'Error al sincronizar inscripciones',
      details: error.message
    });
  }
};

/**
 * Get sync status and statistics
 */
export const getSyncStatus = async (req, res) => {
  try {
    // Get last successful sync
    const lastSync = await prisma.syncLog.findFirst({
      where: { 
        tipo: 'DAILY_ENROLLMENT_SYNC',
        exitoso: true 
      },
      orderBy: { fechaFin: 'desc' }
    });

    // Get enrollment statistics
    const stats = await getEnrollmentStatistics();

    res.json({
      success: true,
      data: {
        lastSync: lastSync ? {
          timestamp: lastSync.fechaFin,
          details: JSON.parse(lastSync.detalle || '{}')
        } : null,
        statistics: stats,
        status: lastSync ? 'synced' : 'never'
      }
    });

  } catch (error) {
    console.error('Error getting sync status:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to get sync status' 
    });
  }
};

/**
 * Get enrollment statistics for dashboard
 */
export const getEnrollmentStatistics = async (req, res) => {
  try {
    const stats = await calculateEnrollmentStats();
    
    if (res) {
      res.json({
        success: true,
        data: stats
      });
    }
    return stats;

  } catch (error) {
    console.error('Error getting enrollment statistics:', error);
    const errorResult = { 
      success: false, 
      error: 'Failed to get enrollment statistics' 
    };
    
    if (res) {
      return res.status(500).json(errorResult);
    }
    throw error;
  }
};

/**
 * Fetch enrollment count from external API
 * DEPRECADO: Esta función usa mock data y será reemplazada
 */
async function fetchEnrollmentFromExternalAPI(exam) {
  try {
    console.log(`📡 Fetching enrollment for exam ${exam.id}:`, {
      materia_codigo: exam.materia_codigo,
      areatema: exam.areatema,
      fecha: exam.fecha?.toISOString(),
      hora: exam.hora?.toTimeString()
    });

    // Verificar variables de entorno
    if (!EXTERNAL_API_URL) {
      console.warn('⚠️ EXTERNAL_ENROLLMENT_API_URL no configurada, usando mock data');
      return Math.floor(Math.random() * 150) + 10;
    }

    if (!API_KEY) {
      console.warn('⚠️ EXTERNAL_API_KEY no configurada, usando mock data');
      return Math.floor(Math.random() * 150) + 10;
    }

    const params = {
      subjectId: exam.materia_codigo,
      areaTema: exam.areatema || '',
      date: exam.fecha.toISOString().split('T')[0],
      timeSlot: exam.hora ? exam.hora.toTimeString().slice(0, 5) : ''
    };

    console.log(`🔗 Calling external API: ${EXTERNAL_API_URL}/enrollments`);
    console.log(`📋 Parameters:`, params);

    // Realizar llamada a API externa con timeout
    const response = await axios.get(`${EXTERNAL_API_URL}/enrollments`, {
      params,
      headers: { 
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 segundos timeout
    });

    console.log(`✅ External API response:`, response.status, response.data);
    return response.data.count || 0;

  } catch (error) {
    console.error('❌ Error fetching enrollment from external API:', {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      status: error.response?.status
    });

    // Retornar null para indicar error, pero no fallar completamente
    return null;
  }
}

/**
 * Fetch real enrollment data from UCASAL API
 * Esta función replica la lógica de /examenes/:id/inscripciones
 */
async function fetchRealEnrollmentFromUcasal(exam, codigoMateria, areaTema, carreraTotem) {
  try {
    console.log(`🌐 Consultando UCASAL para examen ${exam.id}: materia=${codigoMateria}, areaTema=${areaTema}, carrera=${carreraTotem}`);

    // Construir fechas para la consulta
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

    const apiUrl = `https://sistemasweb-desa.ucasal.edu.ar/api/v1/acta/materia/${codigoMateria}?rendida=false&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
    
    console.log(`🔗 Consultando UCASAL: ${apiUrl}`);
    
    // Realizar llamada con timeout
    const response = await axios.get(apiUrl, { 
      timeout: 8000 // 8 segundos timeout
    });
    
    if (response.status !== 200) {
      throw new Error(`Error UCASAL: ${response.status} - ${response.statusText}`);
    }

    const datosCompletos = response.data;
    
    if (!Array.isArray(datosCompletos)) {
      console.warn('Respuesta de UCASAL no es un array:', datosCompletos);
      return { success: false, error: 'Formato de respuesta inválido de UCASAL' };
    }

    // Filtrar por areaTema y carrera
    console.log(`🔍 Aplicando filtro: areaTema=${areaTema} && carrera=${carreraTotem}`);
    
    const inscriptosFiltrados = datosCompletos.filter(registro => {
      const cumpleAreaTema = areaTema ? registro.areaTema == areaTema : true;
      const cumpleCarrera = carreraTotem ? registro.carrera == carreraTotem : true;
      const tieneAlumnos = registro.alumnos && registro.alumnos.length > 0;
      
      return cumpleAreaTema && cumpleCarrera && tieneAlumnos;
    });

    console.log(`✅ Después del filtro: ${inscriptosFiltrados.length} registros válidos`);

    // Extraer todos los alumnos de los registros filtrados
    let todosLosInscriptos = [];
    inscriptosFiltrados.forEach(registro => {
      if (registro.alumnos && Array.isArray(registro.alumnos)) {
        todosLosInscriptos = todosLosInscriptos.concat(registro.alumnos);
      }
    });

    console.log(`📊 Total de inscriptos encontrados: ${todosLosInscriptos.length}`);

    // Filtrar ÚNICAMENTE por LUGAR "3" (SALTA - DISTANCIA)
    const inscriptosVirtuales = todosLosInscriptos.filter(inscripto => {
      return inscripto.lugar === "3";
    });

    console.log(`🎓 Inscriptos con LUGAR=3: ${inscriptosVirtuales.length} de ${todosLosInscriptos.length} totales`);

    // Formatear inscriptos virtuales
    const inscriptosFormateados = inscriptosVirtuales.map(inscripto => ({
      dni: inscripto.ndocu,
      nombre: inscripto.apen,
      lugar: inscripto.nombreLugar,
      sector: inscripto.nombreSector,
      modo: inscripto.nombreModo,
      fechaInscripcion: inscripto.fecActa
    }));

    return {
      success: true,
      cantidadInscriptos: inscriptosVirtuales.length,
      inscriptos: inscriptosFormateados,
      fechaConsulta: new Date()
    };

  } catch (error) {
    console.error('❌ Error consultando UCASAL:', error);
    return {
      success: false,
      error: error.message || 'Error conectando con UCASAL'
    };
  }
}

/**
 * Calculate enrollment statistics
 */
async function calculateEnrollmentStats() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  // Total enrolled students
  const totalInscriptos = await prisma.examen.aggregate({
    _sum: { cantidadInscriptos: true },
    where: { 
      activo: true,
      cantidadInscriptos: { not: null }
    }
  });

  // Enrollments by faculty
  const porFacultad = await prisma.examen.groupBy({
    by: ['facultadId'],
    _sum: { cantidadInscriptos: true },
    where: { 
      activo: true,
      cantidadInscriptos: { not: null }
    },
    include: {
      facultad: { select: { nombre: true } }
    }
  });

  // Enrollments by time slot
  const porHora = await prisma.examen.groupBy({
    by: ['hora'],
    _sum: { cantidadInscriptos: true },
    where: { 
      activo: true,
      cantidadInscriptos: { not: null }
    }
  });

  // Enrollments by date
  const porFecha = await prisma.examen.groupBy({
    by: ['fecha'],
    _sum: { cantidadInscriptos: true },
    where: { 
      activo: true,
      cantidadInscriptos: { not: null },
      fecha: { gte: startOfWeek }
    }
  });

  return {
    totalInscriptos: totalInscriptos._sum.cantidadInscriptos || 0,
    porFacultad: porFacultad.reduce((acc, item) => {
      acc[item.facultadId] = item._sum.cantidadInscriptos || 0;
      return acc;
    }, {}),
    porHora: porHora.reduce((acc, item) => {
      const hora = item.hora ? item.hora.toTimeString().slice(0, 5) : 'Sin hora';
      acc[hora] = item._sum.cantidadInscriptos || 0;
      return acc;
    }, {}),
    porFecha: porFecha.reduce((acc, item) => {
      const fecha = item.fecha.toISOString().split('T')[0];
      acc[fecha] = item._sum.cantidadInscriptos || 0;
      return acc;
    }, {})
  };
}

/**
 * Log sync operation
 */
async function logSyncOperation(tipo, exitoso, detalle, fechaInicio) {
  try {
    await prisma.syncLog.create({
      data: {
        tipo,
        exitoso,
        detalle: JSON.stringify(detalle),
        fechaInicio,
        fechaFin: new Date()
      }
    });
  } catch (error) {
    console.error('Error logging sync operation:', error);
  }
}
