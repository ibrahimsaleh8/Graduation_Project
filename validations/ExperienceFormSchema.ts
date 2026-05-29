import { z } from "zod";

export const ExperienceFormSchema = z
  .object({
    jobTitle: z
      .string()
      .min(2, "Job title must be at least 2 characters")
      .max(100, "Job title is too long"),

    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters")
      .max(100, "Company name is too long"),

    location: z
      .string()
      .min(2, "Location is required")
      .max(100, "Location is too long"),

    locationType: z.enum(["onsite", "remote", "hybride"], {
      error: "Please select a location type",
    }),

    startDate: z
      .string({
        error: "Start date is required",
      })
      .min(1, "Start date is required"),

    endDate: z
      .string({
        error: "End date is required",
      })
      .min(1, "End date is required"),

    description: z
      .string()
      .min(2, "Description is required")
      .max(1000, "Description is too long"),
  })
  .refine(
    (data) => {
      if (!data.endDate) return true;

      return new Date(data.endDate) >= new Date(data.startDate);
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    },
  );

export type AddExperienceSchemaType = z.infer<typeof ExperienceFormSchema>;
