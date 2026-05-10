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

import companyImage from "@images/HR.png";

import {
  Building03Icon,
  Calendar02Icon,
  CheckmarkBadge01Icon,
  DocumentValidationIcon,
  Location01Icon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";
import VerificationsFilteration from "./VerificationsFilteration";
import VerificationRequestDetails from "./VerificationRequestDetails";

const initialVerificationRequests = [
  {
    id: 1,
    companyName: "Techify",
    email: "contact@techify.com",
    industry: "Software Development",
    location: "Cairo, Egypt",
    submittedDate: "May 8, 2026",
    documents: 4,
    companySize: "50 - 100 Employees",
    verificationStatus: "Pending Review",
    priority: "High",
  },
  {
    id: 2,
    companyName: "Pixel Studio",
    email: "hello@pixelstudio.com",
    industry: "Design Agency",
    location: "Giza, Egypt",
    submittedDate: "May 6, 2026",
    documents: 2,
    companySize: "10 - 20 Employees",
    verificationStatus: "Under Review",
    priority: "Medium",
  },
  {
    id: 3,
    companyName: "NextGen Solutions",
    email: "info@nextgen.com",
    industry: "IT Services",
    location: "Alexandria, Egypt",
    submittedDate: "May 5, 2026",
    documents: 5,
    companySize: "100+ Employees",
    verificationStatus: "Approved",
    priority: "Low",
  },
  {
    id: 4,
    companyName: "Cloudify",
    email: "team@cloudify.com",
    industry: "Cloud Computing",
    location: "Mansoura, Egypt",
    submittedDate: "May 2, 2026",
    documents: 3,
    companySize: "20 - 50 Employees",
    verificationStatus: "Rejected",
    priority: "High",
  },
];

const verificationStatusStyles: Record<string, string> = {
  "Pending Review": "bg-yellow-100 text-yellow-700",
  "Under Review": "bg-blue-100 text-blue-700",
  Approved: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function VerificationRequestes() {
  const [requests, setRequests] = useState(initialVerificationRequests);
  const [isAsc, setIsAsc] = useState(true);

  const sortBy = (
    method: "name" | "location" | "submitted_date" | "documents",
  ) => {
    const sorted = [...requests].sort((a, b) => {
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

      if (method === "submitted_date") {
        return isAsc
          ? new Date(a.submittedDate).getTime() -
              new Date(b.submittedDate).getTime()
          : new Date(b.submittedDate).getTime() -
              new Date(a.submittedDate).getTime();
      }

      if (method === "documents") {
        return isAsc ? a.documents - b.documents : b.documents - a.documents;
      }

      return 0;
    });

    setRequests(sorted);
    setIsAsc(!isAsc);
  };

  return (
    <div className="space-y-4">
      <VerificationsFilteration />

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

              <TableHead className="py-4 text-white">Industry</TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData
                  label="Documents"
                  sortFn={() => sortBy("documents")}
                />
              </TableHead>

              <TableHead className="py-4 text-white">
                Verification Status
              </TableHead>

              <TableHead className="py-4 text-white">
                <TableReSortData
                  label="Submitted Date"
                  sortFn={() => sortBy("submitted_date")}
                />
              </TableHead>

              <TableHead className="py-4 text-white w-52">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {requests.map((company) => (
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

                      <p className="text-xs text-black/50 mt-1">
                        {company.email}
                      </p>

                      <div className="flex items-center gap-1 mt-1">
                        <HugeiconsIcon
                          icon={Location01Icon}
                          size={13}
                          className="text-black/40"
                        />

                        <p className="text-xs text-black/50">
                          {company.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </TableCell>

                {/* Industry */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={Building03Icon}
                      size={16}
                      className="text-main-color"
                    />

                    <p className="text-sm text-black/70">{company.industry}</p>
                  </div>
                </TableCell>

                {/* Documents */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={DocumentValidationIcon}
                      size={16}
                      className="text-main-color"
                    />

                    <p className="text-sm font-medium">
                      {company.documents} Files
                    </p>
                  </div>
                </TableCell>

                {/* Verification Status */}
                <TableCell>
                  <div
                    className={`px-4 py-2 rounded-xl text-xs font-medium w-fit flex items-center gap-2 ${
                      verificationStatusStyles[company.verificationStatus]
                    }`}>
                    <span
                      className={`size-1.5 rounded-full ${
                        company.verificationStatus === "Approved"
                          ? "bg-green-600"
                          : company.verificationStatus === "Rejected"
                            ? "bg-red-600"
                            : company.verificationStatus === "Under Review"
                              ? "bg-blue-600"
                              : "bg-yellow-600"
                      }`}
                    />

                    {company.verificationStatus}

                    {company.verificationStatus === "Approved" && (
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={14} />
                    )}
                  </div>
                </TableCell>

                {/* Submitted Date */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={Calendar02Icon}
                      size={16}
                      className="text-black/40"
                    />

                    <p className="text-sm text-black/60">
                      {company.submittedDate}
                    </p>
                  </div>
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <VerificationRequestDetails />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
