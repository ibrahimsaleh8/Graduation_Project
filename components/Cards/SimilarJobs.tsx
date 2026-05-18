import SimilarJobCard from "./SimilarJobCard";

export default function SimilarJobs() {
  return (
    <div className="w-full lg:max-w-xl pt-10 space-y-6">
      <p className="text-lg font-medium">Similar Jobs</p>
      <div className="space-y-4">
        <SimilarJobCard />
        <SimilarJobCard />
        <SimilarJobCard />
      </div>
    </div>
  );
}
