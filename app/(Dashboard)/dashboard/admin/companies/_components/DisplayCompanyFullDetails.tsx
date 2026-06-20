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
import ShowCompanyDetails from "./ShowCompanyDetails";
import { useState } from "react";

type Props = {
  token: string;
  companyId: string;
};

export default function DisplayCompanyFullDetails({ companyId, token }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-30 flex items-center justify-center text-center px-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} /> Details
        </Button>
      </SheetTrigger>

      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg text-black">
            Company Details
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <ShowCompanyDetails
          setOpen={setOpen}
          companyId={companyId}
          token={token}
        />
      </SheetContent>
    </Sheet>
  );
}
