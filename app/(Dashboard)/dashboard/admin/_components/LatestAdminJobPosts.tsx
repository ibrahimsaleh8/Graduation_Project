import { CircleArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/FormatDate";
import { AdminDashboardLatestJobDataType } from "./ShowAdminDashboardOverview";

type Props = {
  recentJobPosting: AdminDashboardLatestJobDataType[];
};
export default function LatestAdminJobPosts({ recentJobPosting }: Props) {
  return (
    <div className="xl:mt-11 md:mt-30 mt-27 xl:w-1/2 w-full space-y-3">
      <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
        <p className="font-medium">Latest Job Posts</p>
        <Link
          className="flex items-center gap-1 font-medium"
          href={"/dashboard/admin/jobs"}>
          See All
          <HugeiconsIcon icon={CircleArrowRight01Icon} className="size-5" />
        </Link>
      </div>

      <Table className=" rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="text-white py-4">#</TableHead>
            <TableHead className="text-white py-4">Job Title</TableHead>
            <TableHead className="text-white py-4">
              Total Applications
            </TableHead>
            <TableHead className="text-white py-4">Posted At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentJobPosting.length > 0 ? (
            recentJobPosting.map((job, i) => (
              <TableRow key={job.jobId}>
                <TableCell className="font-medium py-4">{i + 1}</TableCell>
                <TableCell className="flex items-center gap-2 font-medium py-4 truncate md:max-w-70">
                  <Link
                    href={`/dashboard/admin/jobs/${job.jobId}`}
                    className="hover:underline">
                    {job.jobTitle}
                  </Link>
                </TableCell>
                <TableCell className="font-medium py-4">
                  {job.totalApplications}
                </TableCell>
                <TableCell className="font-medium py-4">
                  {formatDate(job.postedAt)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center font-medium p-5 text-black/70">
                No Job Posted Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
