import { Skeleton } from "@/components/ui/skeleton";
import DashboardCardStatisticsSkeleton from "@/app/(Dashboard)/_components/DashboardCardStatisticsSkeleton";

export default function DisplaySubscriptionPageSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-64 bg-black/10" />
        <Skeleton className="h-4 w-80 bg-black/10" />
      </div>

      {/* Stats Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <DashboardCardStatisticsSkeleton variant="dark" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
      </div>

      {/* Tabs */}
      <div className="space-y-7">
        {/* Tab triggers */}
        <div className="md:w-100 w-full flex flex-col md:flex-row gap-4 items-center">
          <Skeleton className="h-9 w-full md:w-1/3 rounded-md bg-black/10" />
          <Skeleton className="h-9 w-full md:w-1/3 rounded-md bg-black/10" />
          <Skeleton className="h-9 w-full md:w-1/3 rounded-md bg-black/10" />
        </div>

        {/* Tab content — AllSubscriptionPlans skeleton */}
        <div>
          {/* Top: "Subscription Plans" + "Create New Plan" button */}
          <div className="flex items-center justify-between gap-4 flex-wrap px-5">
            <Skeleton className="h-5 w-40 bg-black/10" />
            <Skeleton className="h-9.5 w-40 rounded-md bg-black/10" />
          </div>

          {/* ShowPlans skeleton */}
          <div className="space-y-3 mt-4">
            {/* Monthly / Yearly toggle pill */}
            <div className="flex items-center gap-2 px-4 bg-white rounded-full py-2 border w-fit">
              <Skeleton className="h-9 w-22 rounded-full bg-black/10" />
              <Skeleton className="h-9 w-18 rounded-full bg-black/10" />
            </div>

            {/* Plan cards grid */}
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-6 gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-white rounded-2xl p-6 flex flex-col gap-6 border border-border-color"
                >
                  {/* Top: Name + description + active badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-32 bg-black/10" />
                      <Skeleton className="h-4 w-48 bg-black/10" />
                    </div>
                    <Skeleton className="h-7 w-20 rounded-full bg-black/10" />
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <Skeleton className="h-9 w-20 bg-black/10" />
                    <Skeleton className="h-4 w-12 bg-black/10" />
                  </div>

                  {/* 5 Feature rows */}
                  <ul className="space-y-2">
                    {[...Array(5)].map((_, j) => (
                      <li key={j} className="flex items-center gap-1">
                        <Skeleton className="size-5 rounded-full bg-black/10" />
                        <Skeleton className="h-4 w-36 bg-black/10" />
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons: Edit + Delete */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Skeleton className="h-9.5 flex-1 rounded-md bg-black/10" />
                    <Skeleton className="h-9.5 w-24 rounded-md bg-black/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
