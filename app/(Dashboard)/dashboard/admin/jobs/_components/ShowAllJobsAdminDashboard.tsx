"use client";

import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  WorkIcon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import ShowAllJobsForAdmin from "./ShowAllJobsForAdmin";
import ShowAllJobsAdminDashboardSkeleton from "./ShowAllJobsAdminDashboardSkeleton";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { JobStatusDataType } from "../../../company/job-posts/[id]/_components/ShowJobDetailsById";
import { useMemo } from "react";

type Props = {
  token: string;
};

export type JobAdminDashboardDataType = {
  jobId: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  category: string;
  type: string[];
  status: JobStatusDataType;
  applications: number;
  postedDate: string;
};

export type AllJobsAdminDashboardResponse = {
  totalJobs: number;
  activeJobs: number;
  pendingJobs: number;
  rejectedJobs: number;
  jobs: JobAdminDashboardDataType[];
};

async function getAllJobsApi(
  token: string,
): Promise<AllJobsAdminDashboardResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/jobs-overview`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowAllJobsAdminDashboard({ token }: Props) {
  const { error, data, isLoading } = useQuery<
    AllJobsAdminDashboardResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["all-jobs-admin-dashboard"],
    queryFn: () => getAllJobsApi(token),
  });

  const JobStatus = useMemo(() => {
    if (!data) return undefined;
    return [
      {
        title: "Total Jobs",
        value: data.totalJobs,
        icon: WorkIcon,
        iconColor: "#ffffff",
        iconBg: "#125af7a6",
        description: "All jobs on platform",
        background: "#1b1b1b",
        textColor: "#ffffff",
        descriptionColor: "#ffffff",
      },
      {
        title: "Active Jobs",
        value: data.activeJobs,
        icon: CheckmarkCircle02Icon,
        iconColor: "#166534",
        iconBg: "#DCFCE7",
        description: "Currently live jobs",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Pending Jobs",
        value: data.pendingJobs,
        icon: Clock01Icon,
        iconColor: "#92400E",
        iconBg: "#FEF3C7",
        description: "Waiting for approval",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Rejected Jobs",
        value: data.rejectedJobs,
        icon: Cancel01Icon,
        iconColor: "#991B1B",
        iconBg: "#FEE2E2",
        description: "Jobs not approved",
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
    <ShowAllJobsAdminDashboardSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="font-medium text-xl">Job Posts</p>
          <p className="text-sm">Track and manage your job postings</p>
        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {JobStatus &&
            JobStatus.map((stat) => (
              <DashboardCardStatistics
                size="small"
                {...stat}
                key={stat.title}
              />
            ))}
        </div>

        {/* Jobs Table */}
        <ShowAllJobsForAdmin data={data.jobs} />
      </div>
    )
  );
}
