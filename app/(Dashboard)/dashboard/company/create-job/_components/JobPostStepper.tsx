"use client";

const steps = [
  { stepNumber: 1, title: "Basic Info" },
  { stepNumber: 2, title: "Job Details" },
  { stepNumber: 3, title: "Preview Job Post" },
];

export type StepState = {
  stepNumber: number;
  isCompleted: boolean;
  isCurrent: boolean;
};

type Props = {
  currentStep: StepState[];
};

export default function JobPostStepper({ currentStep }: Props) {
  const activeStep = currentStep.find((s) => s.isCurrent)!;

  return (
    <div className="w-full md:w-52">
      <div className="flex gap-4 flex-wrap md:flex-col">
        {steps.map((step, i) => {
          const stepState = currentStep.find(
            (s) => s.stepNumber === step.stepNumber,
          );

          const prevStep = currentStep.find(
            (s) => s.stepNumber === step.stepNumber - 1,
          );

          const isActive = activeStep.stepNumber === step.stepNumber;

          const isCompleted = stepState?.isCompleted;

          const canClick =
            step.stepNumber < activeStep.stepNumber || prevStep?.isCompleted;

          return (
            <div key={step.stepNumber}>
              <button
                disabled={!isActive && !canClick}
                className={`text-left ${
                  !isActive && !canClick
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
                    {isCompleted ? "✓" : step.stepNumber}
                  </div>

                  <p className="text-sm font-medium">{step.title}</p>
                </div>
              </button>

              {i !== steps.length - 1 && (
                <div className="w-0.5 h-10 bg-black/10 ml-3 mt-2 hidden md:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
