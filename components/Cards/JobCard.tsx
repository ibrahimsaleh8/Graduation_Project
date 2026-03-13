import microsoft from "@images/Icons/google.svg";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Bookmark01Icon,
  CheckmarkCircle01Icon,
  Location01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import JobDetailsSheet from "./JobDetailsSheet";

type Props = {
  isApplied: boolean;
};

export default function JobCard({ isApplied }: Props) {
  return (
    <div className="bg-white w-full rounded-2xl flex flex-col gap-4 p-5 border border-black/8 hover:shadow-md transition-shadow duration-200 text-black">
      {/* Top: Company info + Bookmark */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 items-center">
          <div className="size-11 rounded-xl overflow-hidden border border-black/8 shrink-0 flex items-center justify-center bg-white">
            <Image
              src={microsoft}
              alt="google"
              className="size-9 object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-sm text-gray-900">Google</p>
            </div>
            <p className="text-xs text-gray-400 flex items-center gap-0.5 mt-0.5">
              <HugeiconsIcon icon={Location01Icon} className="size-3" />
              Cairo, Egypt (Remote)
            </p>
          </div>
        </div>

        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 flex-shrink-0">
          <HugeiconsIcon icon={Bookmark01Icon} className="size-4" />
        </button>
      </div>

      {/* Job Title */}
      <div>
        <p className="font-semibold text-xl text-gray-900 leading-snug">
          Frontend Developer React.js
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
        Build and maintain high-quality web applications using React.js and
        modern frontend tooling.
      </p>

      {/* Salary + Date */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-900">
          <span className="font-semibold">$240</span>
          <span className="text-gray-400 font-normal"> – </span>
          <span className="font-semibold">$300</span>
          <span className="text-xs text-gray-400 font-normal">/month</span>
        </p>
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <HugeiconsIcon icon={Clock01Icon} className="size-3" />3 days ago
        </p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
          Part-time
        </span>
        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
          Remote
        </span>
        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
          Full-time
        </span>
      </div>

      {/* Bottom: AI Match or Applied */}
      {isApplied ? (
        <div className="flex items-center gap-1.5 pt-1 text-sm text-green-600 font-medium">
          <HugeiconsIcon
            icon={CheckmarkCircle01Icon}
            className="fill-green-600 text-white size-4"
          />
          Applied at 12-3-2026
        </div>
      ) : (
        <div className="flex flex-col gap-2 pt-1">
          <JobDetailsSheet />
        </div>
      )}
    </div>
  );
}
