import JobCard from "@/components/Cards/JobCard";
import { CircleArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function RecentlyAppliedJobs() {
  return (
    <div className="space-y-5">
      {/* Top */}
      <div className="flex justify-between gap-4 flex-wrap items-center">
        <p className="text-lg font-medium">Recently Applied Jobs</p>
        <Link className="flex items-center gap-1 font-medium" href={"/"}>
          See All
          <HugeiconsIcon icon={CircleArrowRight01Icon} className="size-5" />
        </Link>
      </div>

      {/* Jobs */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <JobCard isApplied={true} />
        <JobCard isApplied={true} />
        <JobCard isApplied={true} />
        <JobCard isApplied={true} />
      </div>
    </div>
  );
}
