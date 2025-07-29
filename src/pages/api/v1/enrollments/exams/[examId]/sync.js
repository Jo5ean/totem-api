import { syncSingleExamEnrollment } from '../../../../../../controllers/enrollmentSync.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract examId from query params
    req.params = { examId: req.query.examId };
    return await syncSingleExamEnrollment(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
