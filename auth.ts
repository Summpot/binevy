import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { KyselyAdapter } from "@auth/kysely-adapter"
import { db } from "./kysely/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: KyselyAdapter(db),
});
