import DashboardCardStatistics from "../../_components/DashboardCardStatistics";
import RecentlyAppliedJobs from "../../_components/RecentlyAppliedJobs";
import { EmployeeApplicationsStaticChart } from "../../_components/EmployeeApplicationsStaticChart";

import {
  BriefcaseIcon,
  Bookmark02Icon,
  Calendar03Icon,
  EyeIcon,
} from "@hugeicons/core-free-icons";

export const employeeDashboardStats = [
  {
    title: "Applied Jobs",
    value: 24,
    icon: BriefcaseIcon,
    background: "#EEF2FF",
    iconColor: "#4F46E5",
  },
  {
    title: "Saved Jobs",
    value: 12,
    icon: Bookmark02Icon,
    background: "#ECFDF5",
    iconColor: "#059669",
  },
  {
    title: "Interview Schedule",
    value: 5,
    icon: Calendar03Icon,
    background: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    title: "Profile Views",
    value: 7,
    icon: EyeIcon,
    background: "#FEF2F2",
    iconColor: "#DC2626",
  },
];
export default function Dashboard() {
  return (
    <div className="space-y-6">
      <p className="font-medium text-2xl">Welcome , Ibrahim &#128075;</p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {employeeDashboardStats.map((statistic) => (
          <DashboardCardStatistics {...statistic} key={statistic.title} />
        ))}
      </div>
      <EmployeeApplicationsStaticChart />
      <RecentlyAppliedJobs />
    </div>
  );
}
