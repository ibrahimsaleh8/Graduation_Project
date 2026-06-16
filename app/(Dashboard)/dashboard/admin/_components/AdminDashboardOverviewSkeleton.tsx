import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardOverviewSkeleton() {
  return (
    <div className="space-y-6">
      {/* Welcome Title */}
      <Skeleton className="h-9 w-96 max-w-full rounded-md" />

      <div className="flex flex-col gap-5">
        {/* Top Section */}
        <div className="flex flex-col-reverse xl:flex-row gap-4 w-full items-start">
          {/* Left - Chart Area */}
          <div className="flex flex-col gap-5 xl:w-1/2 w-full">
            <div className="bg-transparent h-100">
              {/* Chart Title */}
              <Skeleton className="h-6 w-64 rounded-md" />
              {/* Chart Description */}
              <Skeleton className="h-4 w-96 max-w-full rounded-md mt-2" />
              {/* Chart Body */}
              <div className="h-100 mt-4 flex items-end gap-3 px-2">
                {[40, 65, 50, 70, 35, 55, 60, 45, 72, 38, 58, 48].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <Skeleton
                        className="w-full rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                      <Skeleton className="h-3 w-6 rounded-sm mt-1" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right - Statistics */}
          <div className="xl:w-1/2 w-full flex flex-col gap-4">
            {/* Statistics Header */}
            <div className="w-full flex justify-between items-center gap-5 flex-wrap">
              <Skeleton className="h-8 w-32 rounded-md" />
              <Skeleton className="h-10 w-52 rounded-sm" />
            </div>

            {/* Stat Cards Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Card 1 - Dark variant */}
              <div className="w-full p-5 gap-4 rounded-md border flex flex-col bg-[#1E293B]">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-28 bg-white/20 rounded-md" />
                  <Skeleton className="size-12 bg-white/20 rounded-xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-12 w-20 bg-white/20 rounded-md" />
                  <Skeleton className="h-4 w-48 bg-white/20 rounded-md mt-4" />
                </div>
              </div>

              {/* Cards 2-4 - Light variants */}
              {[124, 543, 53].map((height, i) => (
                <div
                  key={i}
                  className="w-full p-5 gap-4 rounded-md border flex flex-col bg-white"
                >
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-32 rounded-md" />
                    <Skeleton className="size-12 rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-12 w-16 rounded-md" />
                    <Skeleton className="h-4 w-52 max-w-full rounded-md mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row gap-6 w-full items-start">
          {/* Latest Job Posts Table */}
          <div className="xl:mt-11 md:mt-30 mt-27 xl:w-1/2 w-full space-y-3">
            <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
              <Skeleton className="h-5 w-36 rounded-md" />
              <Skeleton className="h-5 w-20 rounded-md" />
            </div>

            {/* Table Skeleton */}
            <div className="rounded-md overflow-hidden">
              {/* Table Header */}
              <div className="bg-main-dark flex items-center py-4 px-4 gap-4">
                <Skeleton className="h-4 w-6 bg-white/20 rounded-sm" />
                <Skeleton className="h-4 w-24 bg-white/20 rounded-sm flex-1" />
                <Skeleton className="h-4 w-32 bg-white/20 rounded-sm" />
                <Skeleton className="h-4 w-20 bg-white/20 rounded-sm" />
              </div>

              {/* Table Rows */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center py-4 px-4 gap-4 border-b"
                >
                  <Skeleton className="h-4 w-6 rounded-sm" />
                  <Skeleton className="h-4 w-40 rounded-sm flex-1" />
                  <Skeleton className="h-4 w-12 rounded-sm" />
                  <Skeleton className="h-4 w-24 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="lg:mt-11 mt-5 xl:w-1/2 w-full space-y-3">
            <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
              <Skeleton className="h-5 w-40 rounded-md" />
              <Skeleton className="h-5 w-20 rounded-md" />
            </div>

            {/* Pending Approval Cards */}
            <div className="space-y-2.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex md:items-center md:flex-row flex-col justify-between gap-5 pb-3 md:pb-1 border-b px-2"
                >
                  <div className="flex items-center flex-col md:flex-row gap-4">
                    {/* Logo circle */}
                    <Skeleton className="size-14 rounded-full" />
                    <div className="text-center md:text-left space-y-2">
                      <Skeleton className="h-4 w-36 rounded-md" />
                      <Skeleton className="h-3 w-24 rounded-md" />
                    </div>
                  </div>
                  <Skeleton className="h-9 w-20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
