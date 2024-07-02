
import { signIn } from "@/auth";
import { Button } from "../ui/button";

export function Login() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">Login with Github</Button>
    </form>
  );
}
