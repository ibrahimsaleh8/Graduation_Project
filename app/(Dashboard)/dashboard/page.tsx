import DashboardCardStatistics from "../_components/DashboardCardStatistics";
import {
  BriefcaseIcon,
  Bookmark02Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
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
    title: "Accepted Applications",
    value: 5,
    icon: CheckmarkCircle02Icon,
    background: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    title: "Pending Applications",
    value: 7,
    icon: Clock01Icon,
    background: "#FEF2F2",
    iconColor: "#DC2626",
  },
];
export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {employeeDashboardStats.map((statistic) => (
          <DashboardCardStatistics {...statistic} key={statistic.title} />
        ))}
      </div>
    </div>
  );
}
