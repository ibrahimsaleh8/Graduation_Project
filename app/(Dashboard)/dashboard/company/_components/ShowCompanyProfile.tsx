"use client";
import {
  BriefcaseIcon,
  UserGroupIcon,
  Calendar03Icon,
  CheckmarkCircle02Icon,
  Add01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CompanyDashboardAnalytics } from "./CompanyDashboardAnalytics";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import LatestJobPostes from "./LatestJobPostes";
import RecentEmployeesApplied from "./RecentEmployeesApplied";
import CompanyProfileSkeleton from "./CompanyProfileSkeleton";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useGetCompanyDashboardData } from "./hooks/useGetCompanyDashboardData";
import { useMemo } from "react";

type Props = {
  token: string;
};

export default function ShowCompanyProfile({ token }: Props) {
  const { data, error, isLoading } = useGetCompanyDashboardData({ token });

  const companyDashboardStats = useMemo(() => {
    if (!data) return;

    return [
      {
        title: "Total Job Posts",
        value: data.statistics.totalJobPosts,
        icon: BriefcaseIcon,
        iconColor: "#ffffff",
        iconBg: "#125af7a6",
        description: "Total jobs you have posted",
        background: "linear-gradient(135deg, #1E293B, #0F172A)",
        textColor: "#ffffff",
        descriptionColor: "#cbd5f5",
      },
      {
        title: "Active Job Posts",
        value: data.statistics.activeJobPosts,
        icon: CheckmarkCircle02Icon,

        iconColor: "#065F46",
        iconBg: "rgba(16, 185, 129, 0.15)",

        description: "Jobs currently open for applications",
        background: "#ffffff",
        textColor: "#0f172a",
        descriptionColor: "#64748b",
      },
      {
        title: "Total Applicants",
        value: data.statistics.totalApplicants,
        icon: UserGroupIcon,
        iconColor: "#1D4ED8",
        iconBg: "rgba(59, 130, 246, 0.15)",
        description: "Candidates who applied to your jobs",
        background: "#ffffff",
        textColor: "#0f172a",
        descriptionColor: "#64748b",
      },
      {
        title: "Scheduled Interviews",
        value: data.statistics.scheduledInterviews,
        icon: Calendar03Icon,
        iconColor: "#9A3412",
        iconBg: "rgba(249, 115, 22, 0.15)",
        description: "Upcoming interviews with candidates",
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

  console.log("data", data);
  return isLoading ? (
    <CompanyProfileSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        <p className="font-medium md:text-3xl text-2xl">
          Welcome to Microsoft Company Dashboard &#128075;
        </p>
        <div className="flex flex-col gap-5">
          {/* Top */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 w-full items-start">
            {/* Left */}
            <div className="flex flex-col gap-5 lg:w-1/2 w-full">
              <CompanyDashboardAnalytics chartData={data.monthlyStats} />
            </div>

            {/* Right */}
            <div className="lg:w-1/2 w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-center gap-5 flex-wrap">
                <p className="text-2xl font-medium">Statistics</p>
                <Link
                  href={"/dashboard/company/create-job"}
                  className="px-6 py-2 bg-main-color hover:bg-main-color/90 duration-300 text-white rounded-md text-sm flex items-center gap-2 w-fit">
                  <HugeiconsIcon
                    icon={Add01Icon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Create Job Post
                </Link>
              </div>
              {/* Cards */}
              <div className="grid md:grid-cols-2 gap-4 ">
                {companyDashboardStats &&
                  companyDashboardStats.map((statistic) => (
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
          <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
            <LatestJobPostes />
            <RecentEmployeesApplied />
          </div>
        </div>
      </div>
    )
  );
}
