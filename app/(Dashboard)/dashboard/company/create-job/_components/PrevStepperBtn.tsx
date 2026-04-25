"use client";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { StepState } from "./JobPostStepper";

type Props = {
  currentStep: StepState[];
  setCurrentStep: Dispatch<SetStateAction<StepState[]>>;
};

export default function PrevStepperBtn({ currentStep, setCurrentStep }: Props) {
  const activeStep = currentStep.find((s) => s.isCurrent)!;

  const handlePrevious = () => {
    // prevent going before step 1
    if (activeStep.stepNumber === 1) return;

    const prevStepNumber = activeStep.stepNumber - 1;

    setCurrentStep((prev) =>
      prev.map((s) => ({
        ...s,
        isCurrent: s.stepNumber === prevStepNumber,
      })),
    );
  };

  return (
    <Button
      type="button"
      onClick={handlePrevious}
      disabled={activeStep.stepNumber === 1}
      className={`rounded-md text-sm w-32 hover:bg-[#464646]
        ${activeStep.stepNumber === 1 ? "" : "bg-[#5c5c5c] text-white"}`}>
      <ChevronLeft /> Previous
    </Button>
  );
}
