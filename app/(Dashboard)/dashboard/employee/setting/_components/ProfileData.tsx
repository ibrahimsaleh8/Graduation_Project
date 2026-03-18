"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileData() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full p-5">
      {/* Body */}
      <div className="flex flex-col gap-3">
        {/* Image */}
        <div className="flex flex-col w-full">
          <div className="w-full h-40 bg-amber-400 rounded-2xl"></div>
          <div className="size-25 rounded-full bg-main-color -mt-10"></div>
        </div>

        {/* Text */}
        <div className="flex gap-5 flex-col w-full mt-5 px-3">
          <div className="flex items-center gap-4 w-full">
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
          className="min-w-32 h-9.5 text-sm w-fit mt-5 ml-4">
          Save
        </Button>
      </div>
    </form>
  );
}
