import { Skeleton } from "@/components/ui/skeleton";

export default function ShowAllJobsAdminDashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-32 rounded-md" />
        <Skeleton className="h-4 w-64 rounded-md" />
      </div>

      {/* Stats Cards Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {/* First card — dark bg */}
        <div className="w-full p-4 gap-3 rounded-md bg-[#1b1b1b] border flex flex-col">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-24 bg-white/20" />
            <Skeleton className="size-11 rounded-xl bg-white/10" />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="h-9 w-16 bg-white/20" />
            <Skeleton className="h-4 w-36 mt-2 bg-white/15" />
          </div>
        </div>

        {/* Remaining 3 cards — light bg */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-full p-4 gap-3 rounded-md bg-white border flex flex-col"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-28 bg-gray-200" />
              <Skeleton className="size-11 rounded-xl bg-gray-100" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-9 w-14 bg-gray-200" />
              <Skeleton className="h-4 w-40 mt-2 bg-gray-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 md:flex-row flex-col">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-full space-y-1">
            <Skeleton className="h-4 w-14 rounded-md" />
            <Skeleton className="h-11 w-full rounded-md bg-gray-200" />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-md overflow-hidden border">
        {/* Table Header */}
        <div className="bg-[#1b1b1b] px-4 py-4 flex items-center gap-4">
          <Skeleton className="h-4 flex-[2] bg-white/20" />
          <Skeleton className="h-4 flex-1 bg-white/20" />
          <Skeleton className="h-4 flex-1 bg-white/20" />
          <Skeleton className="h-4 flex-1 bg-white/20" />
          <Skeleton className="h-4 flex-1 bg-white/20" />
          <Skeleton className="h-4 flex-1 bg-white/20" />
          <Skeleton className="h-4 w-20 bg-white/20" />
        </div>

        {/* Table Rows */}
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="px-4 py-4 flex items-center gap-4 border-b last:border-b-0"
          >
            {/* Job Title Cell — avatar + two lines */}
            <div className="flex items-center gap-2 flex-[2]">
              <Skeleton className="size-10 rounded-full bg-gray-200 shrink-0" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-4 w-3/4 bg-gray-200" />
                <Skeleton className="h-3 w-1/2 bg-gray-100" />
              </div>
            </div>

            {/* Category */}
            <div className="flex-1">
              <Skeleton className="h-4 w-20 bg-gray-200" />
            </div>

            {/* Type badges */}
            <div className="flex-1 flex gap-1">
              <Skeleton className="h-6 w-16 rounded-md bg-gray-100" />
              <Skeleton className="h-6 w-14 rounded-md bg-gray-100" />
            </div>

            {/* Status badge */}
            <div className="flex-1">
              <Skeleton className="h-6 w-20 rounded-full bg-gray-200" />
            </div>

            {/* Applications */}
            <div className="flex-1">
              <Skeleton className="h-4 w-8 bg-gray-200" />
            </div>

            {/* Posted Date */}
            <div className="flex-1">
              <Skeleton className="h-4 w-24 bg-gray-100" />
            </div>

            {/* Action */}
            <div className="w-20">
              <Skeleton className="h-8 w-16 rounded-md bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
