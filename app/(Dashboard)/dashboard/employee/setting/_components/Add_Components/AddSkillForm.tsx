"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SkillCardWithOperations from "../SkillCardWithOperations";
import { useState } from "react";
type Props = {
  skills: string[];
};
export default function AddSkillForm({ skills }: Props) {
  const [allSkills, setAllSkills] = useState(skills);
  const DeleteSkill = (title: string) => {
    setAllSkills(() => allSkills.filter((s) => s != title));
  };

  return (
    <div className="space-y-5">
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <Label htmlFor="skill-title">Skill Title</Label>
          <Input
            id="skill-title"
            type="text"
            placeholder="Skill Title"
            className="border-border-color"
          />
        </div>

        <Button className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          Add
        </Button>
      </form>

      <div className="space-y-2">
        <div className="flex items-center gap-4 flex-wrap justify-between">
          <p className="font-medium">({allSkills.length}) Skills</p>

          {allSkills.length != skills.length && (
            <Button className="w-fit bg-green-600 hover:bg-green-700 text-white h-10 text-sm">
              Save
            </Button>
          )}
        </div>

        <div className="flex items-center gap-3 flex-wrap pt-3 max-h-50 overflow-y-auto">
          {allSkills.map((skill) => (
            <SkillCardWithOperations
              title={skill}
              DeleteSkill={DeleteSkill}
              key={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
