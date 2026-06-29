import { getEnrollmentStatistics } from '../../../../controllers/enrollmentSync.js';
import { withCors } from '../../../../lib/cors.js';

async function handler(req, res) {
  if (req.method === 'GET') {
    return await getEnrollmentStatistics(req, res);
  } else {
    res.setHeader('Allow', ['GET', 'OPTIONS']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}

export default withCors(handler);
