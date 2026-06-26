"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { Bookmark02Icon, BookmarkOff01Icon } from "@hugeicons/core-free-icons";
import SavedJobsFilteration from "./SavedJobsFilteration";
import SavedJobsSkeleton from "./SavedJobsSkeleton";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import SavedJobCard from "./SavedJobCard";
import { useSavedJobs } from "./hooks/useSavedJobs";
type Props = {
  token: string;
};

export interface SavedJobType {
  companyLogoUrl: string;
  companyName: string;
  companyLocation: string;
  jobId: string;
  jobTitle: string;
  jobDescription: string;
  jobRequirement: string;
  minSalary: number;
  maxSalary: number;
  jobType: string[];
  timeAgo: string;
  isApplied: boolean;
}

export default function ShowAllSavedJobs({ token }: Props) {
  const { UpdateSearchType, UpdateSearchTxt, jobs, isLoading, error } =
    useSavedJobs({ token });

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
    <SavedJobsSkeleton />
  ) : (
    jobs && !isLoading && (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="font-medium text-xl">Saved Jobs</p>
            <p className="text-sm">
              Manage the Opportunities {"you've"} bookmarked for later.
            </p>
          </div>
          <p className="px-4 py-2 text-sm bg-blue-100 text-blue-600 w-fit rounded-full flex items-center gap-2">
            <HugeiconsIcon icon={Bookmark02Icon} className="size-4" />{" "}
            {jobs.length} Saved Positions
          </p>
        </div>

        <SavedJobsFilteration
          UpdateSearchTxt={UpdateSearchTxt}
          UpdateSearchType={UpdateSearchType}
        />

        {jobs.length > 0 ? (
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
            {jobs.map((job) => (
              <SavedJobCard key={job.jobId} token={token} jobData={job} />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-center text-black/70 gap-2">
            <HugeiconsIcon
              icon={BookmarkOff01Icon}
              className="size-6"
              strokeWidth={2}
            />
            <p className="text-lg font-medium capitalize">
              {"We didn't find any Saved job posts."}
            </p>
          </div>
        )}
      </div>
    )
  );
}
