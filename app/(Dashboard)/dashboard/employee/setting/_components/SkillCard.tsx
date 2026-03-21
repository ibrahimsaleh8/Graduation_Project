import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import EditSkill from "./Update_Components/EditSkill";
import AlertModel from "@/components/main-layout/AlertModel";
import DeleteSkill from "./Delete_Components/DeleteSkill";
type Props = {
  title: string;
};
export default function SkillCard({ title }: Props) {
  return (
    <div className="py-2 px-4 bg-white text-black text-xs rounded-sm w-fit flex items-center gap-3">
      <p>{title}</p>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-input-bg w-7 h-8 hover:bg-white hover:text-black">
            <EllipsisVertical className="size-4!" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white text-black p-2 flex flex-col gap-2">
          <AlertModel
            title="Edit Skill"
            trigger={
              <Button className="text-sm h-9.5 w-20 bg-green-600 text-white hover:bg-green-700 gap-1 ml-3">
                <Pencil />
              </Button>
            }
            content={<EditSkill skillTitle={title} />}
            contentClassname="md:min-w-150"
          />
          <AlertModel
            title="Delete Skill"
            trigger={
              <Button className="text-sm h-9.5 w-20 bg-red-500 text-white hover:bg-red-600 gap-1 ml-3">
                <Trash2 />
              </Button>
            }
            content={<DeleteSkill />}
            contentClassname="md:min-w-150"
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
