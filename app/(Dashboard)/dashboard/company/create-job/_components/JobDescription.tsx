"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Add01Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useRef } from "react";
import { sileo } from "sileo";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  jobDetailsSchema,
  JobDetailsType,
} from "@/validations/JobPostValidation";
import { StepState } from "./JobPostStepper";
import { ChevronRight } from "lucide-react";
import PrevStepperBtn from "./PrevStepperBtn";

type Props = {
  setCurrentStep: Dispatch<SetStateAction<StepState[]>>;
  currentStep: StepState[];
  UpdateJobDetails: (data: JobDetailsType) => void;
  defaultValues: JobDetailsType;
};

export default function JobDescription({
  setCurrentStep,
  currentStep,
  UpdateJobDetails,
  defaultValues,
}: Props) {
  const skillInput = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<JobDetailsType>({
    resolver: zodResolver(jobDetailsSchema),
    defaultValues,
  });

  const onSubmit = (data: JobDetailsType) => {
    setCurrentStep((prev) =>
      prev.map((p) => {
        if (p.stepNumber == 2) {
          p.isCompleted = true;
          p.isCurrent = false;
        } else if (p.stepNumber == 3) {
          p.isCurrent = true;
        }
        return p;
      }),
    );

    UpdateJobDetails(data);
  };

  const skills = watch("skills");

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      {/* Job Description */}
      <div className="space-y-1">
        <Label htmlFor="job-description">Job Description</Label>
        <Textarea
          id="job-description"
          placeholder="Describe the job description"
          className="w-full bg-white border-border-color h-45"
          {...register("jobDescription")}
        />
        {errors.jobDescription && (
          <p className="text-red-500 text-sm">
            {errors.jobDescription.message}
          </p>
        )}
      </div>

      {/* Responsibilities */}
      <div className="space-y-1">
        <Label htmlFor="job-responsibilities">Responsibilities</Label>
        <Textarea
          id="job-responsibilities"
          placeholder="Describe the job responsibilities"
          className="w-full bg-white border-border-color h-45"
          {...register("responsibilities")}
        />
        {errors.responsibilities && (
          <p className="text-red-500 text-sm">
            {errors.responsibilities.message}
          </p>
        )}
      </div>

      {/* Skills */}
      <div className="space-y-1">
        <Label>Skills</Label>

        <div className="flex items-center gap-3">
          <Input
            id="skills"
            ref={skillInput}
            type="text"
            placeholder="Required Skills"
            className="w-fit bg-white border-border-color"
          />
          <Button
            type="button"
            className="bg-black text-white h-9!"
            onClick={() => {
              if (!skillInput.current) return;

              const value = skillInput.current.value.trim();
              if (!value) return;

              // eslint-disable-next-line react-hooks/incompatible-library
              const currentSkills = watch("skills") || [];

              if (currentSkills.includes(value)) {
                sileo.warning({
                  title: "This skill is already added",
                  description: "Please add a different skill.",
                });
                return;
              }

              setValue("skills", [...currentSkills, value], {
                shouldValidate: true,
              });

              skillInput.current.value = "";
            }}>
            <HugeiconsIcon icon={Add01Icon} className="size-4!" />
          </Button>
        </div>

        {errors.skills && (
          <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
        )}

        {/* Skills List */}
        <div className="flex flex-wrap gap-2 mt-2 min-h-10">
          <AnimatePresence>
            {skills?.map((skill, i) => (
              <motion.p
                key={skill + i}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-black/5 border rounded-full">
                <HugeiconsIcon
                  icon={CancelCircleIcon}
                  className="size-4 cursor-pointer"
                  onClick={() =>
                    setValue(
                      "skills",
                      skills.filter((sk) => sk !== skill),
                      { shouldValidate: true },
                    )
                  }
                />
                {skill}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <PrevStepperBtn
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <Button
          type="submit"
          className="bg-main-color hover:bg-main-color/90 text-white w-32 text-sm">
          Next <ChevronRight />
        </Button>
      </div>
    </motion.form>
  );
}
