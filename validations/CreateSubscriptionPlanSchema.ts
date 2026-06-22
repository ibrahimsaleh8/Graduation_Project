import { z } from "zod";

export const createSubscriptionPlanSchema = z
  .object({
    planName: z
      .string()
      .min(3, "Plan name must be at least 3 characters")
      .max(50, "Plan name must not exceed 50 characters"),

    shortDescription: z
      .string()
      .min(5, "Description must be at least 10 characters")
      .max(500, "Description must not exceed 300 characters"),

    monthlyPrice: z.number().min(0, "Monthly price cannot be negative"),
    yearlyPrice: z.number().min(0, "Yearly price cannot be negative"),

    maxJobPosts: z.number().min(1, "Max job posts must be at least 1"),

    featuredJobPosts: z
      .number()
      .min(0, "Featured job posts cannot be negative"),

    aiToolsAccess: z.boolean({
      error: "Ai Tools Access Feature is required",
    }),

    prioritySupport: z.boolean({
      error: "Priority Support Feature is required",
    }),

    candidateSearch: z.boolean({
      error: "Candidate Search Feature is required",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.yearlyPrice <= data.monthlyPrice) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["yearlyPrice"],
        message: "Yearly price must be greater than monthly price",
      });
    }

    if (data.featuredJobPosts > data.maxJobPosts) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["featuredJobPosts"],
        message:
          "Featured job posts must be less than or equal to max job posts",
      });
    }
  });

export type CreateSubscriptionPlanSchemaType = z.infer<
  typeof createSubscriptionPlanSchema
>;
