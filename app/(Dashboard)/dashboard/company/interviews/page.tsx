import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  Calendar03Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  Clock03Icon,
} from "@hugeicons/core-free-icons";
import ShowAllInterviews from "./_components/ShowAllInterviews";

export const interviewsStats = [
  {
    title: "Total Interviews",
    value: 24,
    icon: Calendar03Icon,
    iconColor: "#ffffff",
    iconBg: "#125af7a6",
    description: "Total interviews scheduled across all positions",
    background: "#1b1b1b",
    textColor: "#ffffff",
    descriptionColor: "#ffffff",
  },
  {
    title: "Today’s Schedule",
    value: 12,
    icon: Clock01Icon,
    iconColor: "#0891B2",
    iconBg: "rgba(8, 145, 178, 0.15)",
    description: "Interviews happening today",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Completed Interviews",
    value: 5,
    icon: CheckmarkCircle02Icon,
    iconColor: "#059669",
    iconBg: "rgba(5, 150, 105, 0.15)",
    description: "Interviews successfully completed",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Pending Interviews",
    value: 7,
    icon: Clock03Icon,
    iconColor: "#D97706",
    iconBg: "rgba(217, 119, 6, 0.15)",
    description: "Interviews awaiting completion",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];

export default function CompanyInterviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium text-xl">Interviews</p>
        <p className="text-sm">
          Manage, schedule, and track candidate interviews
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {interviewsStats.map((statistic) => (
          <DashboardCardStatistics
            size="small"
            {...statistic}
            key={statistic.title}
          />
        ))}
      </div>

      <ShowAllInterviews />
    </div>
  );
}
