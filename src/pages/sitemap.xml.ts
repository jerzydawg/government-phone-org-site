import type { APIRoute } from 'astro';
import { getSiteURL } from '../lib/site-config';
import { supabase } from '../lib/supabase';

// Sitemap index - references multiple sitemap files
export const GET: APIRoute = async () => {
  try {
    const SITE_URL = getSiteURL();
    const today = new Date().toISOString().split('T')[0];

    // Calculate how many city sitemap files we need
    // Each sitemap file contains max 10,000 URLs
    // Example: 40k cities = 4 files (sitemap-2 through sitemap-5), 45k cities = 5 files (sitemap-2 through sitemap-6)
    const URLS_PER_SITEMAP = 10000;
    let citySitemapCount = 4; // Default to 4 files (covers 40k cities: sitemap-2 through sitemap-5)
    
    // Try to get actual city count to calculate needed sitemap files
    if (supabase) {
      try {
        const { count } = await supabase
          .from('cities')
          .select('*', { count: 'exact', head: true });
        
        if (count !== null) {
          // Calculate: (city count / URLs_PER_SITEMAP) rounded up
          // 40k cities = 4 files, 45k cities = 5 files
          citySitemapCount = Math.ceil(count / URLS_PER_SITEMAP);
          // Ensure minimum of 1 and maximum reasonable limit (10 files = 100k cities)
          citySitemapCount = Math.max(1, Math.min(citySitemapCount, 10));
        }
      } catch (e) {
        console.error('[Sitemap Index] Error getting city count, using default:', e);
      }
    }

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;

    // Add city sitemap files (sitemap-2.xml through sitemap-N.xml)
    // Loop logic: if citySitemapCount=4, loop goes i=2,3,4,5 → references sitemap-2,3,4,5 (4 files covering 40k cities)
    //             if citySitemapCount=5, loop goes i=2,3,4,5,6 → references sitemap-2,3,4,5,6 (5 files covering 50k cities)
    for (let i = 2; i <= citySitemapCount + 1; i++) {
      xml += `  <sitemap>
    <loc>${SITE_URL}/sitemap-${i}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;
    }

    xml += `</sitemapindex>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('[Sitemap Index] Error generating sitemap index:', error);
    // Return minimal valid sitemap index on error
    const SITE_URL = getSiteURL();
    const today = new Date().toISOString().split('T')[0];
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
    return new Response(errorXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300', // Shorter cache on error
      },
      status: 200,
    });
  }
};
