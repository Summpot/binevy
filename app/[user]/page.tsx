"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ListFilter, PlusCircle, MoreHorizontal, File } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/drizzle/schema";
import { Projects } from "./components/projects";
import { Overview } from "./components/overview";

type Params = { user: string };

export default function Profile() {
  const params = useParams<Params>();

  return (
    <Tabs className="container" defaultValue="overview">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="overview">
        <Overview></Overview>
      </TabsContent>
      <TabsContent value="projects">
        <Projects></Projects>
      </TabsContent>
    </Tabs>
  );
}
