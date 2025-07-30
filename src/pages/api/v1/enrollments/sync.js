import { dailyEnrollmentSync } from '../../../../controllers/enrollmentSync.js';
import { withCors } from '../../../../lib/cors.js';

async function handler(req, res) {
  if (req.method === 'POST') {
    return await dailyEnrollmentSync(req, res);
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}

export default withCors(handler);
