import { Skeleton } from "@/components/ui/skeleton";

function JobCardSkeleton() {
  return (
    <div className="bg-white w-full rounded-md flex flex-col gap-4 p-5 border border-black/8">
      {/* Top: Company info + Bookmark */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 items-center">
          {/* Company logo */}
          <Skeleton className="size-11 rounded-md shrink-0" />

          <div>
            {/* Company name */}
            <Skeleton className="h-4 w-24 rounded" />
            {/* Location */}
            <Skeleton className="h-3 w-20 rounded mt-1.5" />
          </div>
        </div>

        {/* Bookmark icon */}
        <Skeleton className="size-7 rounded-lg shrink-0" />
      </div>

      {/* Job Title */}
      <Skeleton className="h-6 w-3/4 rounded" />

      {/* Description (2 lines) */}
      <div className="space-y-1.5">
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-5/6 rounded" />
      </div>

      {/* Salary + Date */}
      <div className="flex items-center justify-between gap-3">
        <Skeleton className="h-4 w-36 rounded" />
        <Skeleton className="h-3 w-20 rounded" />
      </div>

      {/* Tags */}
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-md" />
        <Skeleton className="h-6 w-20 rounded-md" />
        <Skeleton className="h-6 w-14 rounded-md" />
      </div>

      {/* Bottom action button */}
      <Skeleton className="h-9 w-full rounded-md mt-1" />
    </div>
  );
}

function FilterSidebarSkeleton() {
  return (
    <div className="md:max-w-80 w-full h-fit bg-white border border-border-color rounded-md shadow-sm p-5 space-y-5">
      {/* Header */}
      <Skeleton className="h-6 w-16 rounded" />

      {/* Job Type section */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-20 rounded" />
        <div className="space-y-3 pt-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-4.5 h-4.5 rounded-[3px]" />
              <Skeleton className="h-3.5 w-20 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Work Type section */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-24 rounded" />
        <div className="space-y-3 pt-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-4.5 h-4.5 rounded-[3px]" />
              <Skeleton className="h-3.5 w-20 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Experience section */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-24 rounded" />
        <div className="space-y-4 pt-1">
          {/* Min Years select */}
          <div className="space-y-1.5">
            <Skeleton className="h-3.5 w-16 rounded" />
            <Skeleton className="h-11 w-full rounded-md" />
          </div>
          {/* Max Years select */}
          <div className="space-y-1.5">
            <Skeleton className="h-3.5 w-16 rounded" />
            <Skeleton className="h-11 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginationSkeleton() {
  return (
    <div className="flex items-center gap-2 mx-auto">
      {/* Prev arrow button */}
      <Skeleton className="h-9 w-11 rounded-lg" />

      {/* Page number boxes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-10 rounded-lg" />
      ))}

      {/* Next arrow button */}
      <Skeleton className="h-9 w-11 rounded-lg" />
    </div>
  );
}

export default function DisplayJobsForSearchSkeleton() {
  return (
    <div className="md:px-10 px-3">
      {/* "X jobs Found" text */}
      <div className="flex justify-end my-4">
        <Skeleton className="h-5 w-28 rounded" />
      </div>

      <div className="flex gap-3 flex-col md:flex-row">
        {/* Filter Sidebar */}
        <FilterSidebarSkeleton />

        {/* Job Cards Grid */}
        <div className="flex-1">
          <div className="flex flex-col gap-7">
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <JobCardSkeleton key={i} />
              ))}
            </div>

            {/* Pagination */}
            <PaginationSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
