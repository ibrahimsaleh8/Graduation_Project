"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Checkbox,
  CheckboxIndicator,
} from "@/components/animate-ui/primitives/radix/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ExperienceYears } from "@/lib/ExperienceYears";
import { JobsFilteration } from "./DisplayJobsForSearch";
import { employmentTypes, workApproaches } from "@/lib/EmploymentType";

type Props = {
  setFilters: Dispatch<SetStateAction<JobsFilteration>>;
  filters: JobsFilteration;
};

export default function JobFilteration({ setFilters, filters }: Props) {
  function toggleFilter(field: "jobTypes" | "workType", value: string) {
    setFilters((prev) => {
      const current = prev[field];

      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      const newFilters = {
        ...prev,
        [field]: updated,
      };

      return newFilters;
    });
  }

  return (
    <div
      className="
      xl:max-w-80
      w-full
      h-fit
      bg-white
      border
      border-border-color
      rounded-md
      shadow-sm
      p-5
      space-y-5
    ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-lg">Filters</p>
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["job_type", "experience", "work_type"]}
        className="space-y-3">
        {/* Job Type */}
        <AccordionItem value="job_type" className="border-none">
          <AccordionTrigger
            className="
              text-sm
              font-semibold
              py-2
              hover:no-underline
            ">
            Job Type
          </AccordionTrigger>

          <AccordionContent className="space-y-3 pt-2">
            {employmentTypes.map((type) => (
              <div
                key={type}
                className="
                  flex
                  items-center
                  gap-2
                ">
                <Checkbox
                  id={type}
                  checked={filters.jobTypes.includes(type)}
                  onCheckedChange={() => toggleFilter("jobTypes", type)}
                  className="
                    w-4.5
                    h-4.5
                    flex
                    items-center
                    justify-center
                    border
                    border-border-color
                    rounded-[3px]
                    transition-all
                    data-[state=checked]:bg-main-color
                    data-[state=checked]:text-white
                  ">
                  <CheckboxIndicator className="w-3.5 h-3.5" />
                </Checkbox>

                <Label
                  htmlFor={type}
                  className="
                    cursor-pointer
                    text-sm
                  ">
                  {type}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Work Type */}
        <AccordionItem value="work_type" className="border-none">
          <AccordionTrigger
            className="
              text-sm
              font-semibold
              py-2
              hover:no-underline
            ">
            Work Type
          </AccordionTrigger>

          <AccordionContent className="space-y-3 pt-2">
            {workApproaches.map((type) => (
              <div
                key={type}
                className="
                  flex
                  items-center
                  gap-2
                ">
                <Checkbox
                  id={type}
                  checked={filters.workType.includes(type)}
                  onCheckedChange={() => toggleFilter("workType", type)}
                  className="
                    w-4.5
                    h-4.5
                    flex
                    items-center
                    justify-center
                    border
                    border-border-color
                    rounded-[3px]
                    transition-all
                    data-[state=checked]:bg-main-color
                    data-[state=checked]:text-white
                  ">
                  <CheckboxIndicator className="w-3.5 h-3.5" />
                </Checkbox>

                <Label
                  htmlFor={type}
                  className="
                    cursor-pointer
                    text-sm
                  ">
                  {type}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Experience */}
        <AccordionItem value="experience" className="border-none">
          <AccordionTrigger
            className="
              text-sm
              font-semibold
              py-2
              hover:no-underline
            ">
            Experience
          </AccordionTrigger>

          <AccordionContent className="space-y-4 pt-2">
            {/* Min */}
            <div className="space-y-1.5">
              <Label htmlFor="min-year">Min Years</Label>

              <Select
                value={filters.minExperience}
                onValueChange={(value) => {
                  const newFilters = {
                    ...filters,
                    minExperience: value,
                  };
                  setFilters(newFilters);
                }}>
                <SelectTrigger
                  id="min-year"
                  className="
                    w-full
                    h-11
                    bg-white
                    border-border-color
                    ring-0
                  ">
                  <SelectValue placeholder="Select minimum" />
                </SelectTrigger>

                <SelectContent
                  className="
                    bg-white
                    text-black
                    border-border-color
                  ">
                  <SelectGroup>
                    {ExperienceYears.map((year) => (
                      <SelectItem
                        key={year}
                        value={`${year}`}
                        className="
                          hover:bg-input-bg
                          hover:text-black
                        ">
                        {year} Years
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Max */}
            <div className="space-y-1.5">
              <Label htmlFor="max-year">Max Years</Label>

              <Select
                value={filters.maxExperience}
                onValueChange={(value) => {
                  const newFilters = {
                    ...filters,
                    maxExperience: value,
                  };
                  setFilters(newFilters);
                }}>
                <SelectTrigger
                  id="max-year"
                  className="
                    w-full
                    h-11
                    bg-white
                    border-border-color
                    ring-0
                  ">
                  <SelectValue placeholder="Select maximum" />
                </SelectTrigger>

                <SelectContent
                  className="
                    bg-white
                    text-black
                    border-border-color
                  ">
                  <SelectGroup>
                    {ExperienceYears.map((year) => (
                      <SelectItem
                        key={year}
                        value={`${year}`}
                        className="
                          hover:bg-input-bg
                          hover:text-black
                        ">
                        {year} Years
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
