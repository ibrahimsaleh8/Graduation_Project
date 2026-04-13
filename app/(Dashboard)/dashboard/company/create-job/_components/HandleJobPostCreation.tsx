"use client";
import JobPostStepper from "./JobPostStepper";
import { useState } from "react";
import JobPostBasicInfo from "./JobPostBasicInfo";

export default function HandleJobPostCreation() {
  const [currentStep, setCurrentStep] = useState({
    stepNumber: 1,
    isCompleted: false,
  });
  return (
    <div className="flex gap-8 md:flex-row flex-col">
      <JobPostStepper
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <JobPostBasicInfo />
    </div>
  );
}
