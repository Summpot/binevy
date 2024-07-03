import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams<{ user: string; project: string }>();
  return (
    <>
      {params.user}/{params.project}
    </>
  );
}
