import {
  Briefcase01Icon,
  Location01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function CandidateCard() {
  return (
    <div className="p-5 bg-white rounded-2xl border">
      {/* Top */}
      <div className="flex flex-col items-center gap-2 border-b pb-4">
        <div className="rounded-full bg-input-bg size-15"></div>
        {/* text */}
        <div className="text-sm text-center">
          <p className="font-medium">ibrahim saleh</p>
          <p>Senior Frontend Developer</p>
        </div>
      </div>

      {/* Body */}
      <div className="pt-4 flex flex-col items-center gap-6">
        {/* Industry & Location  */}
        <div className="flex items-center gap-6 flex-wrap">
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon
              icon={Briefcase01Icon}
              className="size-4"
              strokeWidth={2}
            />
            Software Enginnering
          </p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon
              icon={Location01Icon}
              className="size-4"
              strokeWidth={2}
            />
            Egypt
          </p>
        </div>

        <Link
          className="w-full text-sm px-4 py-3 bg-main-dark hover:bg-main-dark/90 duration-300 text-white rounded-md flex items-center justify-center gap-1.5"
          href={"/"}>
          <HugeiconsIcon
            icon={UserCircleIcon}
            className="size-4.5"
            strokeWidth={2}
          />{" "}
          View Profile
        </Link>
      </div>
    </div>
  );
}
