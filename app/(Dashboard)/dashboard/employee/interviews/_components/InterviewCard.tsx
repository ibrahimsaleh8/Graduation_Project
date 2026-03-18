import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  Calendar02Icon,
  AlarmClockIcon,
  File02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import microsoft from "@images/Icons/google.svg";
import Image from "next/image";

export default function InterviewCard() {
  return (
    <div
      className="group w-full bg-white rounded-2xl border border-black/5 p-5 
    shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-black/5">
        {/* Company + Role */}
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-xl bg-black/5">
            <Image
              src={microsoft}
              alt="company"
              className="size-10 object-contain"
            />
          </div>

          <div>
            <p className="font-semibold text-base text-black">
              Senior Frontend Engineer
            </p>
            <p className="text-sm text-black/60">Google</p>
          </div>
        </div>

        {/* Status */}
        <span
          className="text-xs font-medium px-3 py-1 rounded-full 
        bg-blue-50 text-blue-600 border border-blue-100">
          Upcoming
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
        {/* Item */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-black/5">
            <HugeiconsIcon
              icon={Calendar02Icon}
              className="size-4 text-black/70"
            />
          </div>
          <div>
            <p className="text-xs text-black/50">Date</p>
            <p className="text-sm font-medium">Oct 24, 2023</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-black/5">
            <HugeiconsIcon
              icon={AlarmClockIcon}
              className="size-4 text-black/70"
            />
          </div>
          <div>
            <p className="text-xs text-black/50">Time</p>
            <p className="text-sm font-medium">2:00 PM EST</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-black/5">
            <HugeiconsIcon icon={File02Icon} className="size-4 text-black/70" />
          </div>
          <div>
            <p className="text-xs text-black/50">Type</p>
            <p className="text-sm font-medium">Technical</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-black/5">
            <HugeiconsIcon icon={UserIcon} className="size-4 text-black/70" />
          </div>
          <div>
            <p className="text-xs text-black/50">Interviewer</p>
            <p className="text-sm font-medium">Sarah Jenkins</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 pt-3 border-t border-black/5">
        <Button className="bg-main-color text-white text-sm h-10 hover:bg-main-color/90 hover:text-white">
          View Details
        </Button>

        <Button className="text-sm h-10 bg-main-dark hover:bg-main-dark/80">
          Join Meeting
        </Button>
      </div>
    </div>
  );
}
