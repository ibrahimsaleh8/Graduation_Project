import { Dispatch, SetStateAction } from "react";

const steps = [
  { stepNumber: 1, title: "Basic Information" },
  { stepNumber: 2, title: "Job Description" },
  { stepNumber: 3, title: "Preview Job Post" },
];

type StepState = {
  stepNumber: number;
  isCompleted: boolean;
};

type Props = {
  currentStep: StepState;
  setCurrentStep: Dispatch<SetStateAction<StepState>>;
};

export default function JobPostStepper({ currentStep, setCurrentStep }: Props) {
  const handleStepClick = (stepNumber: number) => {
    const current = currentStep.stepNumber;
    if (stepNumber < current) {
      setCurrentStep((prev) => ({
        ...prev,
        stepNumber,
      }));
      return;
    }

    if (stepNumber === current + 1 && currentStep.isCompleted) {
      setCurrentStep({
        stepNumber,
        isCompleted: false,
      });
      return;
    }

    return;
  };

  return (
    <div className="w-full md:w-52">
      <div className="flex gap-4 flex-wrap md:flex-col">
        {steps.map((step, i) => {
          const isActive = currentStep.stepNumber === step.stepNumber;
          const isCompleted = step.stepNumber < currentStep.stepNumber;

          return (
            <button
              key={step.stepNumber}
              onClick={() => handleStepClick(step.stepNumber)}
              className={`text-left ${
                !isActive && !isCompleted
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}>
              <div className="flex items-center gap-2">
                <div
                  className={`size-7 text-xs border font-medium rounded-full flex items-center justify-center
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : isCompleted
                        ? "bg-green-500 text-white border-green-500"
                        : "bg-transparent border-black/20 text-black"
                  }`}>
                  {step.stepNumber}
                </div>

                <p className="text-sm font-medium">{step.title}</p>
              </div>

              {/* Desktop vertical line */}
              {i !== steps.length - 1 && (
                <div className="w-[2px] h-10 bg-black/10 ml-3 mt-2 hidden md:block"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
