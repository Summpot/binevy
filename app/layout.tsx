import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import Link from "next/link";
import { UserAvatar } from "@/components/auth/user-avatar";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binevy",
  description: "A self-hosted binary file hosting platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log(session?.user?.id);
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavMenu></MainNavMenu>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}

function MainNavMenu() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              Binevy
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <UserAvatar></UserAvatar>
          </div>
        </div>
      </div>
    </div>
  );
}
