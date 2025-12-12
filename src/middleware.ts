// Simplified middleware - only handles domain validation and www redirect
// Subdomain routing is handled by index.astro using Astro.rewrite()
import { getDomain, useSubdomains, parseSubdomain } from './lib/site-config';

export const onRequest = async (context: any, next: any) => {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  
  // Get configured domain from site-config
  const configuredDomain = getDomain();

  // Allow preview hosts (Vercel deployments, localhost)
  const isPreviewHost =
    host.endsWith('.vercel.app') ||
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host.includes('localhost');

  // Check if it's the exact configured domain or a subdomain
  const isExactDomain = host === configuredDomain;
  const isWwwDomain = host === `www.${configuredDomain}`;
  const isSubdomain = host.endsWith(`.${configuredDomain}`) && !isWwwDomain;

  // If subdomains are enabled, validate subdomain format
  if (useSubdomains() && isSubdomain) {
    const subdomainInfo = parseSubdomain(host);
    const subdomainPart = host.split('.')[0];
    
    // Check if it's a state subdomain (2-letter abbreviation, e.g., "nj")
    const isStateSubdomain = subdomainPart.length === 2 && /^[a-z]{2}$/.test(subdomainPart);
    
    // Check if this is an internal rewrite (Astro.rewrite() from index.astro)
    // These paths are state/city paths that should be allowed through
    const isInternalRewrite = url.pathname.match(/^\/([a-z]{2})\/?$/) || 
                              url.pathname.match(/^\/([a-z]{2})\/([a-z0-9-]+)\/?$/);
    
    // If it's a valid city or state subdomain
    if (subdomainInfo || isStateSubdomain) {
      // Allow internal rewrites to pass through to [state] and [state]/[city] routes
      if (isInternalRewrite) {
        return next();
      }
      
      // Redirect any other path to root (keeps URLs clean)
      if (url.pathname !== '/') {
        const subdomainRoot = `https://${host}/`;
        return context.redirect(subdomainRoot, 301);
      }
      
      // Valid subdomain at root - allow through (index.astro will handle via rewrite)
      return next();
    }
    // Invalid subdomain - let route handler return 404
  }

  // Redirect www to non-www
  if (isWwwDomain && !isPreviewHost) {
    const destination = `https://${configuredDomain}${url.pathname}${url.search}`;
    return context.redirect(destination, 301);
  }

  // Allow preview hosts and the configured domain
  if (isPreviewHost || isExactDomain || (isSubdomain && useSubdomains())) {
    return next();
  }

  // Redirect to canonical domain if not on correct domain
  if (!isPreviewHost && host !== configuredDomain) {
    const destination = `https://${configuredDomain}${url.pathname}${url.search}`;
    if (url.href !== destination) {
      return context.redirect(destination, 301);
    }
  }

  // Default: allow the request
  return next();
};
