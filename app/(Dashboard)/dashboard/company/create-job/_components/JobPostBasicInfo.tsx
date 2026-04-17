"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/lib/Countries";
import { employmentTypes, workApproaches } from "@/lib/EmploymentType";
import { jobCategories } from "@/lib/JobCategories";
import { Add01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  jobPostBasicInfoSchema,
  JobPostBasicInfoType,
} from "@/validations/JobPostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { StepState } from "./JobPostStepper";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  setCurrentStep: Dispatch<SetStateAction<StepState[]>>;
  UpdateBasicData: (data: JobPostBasicInfoType) => void;
  defaultValues: JobPostBasicInfoType;
};

export default function JobPostBasicInfo({
  setCurrentStep,
  UpdateBasicData,
  defaultValues,
}: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm<JobPostBasicInfoType>({
    resolver: zodResolver(jobPostBasicInfoSchema),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<JobPostBasicInfoType> = (data) => {
    setCurrentStep((prev) =>
      prev.map((p) => {
        if (p.stepNumber == 1) {
          p.isCompleted = true;
          p.isCurrent = false;
        } else if (p.stepNumber == 2) {
          p.isCurrent = true;
        }
        return p;
      }),
    );

    UpdateBasicData(data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}>
      {/* Job Title */}
      <div className="space-y-1">
        <Label htmlFor="job-title">Job Title</Label>
        <Input
          type="text"
          placeholder="Job Title"
          className="w-full bg-white border-border-color"
          id="job-title"
          {...register("jobTitle")}
        />
        {errors.jobTitle && (
          <ErrorValidationMessage message={errors.jobTitle.message as string} />
        )}
      </div>

      {/* Category & Location */}
      <div className="flex items-center gap-3 w-full flex-col md:flex-row">
        {/* Job Category */}
        <div className="space-y-1 w-full">
          <Label htmlFor="job-category">Job Category</Label>
          <Select
            defaultValue={getValues("jobCategory")}
            onValueChange={(e) => setValue("jobCategory", e)}>
            <SelectTrigger
              id="job-category"
              className="w-full bg-white h-11! border border-border-color">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-border-color">
              <SelectGroup>
                {jobCategories.map((cat) => (
                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    key={cat}
                    value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-1 w-full">
          <Label htmlFor="job-location">Location</Label>
          <Select
            defaultValue={getValues("location")}
            onValueChange={(e) => setValue("location", e)}>
            <SelectTrigger
              id="job-location"
              className="w-full bg-white h-11! border border-border-color">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-border-color">
              <SelectGroup>
                {countries.map((country) => (
                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    key={country}
                    value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Employment Type */}
      <div className="space-y-3">
        <Label>Employment Type</Label>
        <div className="flex flex-wrap gap-3">
          {employmentTypes.map((emType) => (
            <Label
              key={emType}
              onClick={() => {
                const current = getValues("employmentType") || [];

                if (current.includes(emType)) {
                  setValue(
                    "employmentType",
                    current.filter((t) => t !== emType),
                  );
                } else {
                  setValue("employmentType", [...current, emType]);
                }
              }}
              className={`flex items-center gap-1 px-4 py-2 text-sm cursor-pointer border rounded-full transition-all duration-200 ${
                // eslint-disable-next-line react-hooks/incompatible-library
                watch("employmentType")?.includes(emType)
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white text-black"
              }`}>
              <HugeiconsIcon
                strokeWidth={2}
                icon={
                  watch("employmentType")?.includes(emType)
                    ? CheckmarkCircle02Icon
                    : Add01Icon
                }
                className="size-3.5"
              />
              {emType}
            </Label>
          ))}
        </div>
      </div>

      {/* Work Approach */}
      <div className="space-y-3">
        <Label>Work Approach</Label>
        <div className="flex flex-wrap gap-3">
          {workApproaches.map((workApproach) => (
            <Label
              key={workApproach}
              onClick={() => {
                const current = getValues("workApproach") || [];

                if (current.includes(workApproach)) {
                  setValue(
                    "workApproach",
                    current.filter((t) => t !== workApproach),
                  );
                } else {
                  setValue("workApproach", [...current, workApproach]);
                }
              }}
              className={`flex items-center gap-1 px-4 py-2 text-sm cursor-pointer border rounded-full transition-all duration-200 ${
                watch("workApproach")?.includes(workApproach)
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white text-black"
              }`}>
              <HugeiconsIcon
                strokeWidth={2}
                icon={
                  watch("workApproach")?.includes(workApproach)
                    ? CheckmarkCircle02Icon
                    : Add01Icon
                }
                className="size-4"
              />
              {workApproach}
            </Label>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div className="space-y-1">
        <Label>Salary Range (USD)$</Label>
        <div className="flex items-center gap-3">
          <Input
            id="salary-range"
            type="number"
            placeholder="Minimum Salary"
            className="w-fit bg-white border-border-color"
            min={0}
            {...register("salaryMin", { valueAsNumber: true })}
            aria-invalid={errors.salaryMin ? "true" : "false"}
          />
          -
          <Input
            type="number"
            placeholder="Maximum Salary"
            className="w-fit bg-white border-border-color"
            min={0}
            {...register("salaryMax", { valueAsNumber: true })}
            aria-invalid={errors.salaryMax ? "true" : "false"}
          />
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="bg-main-color hover:bg-main-color/90 text-white w-32 text-sm">
        Next <ChevronRight />
      </Button>
    </motion.form>
  );
}
