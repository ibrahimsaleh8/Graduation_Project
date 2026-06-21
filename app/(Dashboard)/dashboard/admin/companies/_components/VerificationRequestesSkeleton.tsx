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

export default function VerificationRequestesSkeleton() {
  return (
    <div className="space-y-4">
      {/* Filtration Skeleton */}
      <div className="flex items-center gap-3 md:flex-row flex-col w-full">
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
                <Skeleton className="h-4 w-16 bg-white/20" />
              </TableHead>
              <TableHead className="py-4 text-white">
                <Skeleton className="h-4 w-12 bg-white/20" />
              </TableHead>
              <TableHead className="py-4 text-white">
                <Skeleton className="h-4 w-16 bg-white/20" />
              </TableHead>
              <TableHead className="py-4 text-white">
                <Skeleton className="h-4 w-20 bg-white/20" />
              </TableHead>
              <TableHead className="py-4 text-white">
                <Skeleton className="h-4 w-12 bg-white/20" />
              </TableHead>
              <TableHead className="py-4 text-white">
                <Skeleton className="h-4 w-28 bg-white/20" />
              </TableHead>
              <TableHead className="py-4 text-white w-52">
                <Skeleton className="h-4 w-12 bg-white/20" />
              </TableHead>
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
                        <Skeleton className="size-3 rounded-full" />
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
                    <Skeleton className="size-4 rounded" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </TableCell>

                {/* Documents */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="size-4 rounded" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Skeleton className="h-6 w-20 rounded-md" />
                </TableCell>

                {/* Submitted Date */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="size-4 rounded" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </TableCell>

                {/* Action */}
                <TableCell>
                  <Skeleton className="h-9 w-30 rounded-sm" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
