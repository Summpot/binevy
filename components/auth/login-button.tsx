import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export function Login() {
  return <Button onClick={() => signIn("github")}>Login with Github</Button>;
}
