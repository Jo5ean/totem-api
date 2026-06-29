import prisma from '../lib/db.js';
import ActaExternaService from '../services/actaExternaService.js';

const actaService = new ActaExternaService();

/**
 * Daily enrollment synchronization (cron job)
 * Syncs all active exams with UCASAL API using real enrollment data
 * 🕐 Designed to run automatically every early morning (e.g., 4:00 AM)
 * 📊 When administrators arrive, enrollment data is already updated
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
        console.log(`� Processing exam ${exam.id}: ${exam.nombreMateria}`);
        
        // Obtener datos del TOTEM para materia y areaTema
        const examenConTotem = await prisma.examen.findUnique({
          where: { id: exam.id },
          include: { examenTotem: true }
        });

        let codigoMateria = null;
        let areaTema = null;
        let carreraTotem = null;
        
        if (examenConTotem?.examenTotem) {
          codigoMateria = examenConTotem.examenTotem.materiaTotem;
          areaTema = examenConTotem.examenTotem.areaTemaTotem;
          carreraTotem = examenConTotem.examenTotem.carreraTotem;
        }

        if (!codigoMateria) {
          console.log(`⚠️ Exam ${exam.id} sin código de materia, saltando...`);
          continue;
        }

        // Consultar UCASAL con la misma lógica que syncSingleExamEnrollment
        const enrollmentCount = await consultarInscriptosUCASAL(codigoMateria, areaTema, exam.id, carreraTotem, examenConTotem.docente);
        
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
          totalErrors++;
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

    // Usar servicio centralizado para consultar UCASAL
    let enrollmentResult;
    
    console.log(`📡 Consultando materia ${codigoMateria} con areaTema ${areaTema}`);

    try {
      const result = await actaService.obtenerInscriptosExamen(codigoMateria, areaTema, exam.fecha, carreraTotem, exam.docente);
      
      enrollmentResult = {
        success: true,
        cantidadInscriptos: result.totalAlumnos,
        inscriptos: result.alumnos.map(a => ({
          dni: a.dni,
          nombre: a.nombre,
          lugar: 'SALTA - DISTANCIA',
          sector: '',
          modo: ''
        })),
        fechaConsulta: new Date()
      };
      
      console.log(`🎓 Inscriptos encontrados: ${result.totalAlumnos}`);
      
    } catch (error) {
      console.error('❌ Error consultando UCASAL:', error);
      enrollmentResult = {
        success: false,
        cantidadInscriptos: 0,
        inscriptos: [],
        fechaConsulta: new Date(),
        error: error.message
      };
    }

    const cantidadInscriptos = enrollmentResult.cantidadInscriptos || 0;

    // Update exam with new enrollment count
    const updatedExam = await prisma.examen.update({
      where: { id: exam.id },
      data: { 
        cantidadInscriptos: cantidadInscriptos,
        fechaUltConsulta: new Date()
      },
      include: {
        carrera: { include: { facultad: true } },
        aula: true
      }
    });

    console.log(`✅ Exam ${examId} updated with ${cantidadInscriptos} students`);

    res.json({
      success: enrollmentResult.success !== false, // Si no hay error explícito, consideramos éxito
      message: enrollmentResult.error 
        ? `Sincronización completada con advertencias: ${enrollmentResult.error}` 
        : `Sincronización de inscriptos completada para examen ${examId}`,
      data: {
        enrollmentCount: cantidadInscriptos, // 🔧 CORRECCIÓN: usar enrollmentCount para consistencia
        cantidadInscriptos: cantidadInscriptos, // Mantener también para compatibilidad
        exam: {
          id: updatedExam.id,
          nombre: updatedExam.nombreMateria,
          fecha: updatedExam.fecha,
          hora: updatedExam.hora,
          carrera: updatedExam.carrera.nombre,
          facultad: updatedExam.carrera.facultad.nombre,
          aula: updatedExam.aula,
          materiaCode: codigoMateria,
          areaTema: areaTema,
          criteriosFiltrado: {
            codigoMateria: codigoMateria,
            areaTema: areaTema,
            lugar: "3"
          }
        },
        inscriptos: enrollmentResult.inscriptos || [],
        lastSync: new Date(),
        warning: enrollmentResult.error // Incluimos advertencia si la hay
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
 * Consultar inscriptos en UCASAL usando servicio centralizado
 */
async function consultarInscriptosUCASAL(codigoMateria, areaTema, examId, carreraTotem = null, docenteDB = null) {
  try {
    const result = await actaService.obtenerInscriptosExamen(codigoMateria, areaTema, null, carreraTotem, docenteDB);
    console.log(`🎓 Exam ${examId}: ${result.totalAlumnos} inscriptos encontrados`);
    return result.totalAlumnos;
  } catch (error) {
    console.error(`❌ Error consultando UCASAL para exam ${examId}:`, error.message);
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
