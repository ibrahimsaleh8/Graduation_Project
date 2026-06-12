"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  ComputerVideoCallIcon,
  File02Icon,
  Mail01Icon,
  Note05Icon,
  UserCircleIcon,
  Video01Icon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import { InterviewDetailsResponse } from "./InterviewDetailsSheetBody";
import InterviewStatusBadge from "../../job-posts/[id]/_components/InterviewStatusBadge";
import { formatTime } from "@/lib/InterviewDateFormater";
import CopyButton from "./CopyButton";
type Props = {
  interviewDetails: InterviewDetailsResponse;
};

export default function ShowInterviewDetails({ interviewDetails }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 border-t py-4 px-2 pr-3 w-full overflow-y-auto">
      {/* User Data */}
      <div className="flex flex-col text-center w-full items-center gap-3 relative">
        <div className="absolute left-2 -top-1">
          <InterviewStatusBadge status={interviewDetails.interviewStatus} />
        </div>

        <div className="size-20 rounded-full bg-input-bg">
          <Image
            src={interviewDetails.imageUrl}
            width={100}
            height={100}
            alt={interviewDetails.applicantName}
            className="rounded-full w-full object-cover"
          />
        </div>

        <div className="text-lg space-y-px">
          <p className="font-medium underline">
            {interviewDetails.applicantName}
          </p>
          <p className="text-sm">{interviewDetails.positionTitle}</p>

          <div className="flex items-center justify-center gap-6 flex-wrap mt-2">
            <p className="text-black/70 text-sm flex items-center gap-1 line-clamp-1">
              <HugeiconsIcon
                icon={Mail01Icon}
                className="size-4"
                strokeWidth={2}
              />
              <span className="max-w-40 md:max-w-50 text-ellipsis overflow-clip">
                {interviewDetails.email}
              </span>
            </p>

            <Link
              href={interviewDetails.resumePath}
              target="_blank"
              className="text-sm flex items-center gap-1 px-3 py-1.5 bg-main-color hover:opacity-85 duration-300 hover:underline text-white rounded-sm">
              <HugeiconsIcon
                icon={File02Icon}
                className="size-4"
                strokeWidth={2}
              />
              Show User CV
            </Link>
          </div>
        </div>
      </div>

      {/* Interview Details */}
      <div className="space-y-2">
        <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
            <HugeiconsIcon
              icon={Calendar02Icon}
              className="size-4"
              strokeWidth={2}
            />
            Date & Time:
          </p>
          <p className="font-medium">{interviewDetails.interviewDate}</p>
          <p className="font-medium">
            {formatTime(interviewDetails.startTime)} -{" "}
            {formatTime(interviewDetails.endTime)}{" "}
            <span className="text-xs">(GMT)</span>
          </p>
        </div>

        <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
            <HugeiconsIcon
              icon={UserCircleIcon}
              className="size-4"
              strokeWidth={2}
            />
            Interviewer
          </p>
          <p className="line-clamp-1 font-medium">
            {interviewDetails.interviewerName}
          </p>
          <p>{interviewDetails.interviewType}</p>
        </div>

        <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
            <HugeiconsIcon
              icon={Video01Icon}
              className="size-4"
              strokeWidth={2}
            />
            Interview Link:
          </p>
          <p className="line-clamp-1 max-w-60 truncate">
            {interviewDetails.interviewLink}
          </p>

          <div className="flex items-center gap-3 flex-wrap mt-3">
            <a
              href={interviewDetails.interviewLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-1.5 text-sm bg-purple-700 hover:bg-purple-900 duration-300 text-white rounded-sm">
              <HugeiconsIcon
                icon={ComputerVideoCallIcon}
                className="size-4"
                strokeWidth={2}
              />
              Join Meet
            </a>

            <CopyButton interviewLink={interviewDetails.interviewLink} />
          </div>
        </div>

        {interviewDetails.notes && (
          <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
            <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
              <HugeiconsIcon
                icon={Note05Icon}
                className="size-4"
                strokeWidth={2}
              />
              Interview Notes
            </p>
            <p className="text-sm">{interviewDetails.notes}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
