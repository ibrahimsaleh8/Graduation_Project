import { SimilarJob } from "@/lib/useFetchJobDetailsById";
import SimilarJobCard from "./SimilarJobCard";
type Props = {
  similarJobs: SimilarJob[];
};
export default function SimilarJobs({ similarJobs }: Props) {
  return (
    <div className="w-full xl:max-w-xl pt-10 space-y-6">
      <p className="text-lg font-medium">Similar Jobs</p>
      <div className="space-y-4">
        {similarJobs.map((job) => (
          <SimilarJobCard jobData={job} key={job.jobId} />
        ))}
      </div>
    </div>
  );
}
