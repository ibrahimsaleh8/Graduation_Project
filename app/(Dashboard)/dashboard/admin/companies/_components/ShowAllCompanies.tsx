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
import CompaniesFilteration from "./CompaniesFilteration";
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

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  };
  const updateStatus = (value: "all" | CompanyStatusDataType) => {
    setVerificationFilter(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(companies.length / ITEMS_PER_PAGE);
  const paginatedCompanies = companies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

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
            {paginatedCompanies.length > 0 ? (
              paginatedCompanies.map((company) => (
                <TableRow
                  key={company.companyId}
                  className="hover:bg-black/5 transition-colors">
                  {/* Company */}
                  <TableCell className="pl-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-full bg-input-bg overflow-hidden border border-border-color">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-cover rounded-full"
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

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={companies.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}
