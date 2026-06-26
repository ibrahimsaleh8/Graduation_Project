import { Bookmark01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { sileo } from "sileo";

type Props = {
  jobId: string;
  token: string;
  isSaved: boolean;
  size: "small" | "large";
  role: string;
};

async function toggleSaveingJob(
  token: string,
  jobId: string,
  operation: "save" | "unSave",
) {
  if (operation == "save") {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SavedJobs/${jobId}`,
      {},
      {
        headers: {
          Authorization: `Beare ${token}`,
        },
      },
    );
    return res.data;
  }
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SavedJobs/${jobId}`,
    {
      headers: {
        Authorization: `Beare ${token}`,
      },
    },
  );
  return res.data;
}

export default function SaveJobButton({
  isSaved,
  jobId,
  token,
  size,
  role,
}: Props) {
  const [isJobSaved, setIsJobSaved] = useState(isSaved);
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      toggleSaveingJob(token, jobId, isSaved ? "unSave" : "save"),
    onSuccess: () => {
      sileo.success({
        title: `job has been saved successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to save job`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const HandleToggleJob = () => {
    if (!token) {
      sileo.warning({
        title: "Login First",
        description:
          "Login to your account to save the job into your collections",
      });
      return;
    }

    if (role != "APPLICANT") {
      sileo.warning({
        title: "Applicants Only",
        description: "Only applicants can save jobs to their collections.",
      });
      return;
    }
    mutate();
    setIsJobSaved(!isSaved);
  };

  return (
    <Button
      disabled={isPending}
      onClick={HandleToggleJob}
      className={`
    ${isJobSaved ? "bg-main-dark hover:bg-main-dark/90 text-white" : "bg-transparent hover:bg-black/5 text-black"}
     border border-border-color`}>
      <HugeiconsIcon
        icon={Bookmark01Icon}
        className={`${size == "large" ? "size-5!" : "size-4!"}`}
      />
    </Button>
  );
}
