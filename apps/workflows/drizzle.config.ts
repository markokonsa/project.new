import {env} from "@repo/env";
import { config } from "dotenv";
import type { Config } from "drizzle-kit";

config();

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL || "postgres://localhost:5432/workflow",
  },
} satisfies Config;
