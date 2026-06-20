"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableReSortData from "@/components/buttons/TableReSortData";

export default function VerificationRequestesSkeleton() {
  return (
    <div className="space-y-4">
      {/* Filtration Skeleton */}
      <div className="flex items-center gap-3 md:flex-row flex-col w-full md:max-w-6xl">
        {/* Search */}
        <div className="w-full space-y-1">
          <div className="text-sm font-medium text-black/70">
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-11 w-full rounded-md" />
        </div>

        {/* Status */}
        <div className="w-full space-y-1">
          <div className="text-sm font-medium text-black/70">
            <Skeleton className="h-4.5 w-12" />
          </div>
          <Skeleton className="h-11 w-full rounded-md" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="rounded-2xl border border-border-color overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-main-dark hover:bg-main-dark border-none">
              <TableHead className="pl-5 py-4 text-white">
                <TableReSortData
                  label="Company"
                  sortFn={() => {}}
                />
              </TableHead>

              <TableHead className="py-4 text-white">Email</TableHead>
              <TableHead className="py-4 text-white">Industry</TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData
                  label="Documents"
                  sortFn={() => {}}
                />
              </TableHead>

              <TableHead className="py-4 text-white">
                Verification Status
              </TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData
                  label="Submitted Date"
                  sortFn={() => {}}
                />
              </TableHead>

              <TableHead className="py-4 text-white w-52">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow
                key={index}
                className="hover:bg-black/5 transition-colors">
                {/* Company */}
                <TableCell className="pl-5 py-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="size-11 rounded-xl" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-4 w-24" />
                      <div className="flex items-center gap-1 mt-1">
                        <Skeleton className="size-3.5 rounded-full" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>
                  <Skeleton className="h-4 w-36" />
                </TableCell>

                {/* Industry */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="size-4.5 rounded-sm" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </TableCell>

                {/* Documents */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="size-4.5 rounded-sm" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </TableCell>

                {/* Verification Status */}
                <TableCell>
                  <Skeleton className="h-8 w-28 rounded-xl" />
                </TableCell>

                {/* Submitted Date */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="size-4.5 rounded-sm" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </TableCell>

                {/* Action */}
                <TableCell>
                  <Skeleton className="h-9 w-32 rounded-lg" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
