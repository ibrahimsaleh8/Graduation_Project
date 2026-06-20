import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UsersFilterSkeleton from "./UsersFilterSkeleton";

export default function ShowAllUsersSkeleton() {
  return (
    <div className="space-y-3">
      <UsersFilterSkeleton />

      {/* Table */}
      <Table className="bg-white rounded-xl overflow-hidden inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark">
            <TableHead className="pl-4 py-4">User</TableHead>
            <TableHead className="py-4">Email Address</TableHead>
            <TableHead className="py-4">Job Title</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Location</TableHead>
            <TableHead className="py-4">Joined Date</TableHead>
            <TableHead className="py-4 w-40">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 6 }).map((_, index) => (
            <TableRow key={index} className="hover:bg-black/5 transition-colors">
              {/* User */}
              <TableCell className="pl-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full bg-black/10" />
                  <Skeleton className="h-4 w-24 bg-black/10" />
                </div>
              </TableCell>

              {/* Email */}
              <TableCell>
                <Skeleton className="h-4 w-36 bg-black/10" />
              </TableCell>

              {/* Job Title */}
              <TableCell>
                <Skeleton className="h-4 w-28 bg-black/10" />
              </TableCell>

              {/* Status */}
              <TableCell>
                <Skeleton className="h-6 w-16 rounded-full bg-black/10" />
              </TableCell>

              {/* Location */}
              <TableCell>
                <Skeleton className="h-4 w-20 bg-black/10" />
              </TableCell>

              {/* Joined Date */}
              <TableCell>
                <Skeleton className="h-4 w-24 bg-black/10" />
              </TableCell>

              {/* Action */}
              <TableCell>
                <Skeleton className="h-9 w-24 rounded-md bg-black/10" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
