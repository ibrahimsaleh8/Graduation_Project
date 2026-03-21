import {
  Delete02Icon,
  Location01Icon,
  PencilEdit02Icon,
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
import EditExperienceCard from "./Update_Components/EditExperienceCard";
import DeleteExperienceCard from "./Delete_Components/DeleteExperienceCard";
export default function ExperienceCardWithOperations() {
  return (
    <div className="space-y-3 border-b pb-3 p-4 bg-white rounded-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-lg font-medium">Senior Full Stack Developer</p>
          <p className="font-medium">Tech Corp Inc.</p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon icon={Location01Icon} className="size-4.5" />
            San Francisco, CA
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-md">
            2019 - 2021
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-13 bg-white text-black border hover:bg-white/40 ml-auto">
                <Settings2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black flex flex-col gap-1 mr-6!">
              <AlertModel
                title="Edit Experience Card"
                trigger={
                  <Button className="text-sm h-9.5 w-full bg-input-bg text-black justify-start hover:bg-green-700 hover:text-white gap-1.5">
                    <HugeiconsIcon icon={PencilEdit02Icon} className="size-5" />
                    Edit
                  </Button>
                }
                content={<EditExperienceCard />}
                contentClassname="md:min-w-150"
              />
              <AlertModel
                title="Delete Experience Card"
                trigger={
                  <Button className="text-sm h-9.5 w-full bg-input-bg text-red-400 justify-start hover:bg-red-500 hover:text-white gap-1.5">
                    <HugeiconsIcon icon={Delete02Icon} className="size-5" />
                    Delete
                  </Button>
                }
                content={<DeleteExperienceCard />}
                contentClassname="md:min-w-150 pb-3"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div>
        <p>
          Led the frontend team in rebuilding the core product using Next.js 14
          and React, improving performance by 40%
        </p>
        <p>
          Architected and implemented a microservices-based backend using
          Node.js and GraphQL
        </p>
        <p>
          Mentored 5 junior developers and conducted weekly code review sessions
        </p>
      </div>
    </div>
  );
}
