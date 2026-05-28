import { SkillType } from "@/hooks/useGetEmployeeProfile";

export default function ShowSkills({ skills }: { skills?: SkillType[] }) {
  return (
    <div className="w-full xl:max-w-120 p-5 rounded-md border border-border-color bg-white space-y-4">
      <p className="font-medium pb-2 border-b">Skills</p>

      {skills && skills.length > 0 ? (
        <div className="flex items-center gap-4 flex-wrap">
          {skills.map((skill) => (
            <p
              key={skill.skillID}
              className="py-2 px-4 bg-input-bg text-black text-xs rounded-sm">
              {skill.skillName}
            </p>
          ))}
        </div>
      ) : (
        <div className="p-3 text-xl font-medium text-black/70">
          No Skills Added...
        </div>
      )}
    </div>
  );
}
