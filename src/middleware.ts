// Dynamic middleware that uses site config for domain validation
// Allows Vercel previews and the configured production domain
import { getDomain, useSubdomains } from './lib/site-config';

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

  // If subdomains are disabled but we're on a subdomain, redirect to path-based URL
  if (!useSubdomains() && isSubdomain && !isPreviewHost) {
    const subdomainPart = host.split('.')[0];
    // Check if it's a 2-letter state abbreviation (e.g., "in", "nj", "ca")
    if (subdomainPart.length === 2 && /^[a-z]{2}$/.test(subdomainPart)) {
      // Redirect state subdomain to path-based URL: in.domain.com/ → domain.com/in/
      const destination = `https://${configuredDomain}/${subdomainPart}${url.pathname}${url.search}`;
      return context.redirect(destination, 301);
    }
    // Check if it's a city-state subdomain (e.g., "wayne-nj")
    const parts = subdomainPart.split('-');
    if (parts.length >= 2 && parts[parts.length - 1].length === 2) {
      const stateAbbr = parts[parts.length - 1];
      const citySlug = parts.slice(0, parts.length - 1).join('-');
      // Redirect city subdomain to path-based URL: wayne-nj.domain.com/ → domain.com/nj/wayne/
      const destination = `https://${configuredDomain}/${stateAbbr}/${citySlug}${url.pathname}${url.search}`;
      return context.redirect(destination, 301);
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
