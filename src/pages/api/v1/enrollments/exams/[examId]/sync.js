import { syncSingleExamEnrollment } from '../../../../../../controllers/enrollmentSync.js';
import { withCors } from '../../../../../../lib/cors.js';

async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract examId from query params
    req.params = { examId: req.query.examId };
    return await syncSingleExamEnrollment(req, res);
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}

export default withCors(handler);
