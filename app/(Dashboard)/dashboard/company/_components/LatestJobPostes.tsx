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
import { CompanyDashboardRecentJobPosting } from "./hooks/useGetCompanyDashboardData";
import { formatDate } from "@/lib/FormatDate";

type Props = {
  recentJobPosting: CompanyDashboardRecentJobPosting[];
};
export default function LatestJobPostes({ recentJobPosting }: Props) {
  return (
    <div className="lg:mt-11 md:mt-30 xl:w-1/2 w-full space-y-3">
      <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
        <p className="font-medium">Latest Job Posts</p>
        <Link
          className="flex items-center gap-1 font-medium"
          href={"/dashboard/company/job-posts"}>
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
              <TableRow key={job.id}>
                <TableCell className="font-medium py-4">{i + 1}</TableCell>
                <TableCell className="flex items-center gap-2 font-medium py-4 truncate md:max-w-70">
                  <Link
                    href={`/dashboard/company/job-posts/${job.id}`}
                    className="hover:underline">
                    {job.jobTitle}
                  </Link>
                </TableCell>
                <TableCell className="font-medium py-4">
                  {job.totalApplication}
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
