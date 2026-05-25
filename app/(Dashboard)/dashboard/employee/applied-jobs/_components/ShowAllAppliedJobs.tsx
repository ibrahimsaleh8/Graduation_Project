"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { FileSearchIcon, PermanentJobIcon } from "@hugeicons/core-free-icons";
import AppliedJobFilteration from "./AppliedJobFilteration";
import AppliedJobCard from "./AppliedJobCard";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import AppliedJobsSkeleton from "./AppliedJobsSkeleton";
import { ApplicationStatusDataType } from "@/lib/GlobalTypes";
import { useMemo, useState } from "react";
type Props = {
  token: string;
};

export type AppliedJobsResponseDataType = {
  applicationId: string;
  logoUrl: string;
  jobTitle: string;
  companyName: string;
  location: string;
  appliedOn: Date;
  applicationStatus: ApplicationStatusDataType;
  jobType: string[];
};

async function getAppliedJobsApi(
  token: string,
): Promise<AppliedJobsResponseDataType[]> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Application/get-my-applications`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowAllAppliedJobs({ token }: Props) {
  const { data, error, isLoading } = useQuery<
    AppliedJobsResponseDataType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["emplyee-applied-jobs"],
    queryFn: () => getAppliedJobsApi(token),
  });

  const [serachedTxt, setSerachedTxt] = useState("");
  const [serachedType, setSerachedType] = useState("all");
  const [serachedStatus, setSerachedStatus] = useState("all");

  const UpdateSearchTxt = (text: string) => {
    setSerachedTxt(text);
  };
  const UpdateSearchType = (type: string) => {
    setSerachedType(type);
  };
  const UpdateSearchStatus = (status: string) => {
    setSerachedStatus(status);
  };

  const appliedJobs = useMemo(() => {
    if (!data) return undefined;
    let filteredJobs = data;

    if (serachedTxt.trim().length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(serachedTxt.trim().toLowerCase()),
      );
    }

    if (serachedType !== "all") {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobType.includes(serachedType),
      );
    }
    if (serachedStatus !== "all") {
      filteredJobs = filteredJobs.filter((job) =>
        job.applicationStatus.includes(serachedStatus),
      );
    }

    return filteredJobs;
  }, [data, serachedStatus, serachedTxt, serachedType]);

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

  return isLoading && !appliedJobs ? (
    <AppliedJobsSkeleton />
  ) : (
    appliedJobs && (
      <div className="space-y-6">
        <div className="flex items-center gap-4 flex-wrap justify-between">
          <div>
            <p className="font-medium text-xl">Applied Jobs</p>
            <p className="text-sm">
              Monitor your applications and their current status
            </p>
          </div>
          <p className="px-4 py-2 text-sm bg-blue-100 text-blue-600 w-fit rounded-full flex items-center gap-2">
            <HugeiconsIcon icon={PermanentJobIcon} className="size-4" />
            {appliedJobs.length} Applied Jobs
          </p>
        </div>

        <AppliedJobFilteration
          UpdateSearchTxt={UpdateSearchTxt}
          UpdateSearchType={UpdateSearchType}
          UpdateSearchStatus={UpdateSearchStatus}
        />

        <div className="flex flex-col gap-4">
          {/* Applied Job Card */}
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job) => (
              <AppliedJobCard key={job.applicationId} {...job} />
            ))
          ) : (
            <div className="w-full flex flex-col items-center justify-center text-center text-black/70 gap-2">
              <HugeiconsIcon
                icon={FileSearchIcon}
                className="size-6"
                strokeWidth={2}
              />
              <p className="text-lg font-medium capitalize">
                {"We didn't find any Applied job posts."}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
}
