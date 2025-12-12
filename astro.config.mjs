// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
// Site URL is set dynamically via PUBLIC_SITE_URL or SITE_URL env variable
// Falls back to domain from site-config.json if available
// Use PUBLIC_SITE_URL if available, fallback to SITE_URL, then try to get from site-config
const siteURL = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || null;

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()],
  site: siteURL || 'https://example.com', // Will be replaced during deployment with actual domain
  server: { port: 4321, host: true },
  build: { inlineStylesheets: 'auto' }
});
