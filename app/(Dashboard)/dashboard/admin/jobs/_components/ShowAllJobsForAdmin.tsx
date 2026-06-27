/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import JobsFilteration from "./JobsFilteration";
import { JobAdminDashboardDataType } from "./ShowAllJobsAdminDashboard";
import JobStatusBadge from "../../../company/job-posts/[id]/_components/JobStatusBadge";
import { formatDate } from "@/lib/FormatDate";
import { JobStatusDataType } from "../../../company/job-posts/[id]/_components/ShowJobDetailsById";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  data: JobAdminDashboardDataType[];
};

export default function ShowAllJobsForAdmin({ data }: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | JobStatusDataType>(
    "All",
  );

  const [typeFilter, setTypeFilter] = useState<string>("All");

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const jobs = useMemo(() => {
    let filteredJobs = data;

    if (searchTxt.trim() !== "") {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.jobTitle.toLowerCase().includes(searchTxt.toLowerCase()) ||
          job.companyName.toLowerCase().includes(searchTxt.toLowerCase()),
      );
    }

    if (statusFilter !== "All") {
      filteredJobs = filteredJobs.filter((job) => job.status == statusFilter);
    }

    if (typeFilter !== "All") {
      filteredJobs = filteredJobs.filter((job) =>
        job.type.includes(typeFilter),
      );
    }

    return filteredJobs;
  }, [data, searchTxt, statusFilter, typeFilter]);

  const updateSearchTxt = (txt: string) => {
    setSearchTxt(txt);
    setCurrentPage(1);
  };
  const updateStatusFilter = (status: "All" | JobStatusDataType) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };
  const updateTypeFilter = (type: string) => {
    setTypeFilter(type);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="space-y-3">
      {/* Filteration */}
      <JobsFilteration
        updateSearchTxt={updateSearchTxt}
        updateStatusFilter={updateStatusFilter}
        updateTypeFilter={updateTypeFilter}
      />

      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader className="px-2">
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="py-4 pl-4">Job Title</TableHead>
            <TableHead className="py-4">Category</TableHead>
            <TableHead className="py-4">Type</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Applications</TableHead>
            <TableHead className="py-4">Posted Date</TableHead>
            <TableHead className="py-4 w-40">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedJobs.length > 0 ? (
            paginatedJobs.map((job) => (
              <TableRow key={job.jobId} className="hover:bg-black/10">
                <TableCell className="pl-4">
                  <div className="flex items-center gap-2">
                    <div className="size-13 bg-input-bg rounded-full flex items-center justify-center">
                      <img
                        src={job.companyLogo}
                        alt={job.companyName}
                        className="w-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{job.jobTitle}</p>
                      <p className="text-sm text-black/80">{job.companyName}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <p className="font-medium">{job.category}</p>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-1 flex-wrap max-w-40">
                    {job.type.map((jobType) => (
                      <p
                        key={jobType}
                        className="text-xs px-3 py-1 w-fit rounded-md font-medium mt-1 bg-input-bg">
                        {jobType}
                      </p>
                    ))}
                  </div>
                </TableCell>

                <TableCell>
                  <JobStatusBadge jobStatus={job.status} />
                </TableCell>

                <TableCell className="font-medium">
                  {job.applications}
                </TableCell>

                <TableCell className="text-sm text-black/70">
                  {formatDate(job.postedDate)}
                </TableCell>

                <TableCell>
                  <Link
                    className="px-6 py-2 text-xs bg-main-color text-white rounded-sm flex items-center gap-1 w-fit"
                    href={`/dashboard/admin/jobs/${job.jobId}`}>
                    Details <ArrowRight className="size-4" />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                className="text-center p-5 text-base font-medium text-black/70 capitalize"
                colSpan={7}>
                {" "}
                No job posts found..
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={jobs.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}
