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
import InterviewDetailsSheetBody from "./InterviewDetailsSheetBody";
type Props = {
  interviewId: string;
  token: string;
  jobId: string;
};

export default function InterviewDetails({ interviewId, token, jobId }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-fit px-8 rounded-sm bg-blue-500 text-white justify-start hover:bg-blue-600 gap-1.5">
          Details
        </Button>
      </SheetTrigger>
      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader className="pb-1">
          <SheetTitle className="pt-2 text-lg text-black">
            Interview Details
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <InterviewDetailsSheetBody
          interviewId={interviewId}
          token={token}
          jobId={jobId}
        />
      </SheetContent>
    </Sheet>
  );
}
