import { auth } from "@/auth";
import { Login } from "./login-button";
import { UserDropdownMenu } from "./user-dropdown-menu";

export async function UserAvatar() {
  const session = await auth();
  if (!session?.user) return <Login></Login>;
  else {
    return <UserDropdownMenu user={session.user}></UserDropdownMenu>;
  }
}
