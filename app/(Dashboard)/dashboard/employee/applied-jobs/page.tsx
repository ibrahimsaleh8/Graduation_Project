import AppliedJobCard from "./_components/AppliedJobCard";

export default function AppliedJobs() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium text-xl">Applied Jobs</p>
        <p className="text-sm">
          Monitor your applications and their current status
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <AppliedJobCard />
      </div>
    </div>
  );
}
