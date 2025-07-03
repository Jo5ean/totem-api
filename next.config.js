/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para API server (NO export estático)
  // output: 'export', // ❌ REMOVIDO: Desactiva las API routes
  
  // Configuración para servidor API
  serverExternalPackages: ['@prisma/client'],
  
  // Optimizaciones para API
  eslint: {
    dirs: ['src'],
    // Ignorar errores de ESLint durante build para Railway
    ignoreDuringBuilds: true,
  },
  
  // Configuración menos estricta para TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Headers CORS para API
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization, X-Requested-With' },
        ],
      },
    ];
  },
  
  // Configuración experimental para API routes
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    }
  }
};

export default nextConfig; 