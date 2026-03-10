import JobCard from "@/components/Cards/JobCard";

export default function SavedJobs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 flex-wrap justify-between">
        <p className="font-medium text-xl flex items-center gap-1">
          Saved Jobs <span className="text-sm ml-1 mt-3">(6 Jobs)</span>
        </p>
      </div>

      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <JobCard key={i} isApplied={false} />
        ))}
      </div>
    </div>
  );
}
