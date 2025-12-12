/**
 * Database Layer with Connection Pooling & Error Handling
 * Wraps Supabase with caching and graceful fallbacks
 */

import { supabase } from './supabase'
import { cache, cacheKeys, SSRCache } from './cache'

// Fallback data for when DB is unavailable
const FALLBACK_STATES = [
  { id: 1, name: 'California', abbreviation: 'CA', slug: 'california' },
  { id: 2, name: 'Texas', abbreviation: 'TX', slug: 'texas' },
  { id: 3, name: 'Florida', abbreviation: 'FL', slug: 'florida' },
  { id: 4, name: 'New York', abbreviation: 'NY', slug: 'new-york' },
  { id: 5, name: 'Pennsylvania', abbreviation: 'PA', slug: 'pennsylvania' },
]

export interface State {
  id: number
  name: string
  abbreviation: string
  slug?: string
  created_at?: string
}

export interface City {
  id: number
  name: string
  state_id: number
  population?: number
  slug?: string
  stats?: Record<string, unknown>
  created_at?: string
}

export interface Provider {
  id: number
  name: string
  plans?: Record<string, unknown>
  coverage?: Record<string, unknown>
  contact_info?: Record<string, unknown>
  created_at?: string
}

/**
 * Convert name to URL slug
 */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Get all states
 */
export async function getStates(): Promise<State[]> {
  return cache.getOrFetch(
    cacheKeys.states(),
    async () => {
      if (!supabase) {
        console.warn('[DB] Supabase not available, using fallback states')
        return FALLBACK_STATES
      }
      
      try {
        const { data, error } = await supabase
          .from('states')
          .select('*')
          .order('name')
        
        if (error) {
          console.error('[DB] Error fetching states:', error)
          return FALLBACK_STATES
        }
        
        return (data || []).map(s => ({
          ...s,
          slug: toSlug(s.name)
        }))
      } catch (err) {
        console.error('[DB] Exception fetching states:', err)
        return FALLBACK_STATES
      }
    },
    SSRCache.TTL.STATIC_DATA
  )
}

/**
 * Get state by slug
 */
export async function getStateBySlug(slug: string): Promise<State | null> {
  return cache.getOrFetch(
    cacheKeys.state(slug),
    async () => {
      const states = await getStates()
      return states.find(s => s.slug === slug || toSlug(s.name) === slug) || null
    },
    SSRCache.TTL.STATE_PAGE
  )
}

/**
 * Get cities for a state
 */
export async function getCitiesByState(stateId: number): Promise<City[]> {
  return cache.getOrFetch(
    cacheKeys.cities(stateId),
    async () => {
      if (!supabase) {
        console.warn('[DB] Supabase not available, returning empty cities')
        return []
      }
      
      try {
        const { data, error } = await supabase
          .from('cities')
          .select('*')
          .eq('state_id', stateId)
          .order('name')
        
        if (error) {
          console.error('[DB] Error fetching cities:', error)
          return []
        }
        
        return (data || []).map(c => ({
          ...c,
          slug: toSlug(c.name)
        }))
      } catch (err) {
        console.error('[DB] Exception fetching cities:', err)
        return []
      }
    },
    SSRCache.TTL.STATE_PAGE
  )
}

/**
 * Get city by state and city slug
 */
export async function getCityBySlug(stateSlug: string, citySlug: string): Promise<City | null> {
  return cache.getOrFetch(
    cacheKeys.city(stateSlug, citySlug),
    async () => {
      const state = await getStateBySlug(stateSlug)
      if (!state) return null
      
      const cities = await getCitiesByState(state.id)
      return cities.find(c => c.slug === citySlug || toSlug(c.name) === citySlug) || null
    },
    SSRCache.TTL.CITY_PAGE
  )
}

/**
 * Get all providers
 */
export async function getProviders(): Promise<Provider[]> {
  return cache.getOrFetch(
    cacheKeys.providers(),
    async () => {
      if (!supabase) {
        console.warn('[DB] Supabase not available, returning empty providers')
        return []
      }
      
      try {
        const { data, error } = await supabase
          .from('providers')
          .select('*')
          .order('name')
        
        if (error) {
          console.error('[DB] Error fetching providers:', error)
          return []
        }
        
        return data || []
      } catch (err) {
        console.error('[DB] Exception fetching providers:', err)
        return []
      }
    },
    SSRCache.TTL.STATIC_DATA
  )
}

/**
 * Get sitemap data (all states and cities)
 */
export async function getSitemapData(): Promise<{ states: State[]; cities: Map<number, City[]> }> {
  return cache.getOrFetch(
    cacheKeys.sitemap(),
    async () => {
      const states = await getStates()
      const cities = new Map<number, City[]>()
      
      // Fetch cities for each state in parallel
      await Promise.all(
        states.map(async (state) => {
          const stateCities = await getCitiesByState(state.id)
          cities.set(state.id, stateCities)
        })
      )
      
      return { states, cities }
    },
    SSRCache.TTL.SITEMAP
  )
}

/**
 * Get total city count
 */
export async function getTotalCityCount(): Promise<number> {
  if (!supabase) return 0
  
  try {
    const { count, error } = await supabase
      .from('cities')
      .select('*', { count: 'exact', head: true })
    
    if (error) {
      console.error('[DB] Error counting cities:', error)
      return 0
    }
    
    return count || 0
  } catch (err) {
    console.error('[DB] Exception counting cities:', err)
    return 0
  }
}

/**
 * Health check - verify DB connection
 */
export async function healthCheck(): Promise<{ ok: boolean; latency: number; error?: string }> {
  const start = Date.now()
  
  if (!supabase) {
    return { ok: false, latency: 0, error: 'Supabase client not initialized' }
  }
  
  try {
    const { error } = await supabase
      .from('states')
      .select('id')
      .limit(1)
    
    const latency = Date.now() - start
    
    if (error) {
      return { ok: false, latency, error: error.message }
    }
    
    return { ok: true, latency }
  } catch (err) {
    return { 
      ok: false, 
      latency: Date.now() - start, 
      error: err instanceof Error ? err.message : 'Unknown error' 
    }
  }
}

