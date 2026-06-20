import { Skeleton } from "@/components/ui/skeleton";

export default function UserDetailsSocialsSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-24 bg-black/10" />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-9 w-full rounded-md bg-black/10" />
        ))}
      </div>
    </div>
  );
}
