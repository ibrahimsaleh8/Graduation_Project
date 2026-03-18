import { Button } from "@/components/ui/button";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import googleImage from "@images/Icons/google.svg";
import Image from "next/image";

export default function AppliedJobCard() {
  return (
    <div className="w-full p-5 bg-white rounded-2xl border flex items-center gap-4 justify-between flex-wrap">
      {/* Left */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Company Logo */}
        <div className="size-14 bg-input-bg rounded-2xl flex items-center justify-center">
          <Image
            src={googleImage}
            alt="googleImage"
            width={1000}
            height={1000}
            className="size-8 object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-2xl font-medium">Frontend Developer </p>
            <p className="text-xs px-3 py-1.5 bg-green-100/60 rounded-md text-green-600">
              Full-Time
            </p>
            <p className="text-xs px-3 py-1.5 bg-blue-100/60 rounded-md text-blue-600">
              Remote
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <p>Google .</p>
            <p className="flex items-center gap-1">
              <HugeiconsIcon icon={Location01Icon} className="size-4" /> Egypt,
              Cairo
            </p>
          </div>
          <p className="text-sm text-black/70">Applied on 13 March, 2026</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-5 md:items-end items-start">
        <p className="text-xs px-3 py-1.5 bg-yellow-300  rounded-md text-black">
          Pending Review
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <Button size={"sm"} variant={"destructive"} className="h-9 text-sm">
            Withdraw
          </Button>
          <Button size={"sm"} className="bg-main-color h-9 text-sm">
            Job Details
          </Button>
        </div>
      </div>
    </div>
  );
}
