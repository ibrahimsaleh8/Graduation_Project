"use client";
import {
  BriefcaseIcon,
  Bookmark02Icon,
  Calendar03Icon,
  EyeIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import RecentlyAppliedJobs from "@/app/(Dashboard)/_components/RecentlyAppliedJobs";
import { EmployeeApplicationsStaticChart } from "@/app/(Dashboard)/_components/EmployeeApplicationsStaticChart";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import ChatWithOurAiCard from "@/app/(Dashboard)/_components/ChatWithOurAiCard";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import EmployeeMainDashboardSkeleton from "./EmployeeMainDashboardSkeleton";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo } from "react";

type Props = {
  token: string;
};

type GetEmployeeDashboardDataType = {
  firstName: string;
  statistics: {
    appliedJobsCount: number;
    savedJobsCount: number;
    upcomingInterviewsCount: number;
    profileViewsCount: number;
  };
  monthlyStats: {
    month: string;
    applicationsCount: number;
    interviewsCount: number;
  }[];
  recentApplications: {
    id: string;
    companyName: string;
    companyLogoUrl: string;
    jobTitle: string;
    appliedAt: Date;
  }[];
};
// export const employeeDashboardStats = [
//   {
//     title: "Applied Jobs",
//     value: 24,
//     icon: BriefcaseIcon,
//     iconColor: "#ffffff",
//     iconBg: "#125af7a6",
//     description: "Jobs you have submitted applications for",
//     background: "#1b1b1b",
//     textColor: "#ffffff",
//     descriptionColor: "#ffffff",
//   },
//   {
//     title: "Saved Jobs",
//     value: 12,
//     icon: Bookmark02Icon,
//     iconColor: "#059669",
//     iconBg: "rgba(5, 150, 105, 0.15)",
//     description: "Jobs you marked to apply later",
//     background: "#ffffff",
//     textColor: "#000000",
//     descriptionColor: "#2e2e2e",
//   },
//   {
//     title: "Interview Schedule",
//     value: 5,
//     icon: Calendar03Icon,
//     iconColor: "#EA580C",
//     iconBg: "rgba(234, 88, 12, 0.15)",
//     description: "Upcoming interviews on your schedule",
//     background: "#ffffff",
//     textColor: "#000000",
//     descriptionColor: "#2e2e2e",
//   },
//   {
//     title: "Profile Views",
//     value: 7,
//     icon: EyeIcon,
//     iconColor: "#DC2626",
//     iconBg: "rgba(220, 38, 38, 0.15)",
//     description: "Number of times recruiters viewed your profile",
//     background: "#ffffff",
//     textColor: "#000000",
//     descriptionColor: "#2e2e2e",
//   },
// ];

async function getEmployeeDashboard(
  token: string,
): Promise<GetEmployeeDashboardDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Applicant/get-my-dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function DisplayEmployeeMainData({ token }: Props) {
  const { data, error, isLoading } = useQuery<
    GetEmployeeDashboardDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["empolyee-main-dashboard-data"],
    queryFn: () => getEmployeeDashboard(token),
  });

  const employeeDashboardStats = useMemo(() => {
    if (!data) return undefined;
    return [
      {
        title: "Applied Jobs",
        value: data.statistics.appliedJobsCount,
        icon: BriefcaseIcon,
        iconColor: "#ffffff",
        iconBg: "#125af7a6",
        description: "Jobs you have submitted applications for",
        background: "#1b1b1b",
        textColor: "#ffffff",
        descriptionColor: "#ffffff",
      },
      {
        title: "Saved Jobs",
        value: data.statistics.savedJobsCount,
        icon: Bookmark02Icon,
        iconColor: "#059669",
        iconBg: "rgba(5, 150, 105, 0.15)",
        description: "Jobs you marked to apply later",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Interview Schedule",
        value: data.statistics.upcomingInterviewsCount,
        icon: Calendar03Icon,
        iconColor: "#EA580C",
        iconBg: "rgba(234, 88, 12, 0.15)",
        description: "Upcoming interviews on your schedule",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Profile Views",
        value: data.statistics.profileViewsCount,
        icon: EyeIcon,
        iconColor: "#DC2626",
        iconBg: "rgba(220, 38, 38, 0.15)",
        description: "Number of times recruiters viewed your profile",
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
    <EmployeeMainDashboardSkeleton />
  ) : (
    !isLoading && data && (
      <div className="space-y-6">
        <p className="font-medium md:text-4xl text-2xl capitalize">
          Welcome , {data.firstName} &#128075;
        </p>

        <div className="space-y-4 w-full">
          {/* Left */}
          <div className="flex flex-col-reverse lg:flex-row gap-5 w-full">
            <EmployeeApplicationsStaticChart chartData={data.monthlyStats} />

            <div className="lg:w-1/2 w-full space-y-3">
              <div className="w-full flex flex-col md:flex-row justify-between md:items-center gap-5 flex-wrap">
                <p className="text-2xl font-medium">Statistics</p>
                <Link
                  className="px-8 py-2.5 bg-main-color hover:bg-main-color/90 duration-300 text-white rounded-md text-sm flex items-center gap-2 justify-center md:justify-start md:w-fit w-full"
                  href={"/jobs"}>
                  <HugeiconsIcon
                    icon={Search01Icon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Search For Job
                </Link>
              </div>
              {/* Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {employeeDashboardStats &&
                  employeeDashboardStats.map((statistic) => (
                    <DashboardCardStatistics
                      size="large"
                      {...statistic}
                      key={statistic.title}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:flex-row gap-5 w-full">
            <RecentlyAppliedJobs recentApplications={data.recentApplications} />
            {/* AI Chatbot */}
            <ChatWithOurAiCard />
          </div>
        </div>
      </div>
    )
  );
}
