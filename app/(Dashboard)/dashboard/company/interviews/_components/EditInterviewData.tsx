"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Dispatch, SetStateAction } from "react";
import { InterviewDetailsResponse } from "./InterviewDetailsSheetBody";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Calendar } from "@/components/ui/calendar";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useEditInterview } from "./useEditInterview";

type Props = {
  setShowInterviewData: Dispatch<SetStateAction<boolean>>;
  interviewDetails: InterviewDetailsResponse;
  token: string;
  jobId: string;
};

export default function EditInterviewData({
  setShowInterviewData,
  interviewDetails,
  token,
  jobId,
}: Props) {
  const {
    onSubmit,
    selectedDate,
    isPending,
    setValue,
    register,
    handleSubmit,
    errors,
    getValues,
  } = useEditInterview({
    setShowInterviewData,
    interviewDetails,
    token,
    jobId,
  });

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
            className="w-full! border border-black/10 h-11 cursor-pointer flex"
            id="status"
            defaultValue={getValues("status")}
            onChange={(e) => setValue("status", e.target.value)}>
            <NativeSelectOption value="Upcoming" disabled>
              Upcoming
            </NativeSelectOption>
            <NativeSelectOption value="Completed">Completed</NativeSelectOption>
            <NativeSelectOption value="Cancelled">Cancelled</NativeSelectOption>
          </NativeSelect>

          {errors.status && (
            <ErrorValidationMessage message={errors.status.message as string} />
          )}
        </div>

        <div className="space-y-1 w-full">
          <Label>Select Date</Label>
          <Calendar
            mode="single"
            selected={new Date(selectedDate)}
            onSelect={(date) => setValue("date", date?.toString() ?? "")}
            className="rounded-lg border bg-input-bg  w-full h-fit"
          />
          {errors.date && (
            <p className="text-red-500 text-xs">{errors.date.message}</p>
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
            {...register("interviewLink")}
          />
          {errors.interviewLink && (
            <ErrorValidationMessage
              message={errors.interviewLink.message as string}
            />
          )}
        </div>

        {/* Notes */}
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            placeholder="Notes.."
            className="w-full bg-white border-border-color h-30"
            {...register("notes")}
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-40 bg-black hover:bg-black/80 text-xs h-10 text-white py-2 rounded-md hover:opacity-90 transition">
          {isPending ? <Spinner /> : "Save Changes"}
        </Button>
      </form>
    </motion.div>
  );
}
