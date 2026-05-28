"use client";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  Calendar03Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  ComputerVideoCallIcon,
} from "@hugeicons/core-free-icons";
import InterviewCard from "./InterviewCard";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import EmployeeInterviewsFilter from "./EmployeeInterviewsFilter";
import EmployeeInterviewsLoadingSkeleton from "./EmployeeInterviewsLoadingSkeleton";

type Props = {
  token: string;
};
export type InterviewStatus = "Upcoming" | "Completed" | "Cancelled";

export type InterviewStats = {
  total: number;
  upcoming: number;
  completed: number;
  cancelled: number;
};

export type InterviewDataType = {
  interviewId: string;
  jobTitle: string;
  companyName: string;
  companyLogoUrl: string;
  date: string;
  startAt: string;
  endAt: string;
  interviewType: string;
  status: InterviewStatus;
  interviewerName: string;
  meetingLink: string;
  notes: string | null;
  jobId: string;
};

export type InterviewsResponse = {
  stats: InterviewStats;
  interviews: InterviewDataType[];
};

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

async function getEmployeeInterviews(
  token: string,
): Promise<InterviewsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Interview`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function ShowEmployeeInterviews({ token }: Props) {
  const { error, data, isLoading } = useQuery<
    InterviewsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["employee-interviews"],
    queryFn: () => getEmployeeInterviews(token),
  });
  const [showTodayInterviews, setShowTodayInterviews] = useState(false);
  const [filterStatus, setFilterStatus] = useState<InterviewStatus | "all">(
    "all",
  );

  const updateFilterStatus = (status: InterviewStatus | "all") => {
    setFilterStatus(status);
  };
  const toggleTodayInterviews = (value: boolean) => {
    setShowTodayInterviews(value);
  };

  const interviewsData = useMemo(() => {
    if (!data) return undefined;

    const status = [
      {
        title: "Total Interviews",
        value: data.stats.total,
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
        value: data.stats.upcoming,
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
        value: data.stats.completed,
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
        value: data.stats.cancelled,
        icon: Cancel01Icon,
        iconColor: "#DC2626",
        iconBg: "rgba(220, 38, 38, 0.15)",
        description: "Interviews that were cancelled",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
    ];

    let interviews = data.interviews;

    // Filter today interviews
    if (showTodayInterviews) {
      interviews = interviews.filter((interview) => {
        const today = new Date();
        const interviewDate = new Date(interview.date);

        return (
          interviewDate.getDate() === today.getDate() &&
          interviewDate.getMonth() === today.getMonth() &&
          interviewDate.getFullYear() === today.getFullYear()
        );
      });
    }

    // Filter by status
    if (filterStatus !== "all") {
      interviews = interviews.filter(
        (interview) => interview.status === filterStatus,
      );
    }

    return { status, interviews };
  }, [data, showTodayInterviews, filterStatus]);
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
    <EmployeeInterviewsLoadingSkeleton />
  ) : (
    interviewsData && (
      <div className="space-y-6">
        <div>
          <p className="font-medium text-xl">Scheduled Interviews</p>
          <p className="text-sm">Track and manage your upcoming interviews</p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {interviewsData.status.map((statistic) => (
            <DashboardCardStatistics
              size="small"
              {...statistic}
              key={statistic.title}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <EmployeeInterviewsFilter
            updateFilterStatus={updateFilterStatus}
            toggleTodayInterviews={toggleTodayInterviews}
          />
          {interviewsData.interviews.length > 0 ? (
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4 items-start">
              {interviewsData.interviews.map((interview) => (
                <InterviewCard key={interview.interviewId} {...interview} />
              ))}
            </div>
          ) : (
            <div className="font-medium text-black/80 w-full flex flex-col items-center justify-center gap-3 py-10">
              <HugeiconsIcon icon={ComputerVideoCallIcon} className="size-10" />
              <p> No interviews found.</p>
            </div>
          )}
        </div>
      </div>
    )
  );
}
