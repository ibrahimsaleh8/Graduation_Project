"use client";
import { Activity, Dispatch, SetStateAction, useState } from "react";
import ShowApplicantsDetails from "./ShowApplicantsDetails";
import ScheduleInterview from "./ScheduleInterview";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ApplicantStatusDetailsType } from "./ShowJobDetailsById";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import JobApplicantsLoadingSkeleton from "./JobApplicantsLoadingSkeleton";
type Props = {
  ApplicationId: string;
  token: string;
  jobId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  role: "admin" | "company";
};
export type CandidateApplicationDetailsDataType = {
  name: string;
  email: string;
  applicantId: string;
  imageUrl: string;
  cvPath: string;
  cvName: string;
  applicationStatus: ApplicantStatusDetailsType;
};
async function getApplicationDetailsApi(params: {
  ApplicationId: string;
  token: string;
}): Promise<CandidateApplicationDetailsDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Application/${params.ApplicationId}`,
    {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    },
  );
  return res.data;
}

export default function ApplicantsDetails({
  ApplicationId,
  token,
  jobId,
  setOpen,
  role,
}: Props) {
  const { data, error, isLoading } = useQuery<
    CandidateApplicationDetailsDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["application-details", ApplicationId],
    queryFn: () => getApplicationDetailsApi({ ApplicationId, token }),
  });

  const [showDetails, setShowDetails] = useState(true);

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
    <JobApplicantsLoadingSkeleton />
  ) : (
    data && (
      <div>
        <Activity mode={showDetails ? "visible" : "hidden"}>
          <ShowApplicantsDetails
            setShowDetails={setShowDetails}
            applicationData={data}
            applicationId={ApplicationId}
            token={token}
            jobId={jobId}
            role={role}
          />
        </Activity>
        <Activity mode={!showDetails ? "visible" : "hidden"}>
          <ScheduleInterview
            applicantId={data.applicantId}
            token={token}
            jobId={jobId}
            setShowDetails={setShowDetails}
            setOpen={setOpen}
            ApplicationId={ApplicationId}
          />
        </Activity>
      </div>
    )
  );
}
