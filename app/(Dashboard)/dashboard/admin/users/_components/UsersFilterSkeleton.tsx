import { Skeleton } from "@/components/ui/skeleton";

export default function UsersFilterSkeleton() {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col">
      {/* Search */}
      <div className="w-full space-y-1">
        <Skeleton className="h-4 w-14 bg-black/10" />
        <Skeleton className="h-11 w-full rounded-md bg-black/10" />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Skeleton className="h-4 w-14 bg-black/10" />
        <Skeleton className="h-11 w-full rounded-md bg-black/10" />
      </div>
    </div>
  );
}
