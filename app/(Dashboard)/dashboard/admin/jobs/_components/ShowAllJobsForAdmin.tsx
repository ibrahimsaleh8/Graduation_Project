"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import JobsFilteration from "./JobsFilteration";
import companyImage from "@images/Icons/apple-11.svg";
import Image from "next/image";
import AllJobsActions from "./AllJobsActions";
import TableReSortData from "@/components/buttons/TableReSortData";

const initialJobPostsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Egypt",
    category: "Engineering",
    location: "Cairo, Egypt",
    type: "Full-time",
    postedDate: "May 3, 2026",
    applicants: 15,
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "SoftWave",
    category: "Engineering",
    location: "Giza, Egypt",
    type: "Part-time",
    postedDate: "Apr 30, 2026",
    applicants: 8,
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "CreativeMinds",
    category: "Design",
    location: "Alexandria, Egypt",
    type: "Full-time",
    postedDate: "Apr 28, 2026",
    applicants: 22,
    status: "Pending",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataHub",
    category: "Analytics",
    location: "Cairo, Egypt",
    type: "Remote",
    postedDate: "Apr 25, 2026",
    applicants: 11,
    status: "Rejected",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudSys",
    category: "Infrastructure",
    location: "Cairo, Egypt",
    type: "Full-time",
    postedDate: "Apr 20, 2026",
    applicants: 5,
    status: "Active",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "LaunchPad",
    category: "Management",
    location: "Remote",
    type: "Full-time",
    postedDate: "Apr 18, 2026",
    applicants: 30,
    status: "Pending",
  },
  {
    id: 7,
    title: "Mobile Developer",
    company: "AppFactory",
    category: "Engineering",
    location: "Giza, Egypt",
    type: "Contract",
    postedDate: "Apr 15, 2026",
    applicants: 17,
    status: "Rejected",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Rejected: "bg-red-100 text-red-600",
};

export default function ShowAllJobsForAdmin() {
  const [jobs, setJobs] = useState(initialJobPostsData);
  const [isAsc, setIsAsc] = useState(true);

  const sortBy = (
    method: "title" | "category" | "applications" | "posted_date",
  ) => {
    const sorted = [...jobs].sort((a, b) => {
      if (method === "title") {
        return isAsc
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }

      if (method === "category") {
        return isAsc
          ? a.category.localeCompare(b.category)
          : b.category.localeCompare(a.category);
      }

      if (method === "applications") {
        return isAsc
          ? a.applicants - b.applicants
          : b.applicants - a.applicants;
      }

      if (method === "posted_date") {
        return isAsc
          ? new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
          : new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      }

      return 0;
    });

    setJobs(sorted);
    setIsAsc(!isAsc);
  };
  return (
    <div className="space-y-3">
      {/* Filteration */}
      <JobsFilteration />

      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader className="px-2">
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="py-4 pl-4">
              <TableReSortData
                label="Job Title"
                sortFn={() => sortBy("title")}
              />
            </TableHead>
            <TableHead className="py-4">
              <TableReSortData
                label="Category"
                sortFn={() => sortBy("category")}
              />
            </TableHead>
            <TableHead className="py-4">Type</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">
              <TableReSortData
                label="Applications"
                sortFn={() => sortBy("applications")}
              />
            </TableHead>
            <TableHead className="py-4">
              <TableReSortData
                label="Posted Date"
                sortFn={() => sortBy("posted_date")}
              />
            </TableHead>
            <TableHead className="py-4 w-40">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id} className="hover:bg-black/10">
              <TableCell className="pl-4">
                <div className="flex items-center gap-2">
                  <div className="size-13 bg-input-bg rounded-full flex items-center justify-center p-2">
                    <Image
                      src={companyImage}
                      alt={job.company}
                      className="w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm text-black/80">{job.company}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <p className="font-medium">{job.category}</p>
              </TableCell>

              <TableCell>
                <p className="text-xs px-3 py-1 w-fit rounded-md font-medium mt-1 bg-input-bg">
                  {job.type}
                </p>
              </TableCell>

              <TableCell>
                <p
                  className={`flex items-center gap-1 text-xs px-4 py-2 w-fit rounded-md font-medium ${
                    statusStyles[job.status] ?? "bg-gray-100 text-gray-500"
                  }`}>
                  <span
                    className={`size-1.5 rounded-full ${
                      job.status === "Active"
                        ? "bg-green-600"
                        : job.status === "Pending"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                    }`}></span>
                  {job.status}
                </p>
              </TableCell>

              <TableCell className="font-medium">{job.applicants}</TableCell>

              <TableCell className="text-sm text-black/70">
                {job.postedDate}
              </TableCell>

              <TableCell>
                <AllJobsActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
