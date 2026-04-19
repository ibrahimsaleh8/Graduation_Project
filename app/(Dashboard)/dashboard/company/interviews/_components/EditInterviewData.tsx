"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  editInterviewFormData,
  editInterviewSchema,
} from "@/validations/EditInterviewDataSchema";
import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Dispatch, SetStateAction } from "react";

function ErrorValidationMessage({ message }: { message: string }) {
  return <p className="text-red-500 text-xs">{message}</p>;
}

type InterviewStatusType = "pending" | "cancelled" | "completed";
type Props = {
  setShowInterviewData: Dispatch<SetStateAction<boolean>>;
};

export default function EditInterviewData({ setShowInterviewData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<editInterviewFormData>({
    resolver: zodResolver(editInterviewSchema),
    defaultValues: {
      date: "2026-05-24",
      startTime: "10:30",
      endTime: "11:30",
      interviewerName: "Sarah Jenkins",
      interviewType: "Technical Interview",
      meetingLink: "https://zoom.us/j/827391283",
      status: "pending",
    },
  });

  const onSubmit = (data: editInterviewFormData) => {
    console.log(data);
    setShowInterviewData(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="p-4 space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Date */}
        <div className="space-y-1 w-full">
          <Label htmlFor="status">Status</Label>
          <NativeSelect
            className="w-full! border border-black/10 flex"
            id="status"
            defaultValue={getValues("status")}
            onChange={(e) =>
              setValue("status", e.target.value as InterviewStatusType)
            }>
            <NativeSelectOption value="pending">Pending</NativeSelectOption>
            <NativeSelectOption value="completed">Completed</NativeSelectOption>
            <NativeSelectOption value="rejected">Rejected</NativeSelectOption>
          </NativeSelect>

          {errors.status && (
            <ErrorValidationMessage message={errors.status.message as string} />
          )}
        </div>

        {/* Date */}
        <div className="space-y-1">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            className="w-full bg-white border-border-color"
            {...register("date")}
          />
          {errors.date && (
            <ErrorValidationMessage message={errors.date.message as string} />
          )}
        </div>

        {/* Start Time */}
        <div className="space-y-1">
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            id="startTime"
            type="time"
            className="w-full bg-white border-border-color"
            {...register("startTime")}
          />
          {errors.startTime && (
            <ErrorValidationMessage
              message={errors.startTime.message as string}
            />
          )}
        </div>

        {/* End Time */}
        <div className="space-y-1">
          <Label htmlFor="endTime">End Time</Label>
          <Input
            id="endTime"
            type="time"
            className="w-full bg-white border-border-color"
            {...register("endTime")}
          />
          {errors.endTime && (
            <ErrorValidationMessage
              message={errors.endTime.message as string}
            />
          )}
        </div>

        {/* Interviewer */}
        <div className="space-y-1">
          <Label htmlFor="interviewerName">Interviewer Name</Label>
          <Input
            id="interviewerName"
            type="text"
            placeholder="Interviewer Name"
            className="w-full bg-white border-border-color"
            {...register("interviewerName")}
          />
          {errors.interviewerName && (
            <ErrorValidationMessage
              message={errors.interviewerName.message as string}
            />
          )}
        </div>

        {/* Interview Type */}
        <div className="space-y-1">
          <Label htmlFor="interviewType">Interview Type</Label>
          <Input
            id="interviewType"
            type="text"
            placeholder="Interview Type"
            className="w-full bg-white border-border-color"
            {...register("interviewType")}
          />
          {errors.interviewType && (
            <ErrorValidationMessage
              message={errors.interviewType.message as string}
            />
          )}
        </div>

        {/* Meeting Link */}
        <div className="space-y-1">
          <Label htmlFor="meetingLink">Meeting Link</Label>
          <Input
            id="meetingLink"
            type="text"
            placeholder="Meeting Link"
            className="w-full bg-white border-border-color"
            {...register("meetingLink")}
          />
          {errors.meetingLink && (
            <ErrorValidationMessage
              message={errors.meetingLink.message as string}
            />
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-fit bg-black hover:bg-black/80 text-xs h-9 text-white py-2 rounded-md hover:opacity-90 transition">
          Save Changes
        </Button>
      </form>
    </motion.div>
  );
}
