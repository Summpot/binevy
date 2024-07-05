"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function FormButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { pending } = useFormStatus();

  return <Button {...props} disabled={pending || props.disabled} />;
}
