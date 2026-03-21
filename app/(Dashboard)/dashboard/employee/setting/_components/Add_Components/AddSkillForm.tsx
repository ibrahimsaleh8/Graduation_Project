"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddSkillForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1.5">
        <Label htmlFor="skill-title">Skill Title</Label>
        <Input id="skill-title" type="text" placeholder="Skill Title" />
      </div>

      <Button className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        Add
      </Button>
    </form>
  );
}
