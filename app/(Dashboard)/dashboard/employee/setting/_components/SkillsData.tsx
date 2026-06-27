import AlertModel from "@/components/main-layout/AlertModel";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddSkillForm from "./Add_Components/AddSkillForm";
import { SkillType } from "@/hooks/useGetEmployeeProfile";
import { HugeiconsIcon } from "@hugeicons/react";
import { Idea01Icon } from "@hugeicons/core-free-icons";

type Props = {
  skills?: SkillType[];
  token: string;
};
export default function SkillsData({ skills, token }: Props) {
  return (
    <div className="w-full px-4 py-4 md:py-0 md:min-h-100">
      <div className="w-full flex items-center justify-between gap-6 flex-wrap pb-4">
        <p className="font-medium">
          Skills <span className="text-sm">({skills?.length || 0})</span>
        </p>
        <AlertModel
          title="Add Skill"
          trigger={
            <Button className="text-sm h-9.5 min-w-40 bg-main-color text-white hover:bg-main-color/90 gap-1 ml-3">
              <Plus className="size-4.5" /> Add Skill
            </Button>
          }
          content={<AddSkillForm token={token} skills={skills} />}
          contentClassname="md:min-w-150"
        />
      </div>
      {/* All Skills */}
      <div className="flex items-center gap-4 flex-wrap">
        {skills && skills.length > 0 ? (
          skills.map((skill) => (
            <SkillCard
              key={skill.skillID}
              title={skill.skillName}
              token={token}
              skillId={skill.applicantSkillID}
            />
          ))
        ) : (
          <div className="p-2 flex flex-col items-center gap-2 justify-center text-black/80 font-medium w-full">
            <HugeiconsIcon icon={Idea01Icon} className="size-6" />
            <p>No skills found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
