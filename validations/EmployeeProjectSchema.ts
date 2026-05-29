import { z } from "zod";

export const projectSchema = z.object({
  projectTitle: z
    .string()
    .min(3, "Project title must be at least 3 characters")
    .max(100, "Project title must be less than 100 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be less than 1000 characters"),

  projectUrl: z
    .string()
    .url("Please enter a valid project URL")
    .optional()
    .or(z.literal("")),

  projectRepo: z
    .string()
    .url("Please enter a valid GitHub repository URL")
    .optional()
    .or(z.literal("")),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
