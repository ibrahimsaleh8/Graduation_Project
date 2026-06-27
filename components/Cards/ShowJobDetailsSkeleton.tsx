import { Skeleton } from "@/components/ui/skeleton";

// Mirrors the layout of SimilarJobCard
function SimilarJobCardSkeleton() {
  return (
    <div className="p-3 w-full border-2 rounded-md space-y-3">
      {/* Top */}
      <div className="flex items-start gap-3 justify-between flex-wrap">
        <div className="flex items-start flex-col sm:flex-row gap-2">
          {/* Company Logo */}
          <Skeleton className="size-14 rounded-md" />

          {/* Company Data */}
          <div className="flex flex-col gap-2 pt-1">
            <Skeleton className="h-5 w-36 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
        </div>
      </div>

      {/* Employment Types */}
      <div className="flex items-center gap-2 flex-wrap">
        <Skeleton className="h-6 w-16 rounded-sm" />
      </div>

      {/* Bottom */}
      <div className="w-full flex sm:items-center items-end justify-between gap-7">
        <div className="flex items-center gap-3 flex-wrap">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
        <Skeleton className="h-9 w-16 rounded-sm ml-auto" />
      </div>
    </div>
  );
}

// Mirrors the layout of SimilarJobs
function SimilarJobsSkeleton() {
  return (
    <div className="w-full lg:max-w-xl pt-10 space-y-6">
      <Skeleton className="h-6 w-28 rounded" />
      <div className="space-y-4">
        <SimilarJobCardSkeleton />
        <SimilarJobCardSkeleton />
        <SimilarJobCardSkeleton />
      </div>
    </div>
  );
}

// Mirrors the layout of JobDetails
function JobDetailsSkeleton() {
  return (
    <div className="md:p-7 p-2 flex flex-col gap-6 pt-7 w-full">
      {/* Header */}
      <div className="flex flex-col gap-6">
        {/* Title + Action buttons row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Skeleton className="h-8 w-64 rounded" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="size-10 rounded-md" />
            <Skeleton className="size-10 rounded-md" />
          </div>
        </div>

        {/* Company logo + meta info */}
        <div className="flex gap-7 items-start flex-col sm:flex-row flex-wrap">
          <Skeleton className="w-20 h-20 rounded-full" />

          <div className="flex flex-col gap-4">
            {/* Meta grid */}
            <div className="grid sm:grid-cols-2 gap-4 flex-wrap">
              <Skeleton className="h-4 w-36 rounded" />
              <Skeleton className="h-4 w-32 rounded" />
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="h-4 w-40 rounded" />
              <Skeleton className="h-4 w-44 rounded" />
            </div>

            {/* Tags (job types / work approaches) */}
            <div className="flex gap-3 flex-wrap">
              <Skeleton className="h-7 w-20 rounded-md" />
              <Skeleton className="h-7 w-24 rounded-md" />
              <Skeleton className="h-7 w-16 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Description body */}
      <div className="flex flex-col gap-3 mt-2">
        <Skeleton className="h-5 w-40 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-4/5 rounded" />

        <Skeleton className="h-5 w-32 rounded mt-4" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />

        <Skeleton className="h-5 w-28 rounded mt-4" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-48 rounded" />
          <Skeleton className="h-4 w-40 rounded" />
          <Skeleton className="h-4 w-52 rounded" />
          <Skeleton className="h-4 w-44 rounded" />
        </div>
      </div>
    </div>
  );
}

// Top-level skeleton — mirrors ShowJobDetails wrapper layout
export default function ShowJobDetailsSkeleton() {
  return (
    <div className="flex items-start gap-10 flex-col xl:flex-row xl:px-10">
      <JobDetailsSkeleton />
      <SimilarJobsSkeleton />
    </div>
  );
}
