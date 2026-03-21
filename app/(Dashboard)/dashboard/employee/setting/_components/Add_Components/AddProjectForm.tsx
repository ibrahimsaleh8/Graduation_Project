"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function AddProjectForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      {/* Project  Image */}
      <Label
        htmlFor="project-card"
        className="w-full h-40 bg-input-bg border-2 border-dashed border-black/10 rounded-2xl flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-input-bg/50 duration-300">
        <HugeiconsIcon
          icon={CloudUploadIcon}
          className="size-15 text-black/40"
        />
        <span>Upload Project Card</span>
        <input type="file" className="hidden" id="project-card" />
      </Label>

      {/* Project Title */}
      <div className="space-y-1.5">
        <Label htmlFor="project-title">Project Title</Label>
        <Input
          id="project-title"
          type="text"
          placeholder="Project Title"
          className="border-border-color"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          placeholder="Project Description"
          className="bg-input-bg h-20 border-border-color"
        />
      </div>

      {/* Project Url */}
      <div className="space-y-1.5">
        <Label htmlFor="project-url">Project URL</Label>
        <Input
          id="project-url"
          className="border-border-color"
          type="text"
          placeholder="https://www.project-url.com"
        />
      </div>

      {/* Project Url */}
      <div className="space-y-1.5">
        <Label htmlFor="project-repo">Project Github Repo</Label>
        <Input
          id="project-repo"
          className="border-border-color"
          type="text"
          placeholder="https://github.com/Project_Repo"
        />
      </div>

      <Button className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
        Add Project
      </Button>
    </form>
  );
}
