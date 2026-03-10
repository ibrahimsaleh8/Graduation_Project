import AppliedJobCard from "./_components/AppliedJobCard";

export default function AppliedJobs() {
  return (
    <div className="space-y-6">
      <p className="font-medium text-xl">Applied Jobs</p>

      <div className="flex flex-col gap-4">
        <AppliedJobCard />
      </div>
    </div>
  );
}
