"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function ShowJobDetailsSkeleton() {
  return (
    <div className="space-y-3 container mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center sm:text-sm text-xs gap-1 sm:pl-2">
        {/* Dashboard */}
        <Skeleton className="h-4 w-20" />

        {/* Arrow */}
        <Skeleton className="h-3.5 w-3.5 rounded-sm" />

        {/* Job Posts */}
        <Skeleton className="h-4 w-24" />

        {/* Arrow */}
        <Skeleton className="h-3.5 w-3.5 rounded-sm" />

        {/* Job Title */}
        <Skeleton className="h-4 w-32 md:w-60" />
      </div>

      {/* Top */}
      <div className="flex items-center gap-5 flex-wrap w-full justify-between bg-white md:p-10 p-5 overflow-hidden rounded-md border shadow">
        <div className="flex md:items-center flex-col md:flex-row items-start gap-3 w-full flex-wrap ">
          <div className="flex-1 md:w-fit w-full">
            <div className="mb-3 flex items-center gap-2 flex-wrap">
              <Skeleton className="h-8 md:h-10 md:w-120 w-full" />
              <Skeleton className="h-8 md:h-10 md:w-16 w-full" />
            </div>
            <div className="flex items-center gap-5 md:mt-3 mt-2 flex-wrap">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-6 w-32" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-32" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6 flex-wrap justify-between">
        <Skeleton className="h-20 rounded-md" />
        <Skeleton className="h-20 rounded-md" />
        <Skeleton className="h-20 rounded-md" />
      </div>

      {/* Bottom */}
      <div>
        <div className="flex gap-4 items-center flex-wrap mb-4 mt-8 bg-white p-4 sm:w-fit w-full">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
        </div>
        <div className="bg-white p-6 rounded-md border shadow">
          <div className="space-y-3">
            {/* Desc */}
            <div>
              <Skeleton className="h-4 w-30 mb-3" />
              <Skeleton className="h-40 w-full mb-3" />
            </div>
            <div>
              <Skeleton className="h-4 w-30 mb-3" />
              <Skeleton className="h-40 w-full mb-3" />
            </div>
            <div>
              <Skeleton className="h-4 w-30 mb-3" />
              <div className="flex items-center gap-3 flex-wrap">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-8 w-32" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
