import { Skeleton } from "@/components/ui/skeleton";

export default function ShowCompanySettingsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pl-8 space-y-2">
        <Skeleton className="h-7 w-48 rounded-md" />
        <Skeleton className="h-4 w-72 rounded-md" />
      </div>

      <div className="flex flex-col md:flex-row w-full items-start">
        {/* Sidebar Tab List */}
        <div className="flex flex-col gap-3 md:px-4 rounded-lg py-2 min-w-50 w-full md:w-fit">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-11 w-full rounded-md" />
          ))}
        </div>

        {/* Tab Content — Profile skeleton */}
        <div className="w-full md:border-l border-t md:border-t-0 md:px-4 py-4 md:py-0 space-y-5">
          {/* Cover Image */}
          <div className="flex flex-col w-full">
            <Skeleton className="w-full h-70 rounded-2xl" />

            {/* Avatar */}
            <Skeleton className="size-36 rounded-full -mt-17 border-3 border-white" />
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            {/* Row 1: two inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            {/* Row 2: two inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            {/* Row 3: one full-width input */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Textarea: Bio */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-24 w-full rounded-md" />
            </div>

            {/* Textarea: Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-32 w-full rounded-md" />
            </div>

            {/* Submit button */}
            <div className="flex">
              <Skeleton className="h-10 w-32 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
