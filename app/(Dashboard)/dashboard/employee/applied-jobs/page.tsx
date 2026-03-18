import { HugeiconsIcon } from "@hugeicons/react";
import AppliedJobCard from "./_components/AppliedJobCard";
import AppliedJobFilteration from "./_components/AppliedJobFilteration";
import { PermanentJobIcon } from "@hugeicons/core-free-icons";
export default function AppliedJobs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <div>
          <p className="font-medium text-xl">Applied Jobs</p>
          <p className="text-sm">
            Monitor your applications and their current status
          </p>
        </div>
        <p className="px-4 py-2 text-sm bg-blue-100 text-blue-600 w-fit rounded-full flex items-center gap-2">
          <HugeiconsIcon icon={PermanentJobIcon} className="size-4" /> 13
          Applied Jobs
        </p>
      </div>

      <AppliedJobFilteration />

      <div className="flex flex-col gap-4">
        {/* Applied Job Card */}
        <AppliedJobCard />
        <AppliedJobCard />
        <AppliedJobCard />
      </div>
    </div>
  );
}
