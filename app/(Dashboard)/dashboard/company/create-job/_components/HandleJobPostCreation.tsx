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

export type JobPostFullInfoType = {
  jobBasicData: JobPostBasicInfoType;
  jobDetails: JobDetailsType;
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
  },
  jobDetails: {
    jobDescription: "",
    responsibilities: "",
    skills: [],
  },
};

export default function HandleJobPostCreation() {
  const [currentStep, setCurrentStep] = useState([
    { stepNumber: 1, isCompleted: false, isCurrent: true },
    { stepNumber: 2, isCompleted: false, isCurrent: false },
    { stepNumber: 3, isCompleted: false, isCurrent: false },
  ]);

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
        />
      </Activity>
    </div>
  );
}
