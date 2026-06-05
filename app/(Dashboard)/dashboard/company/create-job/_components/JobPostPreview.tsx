import { HugeiconsIcon } from "@hugeicons/react";
import {
  CreateJobPostData,
  JobPostFullInfoType,
} from "./HandleJobPostCreation";
import microsoft from "@images/Icons/microsoft-6.svg";
import Image from "next/image";
import {
  Briefcase01Icon,
  Location01Icon,
  MoneyBag02Icon,
} from "@hugeicons/core-free-icons";
import { Dispatch, SetStateAction } from "react";
import { StepState } from "./JobPostStepper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PrevStepperBtn from "./PrevStepperBtn";
import { Spinner } from "@/components/ui/spinner";

type Props = {
  JobData: JobPostFullInfoType;
  setCurrentStep: Dispatch<SetStateAction<StepState[]>>;
  currentStep: StepState[];
  handlePublish: (jobData: CreateJobPostData) => void;
  isPending: boolean;
};
export default function JobPostPreview({
  JobData,
  currentStep,
  setCurrentStep,
  handlePublish,
  isPending,
}: Props) {
  console.log("JobData", JobData);
  return (
    <motion.div
      className="space-y-5 w-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}>
      <p className="md:text-2xl text-xl font-medium">
        {JobData.jobBasicData.jobTitle}
      </p>
      <div className="flex gap-7 items-start flex-wrap">
        <div className="flex flex-col gap-3">
          <Image
            src={microsoft}
            alt="logo"
            width={1000}
            height={1000}
            className="w-30"
          />
          <p className="font-medium text-main-color">Microsoft</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-6 flex-wrap">
            <p className="flex items-center gap-1 text-sm font-medium">
              <HugeiconsIcon icon={Location01Icon} className="size-5" />
              {JobData.jobBasicData.location}
            </p>
            <p className="flex items-center gap-1 text-sm font-medium">
              <HugeiconsIcon icon={MoneyBag02Icon} className="size-5" />
              {`${JobData.jobBasicData.salaryMin}$ - ${JobData.jobBasicData.salaryMax}$`}
            </p>
            <p className="flex items-center gap-1 text-sm font-medium">
              <HugeiconsIcon icon={Briefcase01Icon} className="size-5" />
              {JobData.jobBasicData.jobCategory}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {JobData.jobBasicData.employmentType.map((type) => (
              <p
                key={type}
                className="px-3 py-1.5 bg-white border rounded-md text-xs font-medium">
                {type}
              </p>
            ))}
            {JobData.jobBasicData.workApproach.map((approach) => (
              <p
                key={approach}
                className="px-3 py-1.5 bg-white border rounded-md text-xs font-medium">
                {approach}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Describtion */}
      <div className="space-y-2">
        <p className="font-medium flex items-center gap-1">
          <span className="size-1 bg-black rounded-full"></span>
          Description
        </p>
        <div
          className="text-sm pl-2 ProseMirror"
          dangerouslySetInnerHTML={{
            __html: JobData.jobDetails.jobDescription,
          }}
        />
      </div>

      {/* Responsibilities */}
      <div className="space-y-2">
        <p className="font-medium flex items-center gap-1 ">
          <span className="size-1 bg-black rounded-full"></span>
          Responsibilities
        </p>
        <div
          className="text-sm pl-2"
          dangerouslySetInnerHTML={{
            __html: JobData.jobDetails.responsibilities,
          }}
        />
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <p className="text-lg font-medium">Required Skills</p>
        <div className="flex items-center gap-3 flex-wrap">
          {JobData.jobDetails.skills.map((skill) => (
            <p
              key={skill}
              className="px-3 py-1.5 bg-white border rounded-md text-xs font-medium">
              {skill}
            </p>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between flex-wrap gap-4 mt-9">
        <PrevStepperBtn
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <Button
          onClick={() => {
            handlePublish({
              jobBasicData: {
                employmentType: JobData.jobBasicData.employmentType,
                jobCategory: JobData.jobBasicData.jobCategory,
                minExperience: JobData.jobBasicData.minYearsExperience,
                maxExperience: JobData.jobBasicData.maxYearsExperience,
                jobTitle: JobData.jobBasicData.jobTitle,
                location: JobData.jobBasicData.location,
                salaryMax: JobData.jobBasicData.salaryMax,
                salaryMin: JobData.jobBasicData.salaryMin,
                workApproach: JobData.jobBasicData.workApproach,
              },
              jobDetails: {
                jobDescription: JobData.jobDetails.jobDescription,
                responsibilities: JobData.jobDetails.responsibilities,
                skills: JobData.jobDetails.skills,
              },
            });
          }}
          type="submit"
          className="bg-main-color hover:bg-main-color/90 text-white w-32 text-sm"
          disabled={isPending}>
          {isPending ? <Spinner /> : "Publish"}
        </Button>
      </div>
    </motion.div>
  );
}
