/* eslint-disable @next/next/no-img-element */
import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Bookmark01Icon,
  Building03Icon,
  Calendar02Icon,
  Location01Icon,
  MoneyBag02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { SimilarJob } from "@/lib/useFetchJobDetailsById";
import { formatDate } from "@/lib/FormatDate";
type Props = {
  jobData: SimilarJob;
};
export default function SimilarJobCard({ jobData }: Props) {
  return (
    <div className="p-3 w-full border-2 rounded-md space-y-3">
      {/* Top */}
      <div className="flex items-start gap-3 justify-between flex-wrap">
        <div className="flex items-start flex-col sm:flex-row gap-2">
          {/* Company Logo */}
          <div className="size-14 bg-input-bg rounded-md overflow-hidden">
            <img
              src={jobData.companyImage}
              alt={jobData.companyName}
              className="w-full object-cover rounded-md"
            />
          </div>

          {/* Company Data */}
          <div className="">
            <p className="text-lg font-medium">{jobData.jobTitle}</p>

            <div className="text-sm text-black/80 flex items-center flex-wrap">
              <p className="flex items-center gap-1">
                <HugeiconsIcon
                  icon={Building03Icon}
                  className="size-4"
                  strokeWidth={2}
                />
                {jobData.companyName}
              </p>
              <Dot className="size-5" />

              <p className="flex items-center gap-1">
                <HugeiconsIcon
                  icon={Location01Icon}
                  className="size-4"
                  strokeWidth={2}
                />
                {jobData.jobLocation}
              </p>
            </div>
          </div>
        </div>

        <Button className="bg-transparent hover:bg-black/5 text-black ml-auto">
          <HugeiconsIcon icon={Bookmark01Icon} className="size-4.5!" />
        </Button>
      </div>

      {/* Employemnt Types */}
      <div className="flex items-center gap-2 flex-wrap">
        {[...jobData.workApproach, ...jobData.jobType].map((approch) => (
          <p
            key={approch}
            className="px-2 py-1 text-xs font-medium border bg-input-bg rounded-sm">
            {approch}
          </p>
        ))}
      </div>

      {/* Bottom */}
      <div className="w-full flex sm:items-center items-end justify-between gap-7">
        <div className="flex items-center gap-3 flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/80">
            <HugeiconsIcon icon={Calendar02Icon} className="size-4" />{" "}
            {formatDate(jobData.postedDate)}
          </p>
          <p className="flex items-center gap-1 text-sm text-black/80">
            <HugeiconsIcon icon={MoneyBag02Icon} className="size-4" /> $
            {jobData.minSalary} - ${jobData.maxSalary}
          </p>
        </div>

        <Link
          className="ml-auto px-4 py-2 text-sm bg-main-color rounded-sm hover:bg-main-color/80 duration-300 text-white"
          href={`/jobs/${jobData.jobId}`}>
          Apply
        </Link>
      </div>
    </div>
  );
}
