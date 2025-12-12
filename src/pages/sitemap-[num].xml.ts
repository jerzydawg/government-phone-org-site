import type { APIRoute } from 'astro';
import { supabase } from '../lib/supabase';
import { getSiteURL, useSubdomains, getStateSubdomainURL } from '../lib/site-config';
import { getCitiesForSitemap, generateCitySitemapXML, shuffleStates, shuffleStaticPages } from '../lib/sitemap-utils';

const URLS_PER_SITEMAP = 10000;

// Dynamic sitemap route - handles sitemap-main.xml and sitemap-2.xml through sitemap-N.xml
export const GET: APIRoute = async ({ params }) => {
  const num = params.num;
  const SITE_URL = getSiteURL();
  const today = new Date().toISOString().split('T')[0];

  // Handle sitemap-main.xml (static pages + state pages)
  if (num === 'main') {
    // Static pages - shuffled per domain (homepage always first)
    const staticPages = shuffleStaticPages([
      '',
      '/eligibility',
      '/programs',
      '/providers',
      '/faq',
      '/contact',
      '/apply',
      '/lifeline-program',
      '/acp-program',
      '/tribal-programs',
      '/state-programs',
      '/emergency-broadband',
      '/free-government-phone-near-me',
      '/states',
    ]);

    // Fetch all states
    let states: Array<{ name: string; abbreviation: string }> = [];
    if (supabase) {
      try {
        const { data } = await supabase
          .from('states')
          .select('name, abbreviation')
          .order('name');
        if (data) states = data;
      } catch (e) {
        console.error('Error fetching states for sitemap:', e);
      }
    }

    // Shuffle states per domain for unique ordering
    const shuffledStates = shuffleStates(states);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static pages - match reference site: changefreq=monthly for static pages, weekly for homepage
    for (const page of staticPages) {
      xml += `  <url>
    <loc>${SITE_URL}${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
    }

    // Add state pages - use subdomain format if enabled (e.g., nj.free-government-phone.org)
    const useSubdomainMode = useSubdomains();
    for (const state of shuffledStates) {
      const stateUrl = useSubdomainMode 
        ? getStateSubdomainURL(state.abbreviation.toLowerCase())
        : `${SITE_URL}/${state.abbreviation.toLowerCase()}/`;
      xml += `  <url>
    <loc>${stateUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    }

    xml += `</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // Handle numeric sitemap files (sitemap-2.xml, sitemap-3.xml, etc.)
  const sitemapNum = parseInt(num || '2', 10);
  
  if (isNaN(sitemapNum) || sitemapNum < 2) {
    return new Response('Invalid sitemap number', { status: 404 });
  }

  // Calculate offset: sitemap-2 = 0-9999, sitemap-3 = 10000-19999, etc.
  const offset = (sitemapNum - 2) * URLS_PER_SITEMAP;
  
  try {
    const cities = await getCitiesForSitemap(offset, URLS_PER_SITEMAP);
    const xml = generateCitySitemapXML(cities);

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error(`[Sitemap] Error generating sitemap-${sitemapNum}.xml:`, error);
    return new Response('Error generating sitemap', { status: 500 });
  }
};

