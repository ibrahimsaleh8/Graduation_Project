"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ManageProjectSocialLinks() {
  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Contact */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-1 w-full">
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              type="text"
              id="facebook"
              placeholder="https://www.facebook.com/......"
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="linkedin">Linkedin</Label>
            <Input
              type="text"
              id="linkedin"
              placeholder="https://www.linkedin.com/in/...."
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              type="text"
              id="instagram"
              placeholder="https://instagram.com/...."
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="youtube">Youtube</Label>
            <Input
              type="text"
              id="youtube"
              placeholder="https://www.youtube.com/@......"
              className="bg-white border border-border-color"
            />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="twitter">Twitter (x)</Label>
            <Input
              type="text"
              id="twitter"
              placeholder="https://x.com/..."
              className="bg-white border border-border-color"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          Save
        </Button>
      </div>
    </div>
  );
}
