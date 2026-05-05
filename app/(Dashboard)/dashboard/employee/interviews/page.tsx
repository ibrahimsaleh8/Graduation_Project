import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  Calendar03Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import InterviewCard from "./_components/InterviewCard";

export const interviewsStats = [
  {
    title: "Total Interviews",
    value: 24,
    icon: Calendar03Icon,
    iconColor: "#ffffff",
    iconBg: "#125af7a6",
    description: "All interviews you have scheduled",
    background: "#1b1b1b",
    textColor: "#ffffff",
    descriptionColor: "#ffffff",
  },
  {
    title: "Upcoming",
    value: 12,
    icon: Clock01Icon,
    iconColor: "#0891B2",
    iconBg: "rgba(8, 145, 178, 0.15)",
    description: "Interviews scheduled soon",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Completed",
    value: 5,
    icon: CheckmarkCircle02Icon,
    iconColor: "#059669",
    iconBg: "rgba(5, 150, 105, 0.15)",
    description: "Successfully finished interviews",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Cancelled",
    value: 7,
    icon: Cancel01Icon,
    iconColor: "#DC2626",
    iconBg: "rgba(220, 38, 38, 0.15)",
    description: "Interviews that were cancelled",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];
export default function EmployeeInterviews() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium text-xl">Scheduled Interviews</p>
        <p className="text-sm">Track and manage your upcoming interviews</p>
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

      <div className="flex flex-col gap-4">
        <InterviewCard />
      </div>
    </div>
  );
}
