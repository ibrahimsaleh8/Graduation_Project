import { HugeiconsIcon } from "@hugeicons/react";
import JobPostsFilteration from "./JobPostsFilteration";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Location01Icon, ViewIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
const jobPostsData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Cairo, Egypt",
    type: "Full-time",
    postedAgo: "2 days ago",
    applicants: 15,
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Giza, Egypt",
    type: "Part-time",
    postedAgo: "5 days ago",
    applicants: 8,
    status: "Active",
  },
];

export default function ShowAllJobPosts() {
  return (
    <div className="space-y-3">
      {/* Search and filter options */}
      <JobPostsFilteration />

      {/* Show All Job Posts */}
      <Table className="bg-white border">
        <TableHeader className="px-2">
          <TableRow className="hover:bg-black/4">
            <TableHead className="text-black py-4 pl-4">Job Title</TableHead>
            <TableHead className="text-black py-4">Details</TableHead>
            <TableHead className="text-black py-4">Applications</TableHead>
            <TableHead className="text-black py-4">Status</TableHead>
            <TableHead className="text-black py-4 w-40">Show</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobPostsData.map((job) => (
            <TableRow key={job.id} className="hover:bg-black/4">
              <TableCell className="pl-4">
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="flex items-center gap-1 text-sm mt-2">
                    <HugeiconsIcon icon={Location01Icon} className="size-4" />
                    {job.location}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-xs px-4 py-2 bg-blue-100 text-blue-500 w-fit rounded-md font-medium">
                    {job.type}
                  </p>
                  <p className="text-[0.78rem] mt-2 text-black/70">
                    Posted {job.postedAgo}
                  </p>
                </div>
              </TableCell>
              <TableCell className="font-medium">{job.applicants}</TableCell>
              <TableCell>
                <p className="text-xs px-4 py-2 bg-green-100 text-green-600 w-fit rounded-md font-medium">
                  {job.status}
                </p>
              </TableCell>

              <TableCell>
                <Link
                  href={`/dashboard/company/job-posts/${job.id}`}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-main-color rounded-sm text-xs w-fit text-white hover:bg-main-color/85 duration-300">
                  <HugeiconsIcon
                    icon={ViewIcon}
                    className="size-4.5"
                    strokeWidth={2}
                  />
                  Show Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
