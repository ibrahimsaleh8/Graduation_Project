"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockPasswordIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function UpdateCompanyPassword() {
  const [showCurrentPassw, setShowCurrentPassw] = useState(false);
  const [showNewPassw, setShowNewPassw] = useState(false);
  const [showRepeatNewPassw, setShowRepeatNewPassw] = useState(false);
  return (
    <form
      className="space-y-5 w-full border rounded-2xl border-black/10 overflow-hidden bg-white"
      onSubmit={(e) => e.preventDefault()}>
      <p className="text-lg font-medium flex items-center gap-2 bg-main-color text-white p-5">
        <HugeiconsIcon icon={LockPasswordIcon} className="size-6" />
        Password Managment
      </p>

      {/* Form */}
      <div className="space-y-5 p-5">
        {/* Current Password */}
        <div className="space-y-1.5">
          <Label htmlFor="current-pass">Current Password</Label>
          <div className="flex items-center gap-2 border border-border-color bg-white pr-4 rounded-md h-11">
            <Input
              id="current-pass"
              className="bg-transparent border-0 focus-visible:ring-0 shadow-none"
              type={showCurrentPassw ? "text" : "password"}
              placeholder="***********"
            />
            <button
              className="cursor-pointer"
              onClick={() => setShowCurrentPassw((pre) => !pre)}>
              {showCurrentPassw ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="space-y-1.5">
          <Label htmlFor="new-pass">New Password</Label>
          <div className="flex items-center gap-2 border border-border-color bg-white pr-4 rounded-md h-11">
            <Input
              id="new-pass"
              className="bg-transparent border-0 focus-visible:ring-0 shadow-none"
              type={showNewPassw ? "text" : "password"}
              placeholder="***********"
            />
            <button
              className="cursor-pointer"
              onClick={() => setShowNewPassw((pre) => !pre)}>
              {showNewPassw ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Repeat New Password */}
        <div className="space-y-1.5">
          <Label htmlFor="repeat-new-pass">Repeat New Password</Label>
          <div className="flex items-center gap-2 border border-border-color bg-white pr-4 rounded-md h-11">
            <Input
              id="repeat-new-pass"
              className="bg-transparent border-0 focus-visible:ring-0 shadow-none"
              type={showRepeatNewPassw ? "text" : "password"}
              placeholder="***********"
            />
            <button
              className="cursor-pointer"
              onClick={() => setShowRepeatNewPassw((pre) => !pre)}>
              {showRepeatNewPassw ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>
        </div>

        <Button className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          Update Password
        </Button>
      </div>
    </form>
  );
}
