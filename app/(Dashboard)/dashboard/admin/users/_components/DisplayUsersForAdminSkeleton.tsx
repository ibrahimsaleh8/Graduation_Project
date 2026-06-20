import { Skeleton } from "@/components/ui/skeleton";
import DashboardCardStatisticsSkeleton from "@/app/(Dashboard)/_components/DashboardCardStatisticsSkeleton";
import ShowAllUsersSkeleton from "./ShowAllUsersSkeleton";

export default function DisplayUsersForAdminSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Skeleton className="h-6 w-48 bg-black/10" />
        <Skeleton className="h-4 w-64 mt-2 bg-black/10" />
      </div>

      {/* Stats Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <DashboardCardStatisticsSkeleton variant="dark" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
        <DashboardCardStatisticsSkeleton variant="light" size="small" />
      </div>

      {/* Users Table */}
      <ShowAllUsersSkeleton />
    </div>
  );
}
