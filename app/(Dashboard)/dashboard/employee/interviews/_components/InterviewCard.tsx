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
    <div className="w-full bg-white rounded-2xl border p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap border-b border-border-color/50 pb-3">
        <div className="p-2 rounded-md flex gap-3 items-center">
          <Image
            src={microsoft}
            alt="microsoft"
            className="size-10 object-cover object-center"
          />
          <div>
            <p className="font-medium text-low-color text-base">
              Senior Frontend Engineer
            </p>
            <p className="font-medium text-low-color text-base">Google</p>
          </div>
        </div>

        <p className="text-xs px-2 py-1.5 rounded-md font-medium bg-blue-100 text-blue-600">
          Upcoming
        </p>
      </div>

      {/* body */}
      <div className="flex justify-between items-center gap-4 flex-wrap p-4 pb-5 border-b border-border-color/50">
        {/* Date */}
        <div>
          <p className="text-black/70">Date</p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon
              icon={Calendar02Icon}
              className="size-4.5 text-black/70"
            />
            Oct 24, 2023
          </p>
        </div>

        {/* Time */}
        <div>
          <p className="text-black/70">Time</p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon
              icon={AlarmClockIcon}
              className="size-4.5 text-black/70"
            />
            2:00 PM EST
          </p>
        </div>

        {/* Type */}
        <div>
          <p className="text-black/70">Type</p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon
              icon={File02Icon}
              className="size-4.5 text-black/70"
            />
            Technical
          </p>
        </div>

        {/* Interviewer */}
        <div>
          <p className="text-black/70">Interviewer</p>
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon icon={UserIcon} className="size-4.5 text-black/70" />
            Sarah Jenkins
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center gap-4 flex-wrap p-4 justify-end">
        <Button
          className="text-sm bg-white border text-black hover:bg-black/5"
          size={"sm"}>
          View Details
        </Button>
        <Button className="text-sm border hover:opacity-80" size={"sm"}>
          Join Meeting
        </Button>
      </div>
    </div>
  );
}
