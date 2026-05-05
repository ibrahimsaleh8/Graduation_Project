import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  WorkIcon,
  CheckmarkCircle02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import ShowAllJobPosts from "./_components/ShowAllJobPosts";

export const interviewsStats = [
  {
    title: "Total Jobs Posted",
    value: 24,
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
    value: 12,
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
    value: 5,
    icon: UserGroupIcon,
    iconColor: "#92400E",
    iconBg: "#FEF3C7",
    description: "Total number of applicants",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];
export default function JobPosts() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium text-xl">Job Posts</p>
        <p className="text-sm">Track and manage your job postings</p>
      </div>

      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {interviewsStats.map((statistic) => (
          <DashboardCardStatistics
            size="small"
            {...statistic}
            key={statistic.title}
          />
        ))}
      </div>

      <ShowAllJobPosts />
    </div>
  );
}
