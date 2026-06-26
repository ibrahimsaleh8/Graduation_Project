"use client";
import { Button } from "@/components/ui/button";
import { Bookmark01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { SavedJobType } from "./ShowAllSavedJobs";

type Props = {
  jobId: string;
  token: string;
};

async function unSaveJob(token: string, jobId: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SavedJobs/${jobId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function UnSaveJobButton({ jobId, token }: Props) {
  const queryClinet = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => unSaveJob(token, jobId),
    onSuccess: () => {
      queryClinet.setQueryData(
        ["employee-saved-jobs"],
        (oldData: SavedJobType[]) => {
          const newSavedJobs = oldData.filter((job) => job.jobId != jobId);
          return newSavedJobs;
        },
      );

      queryClinet.refetchQueries({
        queryKey: ["empolyee-main-dashboard-data"],
      });
      sileo.success({
        title: `job has been unsaved successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to unsave job`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <Button
      size={"sm"}
      disabled={isPending}
      onClick={() => mutate()}
      className="p-1.5 rounded-lg hover:bg-white border transition-colors text-white hover:text-black shrink-0">
      <HugeiconsIcon icon={Bookmark01Icon} className="size-4!" />
    </Button>
  );
}
