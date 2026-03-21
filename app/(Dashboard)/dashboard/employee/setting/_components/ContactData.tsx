"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactData() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full px-4 py-4 md:py-0">
      {/* Contact */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-1 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              placeholder="Phone"
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Address"
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
            <Label htmlFor="github">Github</Label>
            <Input
              type="text"
              id="github"
              placeholder="https://github.com/...."
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              type="text"
              id="facebook"
              placeholder="https://www.facebook.com/..."
              className="bg-white border border-border-color"
            />
          </div>

          <div className="space-y-1 w-full">
            <Label htmlFor="portfolio">Portfolio</Label>
            <Input
              type="text"
              id="portfolio"
              placeholder="https://www.portfolio.com"
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
    </form>
  );
}
