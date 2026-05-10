"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import TableReSortData from "@/components/buttons/TableReSortData";
import CompaniesFilteration from "./CompaniesFilteration";

import companyImage from "@images/HR.png";

import {
  CheckmarkBadge01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";
import DisplayCompanyFullDetails from "./DisplayCompanyFullDetails";

const initialCompaniesData = [
  {
    id: 1,
    companyName: "Techify",
    email: "contact@techify.com",
    industry: "Software Development",
    location: "Cairo, Egypt",
    joinedDate: "May 3, 2026",
    status: "Verified",
    jobs: 14,
    subscription: "Premium",
  },
  {
    id: 2,
    companyName: "Pixel Studio",
    email: "hello@pixelstudio.com",
    industry: "Design Agency",
    location: "Giza, Egypt",
    joinedDate: "Apr 28, 2026",
    status: "Pending",
    jobs: 6,
    subscription: "Free",
  },
  {
    id: 3,
    companyName: "NextGen Solutions",
    email: "info@nextgen.com",
    industry: "IT Services",
    location: "Alexandria, Egypt",
    joinedDate: "Apr 22, 2026",
    status: "Blocked",
    jobs: 2,
    subscription: "Business",
  },
  {
    id: 4,
    companyName: "Cloudify",
    email: "team@cloudify.com",
    industry: "Cloud Computing",
    location: "Mansoura, Egypt",
    joinedDate: "Apr 18, 2026",
    status: "Verified",
    jobs: 18,
    subscription: "Enterprise",
  },
  {
    id: 5,
    companyName: "RemoteHub",
    email: "support@remotehub.com",
    industry: "Remote Hiring",
    location: "Remote",
    joinedDate: "Apr 12, 2026",
    status: "Pending",
    jobs: 9,
    subscription: "Premium",
  },
];

const subscriptionStyles: Record<string, string> = {
  Free: "bg-gray-100 text-gray-700",
  Premium: "bg-blue-100 text-blue-700",
  Business: "bg-purple-100 text-purple-700",
  Enterprise: "bg-orange-100 text-orange-700",
};

const statusStyles: Record<string, string> = {
  Verified: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Blocked: "bg-red-100 text-red-700",
};

export default function ShowAllCompanies() {
  const [companies, setCompanies] = useState(initialCompaniesData);
  const [isAsc, setIsAsc] = useState(true);

  const sortBy = (method: "name" | "location" | "joined_date" | "jobs") => {
    const sorted = [...companies].sort((a, b) => {
      if (method === "name") {
        return isAsc
          ? a.companyName.localeCompare(b.companyName)
          : b.companyName.localeCompare(a.companyName);
      }

      if (method === "location") {
        return isAsc
          ? a.location.localeCompare(b.location)
          : b.location.localeCompare(a.location);
      }

      if (method === "joined_date") {
        return isAsc
          ? new Date(a.joinedDate).getTime() - new Date(b.joinedDate).getTime()
          : new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime();
      }

      if (method === "jobs") {
        return isAsc ? a.jobs - b.jobs : b.jobs - a.jobs;
      }

      return 0;
    });

    setCompanies(sorted);
    setIsAsc(!isAsc);
  };

  return (
    <div className="space-y-4">
      <CompaniesFilteration />

      {/* Table */}
      <div className="rounded-2xl border border-border-color overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-main-dark hover:bg-main-dark border-none">
              <TableHead className="pl-5 py-4 text-white">
                <TableReSortData
                  label="Company"
                  sortFn={() => sortBy("name")}
                />
              </TableHead>

              <TableHead className="py-4 text-white">Email Address</TableHead>

              <TableHead className="py-4 text-white">Industry</TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData label="Jobs" sortFn={() => sortBy("jobs")} />
              </TableHead>

              <TableHead className="py-4 text-white">Status</TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData
                  label="Location"
                  sortFn={() => sortBy("location")}
                />
              </TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData
                  label="Joined Date"
                  sortFn={() => sortBy("joined_date")}
                />
              </TableHead>
              <TableHead className="py-4 text-white">Subscription</TableHead>

              <TableHead className="py-4 text-white w-40">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {companies.map((company) => (
              <TableRow
                key={company.id}
                className="hover:bg-black/5 transition-colors">
                {/* Company */}
                <TableCell className="pl-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-input-bg overflow-hidden border border-border-color">
                      <Image
                        src={companyImage}
                        alt={company.companyName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-medium text-sm">
                        {company.companyName}
                      </p>

                      <div className="flex items-center gap-1 mt-1">
                        <HugeiconsIcon
                          icon={Location01Icon}
                          size={14}
                          className="text-black/40"
                        />

                        <p className="text-xs text-black/50">Egypt</p>
                      </div>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>
                  <p className="text-sm text-black/70 max-w-52 truncate">
                    {company.email}
                  </p>
                </TableCell>

                {/* Industry */}
                <TableCell>
                  <p className="text-sm text-black/70">{company.industry}</p>
                </TableCell>

                {/* Jobs */}
                <TableCell>
                  <p className="text-sm font-medium">{company.jobs} Jobs</p>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <div
                    className={`px-4 py-2 rounded-xl text-xs font-medium w-fit flex items-center gap-2 ${
                      statusStyles[company.status]
                    }`}>
                    <span
                      className={`size-1.5 rounded-full ${
                        company.status === "Verified"
                          ? "bg-green-600"
                          : company.status === "Pending"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                      }`}
                    />

                    {company.status}

                    {company.status === "Verified" && (
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={14} />
                    )}
                  </div>
                </TableCell>

                {/* Location */}
                <TableCell>
                  <p className="text-sm">{company.location}</p>
                </TableCell>

                {/* Joined Date */}
                <TableCell>
                  <p className="text-sm text-black/60">{company.joinedDate}</p>
                </TableCell>

                {/* Subscription */}
                <TableCell>
                  <div
                    className={`px-3 py-2 rounded-lg text-xs font-medium w-fit ${
                      subscriptionStyles[company.subscription]
                    }`}>
                    {company.subscription}
                  </div>
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <DisplayCompanyFullDetails />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
