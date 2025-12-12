// Dynamic middleware that uses site config for domain validation
// Allows Vercel previews and the configured production domain
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

  // If subdomains are enabled, validate subdomain format and strip paths
  // Vercel rewrites will handle routing subdomains to city/state pages
  if (useSubdomains() && isSubdomain) {
    const subdomainInfo = parseSubdomain(host);
    const subdomainPart = host.split('.')[0];
    
    // Check if it's a state subdomain (2-letter abbreviation, e.g., "nj")
    const isStateSubdomain = subdomainPart.length === 2 && /^[a-z]{2}$/.test(subdomainPart);
    
    // If it's a valid city subdomain or state subdomain, allow the request to proceed
    // Vercel rewrites will route it to the correct page, and the page will render with subdomain canonical URL
    if (subdomainInfo || isStateSubdomain) {
      // Only redirect if there's an unexpected path (not the rewritten path from Vercel)
      // Vercel rewrites subdomains to paths like /nj/wayne/, so we should allow those
      // But if someone accesses wayne-nj.domain.com/some-other-path, redirect to root
      const isRewrittenPath = url.pathname.match(/^\/([a-z]{2})\/?$/) || url.pathname.match(/^\/([a-z]{2})\/([a-z0-9-]+)\/?$/);
      if (!isRewrittenPath && url.pathname !== '/') {
        const subdomainRoot = `https://${host}/`;
        return context.redirect(subdomainRoot, 301);
      }
      return next();
    }
    // Invalid subdomain - let route handler return 404
  }

  // If subdomains are enabled but we're accessing path-based URLs, redirect to subdomain format
  if (useSubdomains() && isExactDomain && !isPreviewHost) {
    // Check if this is a state page: /nj/ or /nj
    const stateMatch = url.pathname.match(/^\/([a-z]{2})\/?$/);
    if (stateMatch) {
      const stateAbbr = stateMatch[1];
      const subdomainUrl = `https://${stateAbbr}.${configuredDomain}/`;
      return context.redirect(subdomainUrl, 301);
    }
    
    // Check if this is a city page: /nj/wayne/ or /nj/wayne
    const cityMatch = url.pathname.match(/^\/([a-z]{2})\/([a-z0-9-]+)\/?$/);
    if (cityMatch) {
      const stateAbbr = cityMatch[1];
      const citySlug = cityMatch[2];
      const subdomainUrl = `https://${citySlug}-${stateAbbr}.${configuredDomain}/`;
      return context.redirect(subdomainUrl, 301);
    }
  }

  // Allow preview hosts and the configured domain
  if (isPreviewHost || isExactDomain || (isSubdomain && useSubdomains())) {
    // Only redirect www to non-www if we're on the production domain
    if (isWwwDomain && !isPreviewHost) {
      const destination = `https://${configuredDomain}${url.pathname}${url.search}`;
      return context.redirect(destination, 301);
    }
    // Allow the request to proceed
    return next();
  }

  // Only redirect to canonical domain if:
  // 1. We're NOT on a preview host
  // 2. We're NOT already on the configured domain
  // 3. This is a production environment
  // This prevents redirect loops while still enforcing canonical domain
  if (!isPreviewHost && host !== configuredDomain) {
    // Check if we're in a redirect loop by checking if the destination would be the same
    const destination = `https://${configuredDomain}${url.pathname}${url.search}`;
    if (url.href !== destination) {
      return context.redirect(destination, 301);
    }
  }

  // Default: allow the request
  return next();
};
