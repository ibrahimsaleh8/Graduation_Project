import { z } from "zod";

export const createSubscriptionPlanSchema = z
  .object({
    planName: z
      .string()
      .min(3, "Plan name must be at least 3 characters")
      .max(50, "Plan name must not exceed 50 characters"),

    shortDescription: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(300, "Description must not exceed 300 characters"),

    billingCycle: z.enum(["monthly-yearly", "monthly", "yearly"], {
      error: "Please select a billing cycle",
    }),
    monthlyPrice: z.number().min(0, "Monthly price cannot be negative"),
    yearlyPrice: z.number().min(0, "Yearly price cannot be negative"),
    maxJobPosts: z.number().min(1, "Max job posts must be at least 1"),

    featuredJobPosts: z
      .number()
      .min(0, "Featured job posts cannot be negative"),

    aiToolsAccess: z.boolean({ error: "Ai Tools Access Feature is required " }),
    prioritySupport: z.boolean({
      error: "Priority Support Feature is required ",
    }),

    candidateSearch: z.boolean({
      error: "candidate Search Feature is required ",
    }),
  })
  .superRefine((data, ctx) => {
    // Monthly validation
    if (
      (data.billingCycle === "monthly" ||
        data.billingCycle === "monthly-yearly") &&
      (data.monthlyPrice === undefined || data.monthlyPrice <= 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["monthlyPrice"],
        message: "Monthly price is required",
      });
    }

    // Yearly validation
    if (
      (data.billingCycle === "yearly" ||
        data.billingCycle === "monthly-yearly") &&
      (data.yearlyPrice === undefined || data.yearlyPrice <= 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["yearlyPrice"],
        message: "Yearly price is required",
      });
    }
  });

export type CreateSubscriptionPlanSchemaType = z.infer<
  typeof createSubscriptionPlanSchema
>;
