import JobCard from "@/components/Cards/JobCard";
import JobsSearchAndFilter from "./_components/JobsSearchAndFilter";

export default function JobsPage() {
  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      {/* Top */}
      <JobsSearchAndFilter />
      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-6 mt-10 container mx-auto">
        {Array.from({ length: 6 }, (_, i) => (
          <JobCard key={i} isApplied={false} />
        ))}
      </div>
    </div>
  );
}
