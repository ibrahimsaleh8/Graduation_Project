import JobCard from "@/components/Cards/JobCard";
import JobsSearchAndFilter from "./_components/JobsSearchAndFilter";
import JobFilteration from "./_components/JobFilteration";

export default function JobsPage() {
  return (
    <div className="space-y-6 px-1 pb-8">
      {/* Top */}
      <JobsSearchAndFilter />
      <div className="container mx-auto">
        <p className="font-medium ml-auto w-fit my-4">6 jobs Found</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <JobFilteration />
          <div className="flex-1">
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <JobCard key={i} isApplied={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
