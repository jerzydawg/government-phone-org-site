import type { APIRoute } from 'astro';
import { supabase } from '../lib/supabase';
import { getSiteURL } from '../lib/site-config';
import { createCitySlug } from '../lib/slug-utils.js';

export const GET: APIRoute = async () => {
  const SITE_URL = getSiteURL();
  
  // Static pages
  const staticPages = [
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
  ];

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

  // Fetch all cities for sitemap (with pagination to get all 40k+ cities)
  let cities: Array<{ name: string; state_abbr: string }> = [];
  if (supabase) {
    try {
      // Fetch all cities using pagination (Supabase default limit is 1000)
      const pageSize = 1000;
      let hasMore = true;
      let page = 0;
      let totalFetched = 0;
      
      while (hasMore) {
        const { data, error } = await supabase
          .from('cities')
          .select('name, states(abbreviation)')
          .order('population', { ascending: false })
          .range(page * pageSize, (page + 1) * pageSize - 1);
        
        if (error) {
          console.error(`[Sitemap] Error fetching cities page ${page}:`, error);
          // Try to continue with next page, but log the error
          page++;
          // Safety check: if we've tried many pages and keep failing, break
          if (page > 100) {
            console.error('[Sitemap] Too many errors, stopping pagination');
            break;
          }
          continue;
        }
        
        if (data && data.length > 0) {
          const pageCities = data.map((city: any) => ({
            name: city.name,
            state_abbr: city.states?.abbreviation || ''
          })).filter((c: any) => c.state_abbr && c.name);
          
          cities.push(...pageCities);
          totalFetched += pageCities.length;
          
          // Log progress every 10 pages
          if (page % 10 === 0) {
            console.log(`[Sitemap] Fetched ${totalFetched} cities (page ${page})`);
          }
          
          // If we got fewer than pageSize, we've reached the end
          if (data.length < pageSize) {
            hasMore = false;
          } else {
            page++;
          }
        } else {
          hasMore = false;
        }
      }
      
      console.log(`[Sitemap] Total cities fetched: ${cities.length}`);
    } catch (e) {
      console.error('[Sitemap] Error fetching cities for sitemap:', e);
    }
  }

  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  for (const page of staticPages) {
    xml += `  <url>
    <loc>${SITE_URL}${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
  }

  // Add state pages
  for (const state of states) {
    xml += `  <url>
    <loc>${SITE_URL}/${state.abbreviation.toLowerCase()}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  // Add city pages (deduplicate by URL)
  const cityUrls = new Set<string>();
  for (const city of cities) {
    const citySlug = createCitySlug(city.name);
    const cityUrl = `${SITE_URL}/${city.state_abbr.toLowerCase()}/${citySlug}/`;
    
    // Skip if URL already exists (prevent duplicates)
    if (cityUrls.has(cityUrl)) {
      continue;
    }
    cityUrls.add(cityUrl);
    
    xml += `  <url>
    <loc>${cityUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
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
};




