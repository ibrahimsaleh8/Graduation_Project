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
import SimilarJobs from "./SimilarJobs";
import { JobsCardDataType } from "./JobCard";
type Props = {
  jobDetails: JobsCardDataType;
  withSimilarJobs: boolean;
};
export default function JobDetailsSheet({
  withSimilarJobs,
  jobDetails,
}: Props) {
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
          <div
            className={`${withSimilarJobs ? "flex items-start gap-10 flex-col lg:flex-row lg:px-10" : "container mx-auto"}`}>
            <JobDetails jobDetails={jobDetails} />
            {withSimilarJobs && <SimilarJobs />}
          </div>
        </SheetHeader>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
