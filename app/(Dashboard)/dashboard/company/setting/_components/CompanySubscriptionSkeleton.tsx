import { Skeleton } from "@/components/ui/skeleton";

export default function CompanySubscriptionSkeleton() {
  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Header */}
      <div>
        <Skeleton className="h-6 w-52 mb-2" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>

      {/* Current Plan Details */}
      <div className="p-5 bg-white rounded-2xl">
        {/* Top */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-3 border-b">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>

        {/* Plan Details */}
        <div className="flex items-start gap-4 pt-6 flex-col lg:flex-row">
          {/* Plan Main data */}
          <div className="space-y-5 w-full md:max-w-xl">
            {/* Name */}
            <div className="flex items-start gap-3">
              <Skeleton className="size-12 rounded-md" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>

            {/* Billing Cycle & Renewal */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="p-3 bg-input-bg rounded-md space-y-1">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-5 w-10" />
              </div>
              <div className="p-3 bg-input-bg rounded-md space-y-1">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-5 w-24" />
              </div>
            </div>
          </div>

          {/* Plan Numbers - 3 progress bars */}
          <div className="space-y-4 w-full">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-full space-y-1">
                <div className="w-full flex items-center justify-between flex-wrap gap-4 text-sm">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upgrade Plan */}
      <div className="md:p-5 space-y-5">
        <div className="w-full flex items-center justify-between gap-4 flex-wrap">
          <Skeleton className="h-5 w-40 ml-3 md:ml-0" />
          {/* Monthly/Yearly toggle */}
          <div className="flex items-center gap-2 px-4 bg-white rounded-full py-2 border">
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-20 rounded-full" />
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full bg-white rounded-2xl p-6 flex flex-col gap-5 border border-border-color"
            >
              {/* Top */}
              <div className="space-y-1">
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-4 w-48" />
              </div>

              {/* Price */}
              <Skeleton className="h-9 w-36" />

              {/* Features */}
              <ul className="space-y-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Skeleton className="size-5 rounded-full" />
                    <Skeleton className="h-4 w-48" />
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Skeleton className="h-10 w-full rounded-md mt-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="p-5 space-y-5 rounded-2xl border bg-white">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-4 w-28" />
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Table Header */}
          <div className="flex items-center gap-4 border-b py-4">
            <Skeleton className="h-4 w-24 flex-1" />
            <Skeleton className="h-4 w-16 flex-1" />
            <Skeleton className="h-4 w-28 flex-1" />
            <Skeleton className="h-4 w-20 flex-1" />
            <Skeleton className="h-4 w-16 flex-1" />
          </div>

          {/* Table Rows */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 border-b py-4">
              <Skeleton className="h-4 w-20 flex-1" />
              <Skeleton className="h-4 w-12 flex-1" />
              <Skeleton className="h-4 w-24 flex-1" />
              <Skeleton className="h-4 w-20 flex-1" />
              <Skeleton className="h-6 w-16 rounded-full flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
