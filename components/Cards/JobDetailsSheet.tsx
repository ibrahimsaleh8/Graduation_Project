import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Button } from "../ui/button";
import JobDetails from "./JobDetails";

export default function JobDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-8 py-3 text-sm bg-main-color hover:bg-main-color/90 text-white font-medium rounded-full">
          Apply
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-[90vh] overflow-y-auto bg-white text-black rounded-2xl">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <JobDetails />
        </SheetHeader>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
