"use client";
import JobCard, { JobsCardDataType } from "@/components/Cards/JobCard";
import { HugeiconsIcon } from "@hugeicons/react";
import { Bookmark02Icon, BookmarkOff01Icon } from "@hugeicons/core-free-icons";
import SavedJobsFilteration from "./SavedJobsFilteration";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import SavedJobsSkeleton from "./SavedJobsSkeleton";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo, useState } from "react";
type Props = {
  token: string;
};

async function getSavedJobsApi(token: string): Promise<JobsCardDataType[]> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Applicant/MysavedJobs`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowAllSavedJobs({ token }: Props) {
  const { data, isLoading, error } = useQuery<
    JobsCardDataType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["employee-saved-jobs"],
    queryFn: () => getSavedJobsApi(token),
  });

  const [serachedTxt, setSerachedTxt] = useState("");
  const [serachedType, setSerachedType] = useState("all");

  const jobs = useMemo(() => {
    if (!data) return undefined;

    return serachedTxt.trim().length > 0
      ? data.filter((job) =>
          job.jobTitle.toLowerCase().includes(serachedTxt.trim().toLowerCase()),
        )
      : serachedType != "all"
        ? data.filter((job) => job.jobType.includes(serachedType))
        : data;
  }, [data, serachedTxt, serachedType]);

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

  const UpdateSearchTxt = (text: string) => {
    setSerachedTxt(text);
  };
  const UpdateSearchType = (type: string) => {
    setSerachedType(type);
  };

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
          <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
            {jobs.map((job) => (
              <JobCard key={job.jobTitle} {...job} withSimilarJobs={false} />
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
