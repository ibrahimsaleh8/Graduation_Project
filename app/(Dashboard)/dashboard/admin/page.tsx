import DashboardCardStatistics from "../../_components/DashboardCardStatistics";
import {
  UserGroupIcon,
  Building01Icon,
  Briefcase01Icon,
  Clock01Icon,
  ChartHistogramIcon,
} from "@hugeicons/core-free-icons";
import LatestJobPostes from "../company/_components/LatestJobPostes";
import { AdminDashboardJobsAnalytics } from "./_components/AdminDashboardJobsAnalytics";
import AdminDashboardPendingApproval from "./_components/AdminDashboardPendingApproval";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";

export const adminDashboardStats = [
  {
    title: "Total Users",
    value: 2480,
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
    value: 320,
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
    value: 124,
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
    value: 18,
    icon: Clock01Icon,
    iconColor: "#B45309",
    iconBg: "rgba(251, 191, 36, 0.2)",
    description: "Jobs waiting for admin approval",
    background: "#ffffff",
    textColor: "#0f172a",
    descriptionColor: "#64748b",
  },
];
export default function AdmindDashboard() {
  return (
    <div className="space-y-6">
      <p className="font-medium md:text-3xl text-2xl">
        Welcome to Admin Dashboard &#128075;
      </p>
      <div className="flex flex-col gap-5">
        {/* Top */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full items-start">
          {/* Left */}
          <div className="flex flex-col gap-5 lg:w-1/2 w-full">
            <AdminDashboardJobsAnalytics />
          </div>

          {/* Right */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center gap-5 flex-wrap">
              <p className="text-2xl font-medium">Statistics</p>
              <Link
                href={"/dashboard/admin/reports"}
                className="px-6 py-2 bg-main-color hover:bg-main-color/90 duration-300 text-white rounded-sm text-sm flex items-center gap-2 w-fit">
                <HugeiconsIcon
                  icon={ChartHistogramIcon}
                  className="size-5"
                  strokeWidth={2}
                />
                Show Reports
              </Link>
            </div>
            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-4 ">
              {adminDashboardStats.map((statistic) => (
                <DashboardCardStatistics {...statistic} key={statistic.title} />
              ))}
            </div>
            {/* AI Chatbot */}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
          <LatestJobPostes />
          <AdminDashboardPendingApproval />
        </div>
      </div>
    </div>
  );
}
