import { createClient } from '@supabase/supabase-js';
import { env } from '@repo/env'; // Importing from your shared env package
import { Database } from './types';

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Export types for use in apps
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];