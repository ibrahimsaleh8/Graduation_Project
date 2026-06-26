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
import ShowJobDetails from "./ShowJobDetails";
type Props = {
  jobId: string;
  token: string;
};
export default function JobDetailsSheet({ jobId, token }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-8 py-3 text-sm bg-main-color hover:bg-main-color/90 text-white font-medium rounded-md flex-1">
          Apply
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-[90vh] overflow-y-auto bg-white text-black rounded-2xl">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ShowJobDetails jobId={jobId} token={token} />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
