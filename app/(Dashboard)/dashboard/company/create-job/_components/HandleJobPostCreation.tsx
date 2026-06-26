"use client";

import JobPostStepper from "./JobPostStepper";
import { Activity } from "react";
import JobPostBasicInfo from "./JobPostBasicInfo";
import JobDescription from "./JobDescription";
import {
  JobDetailsType,
  JobPostBasicInfoType,
} from "@/validations/JobPostValidation";
import JobPostPreview from "./JobPostPreview";
import { useCreateJob } from "./hooks/useCreateJob";
import { useCanCreateJob } from "./hooks/useCanCreateJob";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";
import CreateJobSkeleton from "./CreateJobSkeleton";

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

type Props = {
  token: string;
};

export default function HandleJobPostCreation({ token }: Props) {
  const {
    handlePublish,
    isPending,
    UpdateJobDetails,
    UpdateBasicData,
    setCurrentStep,
    activeStep,
    currentStep,
    jobData,
  } = useCreateJob({ token });

  const { data, error, isLoading } = useCanCreateJob(token);
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
    <CreateJobSkeleton />
  ) : data && !data.canPost ? (
    <div className="p-10 flex flex-col items-center gap-3 w-full justify-center my-20">
      <HugeiconsIcon icon={Alert02Icon} className="fill-yellow-500 size-8" />
      <p className="text-xl font-medium">You hit the limit</p>
      <Link
        className="px-4 py-2 bg-main-color text-white text-sm rounded-md w-fit"
        href={"/dashboard/company/setting?tab=subscription"}>
        Upgrade your plan
      </Link>
    </div>
  ) : (
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
