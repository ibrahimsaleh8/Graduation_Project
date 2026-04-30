import { z } from "zod";

export const CompanyProfileSettingsSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name is required")
    .max(100, "Company name is too long"),
  founded_year: z
    .number({
      error: "Founded year is required",
    })
    .min(1700, "Founded year must be after 1800")
    .max(new Date().getFullYear(), "Founded year cannot be in the future"),

  bio: z
    .string({
      error: "Bio is required",
    })
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must not exceed 500 characters"),

  country: z
    .string({
      error: "Country is required",
    })
    .min(2, "Please select a valid country"),
  industry: z
    .string({
      error: "industry is required",
    })
    .min(2, "Please select a valid industry"),
  companySize: z
    .string({
      error: "Company Size is required",
    })
    .min(2, "Please select a valid company size"),

  websiteUrl: z
    .string({
      error: "Website Url is required",
    })
    .url("Please enter a valid URL (https://...)")
    .optional()
    .or(z.literal("")),

  companyDescription: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description is too long"),
});

export type CompanyProfileDataType = z.infer<
  typeof CompanyProfileSettingsSchema
>;
