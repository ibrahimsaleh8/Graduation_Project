"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { CheckmarkCircle03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { CandidateApplicationDetailsDataType } from "./ApplicantsDetails";
import {
  ApplicantStatusDetailsType,
  JobDetailsResponse,
} from "./ShowJobDetailsById";
type Props = {
  applicationId: string;
  token: string;
  jobId: string;
  currentStatus: ApplicantStatusDetailsType;
};

async function MarkAsReviewdApplicationApi({
  applicationId,
  token,
}: {
  applicationId: string;
  token: string;
}) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Application/reviewed-application/${applicationId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function MarkApplicationAsReviewed({
  applicationId,
  token,
  jobId,
  currentStatus,
}: Props) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => MarkAsReviewdApplicationApi({ applicationId, token }),
    onSuccess: () => {
      queryClient.setQueryData(
        ["application-details", applicationId],
        (oldData: CandidateApplicationDetailsDataType | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            applicationStatus: "Reviewed",
          };
        },
      );

      queryClient.setQueryData(
        ["job-post-details", jobId],
        (oldData: JobDetailsResponse | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            applicantDetails: oldData.applicantDetails.map((applicant) =>
              applicant.applicantionId === applicationId
                ? {
                    ...applicant,
                    status: "Reviewed",
                  }
                : applicant,
            ),
          };
        },
      );

      sileo.success({
        title: "Application Marked As Reviewed Success",
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to create job post",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });
  return (
    <Button
      disabled={
        isPending || currentStatus == "Reviewed" || currentStatus == "Accepted"
      }
      onClick={() => mutate()}
      className="w-1/2 text-xs h-10 bg-blue-700 hover:bg-blue-800 ">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          <HugeiconsIcon
            icon={CheckmarkCircle03Icon}
            strokeWidth={2}
            className="size-4.5"
          />
          Mark As Reviewed
        </>
      )}
    </Button>
  );
}
