import { withCors } from '../../../../lib/cors.js';
import { getBatchStatus } from '../../../../lib/inscriptosBatchStore.js';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Usar GET.'
    });
  }

  const status = getBatchStatus();

  return res.status(200).json({
    success: true,
    data: status
  });
}

export default withCors(handler);
