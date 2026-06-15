import { z } from "zod";

export const CompanySocialsSettingsSchema = z.object({
  phone: z
    .string()
    .max(20, "Phone number must be less than 20 characters")
    .nullable(),

  address: z
    .string()
    .max(255, "Address must be less than 255 characters")
    .nullable(),

  linkedin: z.string().url("Please enter a valid LinkedIn URL").nullable(),

  instagram: z.string().url("Please enter a valid Instagram URL").nullable(),

  facebook: z.string().url("Please enter a valid Facebook URL").nullable(),

  twitter: z.string().url("Please enter a valid Twitter (X) URL").nullable(),

  websiteUrl: z.string().url("Please enter a valid website URL").nullable(),
});

export type CompanyContactFormData = z.infer<
  typeof CompanySocialsSettingsSchema
>;
