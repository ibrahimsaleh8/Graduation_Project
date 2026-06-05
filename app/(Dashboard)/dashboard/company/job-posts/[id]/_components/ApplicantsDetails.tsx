"use client";
import { Activity, useState } from "react";
import ShowApplicantsDetails from "./ShowApplicantsDetails";
import ScheduleInterview from "./ScheduleInterview";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ApplicantStatusDetailsType } from "./ShowJobDetailsById";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
type Props = {
  ApplicationId: string;
  token: string;
};
export type CandidateApplicationDetailsDataType = {
  name: string;
  email: string;
  portfolioLink: string;
  imageUrl: string | null;
  cvPath: string;
  cvName: string;
  applicationStatus: ApplicantStatusDetailsType;
};
async function getApplicationDetailsApi(
  params: Props,
): Promise<CandidateApplicationDetailsDataType> {
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

export default function ApplicantsDetails({ ApplicationId, token }: Props) {
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
    <div>Loading...</div>
  ) : (
    data && (
      <div>
        <Activity mode={showDetails ? "visible" : "hidden"}>
          <ShowApplicantsDetails
            setShowDetails={setShowDetails}
            applicationData={data}
          />
        </Activity>
        <Activity mode={!showDetails ? "visible" : "hidden"}>
          <ScheduleInterview setShowDetails={setShowDetails} />
        </Activity>
      </div>
    )
  );
}
