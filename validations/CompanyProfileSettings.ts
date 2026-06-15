import { z } from "zod";

export const CompanyProfileSettingsSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name is required")
    .max(100, "Company name is too long"),

  founded_year: z
    .number()
    .min(1700, "Founded year must be after 1800")
    .max(new Date().getFullYear(), "Founded year cannot be in the future")
    .nullable(),

  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must not exceed 500 characters")
    .nullable(),

  country: z
    .string({
      error: "Country is required",
    })
    .min(2, "Please select a valid country"),
  industry: z.string().min(2, "Please select a valid industry"),
  companySize: z
    .string()
    .min(2, "Please select a valid company size")
    .nullable(),

  companyDescription: z
    .string()
    .max(1000, "Description is too long")
    .nullable(),
});

export type CompanyProfileDataType = z.infer<
  typeof CompanyProfileSettingsSchema
>;
