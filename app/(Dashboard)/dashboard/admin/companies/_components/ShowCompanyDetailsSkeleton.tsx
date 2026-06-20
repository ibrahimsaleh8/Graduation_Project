"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ShowCompanyDetailsSkeleton() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-4">
      {/* Top */}
      <div>
        {/* Wide Image Cover Skeleton */}
        <Skeleton className="w-full h-40 rounded-none" />
        
        {/* Company Logo Skeleton */}
        <Skeleton className="size-20 -mt-10 ml-3 rounded-full border-4 border-white" />
      </div>

      <div className="px-4 space-y-4">
        {/* Title & Badges */}
        <div className="space-y-3">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <Skeleton className="h-6 w-48" />

            <div className="ml-auto flex items-center gap-2">
              {/* Status Badge Skeleton */}
              <Skeleton className="h-7 w-20 rounded-full" />
              {/* Subscription Badge Skeleton */}
              <Skeleton className="h-7 w-24 rounded-md" />
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2 mt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>

        {/* Details Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full p-3 bg-input-bg rounded-md border space-y-2">
              <div className="flex items-center gap-1 text-sm font-medium">
                <Skeleton className="size-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="space-y-3">
          <p className="font-medium text-sm">Statistics</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-input-bg border rounded-md p-3 text-center flex flex-col items-center gap-2">
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-3.5 w-24" />
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
