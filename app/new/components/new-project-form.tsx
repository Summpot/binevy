"use client";
import { newProject } from "@/app/actions";
import { insertProjectSchema } from "@/drizzle/schema";
import {
  FormProvider,
  getFormProps,
  getInputProps,
  getTextareaProps,
  useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormButton } from "@/components/form-button";
import { SessionProvider, useSession } from "next-auth/react";

export function NewProjectForm() {
  const { data: session } = useSession();
  const [lastResult, action] = useFormState(newProject, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: insertProjectSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form {...getFormProps(form)} className="container" action={action}>
      <CardTitle>Create a new project</CardTitle>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            {...getInputProps(fields.name, { type: "text" })}
            className="w-auto"
          />
          <div>{fields.name.errors}</div>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            {...getTextareaProps(fields.description)}
            className="w-auto min-h-32"
          />
          <div>{fields.description.errors}</div>
        </div>
      </div>
      <input
        {...getInputProps(fields.ownerId, { type: "hidden" })}
        value={session?.user?.id}
      />
      <FormButton>Create</FormButton>
    </form>
  );
}
