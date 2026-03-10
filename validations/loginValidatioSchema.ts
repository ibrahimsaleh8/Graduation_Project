import * as z from "zod";
export const loginValidatioSchema = z.object({
  email: z
    .email({ error: "input a valid email" })
    .min(1, { message: "Email is required" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Min chars for password is 6" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        "Password must include uppercase, lowercase, number and special character",
    }),
});

export type loginDataType = z.infer<typeof loginValidatioSchema>;
