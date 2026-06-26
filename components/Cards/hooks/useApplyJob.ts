import { JobDetailsByIdResponseDataType } from "@/lib/useFetchJobDetailsById";
import { useFetchUserDataForApplyingJob } from "@/lib/useFetchUserDataForApplyingJob";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sileo } from "sileo";

type Props = {
  token: string;
  jobId: string;
};

async function applyJob(token: string, jobId: string, resumeId: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Application`,
    {
      JobPostingID: jobId,
      ResumeID: resumeId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export const useApplyJob = ({ jobId, token }: Props) => {
  const { data, error, isLoading } = useFetchUserDataForApplyingJob(token);
  const [selectedCV, setSelectedCV] = useState("");
  const [errors, setErrors] = useState({
    cv: "",
  });
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (resumeId: string) => applyJob(token, jobId, resumeId),

    onSuccess: () => {
      queryClient.setQueryData(
        ["job-details-by-id", jobId],
        (oldData: JobDetailsByIdResponseDataType) => {
          if (!oldData) return;
          return {
            ...oldData,
            job: {
              ...oldData.job,
              isApplied: true,
            },
          };
        },
      );
      router.refresh();

      sileo.success({
        title: `Application submitted successfully`,
        description: `Application submitted successfully! We'll review it soon.`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to apply to this job`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const validateForm = () => {
    const newErrors = {
      cv: "",
    };

    let isValid = true;

    if (!selectedCV) {
      newErrors.cv = "Please select a CV";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      jobId,
      resumeId: selectedCV,
    };
    mutate(payload.resumeId);
  };

  return {
    handleSubmit,
    errors,
    setSelectedCV,
    data,
    error,
    isLoading,
    selectedCV,
    isPending,
  };
};
