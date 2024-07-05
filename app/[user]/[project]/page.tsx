"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";

type Params = {
  user: string;
  project: string;
};

export default function Project() {
  const { user, project } = useParams<Params>();
  const {} = useSWR(`/api/project?user=${user}&name=${project}`);
}
