# KOMA project starter template

General purpose project starter that covers basic needs for first year.

```
.
├── apps/
│   ├── umami/           # Umami (Self-hosted/Fork)
│   ├── docs/            # MDX based documentation
│   ├── web/             # Next.js (Main App)
│   ├── office/          # Next.js Admin Panel (Supabase)
│   └── workflows/       # Next.js + Vercel Workflow SDK
├── packages/
│   ├── ui/              # Shared Shadcn/React components
│   ├── env/              # Shared ENV 
│   ├── config-eslint/   # Shared linting
│   ├── config-typescript/
│   └── database/        # Shared Supabase clients/types
├── supabase/            # Database (migrations, config, local env)
├── turbo.json
├── .env                 # dotenv root
└── package.json
```

## Features
- Simple database setup
- Open source analytics with dashboard
- Documentation for knowledgebase
- Office for internal administration (super admin access)
- Workflows for durable task executions with a human in a loop possibilities
- RLS within Supabase
- Edge functions, Webhooks, Triggers, CRON all built-in @Supabase

## Infra
- Supabase
- Vercel

### Getting started

```sh
# Start local database
npx supabase start

# Install
pnpm install

# Develop
pnpm run dev
```

- Analytics is stored into umami schema keeping it secure. (admin / umami as initial credentials)