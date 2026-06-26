/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { SavedJobType } from "./ShowAllSavedJobs";
import companyImage from "@images/company-icon.png";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  Clock01Icon,
  Location01Icon,
  MoneyBag02Icon,
} from "@hugeicons/core-free-icons";
import UnSaveJobButton from "./UnSaveJobButton";
import Link from "next/link";

type Props = {
  jobData: SavedJobType;
  token: string;
};

export default function SavedJobCard({ jobData, token }: Props) {
  return (
    <div className="bg-white w-full rounded-md flex flex-col gap-4 p-5 border border-black/8 hover:shadow-md transition-shadow duration-200 text-black">
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 items-center">
          <div className="size-11 rounded-full overflow-hidden border border-black/8 shrink-0 flex items-center justify-center bg-white">
            {jobData.companyLogoUrl ? (
              <img
                src={jobData.companyLogoUrl}
                alt={jobData.companyName}
                width={36}
                height={36}
                className="w-full object-cover"
              />
            ) : (
              <Image
                src={companyImage}
                alt={jobData.companyName}
                width={36}
                height={36}
                className="w-full object-cover"
              />
            )}
          </div>

          <div>
            <p className="font-semibold text-sm text-gray-900">
              {jobData.companyName}
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-0.5 mt-0.5">
              <HugeiconsIcon icon={Location01Icon} className="size-3" />
              {jobData.companyLocation}
            </p>
          </div>
        </div>

        <UnSaveJobButton jobId={jobData.jobId} token={token} />
      </div>

      {/* Job Title */}
      <p className="font-semibold text-xl text-gray-900 leading-snug">
        {jobData.jobTitle}
      </p>

      {/* Description */}
      <div
        className="text-xs ProseMirror leading-relaxed line-clamp-2"
        dangerouslySetInnerHTML={{ __html: jobData.jobDescription }}
      />

      {/* Salary + Date */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm font-bold text-gray-900 flex items-center gap-1">
          <HugeiconsIcon icon={MoneyBag02Icon} className="size-4" />
          <span>${jobData.minSalary}</span>
          <span className="text-gray-400 font-normal">–</span>
          <span>${jobData.maxSalary}</span>
          <span className="text-xs text-gray-400 font-normal">/month</span>
        </p>

        <p className="text-xs text-black/80 flex items-center gap-1">
          <HugeiconsIcon icon={Clock01Icon} className="size-3" />
          {new Date(jobData.timeAgo).toLocaleDateString()}
        </p>
      </div>

      {/* Tags */}
      {jobData.jobType.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {jobData.jobType.map((type) => (
            <span
              key={type}
              className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
              {type}
            </span>
          ))}
        </div>
      )}

      {/* Bottom */}
      {jobData.isApplied ? (
        <div className="flex items-center gap-1.5 pt-1 text-sm text-green-600 font-medium">
          <HugeiconsIcon
            icon={CheckmarkCircle01Icon}
            className="fill-green-600 text-white size-4"
          />
          Applied
        </div>
      ) : (
        <Link
          href={`/jobs/${jobData.jobId}`}
          className="w-full px-6 py-2 bg-main-color text-white rounded-md hover:bg-main-color/90 duration-300 text-sm flex items-center justify-center mt-auto">
          Apply
        </Link>
      )}
    </div>
  );
}
