/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly ADMIN_EMAIL: string;
  readonly ADMIN_PASSWORD: string;
  readonly RATE_LIMIT_WINDOW_MS: string;
  readonly RATE_LIMIT_MAX_REQUESTS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 