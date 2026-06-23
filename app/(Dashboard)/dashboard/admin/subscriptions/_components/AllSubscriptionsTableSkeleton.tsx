import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AllSubscriptionsTableSkeleton() {
  return (
    <div className="space-y-3">
      {/* SubscriptionFilteration skeleton: Search + Plan + Status */}
      <div className="flex items-center gap-3 md:flex-row flex-col">
        {/* Search */}
        <div className="w-full space-y-1">
          <Skeleton className="h-4 w-14 bg-black/10" />
          <Skeleton className="h-11 w-full rounded-md bg-black/10" />
        </div>
        {/* Plan */}
        <div className="w-full space-y-1">
          <Skeleton className="h-4 w-10 bg-black/10" />
          <Skeleton className="h-11 w-full rounded-md bg-black/10" />
        </div>
        {/* Status */}
        <div className="w-full space-y-1">
          <Skeleton className="h-4 w-14 bg-black/10" />
          <Skeleton className="h-11 w-full rounded-md bg-black/10" />
        </div>
      </div>

      {/* Table skeleton */}
      <Table className="bg-white rounded-xl overflow-hidden inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark">
            <TableHead className="pl-4 py-4">
              <Skeleton className="h-4 w-20 bg-white/15" />
            </TableHead>
            <TableHead className="py-4">
              <Skeleton className="h-4 w-32 bg-white/15" />
            </TableHead>
            <TableHead className="py-4">
              <Skeleton className="h-4 w-14 bg-white/15" />
            </TableHead>
            <TableHead className="py-4">
              <Skeleton className="h-4 w-14 bg-white/15" />
            </TableHead>
            <TableHead className="py-4">
              <Skeleton className="h-4 w-20 bg-white/15" />
            </TableHead>
            <TableHead className="py-4">
              <Skeleton className="h-4 w-22 bg-white/15" />
            </TableHead>
            <TableHead className="py-4 w-40">
              <Skeleton className="h-4 w-14 bg-white/15" />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i} className="hover:bg-black/5 transition-colors">
              {/* Company: avatar + name */}
              <TableCell className="pl-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-11 rounded-full bg-black/10 shrink-0" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-28 bg-black/10" />
                    <Skeleton className="h-3 w-36 bg-black/10" />
                  </div>
                </div>
              </TableCell>

              {/* Subscription Plan: name + price */}
              <TableCell>
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-24 bg-black/10" />
                  <Skeleton className="h-3 w-16 bg-black/10" />
                </div>
              </TableCell>

              {/* Billing */}
              <TableCell>
                <Skeleton className="h-4 w-16 bg-black/10" />
              </TableCell>

              {/* Status badge */}
              <TableCell>
                <Skeleton className="h-7 w-16 rounded-md bg-black/10" />
              </TableCell>

              {/* Start Date */}
              <TableCell>
                <Skeleton className="h-4 w-22 bg-black/10" />
              </TableCell>

              {/* Expiry Date */}
              <TableCell>
                <Skeleton className="h-4 w-22 bg-black/10" />
              </TableCell>

              {/* Action button */}
              <TableCell>
                <Skeleton className="h-9 w-24 rounded-sm bg-black/10" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
