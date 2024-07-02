import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export function Logout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirect: true });
      }}
    >
      <Button type="submit">Logout</Button>
    </form>
  );
}
