import AlertModel from "@/components/main-layout/AlertModel";
import { Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import DeleteSkill from "./Delete_Components/DeleteSkill";
type Props = {
  title: string;
  token: string;
  skillId: string;
};

export default function SkillCard({ title, token, skillId }: Props) {
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
        content={<DeleteSkill title={title} token={token} skillId={skillId} />}
        contentClassname="md:min-w-150 pb-3"
      />
    </div>
  );
}
