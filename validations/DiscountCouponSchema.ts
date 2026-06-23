import { z } from "zod";

export const discountCouponSchema = z.object({
  couponCode: z
    .string()
    .min(3, "Coupon code must be at least 3 characters")
    .max(20, "Coupon code must be less than 20 characters")
    .regex(/^[A-Za-z0-9]+$/, "Coupon code can only contain letters, numbers"),

  discountValue: z
    .number({
      error: "Discount value must be a number",
    })
    .min(1, "Discount value must be at least 1%")
    .max(100, "Discount value cannot exceed 100%"),

  totalUsageLimit: z
    .number({
      error: "Usage limit must be a number",
    })
    .min(1, "Usage limit must be at least 1"),

  isActive: z.boolean(),
  applicablePlans: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    )
    .min(1, "Select at least one applicable plan"),
});

export type DiscountCouponFormType = z.infer<typeof discountCouponSchema>;
