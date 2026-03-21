import { GithubIcon, Saturn02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, Settings2, Trash2 } from "lucide-react";
import AlertModel from "@/components/main-layout/AlertModel";
import EditProject from "./Update_Components/EditProject";
import DeleteProject from "./Delete_Components/DeleteProject";
export default function ProjectCardWithOperations() {
  return (
    <div className="w-full space-y-2.5">
      <div className="w-full bg-white h-50 rounded-md"></div>
      <div>
        <p className="font-medium text-xl">Project 1</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem
          perferendis, debitis mollitia blanditiis recusandae? Beatae unde
          facere recusandae officiis illum assumenda temporibus accusantium
          libero? Sit esse quas ut sed.
        </p>

        <div className="flex items-center gap-4 flex-wrap mt-4">
          <a
            href="#"
            className="flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
            <HugeiconsIcon icon={Saturn02Icon} className="size-4.5" /> Live
            Preview
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm bg-black text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300">
            <HugeiconsIcon icon={GithubIcon} className="size-4.5" />
            GitHub Repo
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8 bg-white text-black border hover:bg-white/40 ml-auto">
                <Settings2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black p-2 flex flex-col gap-2">
              <AlertModel
                title="Edit Project"
                trigger={
                  <Button className="text-sm h-9.5 w-20 bg-green-600 text-white hover:bg-green-700 gap-1 ml-3">
                    <Pencil />
                  </Button>
                }
                content={<EditProject />}
                contentClassname="md:min-w-150"
              />

              <AlertModel
                title="Delete Project"
                trigger={
                  <Button className="text-sm h-9.5 w-20 bg-red-500 text-white hover:bg-red-600 gap-1 ml-3">
                    <Trash2 />
                  </Button>
                }
                content={<DeleteProject />}
                contentClassname="md:min-w-150"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
