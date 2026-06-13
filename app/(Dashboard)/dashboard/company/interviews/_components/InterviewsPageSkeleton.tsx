import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function InterviewsPageSkeleton() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="space-y-1.5">
        <Skeleton className="h-7 w-32 rounded" />
        <Skeleton className="h-4 w-72 rounded" />
      </div>

      {/* Stats grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-full p-4 gap-3 rounded-md border bg-white flex flex-col">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="size-10 rounded-xl" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-9 w-16 rounded" />
              <Skeleton className="h-3.5 w-40 mt-2 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Interviews table */}
      <div className="space-y-2">
        {/* Filteration */}
        <div className="w-full flex items-center gap-3 flex-wrap justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search input with label */}
            <div className="space-y-1 md:w-80 w-full">
              <Skeleton className="h-4 w-44 rounded" />
              <Skeleton className="h-11 w-full rounded-md" />
            </div>
            {/* Status select with label */}
            <div className="space-y-1 md:w-50 w-full">
              <Skeleton className="h-4 w-12 rounded" />
              <Skeleton className="h-11 w-full rounded-md" />
            </div>
          </div>
          {/* Show Today checkbox + label */}
          <div className="flex items-center gap-1">
            <Skeleton className="size-4.5 rounded-[3px]" />
            <Skeleton className="h-4 w-40 rounded" />
          </div>
        </div>

        {/* Table */}
        <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
          <TableHeader>
            <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
              <TableHead className="text-white py-4 pl-4">
                Candidate Name
              </TableHead>
              <TableHead className="text-white py-4">Job Position</TableHead>
              <TableHead className="text-white py-4">Date & Time</TableHead>
              <TableHead className="text-white py-4">Status</TableHead>
              <TableHead className="text-white py-4 w-30">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-start gap-3">
                    <Skeleton className="size-12 rounded-full shrink-0" />
                    <div className="space-y-1.5 pt-0.5">
                      <Skeleton className="h-4 w-28 rounded" />
                      <Skeleton className="h-3 w-36 rounded" />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-36 rounded" />
                </TableCell>
                <TableCell>
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-3.5 w-32 rounded" />
                  </div>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-7 w-20 rounded-sm" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8 rounded-md" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
