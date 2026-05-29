import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProjectCardWithOperations from "./ProjectCardWithOperations";
import ProjectForm from "./Add_Components/ProjectForm";
import { ProjectType } from "@/hooks/useGetEmployeeProfile";
import { HugeiconsIcon } from "@hugeicons/react";
import { Folder03Icon } from "@hugeicons/core-free-icons";
type Props = {
  token: string;
  projects?: ProjectType[];
};
export default function ProfileProjects({ token, projects }: Props) {
  return (
    <div className="w-full px-4 py-4 md:py-0">
      <div className="w-full flex justify-end pb-4">
        <AlertModel
          title="Add Project"
          trigger={
            <Button className="text-sm h-9.5 min-w-40 bg-main-color text-white hover:bg-main-color/90 gap-1 ml-3">
              <Plus className="size-4.5" /> Add Project
            </Button>
          }
          content={<ProjectForm opearation="add" token={token} />}
          contentClassname="md:min-w-150"
        />
      </div>
      {projects && projects.length > 0 ? (
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-10">
          {projects.map((project) => (
            <ProjectCardWithOperations
              projectData={project}
              token={token}
              key={project.projectID}
            />
          ))}
        </div>
      ) : (
        <div className="p-2 flex flex-col items-center gap-2 justify-center text-black/80 font-medium">
          <HugeiconsIcon icon={Folder03Icon} className="size-6" />
          <p>No projects found.</p>
        </div>
      )}
    </div>
  );
}
