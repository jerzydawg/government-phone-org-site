/**
 * Calculate distance between two points using Haversine formula
 * @param {number} lat1 - Latitude of point 1
 * @param {number} lon1 - Longitude of point 1
 * @param {number} lat2 - Latitude of point 2
 * @param {number} lon2 - Longitude of point 2
 * @returns {number} Distance in miles
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Find nearby cities within a specified radius
 * @param {Object} supabase - Supabase client
 * @param {number} lat - Latitude of the current city
 * @param {number} lon - Longitude of the current city
 * @param {number} radius - Search radius in miles (default: 100)
 * @param {number} limit - Maximum number of cities to return (default: 6)
 * @param {number} excludeCityId - City ID to exclude from results
 * @returns {Array} Array of nearby cities with distance
 */
export async function findNearbyCities(cityData, supabase) {
  try {
    // If we have coordinates, use them for distance calculation
    if (cityData.stats?.coordinates && Array.isArray(cityData.stats.coordinates) && cityData.stats.coordinates.length === 2) {
      const [lat, lng] = cityData.stats.coordinates;
      
      // Use Haversine formula to find nearby cities
      const { data, error } = await supabase
        .from('cities')
        .select(`
          *,
          states(name, abbreviation)
        `)
        .neq('id', cityData.id)
        .eq('state_id', cityData.state_id)
        .order('population', { ascending: false })
        .limit(6);
      
      if (error) throw error;
      
      const citiesWithDistance = data.map(city => ({
        ...city,
        state_abbreviation: city.states?.abbreviation,
        distance: calculateDistance(lat, lng, city.stats?.coordinates?.[0], city.stats?.coordinates?.[1])
      })).sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
      
      // Filter out cities that don't belong to this state
      return filterIncorrectCities(citiesWithDistance, cityData.states?.abbreviation);
    }
    
    // Fallback to state-based cities
    return await getFallbackNearbyCities(cityData, supabase);
  } catch (error) {
    console.error('Error in findNearbyCities:', error);
    return await getFallbackNearbyCities(cityData, supabase);
  }
}

/**
 * Get fallback nearby cities for a state when coordinates are not available
 * @param {Object} supabase - Supabase client
 * @param {number} stateId - State ID
 * @param {number} excludeCityId - City ID to exclude
 * @param {number} limit - Maximum number of cities to return
 * @returns {Array} Array of nearby cities
 */
export async function getFallbackNearbyCities(cityData, supabase) {
  try {
    const { data, error } = await supabase
      .from('cities')
      .select(`
        *,
        states(name, abbreviation)
      `)
      .neq('id', cityData.id)
      .eq('state_id', cityData.state_id)
      .order('population', { ascending: false })
      .limit(6);
    
    if (error) throw error;
    
    const cities = data.map(city => ({
      ...city,
      state_abbreviation: city.states?.abbreviation
    }));
    
    // Filter out cities that don't belong to this state
    return filterIncorrectCities(cities, cityData.states?.abbreviation);
  } catch (error) {
    console.error('Error in getFallbackNearbyCities:', error);
    return [];
  }
}

/**
 * Filter out cities that don't belong to the specified state
 * @param {Array} cities - Array of cities to filter
 * @param {string} stateAbbr - State abbreviation
 * @returns {Array} Filtered array of cities
 */
function filterIncorrectCities(cities, stateAbbr) {
  if (!stateAbbr) return cities;
  
  // Known incorrect mappings to fix
  const incorrectMappings = {
    'GA': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'Arlington', 'Plano', 'Lubbock', 'Laredo', 'Amarillo'],
    'TX': ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Albany'],
    'CA': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Atlanta', 'Augusta', 'Columbus'],
    'NY': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Atlanta', 'Augusta', 'Columbus'],
    'FL': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Atlanta', 'Augusta', 'Columbus']
  };
  
  const incorrectCitiesForState = incorrectMappings[stateAbbr] || [];
  return cities.filter(city => !incorrectCitiesForState.includes(city.name));
} 