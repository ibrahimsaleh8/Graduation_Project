import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DisplaySubscriptionDetailsSkeleton() {
  return (
    <div className="space-y-3 container mx-auto">
      {/* BackButton */}
      <Skeleton className="h-9 w-20 rounded-md bg-black/10" />

      {/* Row 1: CompanyMainInfo + PlanOverview */}
      <div className="w-full flex gap-4 lg:flex-row flex-col">
        {/* CompanyMainInfo */}
        <div className="bg-white p-5 w-full rounded-md border flex flex-col gap-6">
          {/* Image & Title */}
          <div className="flex md:items-center items-start flex-col md:flex-row gap-3">
            <Skeleton className="size-15 rounded-full bg-black/10 shrink-0" />
            <div className="space-y-1">
              <Skeleton className="h-5 w-36 bg-black/10" />
            </div>
          </div>

          {/* Details: 3 info rows (email, industry, location) */}
          <div className="space-y-4 md:pl-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="size-4.5 rounded-sm bg-black/10 shrink-0" />
                <Skeleton className="h-4 w-44 bg-black/10" />
              </div>
            ))}
          </div>

          {/* Bottom: Joined + View Profile */}
          <div className="pt-3 mt-auto border-t flex items-center justify-between flex-wrap gap-4">
            <Skeleton className="h-4 w-40 bg-black/10" />
            <Skeleton className="h-4 w-24 bg-black/10" />
          </div>
        </div>

        {/* PlanOverview */}
        <div className="bg-white p-5 w-full rounded-md border space-y-6">
          <Skeleton className="h-5 w-28 bg-black/10" />

          <div className="space-y-3">
            {/* 5 data rows: Current Plan, Price, Billing Cycle, Start Date, End Date */}
            {[
              { labelW: "w-24", valueW: "w-20" },
              { labelW: "w-12", valueW: "w-28" },
              { labelW: "w-24", valueW: "w-16" },
              { labelW: "w-20", valueW: "w-24" },
              { labelW: "w-18", valueW: "w-24" },
            ].map((row, i) => (
              <div
                key={i}
                className={`w-full flex items-center justify-between gap-3 text-sm ${i < 4 ? "border-b pb-1" : "pb-1"}`}
              >
                <Skeleton className={`h-4 ${row.labelW} bg-black/10`} />
                <Skeleton className={`h-4 ${row.valueW} bg-black/10`} />
              </div>
            ))}

            {/* Status row (badge instead of text) */}
            <div className="w-full flex items-center justify-between gap-3">
              <Skeleton className="h-4 w-14 bg-black/10" />
              <Skeleton className="h-7 w-16 rounded-md bg-black/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: SubscriptionUsage + AllowedFeatures */}
      <div className="w-full flex gap-4 lg:flex-row flex-col">
        {/* SubscriptionUsage */}
        <div className="bg-white p-5 w-full rounded-md border space-y-6">
          <Skeleton className="h-5 w-24 bg-black/10" />

          <div className="space-y-4">
            {/* 3 usage rows: Active Jobs, Featured Posts, Subscription Progress */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full space-y-1">
                <div className="w-full flex items-center justify-between flex-wrap gap-4">
                  <Skeleton className="h-4 w-32 bg-black/10" />
                  <Skeleton className="h-4 w-14 bg-black/10" />
                </div>
                {/* Progress bar */}
                <Skeleton className="h-2 w-full rounded-full bg-black/10" />
              </div>
            ))}
          </div>
        </div>

        {/* AllowedFeatures */}
        <div className="bg-white p-5 w-full lg:max-w-xl rounded-md border space-y-3">
          <Skeleton className="h-5 w-32 bg-black/10" />

          {/* 5 feature rows */}
          <ul className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="flex items-center gap-1">
                <Skeleton className="size-5 rounded-full bg-black/10 shrink-0" />
                <Skeleton className="h-4 w-36 bg-black/10" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SubscriptionsHistory */}
      <div className="bg-white p-5 w-full rounded-xl border space-y-6">
        {/* Header */}
        <div className="flex md:items-center justify-between flex-col md:flex-row">
          <Skeleton className="h-6 w-48 bg-black/10" />
          <Skeleton className="h-4 w-40 bg-black/10" />
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-6 bg-black/10" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-10 bg-black/10" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-12 bg-black/10" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-22 bg-black/10" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-14 bg-black/10" />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[...Array(3)].map((_, i) => (
              <TableRow key={i}>
                {/* # */}
                <TableCell>
                  <Skeleton className="h-4 w-6 bg-black/10" />
                </TableCell>
                {/* Plan */}
                <TableCell>
                  <Skeleton className="h-4 w-20 bg-black/10" />
                </TableCell>
                {/* Price */}
                <TableCell>
                  <Skeleton className="h-4 w-14 bg-black/10" />
                </TableCell>
                {/* Billing Date */}
                <TableCell>
                  <Skeleton className="h-4 w-24 bg-black/10" />
                </TableCell>
                {/* Status badge */}
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded-full bg-black/10" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
