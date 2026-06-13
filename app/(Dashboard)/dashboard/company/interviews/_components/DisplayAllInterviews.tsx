"use client";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  Calendar03Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  Clock03Icon,
} from "@hugeicons/core-free-icons";
import ShowAllInterviews from "./ShowAllInterviews";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import axios, { AxiosError } from "axios";
import InterviewsPageSkeleton from "./InterviewsPageSkeleton";
import { InterviewStatus } from "../../../employee/interviews/_components/ShowEmployeeInterviews";
import { useMemo } from "react";

export interface InterviewStats {
  totalInterviews: number;
  todaysInterviews: number;
  completedInterviews: number;
  pendingInterviews: number;
}

export interface CompanyAllInterviewsDataType {
  interviewId: string;
  candidateName: string;
  jobTitle: string;
  scheduledDate: string;
  startTime: string;
  endTime: string;
  status: InterviewStatus;
  imageUrl: string;
  email: string;
  jobId: string;
}

export interface InterviewsResponse {
  stats: InterviewStats;
  interviews: CompanyAllInterviewsDataType[];
}

async function getAllInterviewsApi(token: string): Promise<InterviewsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/CompanyInterviews`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

type Props = {
  token: string;
};
export default function DisplayAllInterviews({ token }: Props) {
  const { data, error, isLoading } = useQuery<
    InterviewsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["all-compnay-interviews"],
    queryFn: () => getAllInterviewsApi(token),
  });

  const interviewsStats = useMemo(() => {
    if (!data) return undefined;

    return [
      {
        title: "Total Interviews",
        value: data.stats.totalInterviews,
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
        value: data.stats.todaysInterviews,
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
        value: data.stats.completedInterviews,
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
        value: data.stats.pendingInterviews,
        icon: Clock03Icon,
        iconColor: "#D97706",
        iconBg: "rgba(217, 119, 6, 0.15)",
        description: "Interviews awaiting completion",
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
    <InterviewsPageSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        <div>
          <p className="font-medium text-xl">Interviews</p>
          <p className="text-sm">
            Manage, schedule, and track candidate interviews
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {interviewsStats &&
            interviewsStats.map((statistic) => (
              <DashboardCardStatistics
                size="small"
                {...statistic}
                key={statistic.title}
              />
            ))}
        </div>

        <ShowAllInterviews interviews={data.interviews} token={token} />
      </div>
    )
  );
}
