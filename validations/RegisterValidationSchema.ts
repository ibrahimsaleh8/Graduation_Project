import * as z from "zod";
export const userRegisterValidatioSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
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
  location: z
    .string({ message: "Location is required" })
    .min(3, { message: "Location is required" }),
  phoneNumber: z.string({ message: "phone Number is required" }),
});

export const createCompanySchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(150, { message: "Name is too long" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        "Password must include uppercase, lowercase, number and special character",
    }),

  websiteURL: z
    .string()
    .min(1, { message: "Website URL is required" })
    .url({ message: "Invalid URL" }),

  industry: z
    .string()
    .min(1, { message: "Industry is required" })
    .max(100, { message: "Industry value is too long" }),

  headquarterAddress: z
    .string()
    .min(1, { message: "Headquarter address is required" })
    .max(300, { message: "Address is too long" }),
});

export type CreateCompanyInput = z.infer<typeof createCompanySchema>;

export type UserRegisterDataType = z.infer<typeof userRegisterValidatioSchema>;
