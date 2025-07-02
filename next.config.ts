import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/proyectos-innovalab/backoffice',
  assetPrefix: '/proyectos-innovalab/backoffice',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig; 