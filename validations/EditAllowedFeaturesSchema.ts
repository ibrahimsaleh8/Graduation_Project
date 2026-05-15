import { z } from "zod";

export const editAllowedFeaturesSchema = z.object({
  maxJobPosts: z.number().min(1, "Max job posts must be at least 1"),

  featuredJobPosts: z.number().min(0, "Featured job posts cannot be negative"),

  aiToolsAccess: z.boolean({ error: "Ai Tools Access Feature is required " }),
  prioritySupport: z.boolean({
    error: "Priority Support Feature is required ",
  }),

  candidateSearch: z.boolean({
    error: "candidate Search Feature is required ",
  }),
});

export type editAllowedFeaturesSchemaType = z.infer<
  typeof editAllowedFeaturesSchema
>;
