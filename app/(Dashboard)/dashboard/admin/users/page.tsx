"use client";

import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  UserIcon,
  UserMultiple02Icon,
  UserBlock02Icon,
} from "@hugeicons/core-free-icons";
import ShowAllUsers from "./_components/ShowAllUsers";

const usersStats = [
  {
    title: "Total Users",
    value: 1248,
    icon: UserMultiple02Icon,
    iconColor: "#ffffff",
    iconBg: "#125af7a6",
    description: "All registered users",
    background: "#1b1b1b",
    textColor: "#ffffff",
    descriptionColor: "#ffffff",
  },
  {
    title: "New Users",
    value: 86,
    icon: UserIcon,
    iconColor: "#1D4ED8",
    iconBg: "#DBEAFE",
    description: "Joined this month",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Blocked Users",
    value: 14,
    icon: UserBlock02Icon,
    iconColor: "#991B1B",
    iconBg: "#FEE2E2",
    description: "Restricted accounts",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="font-medium text-xl">Users Management</p>
        <p className="text-sm">Track and manage all platform users</p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {usersStats.map((stat) => (
          <DashboardCardStatistics size="small" {...stat} key={stat.title} />
        ))}
      </div>

      <ShowAllUsers />
    </div>
  );
}
