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

const JOB_TYPES = [
  "Full-time",
  "Freelance",
  "Part-time",
  "Contract",
  "Internship",
];

const EXPERIENCE_LEVELS = [
  "Entry Level",
  "Senior Level",
  "Mid Level",
  "Lead / Manager",
];

const WORK_TYPES = ["Remote", "On-site", "Hybrid"];

type Filters = {
  jobTypes: string[];
  experience: string[];
  workType: string[];
};

export default function JobFilteration() {
  const [filters, setFilters] = useState<Filters>({
    jobTypes: [],
    experience: [],
    workType: [],
  });

  function toggleFilter(field: keyof Filters, value: string) {
    setFilters((prev) => {
      const current = prev[field];

      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      return {
        ...prev,
        [field]: updated,
      };
    });
  }
  return (
    <div className="md:w-72 w-full h-fit pb-6 bg-white border rounded-2xl shadow-sm p-5">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      <Accordion
        type="multiple"
        defaultValue={["job_type", "experience", "work_type"]}
        className="space-y-2">
        {/* Job Type */}
        <AccordionItem value="job_type" className="border-none">
          <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
            Job type
          </AccordionTrigger>

          <AccordionContent className="space-y-2 pt-2">
            {JOB_TYPES.map((type) => (
              <div key={type} className="flex items-center gap-1.5">
                <Checkbox
                  id={type}
                  checked={filters.jobTypes.includes(type)}
                  onCheckedChange={() => toggleFilter("jobTypes", type)}
                  className="w-4.5 h-4.5 flex items-center justify-center border
                  data-[state=checked]:bg-main-color
                  data-[state=checked]:text-white rounded-[3px]">
                  <CheckboxIndicator className="w-3.5 h-3.5" />
                </Checkbox>

                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Experience */}
        <AccordionItem value="experience" className="border-none">
          <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
            Experience
          </AccordionTrigger>

          <AccordionContent className="space-y-2 pt-2">
            {EXPERIENCE_LEVELS.map((type) => (
              <div key={type} className="flex items-center gap-1.5">
                <Checkbox
                  id={type}
                  checked={filters.experience.includes(type)}
                  onCheckedChange={() => toggleFilter("experience", type)}
                  className="w-4.5 h-4.5 flex items-center justify-center border
                  data-[state=checked]:bg-main-color
                  data-[state=checked]:text-white rounded-[3px]">
                  <CheckboxIndicator className="w-3.5 h-3.5" />
                </Checkbox>

                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Work Type */}
        <AccordionItem value="work_type" className="border-none">
          <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
            Work type
          </AccordionTrigger>

          <AccordionContent className="space-y-2 pt-2">
            {WORK_TYPES.map((type) => (
              <div key={type} className="flex items-center gap-1.5">
                <Checkbox
                  id={type}
                  checked={filters.workType.includes(type)}
                  onCheckedChange={() => toggleFilter("workType", type)}
                  className="w-4.5 h-4.5 flex items-center justify-center border
                  data-[state=checked]:bg-main-color
                  data-[state=checked]:text-white rounded-[3px]">
                  <CheckboxIndicator className="w-3.5 h-3.5" />
                </Checkbox>

                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
