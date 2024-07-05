"use client";
import { SessionProvider } from "next-auth/react";
import { NewProjectForm } from "./components/new-project-form";
import { auth } from "@/auth";

export default function NewProject() {
  return (
      <NewProjectForm></NewProjectForm>
  );
}
