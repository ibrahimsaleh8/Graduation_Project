import { z } from "zod";

export const scheduleInterviewSchema = z
  .object({
    date: z.date({
      error: "Date is required",
    }),

    startTime: z
      .string()
      .min(1, "Start time is required")
      .regex(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, "Invalid time format"),

    endTime: z
      .string()
      .min(1, "End time is required")
      .regex(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, "Invalid time format"),

    notes: z
      .string()
      .max(500, "Notes must be less than 500 characters")
      .optional()
      .or(z.literal("")),

    interviewLink: z
      .string()
      .min(1, "Interview link is required")
      .url("Must be a valid URL (include https://)"),

    interviewerName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name is too long"),

    interviewType: z
      .string()
      .min(2, "Interview type is required")
      .max(100, "Too long"),
  })
  .refine(
    (data) => {
      // Compare times
      const start = new Date(`1970-01-01T${data.startTime}`);
      const end = new Date(`1970-01-01T${data.endTime}`);
      return end > start;
    },
    {
      message: "End time must be after start time",
      path: ["endTime"],
    },
  );

export type scheduleInterviewType = z.infer<typeof scheduleInterviewSchema>;
