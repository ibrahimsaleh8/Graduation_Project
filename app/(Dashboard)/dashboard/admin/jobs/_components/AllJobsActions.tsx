import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings2 } from "lucide-react";
import AlertModel from "@/components/main-layout/AlertModel";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { Delete02Icon, PencilEdit02Icon } from "@hugeicons/core-free-icons";

export default function AllJobsActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-13 bg-white text-black border hover:bg-white/40 ml-auto">
          <Settings2 />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black flex flex-col gap-1 mr-6!">
        <AlertModel
          title="Edit Project"
          trigger={
            <Button className="text-sm h-9.5 w-full bg-input-bg text-black justify-start hover:bg-green-700 hover:text-white gap-1.5">
              <HugeiconsIcon icon={PencilEdit02Icon} className="size-5" />
              Edit
            </Button>
          }
          content={<></>}
          contentClassname="md:min-w-150"
        />

        <AlertModel
          title="Delete Project"
          trigger={
            <Button className="text-sm h-9.5 w-full bg-input-bg text-red-400 justify-start hover:bg-red-500 hover:text-white gap-1.5">
              <HugeiconsIcon icon={Delete02Icon} className="size-5" />
              Delete
            </Button>
          }
          content={<></>}
          contentClassname="md:min-w-150 pb-3"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
