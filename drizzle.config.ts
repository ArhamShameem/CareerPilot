import { defineConfig } from "drizzle-kit";
import "dotenv/config";
import { env } from "./src/data/env/server";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
