import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { selectProjectSchema } from "../../../drizzle/schema";
import { z } from "zod";

export type Project = z.infer<typeof selectProjectSchema>;

export function ProjectDetailCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-4xl">$1,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
    </Card>
  );
}
