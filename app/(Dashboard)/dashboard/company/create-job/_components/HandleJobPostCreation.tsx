"use client";

import JobPostStepper from "./JobPostStepper";
import { useState, Activity } from "react";
import JobPostBasicInfo from "./JobPostBasicInfo";
import JobDescription from "./JobDescription";
import {
  JobDetailsType,
  JobPostBasicInfoType,
} from "@/validations/JobPostValidation";
import JobPostPreview from "./JobPostPreview";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { useRouter } from "next/navigation";

export type JobPostFullInfoType = {
  jobBasicData: JobPostBasicInfoType;
  jobDetails: JobDetailsType;
};
export type CreateJobPostData = {
  jobBasicData: {
    employmentType: string[];
    jobCategory: string;
    minExperience: number;
    maxExperience: number;
    jobTitle: string;
    location: string;
    salaryMax: number;
    salaryMin: number;
    workApproach: string[];
  };
  jobDetails: {
    jobDescription: string;
    responsibilities: string;
    skills: string[];
  };
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

type Props = {
  token: string;
};

export default function HandleJobPostCreation({ token }: Props) {
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
      queryClient.refetchQueries({ queryKey: ["company-job-posts"] });
      queryClient.refetchQueries({ queryKey: ["company-dashboard"] });
      sileo.success({
        title: "Job Post created successfully",
      });
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

  return (
    <div className="flex gap-8 md:flex-row flex-col md:pr-10">
      <JobPostStepper currentStep={currentStep} />

      {/* Step 1 */}
      <Activity mode={activeStep === 1 ? "visible" : "hidden"}>
        <JobPostBasicInfo
          UpdateBasicData={UpdateBasicData}
          setCurrentStep={setCurrentStep}
          defaultValues={jobData.jobBasicData}
        />
      </Activity>

      {/* Step 2 */}
      <Activity mode={activeStep === 2 ? "visible" : "hidden"}>
        <JobDescription
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          UpdateJobDetails={UpdateJobDetails}
          defaultValues={jobData.jobDetails}
        />
      </Activity>

      {/* Step 3 */}
      <Activity mode={activeStep === 3 ? "visible" : "hidden"}>
        <JobPostPreview
          JobData={jobData}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          handlePublish={handlePublish}
          isPending={isPending}
        />
      </Activity>
    </div>
  );
}
