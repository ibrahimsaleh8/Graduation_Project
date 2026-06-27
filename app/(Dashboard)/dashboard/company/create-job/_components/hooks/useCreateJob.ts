import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { useRouter } from "next/navigation";
import {
  CreateJobPostData,
  JobPostFullInfoType,
} from "../HandleJobPostCreation";
import { useState } from "react";
import {
  JobDetailsType,
  JobPostBasicInfoType,
} from "@/validations/JobPostValidation";

type Props = {
  token: string;
};

const initialData: JobPostFullInfoType = {
  jobBasicData: {
    employmentType: [],
    jobCategory: "",
    jobTitle: "",
    location: "",
    salaryMax: 0,
    salaryMin: 0,
    workApproach: [],
    maxYearsExperience: 0,
    minYearsExperience: 0,
    isFeatured: false,
  },
  jobDetails: {
    jobDescription: "",
    responsibilities: "",
    skills: [],
  },
};

async function CreateJobPostApi(params: {
  token: string;
  jobData: CreateJobPostData;
}) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting`,
    params.jobData,
    {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    },
  );
  return res.data;
}

export const useCreateJob = ({ token }: Props) => {
  const [currentStep, setCurrentStep] = useState([
    { stepNumber: 1, isCompleted: false, isCurrent: true },
    { stepNumber: 2, isCompleted: false, isCurrent: false },
    { stepNumber: 3, isCompleted: false, isCurrent: false },
  ]);
  const route = useRouter();
  const activeStep = currentStep.find((step) => step.isCurrent)?.stepNumber;

  const [jobData, setJobData] = useState(initialData);

  const UpdateBasicData = (jobBasicData: JobPostBasicInfoType) => {
    setJobData({
      jobBasicData,
      jobDetails: jobData.jobDetails,
    });
  };

  const UpdateJobDetails = (jobDetails: JobDetailsType) => {
    setJobData({
      jobDetails,
      jobBasicData: jobData.jobBasicData,
    });
  };
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: (jobData: CreateJobPostData) =>
      CreateJobPostApi({ token, jobData }),

    onSuccess: () => {
      sileo.success({
        title: "Job Post created successfully",
      });
      queryClient.refetchQueries({ queryKey: ["company-job-posts"] });
      queryClient.refetchQueries({ queryKey: ["company-dashboard"] });
      queryClient.refetchQueries({ queryKey: ["can-create-job"] });
      route.push("/dashboard/company/job-posts");
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

  const handlePublish = (jobData: CreateJobPostData) => {
    mutate(jobData);
  };

  return {
    handlePublish,
    isPending,
    UpdateJobDetails,
    UpdateBasicData,
    setCurrentStep,
    activeStep,
    currentStep,
    jobData,
  };
};
