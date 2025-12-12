import { supabase } from './supabase';
import { getSiteURL, useSubdomains, getCitySubdomainURL } from './site-config';
import { createCitySlug } from './slug-utils.js';

const URLS_PER_SITEMAP = 10000;

/**
 * Get cities for a specific sitemap chunk
 * Fetches cities directly from database, deduplicates URLs, and returns exactly the requested amount
 */
export async function getCitiesForSitemap(offset: number, limit: number): Promise<Array<{ name: string; state_abbr: string }>> {
  const useSubdomainMode = useSubdomains();
  const SITE_URL = getSiteURL();
  const cityUrls = new Set<string>();
  const deduplicatedCities: Array<{ name: string; state_abbr: string }> = [];
  
  if (!supabase) {
    return deduplicatedCities;
  }

  try {
    const pageSize = 1000; // Fetch 1000 cities at a time
    let page = 0;
    const maxPages = 50; // Safety limit: max 50 pages (50k cities) to prevent infinite loops
    
    // Fetch cities in batches until we have enough unique cities
    while (deduplicatedCities.length < offset + limit && page < maxPages) {
      const rangeStart = page * pageSize;
      const rangeEnd = (page + 1) * pageSize - 1;
      
      const { data, error } = await supabase
        .from('cities')
        .select('name, states(abbreviation)')
        .order('population', { ascending: false })
        .range(rangeStart, rangeEnd);
      
      if (error) {
        console.error(`[Sitemap] Error fetching cities page ${page}:`, error);
        break;
      }
      
      if (!data || data.length === 0) {
        break; // No more data
      }
      
      // Process cities and deduplicate by URL
      for (const city of data) {
        const cityName = city.name;
        const stateAbbr = city.states?.abbreviation || '';
        
        if (!cityName || !stateAbbr) continue;
        
        const citySlug = createCitySlug(cityName);
        const cityUrl = useSubdomainMode 
          ? getCitySubdomainURL(citySlug, stateAbbr.toLowerCase())
          : `${SITE_URL}/${stateAbbr.toLowerCase()}/${citySlug}/`;
        
        // Only add if URL is unique
        if (!cityUrls.has(cityUrl)) {
          cityUrls.add(cityUrl);
          deduplicatedCities.push({ name: cityName, state_abbr: stateAbbr });
        }
      }
      
      // Stop if we have enough cities or no more data
      if (deduplicatedCities.length >= offset + limit || data.length < pageSize) {
        break;
      }
      
      page++;
    }

    // Return only the slice needed for this sitemap chunk
    const cities = deduplicatedCities.slice(offset, offset + limit);
    
    console.log(`[Sitemap] Chunk: ${cities.length} cities (offset: ${offset}, limit: ${limit}, total unique: ${deduplicatedCities.length}, pages fetched: ${page + 1})`);
    
    return cities;
  } catch (e) {
    console.error('[Sitemap] Error fetching cities:', e);
    return [];
  }
}

/**
 * Generate XML for city sitemap
 */
export function generateCitySitemapXML(cities: Array<{ name: string; state_abbr: string }>): string {
  const SITE_URL = getSiteURL();
  const today = new Date().toISOString().split('T')[0];
  const useSubdomainMode = useSubdomains();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add city pages - match reference site: changefreq=weekly, priority=0.8
  const cityUrls = new Set<string>();
  for (const city of cities) {
    const citySlug = createCitySlug(city.name);
    const cityUrl = useSubdomainMode 
      ? getCitySubdomainURL(citySlug, city.state_abbr.toLowerCase())
      : `${SITE_URL}/${city.state_abbr.toLowerCase()}/${citySlug}/`;
    
    // Skip duplicates (shouldn't happen, but safety check)
    if (cityUrls.has(cityUrl)) {
      continue;
    }
    cityUrls.add(cityUrl);
    
    xml += `  <url>
    <loc>${cityUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  xml += `</urlset>`;
  return xml;
}
