import { HugeiconsIcon } from "@hugeicons/react";
import { File02Icon, Setting07Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import ShowInterviewDetails from "./ShowInterviewDetails";
import EditInterviewData from "./EditInterviewData";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { InterviewStatusDataType } from "../../job-posts/[id]/_components/ShowJobDetailsById";
import InterviewDetailsSkeleton from "./InterviewDetailsSkeleton";
export interface InterviewDetailsResponse {
  interviewId: string;
  applicantName: string;
  imageUrl: string;
  positionTitle: string;
  email: string;
  resumePath: string;
  interviewStatus: InterviewStatusDataType;
  interviewDate: string;
  startTime: string;
  endTime: string;
  interviewerName: string;
  interviewType: string;
  interviewLink: string;
  notes: string | null;
}
async function getInterviewDetailsApi(
  interviewId: string,
  token: string,
): Promise<InterviewDetailsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Interview/get-by-company/${interviewId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

type Props = {
  interviewId: string;
  token: string;
  jobId: string;
};

export default function InterviewDetailsSheetBody({
  interviewId,
  token,
  jobId,
}: Props) {
  const [showInterviewData, setShowInterviewData] = useState(true);

  const { data, error, isLoading } = useQuery<
    InterviewDetailsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["interview-details", interviewId],
    queryFn: () => getInterviewDetailsApi(interviewId, token),
  });

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
    <InterviewDetailsSkeleton />
  ) : (
    data && (
      <div className="w-full h-full flex flex-col gap-10 overflow-y-auto overflow-x-hidden">
        {showInterviewData ? (
          <ShowInterviewDetails interviewDetails={data} />
        ) : (
          <EditInterviewData
            token={token}
            interviewDetails={data}
            setShowInterviewData={setShowInterviewData}
            jobId={jobId}
          />
        )}

        {/* Button Actions */}
        {data.interviewStatus == "Upcoming" && (
          <div className="sticky mt-auto bottom-0 left-0 w-full bg-input-bg p-4 pt-6 flex flex-col gap-3">
            <Button
              onClick={() => setShowInterviewData((pre) => !pre)}
              className="text-sm bg-main-color text-white hover:bg-main-color/75">
              <HugeiconsIcon
                icon={showInterviewData ? Setting07Icon : File02Icon}
                strokeWidth={2}
              />
              {showInterviewData
                ? "Modify Interview Data"
                : "Show Interview Details"}
            </Button>
          </div>
        )}
      </div>
    )
  );
}
