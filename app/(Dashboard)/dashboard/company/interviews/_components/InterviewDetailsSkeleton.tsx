import { Skeleton } from "@/components/ui/skeleton";

export default function InterviewDetailsSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="space-y-4 border-t py-4 px-2 pr-3 w-full overflow-y-auto">
        {/* User Data */}
        <div className="flex flex-col text-center w-full items-center gap-3 relative">
          {/* Status Badge */}
          <Skeleton className="absolute left-2 -top-1 h-8 w-24 rounded-sm" />

          {/* User Image */}
          <Skeleton className="size-20 rounded-full" />

          {/* User Info */}
          <div className="space-y-2 flex flex-col items-center">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-28" />

            <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-9 w-32 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Interview Details */}
        <div className="space-y-2">
          {/* Date & Time */}
          <div className="w-full bg-input-bg p-4 rounded-md flex flex-col items-center">
            <Skeleton className="h-4 w-28 mb-3" />
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Interviewer */}
          <div className="w-full bg-input-bg p-4 rounded-md flex flex-col items-center">
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-28" />
          </div>

          {/* Interview Link */}
          <div className="w-full bg-input-bg p-4 rounded-md flex flex-col items-center">
            <Skeleton className="h-4 w-32 mb-3" />

            <Skeleton className="h-4 w-48 mb-4" />

            <div className="flex items-center gap-3 flex-wrap mt-1">
              <Skeleton className="h-9 w-28 rounded-sm" />
              <Skeleton className="h-9 w-12 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky mt-auto bottom-0 left-0 w-full bg-input-bg p-4 pt-6 flex flex-col gap-3">
        <Skeleton className="w-full h-12" />
      </div>
    </div>
  );
}
