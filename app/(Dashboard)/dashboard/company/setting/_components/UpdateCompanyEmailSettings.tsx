"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function UpdateCompanyEmailSettings() {
  return (
    <form
      className="space-y-5 w-full border rounded-2xl border-black/10 overflow-hidden bg-white"
      onSubmit={(e) => e.preventDefault()}>
      <p className="text-lg font-medium flex items-center gap-2 bg-main-color text-white p-5">
        <HugeiconsIcon icon={MailEdit01Icon} className="size-6 text-white" />
        Email Managment
      </p>

      <div className="space-y-5 p-5">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className="border-border-color bg-white"
            type="email"
            placeholder="mail@mail.com"
          />
        </div>

        <Button className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          Update Email
        </Button>
      </div>
    </form>
  );
}
