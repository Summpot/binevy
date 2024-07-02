import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle/migrations",
  schema: "./drizzle/schema.ts",
  migrations: {
    table: "migrations_custom", // default `__drizzle_migrations`,
    schema: "drizzle/schema.ts", // used in PostgreSQL only and default to `drizzle`
  },
});
