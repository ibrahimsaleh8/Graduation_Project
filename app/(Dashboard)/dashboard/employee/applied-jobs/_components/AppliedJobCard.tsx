import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import microsoft from "@images/Icons/google.svg";
import Image from "next/image";

export default function AppliedJobCard() {
  return (
    <div className="group bg-white border border-black/5 rounded-2xl p-5 flex flex-col gap-5 shadow-sm">
      {/* Company */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-lg">
            <Image
              src={microsoft}
              alt="google"
              className="w-8 h-8 object-contain"
            />
          </div>

          <div>
            <p className="font-semibold text-sm">Google</p>
            <p className="text-xs text-muted-foreground">Cairo, Egypt</p>
          </div>
        </div>

        {/* Status */}
        <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
          Applied
        </span>
      </div>

      {/* Job Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold leading-tight">
          Frontend Developer (React.js)
        </h3>

        <p className="text-sm font-medium text-muted-foreground">
          $240 – $300 / month
        </p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-medium">
          Part-time
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-medium">
          Remote
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <p className="text-xs text-muted-foreground">
          Applied at
          <span className="ml-1 font-medium text-gray-700">30 May 2026</span>
        </p>
      </div>
    </div>
  );
}
