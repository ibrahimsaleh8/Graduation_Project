import { z } from "zod";

export const jobPostBasicInfoSchema = z
  .object({
    jobTitle: z
      .string()
      .min(3, "Job title must be at least 3 characters")
      .max(100, "Job title is too long"),

    jobCategory: z
      .string({
        error: "Job category is required",
      })
      .min(1, "Please select a job category"),

    location: z
      .string({
        error: "Location is required",
      })
      .min(1, "Please select a location"),

    employmentType: z
      .array(z.string(), {
        error: "Select at least one employment type",
      })
      .min(1, "Select at least one employment type"),

    workApproach: z
      .array(z.string(), {
        error: "Select at least one work approach",
      })
      .min(1, "Select at least one work approach"),

    salaryMin: z
      .number({
        error: "Minimum salary is required",
      })
      .gt(0, "Minimum salary must be greater than 0"),

    salaryMax: z
      .number({
        error: "Maximum salary is required",
      })
      .gt(0, "Maximum salary must be greater than 0"),

    minYearsExperience: z
      .number({
        error: "Minimum years of experience is required",
      })
      .min(0, "Minimum years of experience must be >= 0"),

    maxYearsExperience: z
      .number({
        error: "Maximum years of experience is required",
      })
      .min(0, "Maximum years of experience must be >= 0"),

    isFeatured: z.boolean(),
  })
  .refine((data) => data.salaryMax >= data.salaryMin, {
    message: "Max salary must be greater than or equal to min salary",
    path: ["salaryMax"],
  })
  .refine((data) => data.maxYearsExperience >= data.minYearsExperience, {
    message:
      "Max years of experience must be greater than or equal to min years of experience",
    path: ["maxYearsExperience"],
  });

export type JobPostBasicInfoType = z.infer<typeof jobPostBasicInfoSchema>;

export const jobDetailsSchema = z.object({
  jobDescription: z
    .string()
    .min(20, "Job description must be at least 20 characters")
    .max(2000, "Job description is too long"),

  responsibilities: z
    .string()
    .min(20, "Responsibilities must be at least 20 characters")
    .max(2000, "Responsibilities are too long"),

  skills: z
    .array(z.string().min(1), {
      error: "Add at least one skill",
    })
    .min(1, "Add at least one skill"),
});

export type JobDetailsType = z.infer<typeof jobDetailsSchema>;
