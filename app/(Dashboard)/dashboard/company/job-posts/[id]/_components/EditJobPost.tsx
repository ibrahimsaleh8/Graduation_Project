"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  CancelCircleIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

import { useState } from "react";
import {
  editJobPostDataType,
  editJobPostSchema,
} from "@/validations/EditJobPostSchema";
import { countries } from "@/lib/Countries";
import { jobCategories } from "@/lib/JobCategories";

const employmentTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const workApproaches = ["On-site", "Remote", "Hybrid"];

export default function EditJobPostForm() {
  const [skillInput, setSkillInput] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    getValues,
  } = useForm<editJobPostDataType>({
    resolver: zodResolver(editJobPostSchema),
    defaultValues: {
      jobTitle: "Frontend Developer",
      jobCategory: "Software Development",
      location: "Egypt",
      employmentType: ["Full-time"],
      workApproach: ["Remote"],
      salaryMin: 1000,
      salaryMax: 3000,
      jobDescription: "We are looking for a skilled frontend developer...",
      responsibilities: "Build UI components, collaborate with backend team...",
      skills: ["React", "TypeScript", "Next.js"],
    },
    mode: "onChange",
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const skills = watch("skills");
  const employment = watch("employmentType");
  const work = watch("workApproach");

  const toggleItem = (
    value: string,
    field: "employmentType" | "workApproach",
    current: string[],
  ) => {
    const updated = current.includes(value)
      ? current.filter((i) => i !== value)
      : [...current, value];

    setValue(field, updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const addSkill = () => {
    const value = skillInput.trim();
    if (!value || skills.includes(value)) return;

    setValue("skills", [...skills, value], {
      shouldValidate: true,
      shouldDirty: true,
    });

    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setValue(
      "skills",
      skills.filter((s) => s !== skill),
      { shouldValidate: true, shouldDirty: true },
    );
  };

  const onSubmit = (data: editJobPostDataType) => {
    console.log("Updated Job:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Job Title */}
      <div className="space-y-1">
        <Label>Job Title</Label>
        <Input {...register("jobTitle")} className="border-black/5" />
        {errors.jobTitle && (
          <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>
        )}
      </div>

      {/* Category + Location */}
      <div className="flex gap-3 flex-col md:flex-row">
        {/* Job Category */}
        <div className="space-y-1 w-full">
          <Label htmlFor="job-category">Job Category</Label>
          <Select
            defaultValue={getValues("jobCategory")}
            onValueChange={(e) => setValue("jobCategory", e)}>
            <SelectTrigger
              id="job-category"
              className="w-full bg-input-bg h-11! border border-border-color">
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
              className="w-full bg-input-bg h-11! border border-border-color">
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

        {(errors.jobCategory || errors.location) && (
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {errors.jobCategory && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jobCategory.message}
              </p>
            )}
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Employment Type */}
      <div className="space-y-1">
        <Label>Employment Type</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {employmentTypes.map((type) => (
            <div
              key={type}
              onClick={() => toggleItem(type, "employmentType", employment)}
              className={`flex items-center gap-1 px-3 py-2 rounded-full border text-[0.85rem] cursor-pointer ${
                employment.includes(type)
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white"
              }`}>
              <HugeiconsIcon
                icon={
                  employment.includes(type) ? CheckmarkCircle02Icon : Add01Icon
                }
                className="size-4"
              />
              {type}
            </div>
          ))}
        </div>

        {errors.employmentType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.employmentType.message}
          </p>
        )}
      </div>

      {/* Work Approach */}
      <div className="space-y-1">
        <Label>Work Approach</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {workApproaches.map((type) => (
            <div
              key={type}
              onClick={() => toggleItem(type, "workApproach", work)}
              className={`flex items-center gap-1 px-3 py-2 rounded-full border cursor-pointer text-[0.85rem] ${
                work.includes(type) ? "bg-blue-100 text-blue-600" : "bg-white"
              }`}>
              <HugeiconsIcon
                icon={work.includes(type) ? CheckmarkCircle02Icon : Add01Icon}
                className="size-4"
              />
              {type}
            </div>
          ))}
        </div>
        {errors.workApproach && (
          <p className="text-red-500 text-sm mt-1">
            {errors.workApproach.message}
          </p>
        )}
      </div>

      {/* Salary */}
      <div className="space-y-1">
        <Label>Salary Range ($)</Label>
        <div className="flex gap-3 items-center">
          <Input
            type="number"
            placeholder="Min Salary"
            className="border-black/5"
            {...register("salaryMin", { valueAsNumber: true })}
          />
          -
          <Input
            type="number"
            placeholder="Max Salary"
            className="border-black/5"
            {...register("salaryMax", { valueAsNumber: true })}
          />
        </div>

        {(errors.salaryMin || errors.salaryMax) && (
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {errors.salaryMin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.salaryMin.message}
              </p>
            )}
            {errors.salaryMax && (
              <p className="text-red-500 text-sm mt-1">
                {errors.salaryMax.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="space-y-1">
        <Label>Job Description</Label>
        <Textarea
          className="h-32 bg-input-bg border-black/5"
          {...register("jobDescription")}
        />
        {errors.jobDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.jobDescription.message}
          </p>
        )}
      </div>

      {/* Responsibilities */}
      <div className="space-y-1">
        <Label>Responsibilities</Label>
        <Textarea
          className="h-32 bg-input-bg border-black/5"
          {...register("responsibilities")}
        />
        {errors.responsibilities && (
          <p className="text-red-500 text-sm mt-1">
            {errors.responsibilities.message}
          </p>
        )}
      </div>

      {/* Skills */}
      <div>
        <Label>Skills</Label>
        <div className="flex gap-2 mt-2">
          <Input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add skill"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill();
              }
            }}
          />
          <Button type="button" onClick={addSkill}>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-[0.85rem]">
              <span>{skill}</span>
              <HugeiconsIcon
                icon={CancelCircleIcon}
                className="cursor-pointer size-4"
                onClick={() => removeSkill(skill)}
              />
            </div>
          ))}
        </div>

        {errors.skills && (
          <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-main-color text-white text-[0.85rem] h-10 hover:bg-main-color/80">
          Save Changes
        </Button>
      </div>
    </form>
  );
}
