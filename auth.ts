import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./drizzle/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: DrizzleAdapter(db),
});
