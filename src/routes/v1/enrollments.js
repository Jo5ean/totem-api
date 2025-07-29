import express from 'express';
import {
  dailyEnrollmentSync,
  syncSingleExamEnrollment,
  getSyncStatus,
  getEnrollmentStatistics
} from '../../controllers/enrollmentSync.js';

const router = express.Router();

/**
 * @route POST /api/v1/enrollments/sync
 * @desc Trigger daily enrollment synchronization
 * @access Admin
 */
router.post('/sync', dailyEnrollmentSync);

/**
 * @route POST /api/v1/enrollments/exams/:examId/sync
 * @desc Sync enrollment data for a specific exam
 * @access Admin
 */
router.post('/exams/:examId/sync', syncSingleExamEnrollment);

/**
 * @route GET /api/v1/enrollments/status
 * @desc Get synchronization status and last sync info
 * @access Admin
 */
router.get('/status', getSyncStatus);

/**
 * @route GET /api/v1/enrollments/statistics
 * @desc Get enrollment statistics for dashboard
 * @access Admin
 */
router.get('/statistics', getEnrollmentStatistics);

export default router;
