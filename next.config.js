/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para despliegue estático (activado para export)
  output: 'export',
  trailingSlash: true,
  basePath: '/proyectos-innovalab/backoffice',
  assetPrefix: '/proyectos-innovalab/backoffice',
  
  // Configuración mínima para API
  serverExternalPackages: ['@prisma/client'],
  
  // Deshabilitar optimizaciones de frontend
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ['src'],
    // Ignorar errores de ESLint durante build para Railway
    ignoreDuringBuilds: true,
  },
  
  // Configuración menos estricta para TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Headers no funcionan con export, comentados para build
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Origin', value: '*' },
  //         { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
  //         { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization, X-Requested-With' },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig; 