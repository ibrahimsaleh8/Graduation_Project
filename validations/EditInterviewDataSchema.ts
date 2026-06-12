import { z } from "zod";

export const editInterviewSchema = z
  .object({
    date: z.string().min(1, "Date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),

    interviewerName: z.string().min(3, "Interviewer name is required"),
    interviewType: z.string().min(2, "Interview type is required"),
    status: z.string({
      error: "Status is required",
    }),
    interviewLink: z.string().url("Invalid URL"),
    notes: z.string().nullable(),
  })
  .refine(
    (data) => {
      const [startHour, startMin] = data.startTime.split(":").map(Number);
      const [endHour, endMin] = data.endTime.split(":").map(Number);

      const start = startHour * 60 + startMin;
      const end = endHour * 60 + endMin;

      return end > start;
    },
    {
      message: "End time must be after start time",
      path: ["endTime"], // 👈 attaches error to endTime field
    },
  );

export type editInterviewFormData = z.infer<typeof editInterviewSchema>;
