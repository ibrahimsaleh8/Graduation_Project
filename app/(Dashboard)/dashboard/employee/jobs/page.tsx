import JobsSearchAndFilter from "@/app/(Main)/jobs/_components/JobsSearchAndFilter";
import JobCard from "@/components/Cards/JobCard";

export default function ShowJobs() {
  return (
    <div className="space-y-6">
      {/* Top */}
      <JobsSearchAndFilter />
      <p className="font-medium ml-auto w-fit my-4">6 jobs Found</p>
      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <JobCard key={i} isApplied={false} />
        ))}
      </div>
    </div>
  );
}
