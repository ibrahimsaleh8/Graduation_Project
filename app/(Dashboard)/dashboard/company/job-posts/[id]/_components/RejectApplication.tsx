"use client";

import { Button } from "@/components/ui/button";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ApplicantStatusDetailsType,
  JobDetailsResponse,
} from "./ShowJobDetailsById";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CandidateApplicationDetailsDataType } from "./ApplicantsDetails";
import { sileo } from "sileo";
import { Spinner } from "@/components/ui/spinner";
type Props = {
  applicationId: string;
  token: string;
  jobId: string;
  currentStatus: ApplicantStatusDetailsType;
};

async function RejectApplicationApi({
  applicationId,
  token,
}: {
  applicationId: string;
  token: string;
}) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Application/reject-application/${applicationId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function RejectApplication({
  applicationId,
  currentStatus,
  jobId,
  token,
}: Props) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => RejectApplicationApi({ applicationId, token }),
    onSuccess: () => {
      queryClient.setQueryData(
        ["application-details", applicationId],
        (oldData: CandidateApplicationDetailsDataType | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            applicationStatus: "Rejected",
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
                    status: "Rejected",
                  }
                : applicant,
            ),
          };
        },
      );

      sileo.success({
        title: "Application Rejected Success",
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
      disabled={isPending || currentStatus == "Rejected"}
      onClick={() => {
        mutate();
      }}
      className="w-1/2 text-xs h-10 bg-red-600 hover:bg-red-700">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          <HugeiconsIcon
            icon={Cancel01Icon}
            strokeWidth={2}
            className="size-4.5"
          />
          Reject
        </>
      )}
    </Button>
  );
}
