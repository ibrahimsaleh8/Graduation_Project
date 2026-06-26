/* eslint-disable @next/next/no-img-element */
"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Bookmark01Icon,
  CheckmarkCircle01Icon,
  Location01Icon,
  Clock01Icon,
  WorkHistoryIcon,
} from "@hugeicons/core-free-icons";
import JobDetailsSheet from "./JobDetailsSheet";
import { formatDate } from "@/lib/FormatDate";
import Image from "next/image";
import companyImage from "@images/company-icon.png";
import { JobSearchDataType } from "@/app/(Main)/jobs/page";
import { useJobsContext } from "@/app/(Main)/jobs/_context/JobsContext";
import { Button } from "../ui/button";

type Props = {
  jobDetails: JobSearchDataType;
  token: string;
};

export default function JobCard({ jobDetails, token }: Props) {
  const {
    companyName,
    companyLogoUrl,
    location,
    title,
    description,
    minSalary,
    maxSalary,
    postedDate,
    jobTypes,
    isApplied,
    workApproaches,
    jobID,
    isSaved: initialIsSaved,
    category,
    maxExperience,
    minExperience,
  } = jobDetails;

  const { isSaved, toggleSaveJob, isPending } = useJobsContext();
  const saved = isSaved(jobID) ?? initialIsSaved;

  return (
    <div className=" w-full rounded-md border border-black/8 hover:shadow-md transition-shadow duration-200 text-black">
      {/* Job Data */}
      <div className="flex flex-col gap-4 p-5 bg-input-bg/50">
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3 items-center">
            <div className="size-11 rounded-md overflow-hidden border border-black/8 shrink-0 flex items-center justify-center bg-white">
              {companyLogoUrl ? (
                <img
                  src={companyLogoUrl}
                  alt={companyName ?? title}
                  width={36}
                  height={36}
                  className="w-full object-cover"
                />
              ) : (
                <Image
                  src={companyImage}
                  alt={companyName ?? title}
                  width={36}
                  height={36}
                  className="w-full object-cover"
                />
              )}
            </div>

            <div>
              <p className="font-semibold text-sm truncate">{companyName}</p>
              <p className="text-xs text-black/80 flex items-center gap-0.5 mt-0.5">
                <HugeiconsIcon icon={Location01Icon} className="size-3" />
                {location}
              </p>
              <p className="text-xs text-black/80 flex items-center gap-0.5 mt-0.5">
                {category}
              </p>
            </div>
          </div>
        </div>

        {/* Job Title */}
        <p className="font-semibold text-xl leading-snug">{title}</p>

        {/* Description */}
        <div
          className="text-xs leading-relaxed line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Salary + Date */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-black/80">
            <span className="font-semibold">${minSalary}</span>
            <span className="font-normal"> – </span>
            <span className="font-semibold">${maxSalary} </span>
            <span className="text-xs font-medium">/month</span>
          </p>

          <p className="text-xs font-medium text-black/80 flex items-center gap-1">
            <HugeiconsIcon icon={Clock01Icon} className="size-3" />
            {formatDate(postedDate)}
          </p>
        </div>

        {/* Experience */}
        <p className="flex items-center gap-1 text-xs text-low-color font-medium">
          <HugeiconsIcon icon={WorkHistoryIcon} className="size-4.5" />
          Experience:{"  "}
          {`${minExperience} Years - ${maxExperience} Years`}
        </p>
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {(jobTypes.length > 0 || workApproaches.length > 0) &&
            [...jobTypes, ...workApproaches].map((type) => (
              <span
                key={type}
                className="px-2.5 py-1 bg-white text-black border rounded-md text-xs font-medium">
                {type}
              </span>
            ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="p-4 flex items-center justify-center gap-3">
        {isApplied ? (
          <p className="flex items-center justify-center gap-1.5 text-sm h-10 rounded-md font-medium w-full text-green-600 ">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-5" />
            Applied
          </p>
        ) : (
          <div className="flex items-center gap-2  w-full">
            <JobDetailsSheet jobId={jobDetails.jobID} token={token} />
            <Button
              disabled={isPending(jobID)}
              onClick={() => toggleSaveJob(jobID, saved)}
              className={`px-8 py-3 rounded-lg transition-colors shrink-0 size-10  border flex items-center justify-center cursor-pointer ${
                saved
                  ? "bg-main-dark text-white hover:bg-main-dark/90"
                  : "hover:bg-gray-100 text-black bg-white hover:text-black"
              }`}>
              <HugeiconsIcon icon={Bookmark01Icon} className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
