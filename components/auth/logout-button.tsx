import { signOut } from "@/auth";


export function Logout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirect: true });
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
}
