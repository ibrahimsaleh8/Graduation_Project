"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CloudUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ProfileData() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full px-4 py-4 md:py-0">
      {/* Body */}
      <div className="flex flex-col gap-3">
        {/* Image */}
        <div className="flex flex-col w-full">
          <div className="w-full h-40 bg-amber-400 rounded-2xl flex items-center justify-center">
            <HugeiconsIcon
              icon={CloudUploadIcon}
              className="size-10 text-black"
            />
          </div>
          <div className="size-25 rounded-full bg-main-color -mt-10 flex items-center justify-center">
            <HugeiconsIcon
              icon={CloudUploadIcon}
              className="size-10 text-white"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex gap-5 flex-col w-full mt-5 px-3">
          <div className="flex items-center gap-4 w-full flex-col md:flex-row">
            <div className="space-y-1 w-full">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                type="text"
                id="full-name"
                placeholder="Full Name"
                className="bg-white border border-border-color"
              />
            </div>
            <div className="space-y-1 w-full">
              <Label htmlFor="job-title">Job Title</Label>
              <Input
                type="text"
                id="job-title"
                placeholder="Job Title"
                className="bg-white border border-border-color"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="about-me">About Me</Label>
            <Textarea
              id="about-me"
              placeholder="About Me"
              className="bg-white border border-border-color h-30"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm ml-3">
          Save
        </Button>
      </div>
    </form>
  );
}
