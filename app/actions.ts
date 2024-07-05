"use server";
import { auth } from "@/auth";
import { db } from "@/drizzle/db";
import { insertProjectSchema, projects } from "@/drizzle/schema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function newProject(prevState: unknown, formData: FormData) {
  const session = await auth();
  if (!session?.user) {
    return;
  }
  console.log("111");
  const submission = parseWithZod(formData, {
    schema: insertProjectSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.insert(projects).values(submission.value);

  redirect(`/${session.user.name}/${submission.value.name}`);
}
