import { Skeleton } from "@/components/ui/skeleton";

export default function ApplyForJobSkeleton() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* CV Section */}
      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-32" />

        <div className="flex items-center gap-3 flex-wrap">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-0">
              <Skeleton className="h-27.5 w-30 rounded-b-none rounded-md" />
              <Skeleton className="h-9 w-30 rounded-t-none rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <Skeleton className="h-10 w-32 rounded-md mt-4" />
    </div>
  );
}
