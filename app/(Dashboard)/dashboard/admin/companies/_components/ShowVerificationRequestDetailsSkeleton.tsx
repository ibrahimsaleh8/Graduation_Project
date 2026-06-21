"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ShowVerificationRequestDetailsSkeleton() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-4">
      {/* Top */}
      <div>
        {/* Wide Image Cover Skeleton */}
        <div className="w-full h-40 bg-input-bg flex items-center justify-center overflow-hidden">
          <Skeleton className="w-full h-full rounded-none" />
        </div>

        {/* Company Logo Skeleton */}
        <div className="size-20 bg-input-bg flex items-center justify-center border -mt-10 ml-3 rounded-full overflow-hidden">
          <Skeleton className="w-full h-full rounded-full" />
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Title & Desc */}
        <div className="space-y-4">
          <div className="flex items-center flex-wrap justify-between gap-4">
            {/* Company Name */}
            <Skeleton className="h-6 w-48" />

            {/* Status Badge */}
            <Skeleton className="h-7 w-24 rounded-full" />
          </div>

          {/* Show Company Profile Link */}
          <Skeleton className="h-8 w-40 rounded-md" />

          {/* Company Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>

        {/* Notes Skeleton */}
        <div className="text-sm py-2 space-y-3 border-y">
          <div className="flex items-center gap-1 font-medium">
            <Skeleton className="size-4 rounded-sm" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-4 w-3/4 pl-3" />
        </div>

        {/* Verification Documents Header & List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-4 text-sm">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-16" />
          </div>

          <div className="space-y-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="w-full p-3 bg-input-bg rounded-md flex items-center gap-3 pr-5">
                {/* File Icon */}
                <Skeleton className="size-10 rounded-md shrink-0" />

                {/* File Details */}
                <div className="text-xs space-y-1.5 flex-1 min-w-0">
                  <Skeleton className="h-3.5 w-1/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>

                {/* View Icon Link */}
                <Skeleton className="size-8 rounded-sm shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Actions Footer */}
      <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
        <div className="w-full flex items-center gap-4">
          <Skeleton className="h-10 flex-1 rounded-md" />
          <Skeleton className="h-10 flex-1 rounded-md" />
        </div>

        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
