"use client";

import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  UserIcon,
  UserMultiple02Icon,
  UserBlock02Icon,
} from "@hugeicons/core-free-icons";
import ShowAllUsers from "./ShowAllUsers";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo } from "react";
import DisplayUsersForAdminSkeleton from "./DisplayUsersForAdminSkeleton";

type Props = {
  token: string;
};
export interface ApplicantsResponse {
  stats: Stats;
  applicants: ApplicantsDataType[];
}

interface Stats {
  totalUsers: number;
  newUsersThisMonth: number;
  blockedUsers: number;
}

export interface ApplicantsDataType {
  applicantId: string;
  fullName: string;
  profilePic: string | null;
  email: string;
  jobTitle: string | null;
  isBlocked: boolean;
  location: string;
  joinedDate: string;
}
async function getUsersApi(token: string): Promise<ApplicantsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}

export default function DisplayUsersForAdmin({ token }: Props) {
  const { error, isLoading, data } = useQuery<
    ApplicantsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["all-users-admin-dashboard"],
    queryFn: () => getUsersApi(token),
  });

  const usersStats = useMemo(() => {
    if (!data) return undefined;

    return [
      {
        title: "Total Users",
        value: data.stats.totalUsers,
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
        value: data.stats.newUsersThisMonth,
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
        value: data.stats.blockedUsers,
        icon: UserBlock02Icon,
        iconColor: "#991B1B",
        iconBg: "#FEE2E2",
        description: "Restricted accounts",
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
    <DisplayUsersForAdminSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="font-medium text-xl">Users Management</p>
          <p className="text-sm">Track and manage all platform users</p>
        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {usersStats &&
            usersStats.map((stat) => (
              <DashboardCardStatistics
                size="small"
                {...stat}
                key={stat.title}
              />
            ))}
        </div>

        <ShowAllUsers users={data.applicants} token={token} />
      </div>
    )
  );
}
