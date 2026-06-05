"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function CompanyProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header (title + description) */}
      <div className="">
        <Skeleton className="h-8 w-3/5 rounded-md" />
        <div className="mt-2">
          <Skeleton className="h-4 w-2/5 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {/* Top */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full items-start">
          {/* Left: CompanyDashboardAnalytics skeleton */}
          <div className="flex flex-col gap-5 lg:w-1/2 w-full">
            <div>
              <Skeleton className="h-6 w-1/2 rounded-md mb-2" />
              <Skeleton className="h-4 w-2/3 rounded-md mb-4" />
              <Skeleton className="h-120 w-full rounded-md" />
            </div>
          </div>

          {/* Right: Statistics cards + create button skeleton */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center gap-5 flex-wrap">
              <Skeleton className="h-8 w-1/3 rounded-md" />
              <div className="w-fit">
                <Skeleton className="h-9 w-36 rounded-md" />
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <Skeleton className="h-45 w-full rounded-md" />
              <Skeleton className="h-45 w-full rounded-md" />
              <Skeleton className="h-45 w-full rounded-md" />
              <Skeleton className="h-45 w-full rounded-md" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
          {/* LatestJobPostes skeleton: table-like */}
          <div className="lg:w-1/2 w-full space-y-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-1/3 rounded-md" />
              <Skeleton className="h-5 w-20 rounded-md" />
            </div>

            <div className="overflow-hidden rounded-md">
              <div className="bg-main-dark p-3">
                <div className="flex gap-4">
                  <Skeleton className="h-5 w-8 rounded-md" />
                  <Skeleton className="h-5 w-3/5 rounded-md" />
                  <Skeleton className="h-5 w-1/5 rounded-md" />
                  <Skeleton className="h-5 w-1/5 rounded-md" />
                </div>
              </div>

              <div className="bg-white">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="p-4 border-b">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-5 w-6 rounded-md" />
                        <Skeleton className="h-5 w-48 rounded-md" />
                      </div>
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-5 w-12 rounded-md" />
                        <Skeleton className="h-5 w-24 rounded-md" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RecentEmployeesApplied skeleton: list of applicant cards */}
          <div className="lg:w-1/2 w-full">
            <Skeleton className="h-6 w-1/3 rounded-md mb-3" />
            <div className="space-y-2.5">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-3 border-b">
                  <div className="flex items-start gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="text-sm">
                      <Skeleton className="h-4 w-36 rounded-md mb-1" />
                      <Skeleton className="h-3 w-48 rounded-md mb-1" />
                      <Skeleton className="h-3 w-28 rounded-md" />
                    </div>
                  </div>

                  <div>
                    <Skeleton className="h-9 w-36 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
