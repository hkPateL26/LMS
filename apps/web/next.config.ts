import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ...(process.env.DOCKER_BUILD === 'true' ? { output: 'standalone' as const } : {}),
  transpilePackages: ['@launchpad/components', '@launchpad/types', '@launchpad/utils'],
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
