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
import {
  Add01Icon,
  CancelCircleIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sileo } from "sileo";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  jobPostBasicInfoSchema,
  JobPostBasicInfoType,
} from "@/validations/JobPostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";

export default function JobPostBasicInfo() {
  const skillInput = useRef<HTMLInputElement>(null);
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
  });
  const onSubmit: SubmitHandler<JobPostBasicInfoType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
      {/* Job Title */}
      <div className="space-y-1">
        <Label htmlFor="job-title">Job Title</Label>
        <Input
          type="text"
          placeholder="Job Title"
          className="w-full bg-white border-border-color"
          id="job-title"
          {...register("jobTitle")}
          aria-invalid={errors.jobTitle ? "true" : "false"}
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
          <Select onValueChange={(e) => setValue("jobCategory", e)}>
            <SelectTrigger
              aria-invalid={errors.jobCategory ? "true" : "false"}
              id="job-category"
              className="w-full bg-white h-11! border border-border-color ">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-border-color">
              <SelectGroup>
                {jobCategories.map((cat) => (
                  <SelectItem
                    key={cat}
                    className="hover:bg-input-bg! hover:text-black!"
                    value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.jobCategory && (
            <ErrorValidationMessage
              message={errors.jobCategory.message as string}
            />
          )}
        </div>

        {/* Location */}
        <div className="space-y-1 w-full">
          <Label htmlFor="job-location">Location</Label>
          <Select onValueChange={(e) => setValue("location", e)}>
            <SelectTrigger
              aria-invalid={errors.location ? "true" : "false"}
              id="job-location"
              className="w-full bg-white h-11! border border-border-color ">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-border-color">
              <SelectGroup>
                {countries.map((country) => (
                  <SelectItem
                    key={country}
                    className="hover:bg-input-bg! hover:text-black!"
                    value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.location && (
            <ErrorValidationMessage
              message={errors.location.message as string}
            />
          )}
        </div>
      </div>

      {/*Employment Type */}
      <div className="space-y-3">
        <Label>Employment Type</Label>
        <div className="flex items-center gap-3 flex-wrap">
          {employmentTypes.map((emType) => (
            <Label
              key={emType}
              onClick={() => {
                if (getValues("employmentType")) {
                  if (!getValues("employmentType").includes(emType)) {
                    setValue("employmentType", [
                      ...getValues("employmentType"),
                      emType,
                    ]);
                  } else {
                    setValue("employmentType", [
                      ...getValues("employmentType").filter(
                        (type) => type !== emType,
                      ),
                    ]);
                  }
                } else {
                  setValue("employmentType", [emType]);
                }
              }}
              // eslint-disable-next-line react-hooks/incompatible-library
              className={`flex items-center gap-1 px-4 py-2 text-[0.8rem] font-medium ${watch("employmentType")?.includes(emType) ? "bg-blue-100 text-blue-600" : "bg-white text-black"} cursor-pointer border w-fit rounded-full`}>
              <HugeiconsIcon
                strokeWidth={2}
                icon={
                  getValues("employmentType")?.includes(emType)
                    ? CheckmarkCircle02Icon
                    : Add01Icon
                }
                className="size-3.5"
              />
              {emType}
            </Label>
          ))}
        </div>
        {errors.employmentType && (
          <ErrorValidationMessage
            message={errors.employmentType.message as string}
          />
        )}
      </div>

      {/* Work Approach */}
      <div className="space-y-3">
        <Label>Work Approach</Label>
        <div className="flex items-center gap-3 flex-wrap">
          {workApproaches.map((workApproach) => (
            <Label
              key={workApproach}
              onClick={() => {
                if (getValues("workApproach")) {
                  if (!getValues("workApproach").includes(workApproach)) {
                    setValue("workApproach", [
                      ...getValues("workApproach"),
                      workApproach,
                    ]);
                  } else {
                    setValue(
                      "workApproach",
                      getValues("workApproach").filter(
                        (type) => type !== workApproach,
                      ),
                    );
                  }
                } else {
                  setValue("workApproach", [workApproach]);
                }
              }}
              className={`flex items-center gap-1 px-4 py-2 text-[0.8rem] font-medium ${watch("workApproach")?.includes(workApproach) ? "bg-blue-100 text-blue-600" : "bg-white text-black"} cursor-pointer border w-fit rounded-full`}>
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
        {errors.workApproach && (
          <ErrorValidationMessage
            message={errors.workApproach.message as string}
          />
        )}
      </div>

      {/* Salary Range */}
      <div className="space-y-1">
        <Label htmlFor="salary-range">Salary Range (USD)$</Label>
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
      {(errors.salaryMin || errors.salaryMax) && (
        <div className="flex items-center gap-3 flex-wrap">
          {errors.salaryMin && (
            <ErrorValidationMessage
              message={errors.salaryMin.message as string}
            />
          )}
          {errors.salaryMax && (
            <ErrorValidationMessage
              message={errors.salaryMax.message as string}
            />
          )}
        </div>
      )}

      {/* Skills */}
      <div className="space-y-1">
        <Label htmlFor="skills">Skills</Label>
        <div className="flex items-center gap-3">
          <Input
            id="skills"
            ref={skillInput}
            type="text"
            placeholder="Required Skills"
            className="w-fit bg-white border-border-color"
            aria-invalid={errors.skills ? "true" : "false"}
          />
          <Button
            onClick={() => {
              if (!skillInput.current) return;
              if (skillInput.current.value.trim() != "") {
                if (getValues("skills")) {
                  if (
                    !getValues("skills")?.includes(
                      skillInput.current.value.trim(),
                    )
                  ) {
                    setValue("skills", [
                      ...getValues("skills"),
                      skillInput.current!.value.trim(),
                    ]);
                    skillInput.current.value = "";
                  } else {
                    sileo.warning({
                      title: "This skill is already added",
                      description: "Please add a different skill.",
                    });
                  }
                } else {
                  setValue("skills", [skillInput.current.value.trim()]);
                  skillInput.current.value = "";
                }
              }
            }}
            type="button"
            className="bg-black text-white h-9!">
            <HugeiconsIcon
              icon={Add01Icon}
              strokeWidth={2}
              className="size-4!"
            />
          </Button>
        </div>

        {/* Show Skills */}
        <div className="flex items-center gap-2 flex-wrap mt-2 min-h-10">
          <AnimatePresence>
            {watch("skills")?.map((skill, i) => (
              <motion.p
                key={skill + i}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.25 }}
                layout
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-black/5 text-black cursor-pointer border w-fit rounded-full">
                <HugeiconsIcon
                  icon={CancelCircleIcon}
                  className="size-4"
                  onClick={() =>
                    setValue(
                      "skills",
                      getValues("skills").filter((sk) => sk !== skill),
                    )
                  }
                />
                {skill}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {errors.skills && (
        <ErrorValidationMessage message={errors.skills.message as string} />
      )}
      <Button
        type="submit"
        className="bg-main-color hover:bg-main-color/90 duration-300 text-white w-32 text-sm">
        Next
      </Button>
    </form>
  );
}
