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
import { CompanyJobDetailsType } from "./ShowCompanyAllJobPosts";
import { useMemo, useState } from "react";

type Props = {
  jobPosts: CompanyJobDetailsType[];
};

export default function ShowAllJobPosts({ jobPosts }: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "All" | "Active" | "Inactive"
  >("All");

  const [typeFilter, setTypeFilter] = useState<string>("All");

  const jobs = useMemo(() => {
    let filteredJobs = jobPosts;

    if (searchTxt.trim() !== "") {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTxt.toLowerCase()),
      );
    }

    if (statusFilter !== "All") {
      filteredJobs = filteredJobs.filter((job) => {
        if (statusFilter === "Active") {
          return job.isActive;
        } else {
          return !job.isActive;
        }
      });
    }

    if (typeFilter !== "All") {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobType.includes(typeFilter),
      );
    }

    return filteredJobs;
  }, [jobPosts, searchTxt, statusFilter, typeFilter]);

  const updateSearchTxt = (txt: string) => {
    setSearchTxt(txt);
  };
  const updateStatusFilter = (status: "All" | "Active" | "Inactive") => {
    setStatusFilter(status);
  };
  const updateTypeFilter = (type: string) => {
    setTypeFilter(type);
  };

  return (
    <div className="space-y-3">
      {/* Search and filter options */}
      <JobPostsFilteration
        updateSearchTxt={updateSearchTxt}
        updateStatusFilter={updateStatusFilter}
        updateTypeFilter={updateTypeFilter}
      />

      {/* Show All Job Posts */}
      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader className="px-2">
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md ">
            <TableHead className="py-4 pl-4">Job Title</TableHead>
            <TableHead className="py-4">Details</TableHead>
            <TableHead className="py-4">Applications</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4 w-40">Show</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <TableRow key={job.jobId} className="hover:bg-black/10">
                <TableCell className="pl-4">
                  <div>
                    <p className="font-medium">{job.jobTitle}</p>
                    <p className="flex items-center gap-1 text-sm mt-2">
                      <HugeiconsIcon icon={Location01Icon} className="size-4" />
                      {job.location}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    {job.jobType.length > 0 && (
                      <div className="flex items-center gap-3 flex-wrap max-w-lg">
                        {job.jobType.map((jobT) => (
                          <p
                            key={jobT}
                            className="text-xs px-4 py-2 bg-blue-100 text-blue-500 w-fit rounded-md font-medium">
                            {jobT}
                          </p>
                        ))}
                      </div>
                    )}

                    <p className="text-[0.78rem] mt-2 text-black/70">
                      Posted {job.postedAt}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  {job.applicationCount}
                </TableCell>
                <TableCell>
                  <p className="text-xs px-4 py-2 bg-green-100 text-green-600 w-fit rounded-md font-medium">
                    {job.isActive ? "Active" : "Inactive"}
                  </p>
                </TableCell>

                <TableCell>
                  <Link
                    href={`/dashboard/company/job-posts/${job.jobId}`}
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
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center p-5 text-base font-medium text-black/70">
                No job posts found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
