/**
 * Helper para configurar CORS en todos los endpoints
 * Resuelve problemas de preflight requests y headers
 */
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173',
  'https://wwwold.ucasal.edu.ar',
  'https://ucasal.edu.ar',
  'https://*.railway.app',
  'https://*.vercel.app',
  'https://*.netlify.app'
];

export function setCorsHeaders(res, origin) {
  // Verificar si el origen está permitido
  const isAllowedOrigin = allowedOrigins.some(allowed => {
    if (allowed.includes('*')) {
      // Para patrones con wildcard (ej: *.railway.app)
      return origin && origin.includes(allowed.replace('*.', ''));
    }
    // Para dominios exactos (ej: wwwold.ucasal.edu.ar)
    return origin === allowed;
  });

  if (isAllowedOrigin || !origin) {
    // Si el origen está permitido o no hay origen (requests locales)
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  } else {
    // Para debugging - log del origen rechazado
    console.log(`⚠️ CORS: Origen no permitido: ${origin}`);
    console.log(`📋 Orígenes permitidos:`, allowedOrigins);
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, Cache-Control, Pragma'
  );
  
  // Agregar headers adicionales para mejor compatibilidad
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 horas
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
}

/**
 * Middleware wrapper que aplica CORS y maneja OPTIONS
 */
export function withCors(handler) {
  return async (req, res) => {
    // Log para debugging CORS
    if (req.headers.origin) {
      console.log(`🌐 CORS Request: ${req.method} ${req.url} from ${req.headers.origin}`);
    }
    
    // Aplicar headers CORS
    setCorsHeaders(res, req.headers.origin);
    
    // Manejar preflight requests
    if (req.method === 'OPTIONS') {
      console.log('✅ CORS Preflight handled');
      res.status(200).end();
      return;
    }
    
    // Ejecutar el handler original
    return handler(req, res);
  };
} 