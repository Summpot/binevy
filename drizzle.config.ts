import { defineConfig } from "drizzle-kit";

require("@dotenvx/dotenvx").config();

export default defineConfig({
  dialect: "sqlite",
  out: "./drizzle/migrations",
  schema: "./drizzle/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  },
});
