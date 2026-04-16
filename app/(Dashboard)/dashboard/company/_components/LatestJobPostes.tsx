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

const recentJobs = [
  {
    id: 1,
    company: "Google",
    jobTitle: "Frontend Developer",
    appliedAt: "13 May, 2026",
  },
  {
    id: 2,
    company: "Google",
    jobTitle: "Frontend Developer",
    appliedAt: "13 May, 2026",
  },
  {
    id: 3,
    company: "Google",
    jobTitle: "Frontend Developer",
    appliedAt: "13 May, 2026",
  },
  {
    id: 4,
    company: "Google",
    jobTitle: "Frontend Developer",
    appliedAt: "13 May, 2026",
  },
];

export default function LatestJobPostes() {
  return (
    <div className="lg:mt-8 mt-30 lg:w-1/2 w-full">
      <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
        <p className="font-medium">Latest Job Posts</p>
        <Link
          className="flex items-center gap-1 font-medium"
          href={"/dashboard/company/job-posts"}>
          See All
          <HugeiconsIcon icon={CircleArrowRight01Icon} className="size-5" />
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black py-4">#</TableHead>
            <TableHead className="text-black py-4">Job Title</TableHead>
            <TableHead className="text-black py-4">
              Total Applications
            </TableHead>
            <TableHead className="text-black py-4">Posted At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium py-4">{job.id}</TableCell>
              <TableCell className="flex items-center gap-2 font-medium py-4">
                Frontend Developer
              </TableCell>
              <TableCell className="font-medium py-4">30</TableCell>
              <TableCell className="font-medium py-4">13 May, 2026</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
