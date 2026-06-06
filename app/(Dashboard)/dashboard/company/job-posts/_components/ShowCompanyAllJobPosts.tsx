"use client";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  WorkIcon,
  CheckmarkCircle02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import ShowAllJobPosts from "./ShowAllJobPosts";
import ShowCompanyAllJobPostsSkeleton from "./ShowCompanyAllJobPostsSkeleton";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo } from "react";
import { JobStatusDataType } from "../[id]/_components/ShowJobDetailsById";

type Props = {
  token: string;
};

export type CompanyJobDetailsType = {
  jobId: string;
  jobTitle: string;
  location: string;
  jobType: string[];
  postedAt: string;
  applicationCount: number;
  jobStatus: JobStatusDataType;
};

export type CompanyJobsStatisticsType = {
  jobPostingCount: number;
  activeJobPostedCount: number;
  applicantCount: number;
  jobDetails: CompanyJobDetailsType[];
};

async function getCompanyJobPosts(
  token: string,
): Promise<CompanyJobsStatisticsType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting/company`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function ShowCompanyAllJobPosts({ token }: Props) {
  const { data, error, isLoading } = useQuery<
    CompanyJobsStatisticsType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["company-job-posts"],
    queryFn: () => getCompanyJobPosts(token),
  });

  const interviewsStats = useMemo(() => {
    if (!data) return undefined;
    return [
      {
        title: "Total Jobs Posted",
        value: data.jobPostingCount,
        icon: WorkIcon,
        iconColor: "#ffffff",
        iconBg: "#125af7a6",
        description: "All jobs you have posted",
        background: "#1b1b1b",
        textColor: "#ffffff",
        descriptionColor: "#ffffff",
      },
      {
        title: "Active Job Posts",
        value: data.activeJobPostedCount,
        icon: CheckmarkCircle02Icon,
        iconColor: "#166534",
        iconBg: "#DCFCE7",
        description: "Active job postings",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Total Applicants",
        value: data.applicantCount,
        icon: UserGroupIcon,
        iconColor: "#92400E",
        iconBg: "#FEF3C7",
        description: "Total number of applicants",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
    ];
  }, [data]);

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
    <ShowCompanyAllJobPostsSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        <div>
          <p className="font-medium text-xl">Job Posts</p>
          <p className="text-sm">Track and manage your job postings</p>
        </div>

        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {interviewsStats &&
            interviewsStats.map((statistic) => (
              <DashboardCardStatistics
                size="small"
                {...statistic}
                key={statistic.title}
              />
            ))}
        </div>

        <ShowAllJobPosts jobPosts={data.jobDetails} />
      </div>
    )
  );
}
