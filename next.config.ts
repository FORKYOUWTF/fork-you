import type { NextConfig } from 'next';

const pages = process.env.FORK_YOU_PAGES === '1';

const nextConfig: NextConfig = pages
  ? {
      output: 'export',
      basePath: process.env.FORK_YOU_PAGES_BASE_PATH ?? '/fork-you',
      trailingSlash: true,
    }
  : {};

export default nextConfig;
