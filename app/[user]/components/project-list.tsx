import useSWR from "swr";
import { Project, ProjectDetailCard } from "./project-detail-card";
import { fetcher } from "@/lib/utils";

export function ProjectList() {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR<Project[]>("/api/projects", fetcher);
  if (error) return <div>failed to load: {error}</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      {projects == null ||
        projects?.map((project, key) => {
          return (
            <ProjectDetailCard key={key} project={project}></ProjectDetailCard>
          );
        })}
    </>
  );
}
