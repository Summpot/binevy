import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export function Login() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Login with Github</Button>
    </form>
  );
}
