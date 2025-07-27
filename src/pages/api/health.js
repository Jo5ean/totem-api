export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido'
    });
  }

  return res.status(200).json({
    success: true,
    status: 'funcionando',
    message: 'TOTEM API está funcionando correctamente',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
} 