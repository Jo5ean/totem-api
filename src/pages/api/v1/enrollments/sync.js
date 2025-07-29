import { dailyEnrollmentSync } from '../../../../controllers/enrollmentSync.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await dailyEnrollmentSync(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
