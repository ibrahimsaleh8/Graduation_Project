"use client";

import { useState } from "react";

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

const JOB_TYPES = ["Full-time", "Part-time", "Contract"];

const WORK_TYPES = ["Remote", "On-site", "Hybrid"];

type Filters = {
  jobTypes: string[];
  workType: string[];
  minExperience: string;
  maxExperience: string;
};

export default function JobFilteration() {
  const [filters, setFilters] = useState<Filters>({
    jobTypes: [],
    workType: [],
    minExperience: "",
    maxExperience: "",
  });

  // Toggle checkbox filters
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

  // Clear all filters
  function clearFilters() {
    const clearedFilters = {
      jobTypes: [],
      workType: [],
      minExperience: "",
      maxExperience: "",
    };

    setFilters(clearedFilters);
  }

  const totalFilters =
    filters.jobTypes.length +
    filters.workType.length +
    (filters.minExperience ? 1 : 0) +
    (filters.maxExperience ? 1 : 0);

  return (
    <div
      className="
      md:max-w-80
      w-full
      h-fit
      bg-white
      border
      border-border-color
      rounded-2xl
      shadow-sm
      p-5
      space-y-5
    ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-lg">Filters</p>

          {totalFilters > 0 && (
            <p className="text-sm text-low-color">
              {totalFilters} active filters
            </p>
          )}
        </div>

        {totalFilters > 0 && (
          <button
            onClick={clearFilters}
            className="
              text-sm
              text-main-color
              hover:underline
            ">
            Clear
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
            {JOB_TYPES.map((type) => (
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
            {WORK_TYPES.map((type) => (
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
