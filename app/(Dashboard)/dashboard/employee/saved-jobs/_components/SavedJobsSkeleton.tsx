import { Skeleton } from "@/components/ui/skeleton";

export default function SavedJobsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="space-y-2">
          <Skeleton className="h-7 w-40 rounded-md" />
          <Skeleton className="h-4 w-72 rounded-md" />
        </div>

        <Skeleton className="h-10 w-44 rounded-full" />
      </div>

      {/* Filteration */}
      <div className="flex flex-col lg:flex-row gap-4">
        <Skeleton className="h-11 w-full rounded-md" />
        <Skeleton className="h-11 lg:w-52 w-full rounded-md" />
        <Skeleton className="h-11 lg:w-52 w-full rounded-md" />
      </div>

      {/* Job Cards */}
      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="border rounded-2xl p-5 space-y-5 bg-white">
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Skeleton className="size-14 rounded-xl" />

                <div className="space-y-2">
                  <Skeleton className="h-5 w-40 rounded-md" />
                  <Skeleton className="h-4 w-28 rounded-md" />
                </div>
              </div>

              <Skeleton className="size-10 rounded-full" />
            </div>

            {/* Job Info */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4 rounded-md" />

              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-28 rounded-full" />
              </div>

              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-2/3 rounded-md" />
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <Skeleton className="h-5 w-32 rounded-md" />

              <div className="flex gap-3">
                <Skeleton className="h-10 w-28 rounded-md" />
                <Skeleton className="h-10 w-24 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
