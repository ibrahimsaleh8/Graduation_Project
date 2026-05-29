import { z } from "zod";

export const profileDataSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be less than 50 characters"),

  jobTitle: z
    .string()
    .max(100, "Job title must be less than 100 characters")
    .optional(),

  location: z.string().min(1, "Location is required"),

  aboutMe: z.string().optional(),
});

export type ProfileDataSchemaType = z.infer<typeof profileDataSchema>;
