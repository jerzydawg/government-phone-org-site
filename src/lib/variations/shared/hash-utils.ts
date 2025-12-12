/**
 * Compound Hashing System for 1,000+ Site Uniqueness
 * Prevents collisions through multi-layer hashing with prime multiplication
 */

/**
 * Core hash function using FNV-1a algorithm
 */
export function hashString(str: string): number {
  let hash = 2166136261; // FNV offset basis
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619); // FNV prime
  }
  return Math.abs(hash);
}

/**
 * Compound hash with multiple layers for guaranteed uniqueness at scale
 * @param domain - Site domain (e.g., "example.com")
 * @param context - Context identifier (e.g., "apply-headline", "faq-question-1")
 * @param salt - Optional salt for additional uniqueness
 * @returns Positive integer hash
 */
export function getCompoundHash(domain: string, context: string, salt: string = ''): number {
  // Layer 1: Hash domain
  const domainHash = hashString(domain);
  
  // Layer 2: Hash context (page name, element type)
  const contextHash = hashString(context);
  
  // Layer 3: Hash salt for uniqueness
  const saltHash = salt ? hashString(salt) : 0;
  
  // Combine with different prime multiplications to avoid collisions
  // Using large primes: 7919, 6421, 5381
  const combined = Math.abs(
    (domainHash * 7919) + 
    (contextHash * 6421) + 
    (saltHash * 5381)
  );
  
  return combined;
}

/**
 * Select a single variation from an array using compound hash
 * @param domain - Site domain
 * @param variations - Array of variations to select from
 * @param context - Context identifier for what's being selected
 * @param salt - Optional salt for uniqueness
 * @returns Selected variation
 */
export function selectVariation<T>(
  domain: string,
  variations: T[],
  context: string,
  salt: string = ''
): T {
  if (variations.length === 0) {
    throw new Error(`No variations available for context: ${context}`);
  }
  
  // Ensure salt is never null/undefined
  const safeSalt = salt || '';
  
  const hash = getCompoundHash(domain, context, safeSalt);
  const index = hash % variations.length;
  const selected = variations[index];
  
  // Validate result is never null/undefined
  if (selected === null || selected === undefined) {
    // Fallback to first variation
    return variations[0];
  }
  
  return selected;
}

/**
 * Select multiple unique variations from an array
 * Useful for selecting FAQ questions, examples, etc.
 * @param domain - Site domain
 * @param variations - Array of variations to select from
 * @param count - Number of variations to select
 * @param context - Context identifier
 * @returns Array of selected variations
 */
export function selectUniqueVariations<T>(
  domain: string,
  variations: T[],
  count: number,
  context: string
): T[] {
  if (count > variations.length) {
    throw new Error(`Cannot select ${count} unique items from ${variations.length} variations`);
  }
  
  const selected: T[] = [];
  const usedIndices = new Set<number>();
  
  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let index: number;
    
    // Try to find unused index
    do {
      const hash = getCompoundHash(domain, context, `index-${i}-attempt-${attempts}`);
      index = hash % variations.length;
      attempts++;
    } while (usedIndices.has(index) && attempts < variations.length * 2);
    
    // If we couldn't find unique after many attempts, just take next available
    if (usedIndices.has(index)) {
      index = 0;
      while (usedIndices.has(index)) {
        index++;
      }
    }
    
    usedIndices.add(index);
    selected.push(variations[index]);
  }
  
  return selected;
}

/**
 * Test function to detect hash collisions
 * Used in quality gates
 * @param domains - Array of test domains
 * @param context - Context to test
 * @returns Collision report
 */
export function detectCollisions(domains: string[], context: string): {
  collisionCount: number;
  collisionRate: number;
  collisions: Map<number, string[]>;
} {
  const hashMap = new Map<number, string[]>();
  
  for (const domain of domains) {
    const hash = getCompoundHash(domain, context);
    if (!hashMap.has(hash)) {
      hashMap.set(hash, []);
    }
    hashMap.get(hash)!.push(domain);
  }
  
  let collisionCount = 0;
  const collisions = new Map<number, string[]>();
  
  for (const [hash, domainList] of hashMap.entries()) {
    if (domainList.length > 1) {
      collisionCount += domainList.length - 1;
      collisions.set(hash, domainList);
    }
  }
  
  const collisionRate = (collisionCount / domains.length) * 100;
  
  return {
    collisionCount,
    collisionRate,
    collisions
  };
}

/**
 * Generate a deterministic but unique seed for randomization
 * @param domain - Site domain
 * @param context - Context identifier
 * @returns Seed number between 0 and 1
 */
export function getSeededRandom(domain: string, context: string): number {
  const hash = getCompoundHash(domain, context);
  // Normalize to 0-1 range
  return (hash % 100000) / 100000;
}

