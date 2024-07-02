import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const pool = postgres(process.env.POSTGRES_URL as string, { max: 1 });

export const db = drizzle(pool);
