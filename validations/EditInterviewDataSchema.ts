import { z } from "zod";

export const editInterviewSchema = z
  .object({
    candidateName: z.string().min(3, "Name must be at least 3 characters"),
    position: z.string().min(2, "Position is required"),
    email: z.string().email("Invalid email"),

    date: z.string().min(1, "Date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),

    interviewerName: z.string().min(3, "Interviewer name is required"),
    interviewType: z.string().min(2, "Interview type is required"),
    status: z.enum(["pending", "cancelled", "completed"], {
      message: "Invalid interview status",
    }),
    meetingLink: z.string().url("Invalid URL"),
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
