import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "next-auth";
import { Login } from "@/components/auth/login-button";
import { Logout } from "@/components/auth/logout-button";
import { UserAvatar } from "@/components/auth/user-avatar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binevy",
  description: "A self-hosted binary file hosting platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavMenu></MainNavMenu>
        {children}
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
