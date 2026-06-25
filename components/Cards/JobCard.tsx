/* eslint-disable @next/next/no-img-element */
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Bookmark01Icon,
  CheckmarkCircle01Icon,
  Location01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import JobDetailsSheet from "./JobDetailsSheet";
import { formatDate } from "@/lib/FormatDate";
import Image from "next/image";
import companyImage from "@images/company-icon.png";

export type JobsCardDataType = {
  jobId: string;
  companyLogoUrl: string | null;
  companyName: string;
  companyLocation: string;
  jobTitle: string;
  jobDescription: string;
  minSalary: number;
  maxSalary: number;
  jobType: string[];
  timeAgo: string;
  isApplied: boolean;
};
export default function JobCard({
  companyLogoUrl,
  companyName,
  companyLocation,
  jobTitle,
  jobDescription,
  minSalary,
  maxSalary,
  jobType,
  timeAgo,
  isApplied,
  jobId,
  withSimilarJobs,
  token,
}: JobsCardDataType & {
  withSimilarJobs: boolean;
  token: string;
}) {
  return (
    <div className="bg-white w-full rounded-md flex flex-col gap-4 p-5 border border-black/8 hover:shadow-md transition-shadow duration-200 text-black">
      {/* Top: Company info + Bookmark */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 items-center">
          <div className="size-11 rounded-md overflow-hidden border border-black/8 shrink-0 flex items-center justify-center bg-white">
            {companyLogoUrl ? (
              <img
                src={companyLogoUrl}
                alt={companyName}
                width={36}
                height={36}
                className="size-9 object-contain"
              />
            ) : (
              <Image
                src={companyImage}
                alt={companyName}
                width={36}
                height={36}
                className="size-9 object-contain"
              />
            )}
          </div>

          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-sm text-gray-900">
                {companyName}
              </p>
            </div>

            <p className="text-xs text-gray-400 flex items-center gap-0.5 mt-0.5">
              <HugeiconsIcon icon={Location01Icon} className="size-3" />
              {companyLocation}
            </p>
          </div>
        </div>

        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 shrink-0">
          <HugeiconsIcon icon={Bookmark01Icon} className="size-4" />
        </button>
      </div>

      {/* Job Title */}
      <div>
        <p className="font-semibold text-xl text-gray-900 leading-snug">
          {jobTitle}
        </p>
      </div>

      {/* Description */}
      <div
        className="text-xs ProseMirror leading-relaxed line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: jobDescription,
        }}
      />
      {/* Salary + Date */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm font-bold text-gray-900">
          <span className="font-semibold">${minSalary}</span>

          <span className="text-gray-400 font-normal"> – </span>

          <span className="font-semibold">${maxSalary}</span>

          <span className="text-xs text-gray-400 font-normal">/month</span>
        </p>

        <p className="text-xs text-black/80 flex items-center gap-1">
          <HugeiconsIcon icon={Clock01Icon} className="size-3" />
          {formatDate(timeAgo.toString())}
        </p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {jobType.length > 0 &&
          jobType.map((type) => (
            <span
              key={type}
              className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
              {type}
            </span>
          ))}
      </div>

      {/* Bottom */}
      {isApplied ? (
        <div className="flex items-center gap-1.5 pt-1 text-sm text-green-600 font-medium">
          <HugeiconsIcon
            icon={CheckmarkCircle01Icon}
            className="fill-green-600 text-white size-4"
          />
          Applied
        </div>
      ) : (
        <div className="flex flex-col gap-2 pt-1">
          <JobDetailsSheet
            jobDetails={{
              companyLogoUrl,
              companyName,
              companyLocation,
              jobTitle,
              jobDescription,
              minSalary,
              maxSalary,
              jobType,
              timeAgo,
              isApplied,
              jobId,
            }}
            withSimilarJobs={withSimilarJobs}
            token={token}
          />
        </div>
      )}
    </div>
  );
}
