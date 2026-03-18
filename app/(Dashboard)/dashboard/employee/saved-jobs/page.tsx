import JobCard from "@/components/Cards/JobCard";
import SavedJobsFilteration from "./_components/SavedJobsFilteration";
import { HugeiconsIcon } from "@hugeicons/react";
import { Bookmark02Icon } from "@hugeicons/core-free-icons";

export default function SavedJobs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="font-medium text-xl">Saved Jobs</p>
          <p className="text-sm">
            Manage the Opportunities {"you've"} bookmarked for later.
          </p>
        </div>
        <p className="px-4 py-2 text-sm bg-blue-100 text-blue-600 w-fit rounded-full flex items-center gap-2">
          <HugeiconsIcon icon={Bookmark02Icon} className="size-4" /> 13 Saved
          Positions
        </p>
      </div>

      <SavedJobsFilteration />

      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <JobCard key={i} isApplied={false} />
        ))}
      </div>
    </div>
  );
}
