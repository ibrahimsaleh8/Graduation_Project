import { Skeleton } from "@/components/ui/skeleton";
export default function EmployeeMainDashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Name */}
      <Skeleton className="h-10 w-100 rounded-md" />
      {/* Top */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-5">
        <Skeleton className="h-100 w-full rounded-md" />
        <div className="w-full space-y-4">
          <div className="w-full flex justify-between items-center gap-5 flex-wrap">
            <Skeleton className="h-9 w-30 rounded-md" />
            <Skeleton className="h-9 w-40 rounded-md" />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <Skeleton className="h-45 w-full rounded-md" />
            <Skeleton className="h-45 w-full rounded-md" />
            <Skeleton className="h-45 w-full rounded-md" />
            <Skeleton className="h-45 w-full rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-5">
        {/* Table */}
        <div className="w-full space-y-5">
          <div className="w-full flex justify-between items-center gap-5 flex-wrap">
            <Skeleton className="h-9 w-30 rounded-md" />
            <Skeleton className="h-9 w-40 rounded-md" />
          </div>
          <Skeleton className="h-80 w-full rounded-md" />
        </div>
        <Skeleton className="h-80 w-full rounded-md lg:mt-10" />
      </div>
    </div>
  );
}
