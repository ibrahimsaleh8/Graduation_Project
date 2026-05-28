import { Skeleton } from "@/components/ui/skeleton";

export default function EmployeeInterviewsLoadingSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Stats */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-5 border rounded-md space-y-3 bg-white">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-10 rounded-xl" />
            </div>

            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-3 w-32" />
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Skeleton className="h-11 w-80" />
        <Skeleton className="h-5 w-48" />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-full rounded-md border border-border-color bg-white p-5 space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-black/5 pb-4">
              {/* Company + Role */}
              <div className="flex items-center gap-4">
                <Skeleton className="size-12 rounded-xl" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </div>

              {/* Status */}
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            {/* Body */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  {/* Icon */}
                  <Skeleton className="size-8 rounded-lg" />

                  {/* Text */}
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}

              {/* Notes skeleton (optional block space) */}
              <div className="flex items-center gap-2">
                <Skeleton className="size-8 rounded-lg" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-black/5 pt-3">
              <Skeleton className="h-9 w-28 rounded-md" />
              <Skeleton className="h-9 w-32 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
