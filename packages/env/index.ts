import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().optional().default('postgresql://postgres:postgres@localhost:54322/postgres?schema=umami'),
    // Private keys (Workflows, Supabase Service Role)
    //SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    UMAMI_API_CLIENT_SECRET: z.string().optional(),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    // Public keys (Platform, Docs, Analytics)
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    //NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid(),
  },
  // Use process.env for Next.js compatibility
  runtimeEnv: {
    //SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    UMAMI_API_CLIENT_SECRET: process.env.UMAMI_API_CLIENT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    //NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
});