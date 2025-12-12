import { createClient as supabaseCreateClient } from '@supabase/supabase-js';

// Helper function to sanitize environment variable values
// Handles cases where Vercel might include the variable name in the value
function sanitizeEnvVar(value: string | undefined): string | undefined {
  if (!value) return undefined;
  
  // First, remove newlines and carriage returns (both literal and escaped)
  value = value.replace(/\\n/g, '').replace(/\n/g, '').replace(/\r/g, '');
  
  // Remove variable name prefix if present (e.g., "PUBLIC_SUPABASE_URL=https://...")
  // This handles cases where the entire "KEY=value" string is stored as the value
  // Use multiline flag and match everything after the equals sign
  const match = value.match(/^[A-Z_]+=(.+)$/s);
  if (match && match[1]) {
    value = match[1];
  }
  
  // Remove quotes (both single and double, at start and end)
  value = value.replace(/^["']|["']$/g, '');
  
  // Remove trailing slashes that shouldn't be there (except for protocol slashes)
  // Only remove trailing slash if it's not part of https:// or http://
  value = value.replace(/([^:\/])\/+$/, '$1');
  
  // Trim whitespace
  value = value.trim();
  
  return value || undefined;
}

// Helper function to validate URL
function isValidUrl(url: string | undefined): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

let rawSupabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
let rawSupabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Sanitize the values
const supabaseUrl = sanitizeEnvVar(rawSupabaseUrl);
const supabaseAnonKey = sanitizeEnvVar(rawSupabaseAnonKey);

// Development mode validation (errors only)
if (import.meta.env.MODE === 'development' && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('SUPABASE ERROR: Missing environment variables');
  console.error('URL valid:', isValidUrl(supabaseUrl));
  console.error('Key exists:', !!supabaseAnonKey);
}

// Create client only if both URL and key are valid
// Return null if invalid to allow pages to handle gracefully
export const supabase = (supabaseUrl && supabaseAnonKey && isValidUrl(supabaseUrl))
  ? supabaseCreateClient(supabaseUrl, supabaseAnonKey)
  : null;

// Export createClient function for direct use
export const createClient = (url: string, key: string) => {
  return supabaseCreateClient(url, key);
};

// Database types (you'll generate these from Supabase)
export interface Database {
  public: {
    Tables: {
      states: {
        Row: {
          id: number;
          name: string;
          abbreviation: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          abbreviation: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          abbreviation?: string;
          created_at?: string;
        };
      };
      cities: {
        Row: {
          id: number;
          name: string;
          state_id: number;
          population: number;
          stats: any;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          state_id: number;
          population?: number;
          stats?: any;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          state_id?: number;
          population?: number;
          stats?: any;
          created_at?: string;
        };
      };
      providers: {
        Row: {
          id: number;
          name: string;
          plans: any;
          coverage: any;
          contact_info: any;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          plans?: any;
          coverage?: any;
          contact_info?: any;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          plans?: any;
          coverage?: any;
          contact_info?: any;
          created_at?: string;
        };
      };
      applications: {
        Row: {
          id: number;
          user_id: string;
          city_id: number;
          provider_id: number;
          status: string;
          data: any;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          city_id: number;
          provider_id: number;
          status?: string;
          data?: any;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          city_id?: number;
          provider_id?: number;
          status?: string;
          data?: any;
          created_at?: string;
        };
      };
    };
  };
} 