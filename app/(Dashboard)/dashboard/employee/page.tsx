import DashboardCardStatistics from "../../_components/DashboardCardStatistics";
import RecentlyAppliedJobs from "../../_components/RecentlyAppliedJobs";
import { EmployeeApplicationsStaticChart } from "../../_components/EmployeeApplicationsStaticChart";
import {
  BriefcaseIcon,
  Bookmark02Icon,
  Calendar03Icon,
  EyeIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import ChatWithOurAiCard from "../../_components/ChatWithOurAiCard";

export const employeeDashboardStats = [
  {
    title: "Applied Jobs",
    value: 24,
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
    value: 12,
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
    value: 5,
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
    value: 7,
    icon: EyeIcon,
    iconColor: "#DC2626",
    iconBg: "rgba(220, 38, 38, 0.15)",
    description: "Number of times recruiters viewed your profile",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];
export default function Dashboard() {
  return (
    <div className="space-y-6">
      <p className="font-medium md:text-4xl text-2xl">
        Welcome , Ibrahim &#128075;
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-4 w-full items-start">
        {/* Left */}
        <div className="flex flex-col gap-5 lg:w-1/2 w-full">
          <EmployeeApplicationsStaticChart />
          <RecentlyAppliedJobs />
        </div>

        {/* Right */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-center gap-5 flex-wrap">
            <p className="text-2xl font-medium">Statistics</p>
            <Link
              className="px-8 py-2 bg-main-color text-white rounded-md text-sm flex items-center gap-2 w-fit"
              href={"/jobs"}>
              <HugeiconsIcon icon={Search01Icon} className="size-5" />
              Search For Job
            </Link>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4 ">
            {employeeDashboardStats.map((statistic) => (
              <DashboardCardStatistics {...statistic} key={statistic.title} />
            ))}
          </div>
          {/* AI Chatbot */}
          <ChatWithOurAiCard />
        </div>
      </div>
    </div>
  );
}
