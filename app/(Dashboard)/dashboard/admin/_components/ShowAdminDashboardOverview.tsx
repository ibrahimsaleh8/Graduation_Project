"use client";
import {
  UserGroupIcon,
  Building01Icon,
  Briefcase01Icon,
  Clock01Icon,
  CreditCardPosIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { AdminDashboardJobsAnalytics } from "./AdminDashboardJobsAnalytics";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import AdminDashboardPendingApproval from "./AdminDashboardPendingApproval";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo } from "react";
import LatestAdminJobPosts from "./LatestAdminJobPosts";
import AdminDashboardOverviewSkeleton from "./AdminDashboardOverviewSkeleton";
type Props = {
  token: string;
};

export type AdminDashboardOverviewResponseType = {
  totalUsers: number;
  totalCompanies: number;
  activeJobPosts: number;
  pendingJobs: number;
  year: number;
  monthlyStats: AdminDashboardMonthlyStatDataType[];
  latestJobs: AdminDashboardLatestJobDataType[];
  pendingApprovals: AdminDashboardPendingApprovalDataType[];
};

export type AdminDashboardMonthlyStatDataType = {
  month: string;
  jobPosts: number;
  applications: number;
};

export type AdminDashboardLatestJobDataType = {
  jobId: string;
  jobTitle: string;
  totalApplications: number;
  postedAt: string;
};

export type AdminDashboardPendingApprovalDataType = {
  jobId: string;
  jobTitle: string;
  logo: string;
  createdAt: string;
};

async function getAdminOverviewApi(
  token: string,
): Promise<AdminDashboardOverviewResponseType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/dashboard-overview`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowAdminDashboardOverview({ token }: Props) {
  const { error, isLoading, data } = useQuery<
    AdminDashboardOverviewResponseType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["admin-dashboard-overview"],
    queryFn: () => getAdminOverviewApi(token),
  });

  const adminDashboardStats = useMemo(() => {
    if (!data) return undefined;

    return [
      {
        title: "Total Users",
        value: data.totalUsers,
        icon: UserGroupIcon,
        iconColor: "#ffffff",
        iconBg: "#2563eb",
        description: "All registered users on the platform",
        background: "linear-gradient(135deg, #1E293B, #0F172A)",
        textColor: "#ffffff",
        descriptionColor: "#cbd5f5",
      },
      {
        title: "Total Companies",
        value: data.totalCompanies,
        icon: Building01Icon,
        iconColor: "#065F46",
        iconBg: "rgba(16, 185, 129, 0.15)",
        description: "Companies registered and posting jobs",
        background: "#ffffff",
        textColor: "#0f172a",
        descriptionColor: "#64748b",
      },
      {
        title: "Active Job Posts",
        value: data.activeJobPosts,
        icon: Briefcase01Icon,
        iconColor: "#1D4ED8",
        iconBg: "rgba(59, 130, 246, 0.15)",
        description: "Jobs currently open for applications",
        background: "#ffffff",
        textColor: "#0f172a",
        descriptionColor: "#64748b",
      },
      {
        title: "Pending Jobs",
        value: data.pendingJobs,
        icon: Clock01Icon,
        iconColor: "#B45309",
        iconBg: "rgba(251, 191, 36, 0.2)",
        description: "Jobs waiting for admin approval",
        background: "#ffffff",
        textColor: "#0f172a",
        descriptionColor: "#64748b",
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
    <AdminDashboardOverviewSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        <p className="font-medium md:text-3xl text-2xl">
          Welcome to Admin Dashboard &#128075;
        </p>
        <div className="flex flex-col gap-5">
          {/* Top */}
          <div className="flex flex-col-reverse xl:flex-row gap-4 w-full items-start">
            {/* Left */}
            <div className="flex flex-col gap-5 xl:w-1/2 w-full">
              <AdminDashboardJobsAnalytics
                year={data.year}
                monthlyStats={data.monthlyStats}
              />
            </div>

            {/* Right */}
            <div className="xl:w-1/2 w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-center gap-5 flex-wrap">
                <p className="text-2xl font-medium">Statistics</p>
                <Link
                  href={"/dashboard/admin/subscriptions"}
                  className="px-6 py-2 bg-main-color hover:bg-main-color/90 duration-300 text-white rounded-sm text-sm flex items-center gap-2 w-fit">
                  <HugeiconsIcon
                    icon={CreditCardPosIcon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Manage Subscriptions
                </Link>
              </div>
              {/* Cards */}
              <div className="grid md:grid-cols-2 gap-4 ">
                {adminDashboardStats &&
                  adminDashboardStats.map((statistic) => (
                    <DashboardCardStatistics
                      size="large"
                      {...statistic}
                      key={statistic.title}
                    />
                  ))}
              </div>
              {/* AI Chatbot */}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col xl:flex-row gap-6 w-full items-start">
            <LatestAdminJobPosts recentJobPosting={data.latestJobs} />
            <AdminDashboardPendingApproval
              pendingJobs={data.pendingApprovals}
            />
          </div>
        </div>
      </div>
    )
  );
}
