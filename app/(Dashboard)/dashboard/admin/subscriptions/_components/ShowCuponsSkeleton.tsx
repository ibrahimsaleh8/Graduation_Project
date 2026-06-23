import { Skeleton } from "@/components/ui/skeleton";

export default function ShowCuponsSkeleton() {
  return (
    <div>
      {/* Top: "Coupons & Discounts" + "Create New Code" button */}
      <div className="flex items-center justify-between gap-4 flex-wrap px-5">
        <Skeleton className="h-5 w-40 bg-black/10" />
        <Skeleton className="h-9.5 w-full md:w-40 rounded-md bg-black/10" />
      </div>

      {/* Coupon cards grid */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-6 gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full bg-white rounded-md p-4 space-y-5 border border-border-color overflow-hidden"
          >
            {/* Top: icon + code name */}
            <div className="flex items-center gap-4">
              <Skeleton className="size-7 rounded-sm bg-black/10" />
              <Skeleton className="h-5 w-28 bg-black/10" />
            </div>

            {/* Data rows */}
            <div className="space-y-3">
              {/* Percent row */}
              <div className="flex items-center justify-between border-b pb-1">
                <Skeleton className="h-4 w-16 bg-black/10" />
                <Skeleton className="h-4 w-10 bg-black/10" />
              </div>
              {/* Users row */}
              <div className="flex items-center justify-between border-b pb-1">
                <Skeleton className="h-4 w-14 bg-black/10" />
                <Skeleton className="h-4 w-12 bg-black/10" />
              </div>
              {/* Status row */}
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-14 bg-black/10" />
                <Skeleton className="h-7 w-16 rounded-sm bg-black/10" />
              </div>
              {/* Plans row */}
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-12 bg-black/10" />
                <div className="flex items-center gap-1">
                  <Skeleton className="h-7 w-16 rounded-sm bg-black/10" />
                  <Skeleton className="h-7 w-16 rounded-sm bg-black/10" />
                </div>
              </div>
            </div>

            {/* Action buttons: Edit + Delete */}
            <div className="w-full flex items-center gap-3 flex-col md:flex-row">
              <Skeleton className="h-9.5 w-full md:flex-1 rounded-md bg-black/10" />
              <Skeleton className="h-9.5 w-full md:w-fit md:min-w-36 rounded-md bg-black/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
