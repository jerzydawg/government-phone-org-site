import type { APIRoute } from 'astro';
import { getSiteURL } from '../lib/site-config';

export const GET: APIRoute = async () => {
  const SITE_URL = getSiteURL();
  
  const robotsTxt = `# Robots.txt for ${SITE_URL}
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};





