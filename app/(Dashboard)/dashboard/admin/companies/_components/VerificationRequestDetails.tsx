import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Button } from "@/components/ui/button";
import { Settings01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ShowVerificationRequestDetails from "./ShowVerificationRequestDetails";

type Props = {
  token: string;
  id: string;
};

export default function VerificationRequestDetails({ id, token }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-30 flex items-center justify-center text-center px-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} /> Details
        </Button>
      </SheetTrigger>

      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-black">
            Verification Request Details
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <ShowVerificationRequestDetails id={id} token={token} />
      </SheetContent>
    </Sheet>
  );
}
