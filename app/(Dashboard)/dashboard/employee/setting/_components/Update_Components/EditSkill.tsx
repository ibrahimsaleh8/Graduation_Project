"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type Props = {
  skillTitle: string;
};
export default function EditSkill({ skillTitle }: Props) {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1.5">
        <Label htmlFor="skill-title">Skill Title</Label>
        <Input
          defaultValue={skillTitle}
          id="skill-title"
          className="border-border-color"
          type="text"
          placeholder="Skill Title"
        />
      </div>

      <Button className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        Save
      </Button>
    </form>
  );
}
