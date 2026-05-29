"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type Props = {
  token: string;
};
export default function AddSkillForm({}: Props) {
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
    </div>
  );
}
