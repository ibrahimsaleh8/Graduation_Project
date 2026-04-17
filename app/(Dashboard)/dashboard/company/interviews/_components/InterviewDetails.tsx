import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Button } from "@/components/ui/button";

export default function InterviewDetails() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-fit px-8 rounded-sm bg-blue-500 text-white justify-start hover:bg-blue-600 gap-1.5">
          Details
        </Button>
      </SheetTrigger>
      <SheetContent className="border-black bg-white text-black w-1/2">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg">Dashboard</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
