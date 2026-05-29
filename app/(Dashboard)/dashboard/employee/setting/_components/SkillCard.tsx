import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
type Props = {
  title: string;
};
export default function SkillCard({ title }: Props) {
  return (
    <div className="py-2 px-4 bg-white border text-black rounded-sm w-fit flex items-center gap-3">
      <p className="text-sm">{title}</p>
      <AlertModel
        title="Delete Skill"
        trigger={
          <button className="text-red-500 hover:text-red-700 cursor-pointer">
            <HugeiconsIcon icon={Delete02Icon} className="size-4" />
          </button>
        }
        content={
          <div className="p-2 flex flex-col gap-5">
            <p>Are you sure you want to delete {title} skill?</p>
            <Button variant="destructive" className="ml-auto w-32">
              Delete
            </Button>
          </div>
        }
        contentClassname="md:min-w-150"
      />
    </div>
  );
}
