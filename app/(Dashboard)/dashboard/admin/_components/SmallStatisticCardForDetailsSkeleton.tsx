import { Skeleton } from "@/components/ui/skeleton";

export default function SmallStatisticCardForDetailsSkeleton() {
  return (
    <div className="bg-input-bg border rounded-md p-3 flex flex-col items-center">
      <Skeleton className="h-6 w-10 bg-black/10" />
      <Skeleton className="h-3 w-20 mt-1.5 bg-black/10" />
    </div>
  );
}
