"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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
import { Dispatch, SetStateAction } from "react";
import { countries } from "@/lib/Countries";
import { jobCategories } from "@/lib/JobCategories";
import { JobDetailsResponse } from "./ShowJobDetailsById";
import { employmentTypes, workApproaches } from "@/lib/EmploymentType";
import TextEditor from "@/app/(Dashboard)/_components/TextEditor";
import { Spinner } from "@/components/ui/spinner";
import { ExperienceYears } from "@/lib/ExperienceYears";
import { useEditJobPost } from "./hooks/useEditJobPost";

type Props = {
  deafultValues: JobDetailsResponse;
  token: string;
  jobId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function EditJobPostForm({
  deafultValues,
  token,
  jobId,
  setOpen,
}: Props) {
  const {
    onSubmit,
    removeSkill,
    addSkill,
    toggleItem,
    employment,
    work,
    errors,
    register,
    handleSubmit,
    isPending,
    setValue,
    getValues,
    skillInput,
    setSkillInput,
    skills,
  } = useEditJobPost({
    deafultValues,
    token,
    jobId,
    setOpen,
  });
  console.log(getValues("jobCategory"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Is Active */}
      <div className="flex items-center gap-3 flex-wrap">
        <Switch
          defaultChecked={deafultValues.isActive}
          onCheckedChange={(e) =>
            setValue("isActive", e, { shouldDirty: true })
          }
          id="priority-support"
          className="size-10 bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
        <Label
          htmlFor="priority-support"
          className="flex flex-col gap-1 items-start cursor-pointer">
          Job Is Active
        </Label>
      </div>

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

      {/* Experience */}
      <div className="space-y-1">
        <div className="flex md:items-end gap-3 flex-col md:flex-row">
          <div className="space-y-1">
            <Label htmlFor="min-years">Minimum years of experience</Label>
            <Select
              defaultValue={`${deafultValues.minExper}`}
              onValueChange={(e) => setValue("minYearsExperience", +e)}>
              <SelectTrigger
                id="min-years"
                aria-invalid={errors.minYearsExperience ? "true" : "false"}
                className="w-full min-w-60 bg-input-bg h-11! border border-border-color">
                <SelectValue placeholder="Minimum years of experience" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-border-color">
                <SelectGroup>
                  {ExperienceYears.map((year) => (
                    <SelectItem
                      key={year}
                      value={`${year}`}
                      className="hover:bg-input-bg! hover:text-black!">
                      {year} Years
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <span className="mb-2 hidden md:block">-</span>
          <div className="space-y-1">
            <Label htmlFor="max-years">Maximum years of experience</Label>
            <Select
              defaultValue={`${deafultValues.maxExper}`}
              onValueChange={(e) => setValue("maxYearsExperience", +e)}>
              <SelectTrigger
                aria-invalid={errors.maxYearsExperience ? "true" : "false"}
                id="max-years"
                className="w-full min-w-60 bg-input-bg h-11! border border-border-color">
                <SelectValue placeholder="Maximum years of experience" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-border-color">
                <SelectGroup>
                  {ExperienceYears.map((year) => (
                    <SelectItem
                      key={year}
                      value={`${year}`}
                      className="hover:bg-input-bg! hover:text-black!">
                      {year} Years
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {(errors.minYearsExperience || errors.minYearsExperience) && (
          <div className="flex items-center justify-between gap-3 flex-wrap">
            {errors.minYearsExperience && (
              <p className="text-red-500 text-sm mt-1">
                {errors.minYearsExperience.message}
              </p>
            )}
            {errors.maxYearsExperience && (
              <p className="text-red-500 text-sm mt-1">
                {errors.maxYearsExperience.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="space-y-1">
        <TextEditor
          deafultValue={getValues("jobDescription")}
          label="Job Description"
          updateFn={(value: string) => {
            setValue("jobDescription", value);
          }}
          stylingClass="bg-input-bg"
        />

        {errors.jobDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.jobDescription.message}
          </p>
        )}
      </div>

      {/* Responsibilities */}
      <div className="space-y-1">
        <TextEditor
          deafultValue={getValues("responsibilities")}
          label="Responsibilities"
          updateFn={(value: string) => {
            setValue("responsibilities", value);
          }}
          stylingClass="bg-input-bg"
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
      <div className="flex justify-end w-full p-4 sticky bottom-0 bg-white border-t border-border-color">
        <Button
          disabled={isPending}
          type="submit"
          className="bg-main-color text-white text-[0.85rem] h-10 hover:bg-main-color/80 w-40">
          {isPending ? <Spinner /> : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
