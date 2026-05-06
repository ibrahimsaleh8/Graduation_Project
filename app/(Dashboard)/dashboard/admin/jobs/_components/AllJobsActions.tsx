"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import {
  CancelCircleIcon,
  CheckmarkCircle03Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import JobDetailsForCheetContent from "./JobDetailsForCheetContent";

export default function AllJobsActions() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-30 flex items-center justify-center text-center px-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} /> Details
        </Button>
      </SheetTrigger>
      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg text-black">
            Job Details
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {/* Job Details */}
        <div className="w-full relative h-full flex flex-col overflow-y-auto overflow-x-hidden">
          <JobDetailsForCheetContent />
          <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center md:flex-row flex-col  gap-4">
            <Button className="md:flex-1 md:w-fit w-full bg-green-600 text-white hover:bg-green-700 text-sm">
              <HugeiconsIcon
                icon={CheckmarkCircle03Icon}
                strokeWidth={2}
                className="size-5"
              />
              Approve & Publish
            </Button>

            <Button className="md:flex-1 md:w-fit w-full bg-red-600 text-white hover:bg-red-700 text-sm">
              <HugeiconsIcon
                icon={CancelCircleIcon}
                strokeWidth={2}
                className="size-5"
              />
              Reject Job
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
