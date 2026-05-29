import {
  Delete02Icon,
  PencilEdit02Icon,
  Saturn02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings2 } from "lucide-react";
import AlertModel from "@/components/main-layout/AlertModel";
import DeleteProject from "./Delete_Components/DeleteProject";
import ProjectForm from "./Add_Components/ProjectForm";
import { ProjectType } from "@/hooks/useGetEmployeeProfile";
type Props = {
  projectData: ProjectType;
  token: string;
};
export default function ProjectCardWithOperations({
  projectData,
  token,
}: Props) {
  return (
    <div className="w-full space-y-2.5">
      <div className="w-full bg-white h-50 rounded-md border overflow-hidden">
        <img
          src={projectData.imageUrl}
          alt={projectData.title}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="px-2">
        <p
          className="font-medium text-xl line-clamp-1"
          title={projectData.title}>
          {projectData.title}
        </p>
        <p className="text-sm line-clamp-3" title={projectData.description}>
          {projectData.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap mt-4">
          {projectData.projectUrl && (
            <a
              href={projectData.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
              <HugeiconsIcon icon={Saturn02Icon} className="size-4.5" /> Live
              Preview
            </a>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-13 bg-white text-black border hover:bg-white/40 ml-auto">
                <Settings2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black flex flex-col gap-1 mr-6! w-36">
              <AlertModel
                title="Edit Project"
                trigger={
                  <Button
                    className="
                      h-10
                      w-full
                      justify-start
                      gap-2
                      rounded-lg
                      bg-input-bg
                      text-sm
                      text-black
                      hover:bg-green-600
                      hover:text-white
                    ">
                    <HugeiconsIcon icon={PencilEdit02Icon} className="size-4" />
                    Edit
                  </Button>
                }
                content={
                  <ProjectForm
                    opearation="edit"
                    token={token}
                    deafaultValues={{
                      projectCard: projectData.imageUrl,
                      projectTitle: projectData.title,
                      description: projectData.description,
                      projectUrl: projectData.projectUrl || "",
                    }}
                  />
                }
                contentClassname="md:min-w-150"
              />

              <AlertModel
                title="Delete Project"
                trigger={
                  <Button
                    className="
                      h-10
                      w-full
                      justify-start
                      gap-2
                      rounded-lg
                      bg-input-bg
                      text-sm
                      text-red-500
                      hover:bg-red-500
                      hover:text-white
                    ">
                    <HugeiconsIcon icon={Delete02Icon} className="size-4" />
                    Delete
                  </Button>
                }
                content={<DeleteProject />}
                contentClassname="md:min-w-150 pb-3"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
