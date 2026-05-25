import { Skeleton } from "@/components/ui/skeleton";

export default function AppliedJobsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <div className="space-y-2">
          <Skeleton className="h-7 w-40 rounded-md" />
          <Skeleton className="h-4 w-72 rounded-md" />
        </div>

        <Skeleton className="h-10 w-40 rounded-full" />
      </div>

      {/* Filteration */}
      <div className="flex items-center gap-3 md:flex-row flex-col">
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        <div className="w-full p-5 bg-white rounded-2xl border flex items-center gap-4 justify-between flex-wrap">
          {/* Left */}
          <div className="flex items-start gap-4 flex-wrap">
            {/* Company Logo */}
            <Skeleton className="size-14 rounded-2xl" />

            {/* Text */}
            <div className="space-y-3">
              {/* Job Title */}
              <Skeleton className="h-7 w-56 rounded-md" />

              {/* Company + Location */}
              <div className="flex items-center gap-3 flex-wrap">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-4 w-32 rounded-md" />
              </div>

              {/* Job Types */}
              <div className="flex items-center gap-3 flex-wrap mt-3">
                <Skeleton className="h-7 w-20 rounded-md" />
                <Skeleton className="h-7 w-20 rounded-md" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 md:items-end items-start">
            <Skeleton className="h-7 w-24 rounded-md" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-4 w-32 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
