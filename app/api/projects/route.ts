import { auth } from "@/auth";
import { db } from "@/drizzle/db";
import { insertProjectSchema, projects, users } from "@/drizzle/schema";
import { parseWithZod } from "@conform-to/zod";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { fromError, fromZodError } from "zod-validation-error";

export const dynamic = "force-dynamic";

const getProjectSchema = z.optional(
  z.object({ user: z.string(), project: z.string() }).or(z.string().uuid())
);

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const submission = parseWithZod(searchParams, { schema: getProjectSchema });
  if (submission.status !== "success") {
    return Response.json({ error: submission.error }, { status: 400 });
  }
  if (typeof submission.value === "undefined") {
    return Response.json(await db.query.projects.findMany());
  } else if (typeof submission.value === "string") {
    return Response.json(
      await db.query.projects.findFirst({
        where: eq(projects.id, submission.value),
      })
    );
  } else {
    return Response.json(
      await db.query.projects.findFirst({
        where: and(
          eq(projects.name, submission.value.project),
          eq(users.name, submission.value.user)
        ),
      })
    );
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }
  const parseResult = insertProjectSchema.safeParse(await request.json());
  if (!parseResult.success) {
    const error = fromZodError(parseResult.error);
    return Response.json({ message: error.toString() }, { status: 400 });
  }
  return Response.json(
    await db.insert(projects).values(parseResult.data).returning(),
    { status: 201 }
  );
}
