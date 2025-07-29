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
 */
export const syncSingleExamEnrollment = async (req, res) => {
  const { examId } = req.params;

  try {
    console.log(`🔄 Syncing enrollment for exam ${examId}...`);

    const exam = await prisma.examen.findUnique({
      where: { id: parseInt(examId) },
      include: { 
        carrera: { include: { facultad: true } },
        facultad: true 
      }
    });

    if (!exam) {
      return res.status(404).json({ 
        success: false, 
        error: 'Exam not found' 
      });
    }

    // Fetch enrollment data from external system
    const enrollmentCount = await fetchEnrollmentFromExternalAPI(exam);
    
    if (enrollmentCount === null) {
      return res.status(400).json({
        success: false,
        error: 'No enrollment data available from external system'
      });
    }

    // Update exam with new enrollment count
    const updatedExam = await prisma.examen.update({
      where: { id: exam.id },
      data: { 
        cantidadInscriptos: enrollmentCount,
        fechaUltConsulta: new Date()
      },
      include: {
        carrera: { include: { facultad: true } },
        aula: true
      }
    });

    console.log(`✅ Exam ${examId} updated with ${enrollmentCount} students`);

    res.json({
      success: true,
      message: `Enrollment data updated: ${enrollmentCount} students`,
      data: {
        exam: updatedExam,
        enrollmentCount,
        lastSync: new Date()
      }
    });

  } catch (error) {
    console.error(`❌ Error syncing exam ${examId}:`, error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to sync exam enrollment data',
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
 */
async function fetchEnrollmentFromExternalAPI(exam) {
  try {
    // Mock implementation - replace with actual external API call
    // In production, this would call the real enrollment system
    
    const params = {
      subjectId: exam.materia_codigo,
      areaTema: exam.areatema || '',
      date: exam.fecha.toISOString().split('T')[0],
      timeSlot: exam.hora ? exam.hora.toTimeString().slice(0, 5) : ''
    };

    console.log(`📡 Fetching enrollment for:`, params);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Mock response - in production, replace with:
    // const response = await axios.get(`${EXTERNAL_API_URL}/enrollments`, {
    //   params,
    //   headers: { 'Authorization': `Bearer ${API_KEY}` }
    // });
    // return response.data.count;

    // Return mock data for testing
    return Math.floor(Math.random() * 150) + 10;

  } catch (error) {
    console.error('Error fetching enrollment from external API:', error);
    return null;
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
