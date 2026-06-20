"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CompaniesFilteration from "./CompaniesFilteration";
import companyImage from "@images/HR.png";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import DisplayCompanyFullDetails from "./DisplayCompanyFullDetails";
import {
  CompanyAdminDashboardDataType,
  CompanyStatusDataType,
} from "./ShowAllCompaniesForAdmin";
import CompanyStatusBadge from "./CompanyStatusBadge";
import SubscriptionBadge from "./SubscriptionBadge";
import { formatDate } from "@/lib/FormatDate";

type Props = {
  companiesData: CompanyAdminDashboardDataType[];
  token: string;
};

export default function ShowAllCompanies({ companiesData, token }: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [verificationFilter, setVerificationFilter] = useState<
    "all" | CompanyStatusDataType
  >("all");

  const companies = useMemo(() => {
    let filteredCompanies = companiesData;

    if (verificationFilter !== "all") {
      filteredCompanies = filteredCompanies.filter(
        (company) => company.status == verificationFilter,
      );
    }

    if (searchTxt.trim() !== "") {
      filteredCompanies = filteredCompanies.filter(
        (company) =>
          company.name.toLowerCase().includes(searchTxt.toLowerCase()) ||
          company.email.toLowerCase().includes(searchTxt.toLowerCase()),
      );
    }
    return filteredCompanies;
  }, [companiesData, searchTxt, verificationFilter]);

  const updateSearchTxt = (value: string) => {
    setSearchTxt(value);
  };
  const updateStatus = (value: "all" | CompanyStatusDataType) => {
    setVerificationFilter(value);
  };

  return (
    <div className="space-y-4">
      <CompaniesFilteration
        updateStatus={updateStatus}
        updateSearchTxt={updateSearchTxt}
      />

      {/* Table */}
      <div className="rounded-2xl border border-border-color overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-main-dark hover:bg-main-dark border-none">
              <TableHead className="pl-5 py-4 text-white">Company</TableHead>
              <TableHead className="py-4 text-white">Email Address</TableHead>
              <TableHead className="py-4 text-white">Industry</TableHead>
              <TableHead className="py-4 text-white">Jobs </TableHead>
              <TableHead className="py-4 text-white">Status</TableHead>
              <TableHead className="py-4 text-white">Location</TableHead>
              <TableHead className="py-4 text-white">Joined Date</TableHead>
              <TableHead className="py-4 text-white">Subscription</TableHead>
              <TableHead className="py-4 text-white w-40">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {companies.length > 0 ? (
              companies.map((company) => (
                <TableRow
                  key={company.companyId}
                  className="hover:bg-black/5 transition-colors">
                  {/* Company */}
                  <TableCell className="pl-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-xl bg-input-bg overflow-hidden border border-border-color">
                        <Image
                          src={companyImage}
                          alt={company.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm">{company.name}</p>

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
                    <p className="text-sm font-medium">
                      {company.totalJobs} Jobs
                    </p>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <CompanyStatusBadge status={company.status} />
                  </TableCell>

                  {/* Location */}
                  <TableCell>
                    <p className="text-sm">{company.location}</p>
                  </TableCell>

                  {/* Joined Date */}
                  <TableCell>
                    <p className="text-sm text-black/60">
                      {formatDate(company.joinedDate)}
                    </p>
                  </TableCell>

                  {/* Subscription */}
                  <TableCell>
                    <SubscriptionBadge
                      subscription={company.subscriptionPlan}
                    />
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <DisplayCompanyFullDetails
                      token={token}
                      companyId={company.companyId}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="p-6 text-center font-medium text-black/70">
                  No Companies Found ...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
