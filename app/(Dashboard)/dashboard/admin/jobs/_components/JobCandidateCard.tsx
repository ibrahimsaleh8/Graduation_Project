import {
  AiBrain03Icon,
  File02Icon,
  Location01Icon,
  Time04Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import userImage from "@images/HR.png";
import Image from "next/image";
export default function JobCandidateCard() {
  return (
    <div className="w-full space-y-5 pb-4 border-b">
      {/* Top */}
      <div className="flex md:items-start items-center md:flex-row flex-col justify-between gap-3 flex-wrap">
        <div className="flex md:items-start items-center md:flex-row flex-col text-center md:text-left gap-4">
          {/* User Image */}
          <div className="size-15 rounded-full bg-input-bg flex items-center justify-center overflow-hidden border">
            <Image
              src={userImage}
              alt="user image"
              className="size-15 object-cover object-top"
            />
          </div>
          {/* User Main Text */}
          <div>
            <p className="font-medium">Ibrahim Saleh</p>
            <p className="text-black/70 text-sm">Frontend Developer</p>
            <div className="flex items-center gap-2 text-xs text-black/80">
              <p className="flex items-center gap-1">
                <HugeiconsIcon icon={Location01Icon} className="size-4" />
                Egypt, Cairo
              </p>
              <p className="flex items-center gap-1">
                <HugeiconsIcon icon={Time04Icon} className="size-4" />
                Applied 3H ago
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="px-3 py-1.5 text-xs font-medium bg-[#ECFDF5] text-green-700 rounded-2xl flex items-center gap-1">
            <HugeiconsIcon icon={AiBrain03Icon} className="size-5" />
            98% Match
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center gap-4 justify-between flex-wrap md:flex-row flex-col">
        <p className="px-6 py-2 bg-[#FCF4C3] w-fit rounded-sm text-[#a26f19] border border-[#f5ecb4] text-xs font-medium">
          Pending
        </p>
        <div className="flex items-center gap-2 ">
          <Link
            href={"/"}
            className="px-6 py-2 hover:opacity-80 duration-300 bg-main-color w-fit rounded-sm text-white border border-main-color text-xs font-medium flex items-center gap-1">
            <HugeiconsIcon
              icon={UserCircleIcon}
              className="size-4"
              strokeWidth={2}
            />{" "}
            View Profile
          </Link>
          <Link
            href={"/"}
            className="px-6 py-2 hover:opacity-80 duration-300 bg-main-dark w-fit rounded-sm text-white border border-main-dark text-xs font-medium flex items-center gap-1">
            <HugeiconsIcon
              icon={File02Icon}
              className="size-4"
              strokeWidth={2}
            />
            Show CV
          </Link>
        </div>
      </div>
    </div>
  );
}
