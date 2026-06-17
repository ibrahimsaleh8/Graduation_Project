import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { JobDetailsResponse } from "./ShowJobDetailsPage";
import { Dispatch, SetStateAction } from "react";

type Props = {
  token: string;
  jobId: string;
  operation: "accept" | "reject";
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function manageJobPostStatusApi({ jobId, token, operation }: Props) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/${operation == "accept" ? "accept-job" : "reject-job"}/${jobId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function JobPostManageStatus({
  jobId,
  token,
  operation,
  setOpen,
}: Props) {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: () => manageJobPostStatusApi({ jobId, token, operation }),
    onSuccess: () => {
      queryClient.setQueryData(
        ["job-details-admin-dashboard", jobId],
        (oldData: JobDetailsResponse | undefined) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            status: operation == "accept" ? "Approved" : "Rejected",
          };
        },
      );
      queryClient.refetchQueries({
        queryKey: ["all-jobs-admin-dashboard"],
      });
      queryClient.refetchQueries({
        queryKey: ["admin-dashboard-overview"],
      });

      if (setOpen) {
        setOpen(false);
      }

      sileo.success({
        title: `Job Post ${operation == "accept" ? "Accepted" : "Rejected"} successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to ${operation} job post`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <div className="space-y-2">
      <div>
        <p className="font-medium">
          {operation == "accept"
            ? "Are you sure you want to approve this job posting?"
            : "Are you sure you want to reject this job posting?"}
        </p>
        <p>
          {operation == "accept"
            ? "Once approved, the job will become visible to candidates and available for applications."
            : "Once rejected, the job will not be published and candidates will not be able to view or apply for it. The company may be notified of this decision."}
        </p>
      </div>

      <div className="flex items-center justify-end">
        <Button
          disabled={isPending}
          onClick={() => mutate()}
          className={`text-sm h-10 gap-1 w-32 ${operation == "accept" ? "bg-green-600 text-white hover:bg-green-700" : "bg-red-600 text-white hover:bg-red-700"}`}>
          {isPending ? (
            <Spinner />
          ) : operation == "accept" ? (
            "Accept"
          ) : (
            "Reject"
          )}
        </Button>
      </div>
    </div>
  );
}
