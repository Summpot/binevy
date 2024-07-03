"use client";
import { useParams } from "next/navigation";

type Params = { user: string };

export default function Profile() {
  const params = useParams<Params>();
  return (
    <>
      {params.user}
    </>
  );
}
