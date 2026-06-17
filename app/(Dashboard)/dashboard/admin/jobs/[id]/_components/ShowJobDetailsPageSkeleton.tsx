import { Skeleton } from "@/components/ui/skeleton";

export default function ShowJobDetailsPageSkeleton() {
  return (
    <div className="space-y-3 container mx-auto">
      {/* Breadcrumb + Action Buttons Row */}
      <div className="flex items-center gap-6 justify-between flex-col sm:flex-row flex-wrap">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-3 rounded" />
          <Skeleton className="h-4 w-14 rounded" />
          <Skeleton className="h-4 w-3 rounded" />
          <Skeleton className="h-4 w-28 rounded" />
        </div>

        {/* Accept / Reject Buttons */}
        <div className="flex items-center gap-1 flex-col sm:flex-row w-full sm:w-fit">
          <Skeleton className="h-9 w-full sm:w-36 rounded-md" />
          <Skeleton className="h-9 w-full sm:w-36 rounded-md" />
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-5">
        {/* Job Header Card */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-8">
          <div className="flex flex-col gap-7">
            {/* Title + Status Badge */}
            <div>
              <div className="flex items-end gap-3 flex-wrap">
                <Skeleton className="h-8 w-72 md:w-96 rounded" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>

              {/* Meta info row: date, category, location, salary */}
              <div className="flex items-center gap-5 md:mt-3 mt-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <Skeleton className="size-4 rounded" />
                  <Skeleton className="h-4 w-32 rounded" />
                </div>
                <div className="flex items-center gap-1">
                  <Skeleton className="size-4 rounded" />
                  <Skeleton className="h-4 w-24 rounded" />
                </div>
                <div className="flex items-center gap-1">
                  <Skeleton className="size-4 rounded" />
                  <Skeleton className="h-4 w-20 rounded" />
                </div>
                <div className="flex items-center gap-1">
                  <Skeleton className="size-4 rounded" />
                  <Skeleton className="h-4 w-28 rounded" />
                </div>
              </div>

              {/* Work Approaches + Job Types Tags */}
              <div className="flex items-center gap-3 md:mt-3 mt-2 flex-wrap">
                <Skeleton className="h-6 w-20 rounded-sm" />
                <Skeleton className="h-6 w-16 rounded-sm" />
                <Skeleton className="h-6 w-24 rounded-sm" />
              </div>
            </div>

            {/* Company Data */}
            <div className="flex items-start gap-5 flex-col md:flex-row">
              {/* Company Logo */}
              <Skeleton className="size-23 rounded-2xl shrink-0" />

              {/* Company Info */}
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-40 rounded" />
                <div className="flex items-center gap-1">
                  <Skeleton className="size-4.5 rounded" />
                  <Skeleton className="h-4 w-28 rounded" />
                </div>
                <div className="flex items-center gap-1">
                  <Skeleton className="size-4.5 rounded" />
                  <Skeleton className="h-4 w-32 rounded" />
                </div>
                <Skeleton className="h-7 w-32 rounded-sm mt-1.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div>
          {/* Tabs List */}
          <div className="sm:w-fit w-full flex flex-wrap gap-4 py-2 items-center bg-white rounded-md shadow border px-2">
            <Skeleton className="h-8 w-20 sm:w-20 rounded-md" />
            <Skeleton className="h-8 w-28 sm:w-28 rounded-md" />
          </div>

          {/* Tab Content Area */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 mt-8">
            <div className="bg-white p-6 rounded-md border shadow lg:flex-1 w-full lg:w-fit space-y-6">
              {/* Description Section */}
              <div className="space-y-3">
                <Skeleton className="h-6 w-36 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>

              {/* Responsibility Section */}
              <div className="space-y-3">
                <Skeleton className="h-6 w-40 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-4/5 rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
              </div>

              {/* Skills Section */}
              <div className="space-y-3">
                <Skeleton className="h-6 w-32 rounded" />
                <div className="flex items-center gap-2 flex-wrap">
                  <Skeleton className="h-7 w-20 rounded-full" />
                  <Skeleton className="h-7 w-24 rounded-full" />
                  <Skeleton className="h-7 w-16 rounded-full" />
                  <Skeleton className="h-7 w-28 rounded-full" />
                  <Skeleton className="h-7 w-20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
