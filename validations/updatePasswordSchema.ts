import { z } from "zod";

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),

    newPassword: z
      .string()
      .min(8, { message: "Min chars for password is 6" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
        message:
          "Password must include uppercase, lowercase, number and special character",
      }),

    repeatNewPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "Passwords do not match",
    path: ["repeatNewPassword"],
  });

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
