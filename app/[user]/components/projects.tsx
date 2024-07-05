import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { Project, ProjectDetailCard } from "./project-detail-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { fetcher } from "@/lib/utils";
import { ProjectList } from "./project-list";
export function Projects() {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter projects..."
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
        <Button
          size="sm"
          className="h-8 gap-1"
          onClick={() => router.push("/new")}
        >
          <PlusCircle className="h-3.5 w-3.5" />
          New
        </Button>
      </div>
      <Separator></Separator>
      <ProjectList></ProjectList>
    </>
  );
}
