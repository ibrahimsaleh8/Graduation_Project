"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { File02Icon, Setting07Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import ShowInterviewDetails from "./ShowInterviewDetails";
import EditInterviewData from "./EditInterviewData";

export default function InterviewDetails() {
  const [showInterviewData, setShowInterviewData] = useState(true);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-fit px-8 rounded-sm bg-blue-500 text-white justify-start hover:bg-blue-600 gap-1.5">
          Details
        </Button>
      </SheetTrigger>
      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg text-black">
            Interview Details
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {showInterviewData ? <ShowInterviewDetails /> : <EditInterviewData />}

        {/* Button Actions */}
        <div className="sticky mt-auto bottom-0 left-0 w-full bg-input-bg p-4 pt-6 flex flex-col gap-3">
          <Button
            onClick={() => setShowInterviewData((pre) => !pre)}
            className="text-sm bg-main-color text-white hover:bg-main-color/75">
            <HugeiconsIcon
              icon={showInterviewData ? Setting07Icon : File02Icon}
              strokeWidth={2}
            />
            {showInterviewData
              ? "Modify Interview Data"
              : "Show Interview Details"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
