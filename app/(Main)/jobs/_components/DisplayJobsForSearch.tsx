"use client";
import JobFilteration from "./JobFilteration";
import JobCard from "@/components/Cards/JobCard";
import { HugeiconsIcon } from "@hugeicons/react";
import { SearchMinusIcon } from "@hugeicons/core-free-icons";
import Pagination from "@/components/main-layout/Pagination";
import { useSearch } from "./hook/useSearch";
import { JobsResponse } from "../page";

export type jobSearchQueryDataType = {
  title: string;
  location: string;
  industry: string;
  page: string;
};
export type JobsFilteration = {
  jobTypes: string[];
  workType: string[];
  minExperience: string;
  maxExperience: string;
};

type Props = {
  token: string;
  params: jobSearchQueryDataType;
  initialJobs: JobsResponse;
};

export default function DisplayJobsForSearch({
  token,
  params,
  initialJobs,
}: Props) {
  const {
    setFilteration,
    updarteCurrentPage,
    currentPage,
    filteration,
    jobs,
    jobsResponse,
  } = useSearch({ params, token, initialJobs });

  return (
    <div className="md:px-10 px-3 ">
      <p className="font-medium ml-auto w-fit my-4">
        {jobsResponse.totalCount} jobs Found
      </p>

      <div className="flex gap-3 flex-col md:flex-row">
        <JobFilteration filters={filteration} setFilters={setFilteration} />
        <div className="flex-1">
          <div className="flex flex-col gap-7">
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] items-start gap-4">
              {jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                  <JobCard
                    key={job.jobID}
                    withSimilarJobs={true}
                    companyLocation={job.location}
                    companyLogoUrl={job.companyLogoUrl}
                    companyName={job.companyName ?? ""}
                    isApplied={job.isApplied}
                    jobDescription={job.description}
                    jobId={job.jobID}
                    jobTitle={job.title}
                    jobType={[...job.workApproaches, ...job.jobTypes]}
                    maxSalary={job.maxSalary}
                    minSalary={job.minSalary}
                    timeAgo={job.postedDate}
                    token={token}
                  />
                ))
              ) : (
                <div className="p-6 flex items-center justify-center text-center">
                  <p className="flex items-center gap-3 md:text-lg font-medium text-black/70">
                    <HugeiconsIcon
                      icon={SearchMinusIcon}
                      className="md:size-6 size-5"
                      strokeWidth={2}
                    />{" "}
                    No Jobs Found...
                  </p>
                </div>
              )}
            </div>
            {jobs && jobsResponse.totalCount > jobsResponse.pageSize && (
              <Pagination
                currentPage={currentPage}
                onPageChange={updarteCurrentPage}
                totalPages={Math.ceil(
                  jobsResponse.totalCount / jobsResponse.pageSize,
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
