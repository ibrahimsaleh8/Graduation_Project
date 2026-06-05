import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ShowCompanyAllJobPostsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-1">
        <Skeleton className="h-7 w-32" />
        <Skeleton className="h-4 w-48" />
      </div>

      {/* Statistics Cards Skeleton */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="p-4 gap-3 rounded-md bg-white border flex flex-col h-40 overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-10 rounded-xl" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-7 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Table Skeleton */}
      <div className="space-y-3">
        {/* Filter Skeleton */}
        <div className="flex items-center gap-3 md:flex-row flex-col">
          <div className="w-full space-y-1">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="w-full space-y-1">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="w-full space-y-1">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>{" "}
        </div>

        {/* Table */}
        <Table className="bg-white rounded-md overflow-hidden inline-table">
          <TableHeader className="px-2">
            <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
              <TableHead className="py-4 pl-4">
                <Skeleton className="h-4 w-24" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-20" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-28" />
              </TableHead>
              <TableHead className="py-4">
                <Skeleton className="h-4 w-16" />
              </TableHead>
              <TableHead className="py-4 w-40">
                <Skeleton className="h-4 w-12" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-black/10">
                {/* Job Title Cell */}
                <TableCell className="pl-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-40" />
                  </div>
                </TableCell>

                {/* Details Cell */}
                <TableCell>
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-20 rounded-md" />
                    <Skeleton className="h-3 w-28" />
                  </div>
                </TableCell>

                {/* Applications Cell */}
                <TableCell>
                  <Skeleton className="h-4 w-8" />
                </TableCell>

                {/* Status Cell */}
                <TableCell>
                  <Skeleton className="h-6 w-20 rounded-md" />
                </TableCell>

                {/* Show Button Cell */}
                <TableCell>
                  <Skeleton className="h-8 w-28 rounded-sm" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
