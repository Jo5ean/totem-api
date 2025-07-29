import { getSyncStatus } from '../../../../controllers/enrollmentSync.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getSyncStatus(req, res);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
