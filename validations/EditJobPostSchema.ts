import { z } from "zod";

export const editJobPostSchema = z
  .object({
    jobTitle: z
      .string()
      .min(3, "Job title must be at least 3 characters")
      .max(100, "Job title is too long"),

    jobCategory: z.string().min(1, "Job category is required"),

    location: z.string().min(1, "Location is required"),
    isActive: z.boolean({
      error: "Job status is required",
    }),

    employmentType: z
      .array(z.string())
      .min(1, "Select at least one employment type"),

    workApproach: z
      .array(z.string())
      .min(1, "Select at least one work approach"),

    salaryMin: z
      .number({
        error: "Minimum salary is required",
      })
      .min(0, "Minimum salary must be >= 0"),

    salaryMax: z
      .number({
        error: "Maximum salary is required",
      })
      .min(0, "Maximum salary must be >= 0"),

    jobDescription: z
      .string()
      .min(20, "Job description must be at least 20 characters"),

    responsibilities: z
      .string()
      .min(20, "Responsibilities must be at least 20 characters"),

    skills: z.array(z.string().min(1)).min(1, "Add at least one skill"),
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
  })
  .refine((data) => data.maxYearsExperience >= data.minYearsExperience, {
    message:
      "Max years of experience must be greater than or equal to min years of experience",
    path: ["maxYearsExperience"],
  })
  .refine((data) => data.salaryMin <= data.salaryMax, {
    message: "Minimum salary must be less than or equal to maximum salary",
    path: ["salaryMin"],
  });

export type editJobPostDataType = z.infer<typeof editJobPostSchema>;
