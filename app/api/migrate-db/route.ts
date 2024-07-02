import { db } from "@/drizzle/db";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

export const dynamic = "force-dynamic";

export async function GET() {
  await migrate(db, { migrationsFolder: "migrations" });
  return Response.json({});
}
