"use client";

import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  WorkIcon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import ShowAllJobsForAdmin from "./_components/ShowAllJobsForAdmin";

const jobsStats = [
  {
    title: "Total Jobs",
    value: 24,
    icon: WorkIcon,
    iconColor: "#ffffff",
    iconBg: "#125af7a6",
    description: "All jobs on platform",
    background: "#1b1b1b",
    textColor: "#ffffff",
    descriptionColor: "#ffffff",
  },
  {
    title: "Active Jobs",
    value: 12,
    icon: CheckmarkCircle02Icon,
    iconColor: "#166534",
    iconBg: "#DCFCE7",
    description: "Currently live jobs",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Pending Jobs",
    value: 6,
    icon: Clock01Icon,
    iconColor: "#92400E",
    iconBg: "#FEF3C7",
    description: "Waiting for approval",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Rejected Jobs",
    value: 4,
    icon: Cancel01Icon,
    iconColor: "#991B1B",
    iconBg: "#FEE2E2",
    description: "Jobs not approved",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];

export default function AdminJobsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="font-medium text-xl">Job Posts</p>
        <p className="text-sm">Track and manage your job postings</p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {jobsStats.map((stat) => (
          <DashboardCardStatistics size="small" {...stat} key={stat.title} />
        ))}
      </div>

      {/* Jobs Table */}
      <ShowAllJobsForAdmin />
    </div>
  );
}
