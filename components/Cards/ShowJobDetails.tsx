"use client";
import SimilarJobs from "./SimilarJobs";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useFetchJobDetailsById } from "@/lib/useFetchJobDetailsById";
import JobDetails from "./JobDetails";
import ShowJobDetailsSkeleton from "./ShowJobDetailsSkeleton";
type Props = {
  jobId: string;
  token: string;
};

export default function ShowJobDetails({ jobId, token }: Props) {
  const { data, error, isLoading } = useFetchJobDetailsById({ jobId, token });

  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <ShowJobDetailsSkeleton />
  ) : (
    data && (
      <div className="flex items-start gap-10 flex-col xl:flex-row xl:px-10 px-3">
        <JobDetails jobId={jobId} token={token} jobDetails={data.job} />
        {data.similarJobs.length > 0 && (
          <SimilarJobs similarJobs={data.similarJobs} />
        )}
      </div>
    )
  );
}
