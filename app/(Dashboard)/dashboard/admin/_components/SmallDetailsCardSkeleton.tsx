import { Skeleton } from "@/components/ui/skeleton";

export default function SmallDetailsCardSkeleton() {
  return (
    <div className="w-full p-3 bg-input-bg rounded-md border">
      <div className="flex items-center gap-1">
        <Skeleton className="size-4 rounded-sm bg-black/10" />
        <Skeleton className="h-4 w-24 bg-black/10" />
      </div>

      <Skeleton className="h-4 w-36 mt-2 bg-black/10" />
    </div>
  );
}
