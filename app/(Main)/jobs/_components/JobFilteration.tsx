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
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { ExperienceYears } from "@/lib/ExperienceYears";
import { JobsFilteration } from "./DisplayJobsForSearch";
import { employmentTypes, workApproaches } from "@/lib/EmploymentType";

type Props = {
  setFilters: Dispatch<SetStateAction<JobsFilteration>>;
  filters: JobsFilteration;
  onReset: () => void;
};

export default function JobFilteration({
  setFilters,
  filters,
  onReset,
}: Props) {
  const isFilterActive =
    filters.jobTypes.length > 0 ||
    filters.workType.length > 0 ||
    filters.minExperience !== null ||
    filters.maxExperience !== null;
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
      border-r
      border-border-color
      p-5
      space-y-5
    ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-lg">Filters</p>
        </div>
        {isFilterActive && (
          <button
            onClick={onReset}
            className="
              text-xs
              font-medium
              text-main-color
              hover:text-main-color/70
              transition-colors
              duration-150
              cursor-pointer
            ">
            Reset
          </button>
        )}
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

              <NativeSelect
                id="min-year"
                value={
                  filters.minExperience ? filters.minExperience.toString() : "0"
                }
                onChange={(e) => {
                  setFilters({ ...filters, minExperience: +e.target.value });
                }}
                className="h-11 border-border-color bg-white">
                {ExperienceYears.map((year) => (
                  <NativeSelectOption key={year} value={`${year}`}>
                    {year} Years
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>

            {/* Max */}
            <div className="space-y-1.5">
              <Label htmlFor="max-year">Max Years</Label>

              <NativeSelect
                id="max-year"
                value={
                  filters.maxExperience ? filters.maxExperience.toString() : "0"
                }
                onChange={(e) => {
                  setFilters({ ...filters, maxExperience: +e.target.value });
                }}
                className="h-11 border-border-color bg-white">
                {ExperienceYears.map((year) => (
                  <NativeSelectOption key={year} value={`${year}`}>
                    {year} Years
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
