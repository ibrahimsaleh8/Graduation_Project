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
import { Textarea } from "@/components/ui/textarea";
import { countries } from "@/lib/Countries";
import { employmentTypes, workApproaches } from "@/lib/EmploymentType";
import { jobCategories } from "@/lib/JobCategories";
import {
  Add01Icon,
  CancelCircleIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sileo } from "sileo";

export default function CreateJobForm() {
  const [employmentType, setEmploymentType] = useState<string[]>([]);
  const [selectedWorkApproach, setWorkApproach] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const skillInput = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 max-w-7xl">
      {/* Job Title */}
      <div className="space-y-1">
        <Label htmlFor="job-title">Job Title</Label>
        <Input
          type="text"
          placeholder="Job Title"
          className="w-full bg-white border-border-color"
          required
          id="job-title"
        />
      </div>

      {/* Category & Location */}
      <div className="flex items-center gap-3 w-full flex-col md:flex-row">
        {/* Job Category */}
        <div className="space-y-1 w-full">
          <Label htmlFor="job-category">Job Category</Label>
          <Select>
            <SelectTrigger
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
        </div>

        {/* Location */}
        <div className="space-y-1 w-full">
          <Label htmlFor="job-location">Location</Label>
          <Select>
            <SelectTrigger
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
                if (!employmentType.includes(emType)) {
                  setEmploymentType((prev) => [...prev, emType]);
                } else {
                  setEmploymentType((prev) =>
                    prev.filter((type) => type !== emType),
                  );
                }
              }}
              className={`flex items-center gap-1 px-4 py-2 text-[0.8rem] font-medium ${employmentType.includes(emType) ? "bg-blue-100 text-blue-600" : "bg-white text-black"} cursor-pointer border w-fit rounded-full`}>
              <HugeiconsIcon
                strokeWidth={2}
                icon={
                  employmentType.includes(emType)
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
        <div className="flex items-center gap-3 flex-wrap">
          {workApproaches.map((workApproach) => (
            <Label
              key={workApproach}
              onClick={() => {
                if (!selectedWorkApproach.includes(workApproach)) {
                  setWorkApproach((prev) => [...prev, workApproach]);
                } else {
                  setWorkApproach((prev) =>
                    prev.filter((type) => type !== workApproach),
                  );
                }
              }}
              className={`flex items-center gap-1 px-4 py-2 text-[0.8rem] font-medium ${selectedWorkApproach.includes(workApproach) ? "bg-blue-100 text-blue-600" : "bg-white text-black"} cursor-pointer border w-fit rounded-full`}>
              <HugeiconsIcon
                strokeWidth={2}
                icon={
                  selectedWorkApproach.includes(workApproach)
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

      {/* Salary Range */}
      <div className="space-y-1">
        <Label htmlFor="salary-range">Salary Range (USD)$</Label>
        <div className="flex items-center gap-3">
          <Input
            id="salary-range"
            type="number"
            placeholder="Minimum Salary"
            className="w-fit bg-white border-border-color"
            required
          />
          -
          <Input
            type="number"
            placeholder="Maximum Salary"
            className="w-fit bg-white border-border-color"
            required
          />
        </div>
      </div>

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
          />
          <Button
            onClick={() => {
              if (!skillInput.current) return;
              if (skillInput.current.value.trim() != "") {
                if (!skills.includes(skillInput.current.value.trim())) {
                  setSkills((prev) => [
                    ...prev,
                    skillInput.current!.value.trim(),
                  ]);
                  skillInput.current.value = "";
                } else {
                  sileo.warning({
                    title: "This skill is already added",
                    description: "Please add a different skill.",
                  });
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
            {skills.map((skill, i) => (
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
                    setSkills((prev) => prev.filter((sk) => sk !== skill))
                  }
                />
                {skill}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Job Description */}
      <div className="space-y-1">
        <Label htmlFor="job-description">Job Description</Label>
        <Textarea
          placeholder="Job Description"
          className="w-full bg-white border-border-color h-45"
          required
          id="job-description"
        />
      </div>

      <Button
        type="submit"
        className="bg-main-color hover:bg-main-color/90 duration-300 text-white w-32 text-sm">
        Next
      </Button>
    </form>
  );
}
