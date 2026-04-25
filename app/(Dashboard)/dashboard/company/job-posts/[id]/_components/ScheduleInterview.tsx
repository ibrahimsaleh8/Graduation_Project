"use client";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Calendar02Icon } from "@hugeicons/core-free-icons";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  scheduleInterviewSchema,
  scheduleInterviewType,
} from "@/validations/ScheduleInterviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  setShowDetails: Dispatch<SetStateAction<boolean>>;
};

export default function ScheduleInterview({ setShowDetails }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<scheduleInterviewType>({
    resolver: zodResolver(scheduleInterviewSchema),
    defaultValues: {
      date: new Date(),
      startTime: "10:30:00",
      endTime: "11:30:00",
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedDate = watch("date");

  const onSubmit: SubmitHandler<scheduleInterviewType> = (data) => {
    console.log(data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      {/* Date & Time */}
      <div className="flex items-start gap-3 w-full flex-col md:flex-row">
        {/* Calendar */}
        <div className="space-y-1 w-full md:w-fit">
          <Label>Select Date</Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setValue("date", date!)}
            className="rounded-lg border bg-input-bg md:w-80 w-full"
          />
          {errors.date && (
            <p className="text-red-500 text-xs">{errors.date.message}</p>
          )}
        </div>

        <div className="space-y-4 flex-1 w-full">
          {/* Start Time */}
          <div className="space-y-1">
            <Label>Start Time (GMT+00:00)</Label>
            <Input type="time" step="1" {...register("startTime")} />
            {errors.startTime && (
              <p className="text-red-500 text-xs">{errors.startTime.message}</p>
            )}
          </div>

          {/* End Time */}
          <div className="space-y-1">
            <Label>End Time (GMT+00:00)</Label>
            <Input type="time" step="1" {...register("endTime")} />
            {errors.endTime && (
              <p className="text-red-500 text-xs">{errors.endTime.message}</p>
            )}
          </div>

          <p className="text-xs text-orange-600">
            *(GMT - Greenwich Mean Time)
          </p>

          {/* Notes */}
          <div className="space-y-1">
            <Label>Additional Notes</Label>
            <Textarea
              {...register("notes")}
              placeholder="Add any notes..."
              className="h-35 w-full resize-none bg-input-bg shadow-none placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      {/* Other Fields */}
      <div className="space-y-2">
        {/* Link */}
        <div className="space-y-1">
          <Label>Interview Link</Label>
          <Input
            className="placeholder:text-[0.83rem]"
            placeholder="Interview Link"
            {...register("interviewLink")}
          />
          {errors.interviewLink && (
            <p className="text-red-500 text-xs">
              {errors.interviewLink.message}
            </p>
          )}
        </div>

        {/* Name */}
        <div className="space-y-1">
          <Label>Interviewer Name</Label>
          <Input
            className="placeholder:text-[0.83rem]"
            placeholder="Interviewer Name"
            {...register("interviewerName")}
          />
          {errors.interviewerName && (
            <p className="text-red-500 text-xs">
              {errors.interviewerName.message}
            </p>
          )}
        </div>

        {/* Type */}
        <div className="space-y-1">
          <Label>Interview Type</Label>
          <Input
            className="placeholder:text-[0.83rem]"
            placeholder="Interview Type"
            {...register("interviewType")}
          />
          {errors.interviewType && (
            <p className="text-red-500 text-xs">
              {errors.interviewType.message}
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-4 justify-between">
        <Button
          type="button"
          onClick={() => setShowDetails(true)}
          className="text-xs h-10 bg-black/10 text-black hover:bg-black/80 hover:text-white">
          <HugeiconsIcon icon={ArrowLeft01Icon} />
          Back
        </Button>

        <Button type="submit" className="text-xs h-10 bg-main-color text-white">
          <HugeiconsIcon icon={Calendar02Icon} />
          Schedule Interview
        </Button>
      </div>
    </motion.form>
  );
}
