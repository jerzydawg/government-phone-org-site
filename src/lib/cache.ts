/**
 * SSR Caching Layer
 * In-memory cache with TTL for Vercel Edge/Serverless
 */

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

export class SSRCache {
  private cache = new Map<string, CacheEntry<unknown>>()
  
  // Default TTLs in milliseconds
  static TTL = {
    HOMEPAGE: 5 * 60 * 1000,      // 5 minutes
    STATE_PAGE: 10 * 60 * 1000,   // 10 minutes  
    CITY_PAGE: 15 * 60 * 1000,    // 15 minutes
    STATIC_DATA: 60 * 60 * 1000,  // 1 hour
    SITEMAP: 30 * 60 * 1000,      // 30 minutes
  }
  
  /**
   * Get cached data or fetch fresh
   */
  async getOrFetch<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl: number = SSRCache.TTL.STATE_PAGE
  ): Promise<T> {
    const cached = this.get<T>(key)
    if (cached !== null) {
      return cached
    }
    
    const data = await fetcher()
    this.set(key, data, ttl)
    return data
  }
  
  /**
   * Get from cache
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined
    
    if (!entry) {
      return null
    }
    
    // Check if expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return null
    }
    
    return entry.data
  }
  
  /**
   * Set in cache
   */
  set<T>(key: string, data: T, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
    
    // Cleanup old entries periodically
    if (this.cache.size > 1000) {
      this.cleanup()
    }
  }
  
  /**
   * Invalidate cache entry
   */
  invalidate(key: string): void {
    this.cache.delete(key)
  }
  
  /**
   * Invalidate by prefix
   */
  invalidatePrefix(prefix: string): void {
    for (const key of this.cache.keys()) {
      if (key.startsWith(prefix)) {
        this.cache.delete(key)
      }
    }
  }
  
  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear()
  }
  
  /**
   * Cleanup expired entries
   */
  private cleanup(): void {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key)
      }
    }
  }
  
  /**
   * Get cache stats
   */
  stats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    }
  }
}

// Singleton instance
export const cache = new SSRCache()

// Cache key generators
export const cacheKeys = {
  states: () => 'states:all',
  state: (slug: string) => `state:${slug}`,
  cities: (stateId: number) => `cities:${stateId}`,
  city: (stateSlug: string, citySlug: string) => `city:${stateSlug}:${citySlug}`,
  providers: () => 'providers:all',
  sitemap: () => 'sitemap:all',
}

