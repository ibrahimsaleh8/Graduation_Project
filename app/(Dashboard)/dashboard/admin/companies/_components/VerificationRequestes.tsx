/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import companyImage from "@images/company-icon.png";
import {
  Building03Icon,
  Calendar02Icon,
  DocumentValidationIcon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import VerificationsFilteration from "./VerificationsFilteration";
import VerificationRequestDetails from "./VerificationRequestDetails";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import VerificationStatusBadge from "./VerificationStatusBadge";
import { formatDate } from "@/lib/FormatDate";
import { useVerificationRequest } from "./hooks/useVerificationRequest";
import VerificationRequestesSkeleton from "./VerificationRequestesSkeleton";
import Pagination from "@/components/ui/pagination";
import { useState } from "react";

type Props = {
  token: string;
};

export default function VerificationRequestes({ token }: Props) {
  const {
    error,
    isLoading,
    verificationRequests,
    updateSearchTxt: _updateSearchTxt,
    updateStatus: _updateStatus,
  } = useVerificationRequest({ token });

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const updateSearchTxt = (value: string) => {
    _updateSearchTxt(value);
    setCurrentPage(1);
  };
  const updateStatus = (value: Parameters<typeof _updateStatus>[0]) => {
    _updateStatus(value);
    setCurrentPage(1);
  };

  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <VerificationRequestesSkeleton />
  ) : (
    verificationRequests && (
      <div className="space-y-4">
        <VerificationsFilteration
          updateSearchTxt={updateSearchTxt}
          updateStatus={updateStatus}
        />

        <div className="rounded-2xl border border-border-color overflow-hidden bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-main-dark hover:bg-main-dark border-none">
                <TableHead className="pl-5 py-4 text-white">Company</TableHead>
                <TableHead className="py-4 text-white">Email</TableHead>
                <TableHead className="py-4 text-white">Industry</TableHead>
                <TableHead className="py-4 text-white">Documents</TableHead>
                <TableHead className="py-4 text-white">Status</TableHead>
                <TableHead className="py-4 text-white">
                  Submitted Date
                </TableHead>
                <TableHead className="py-4 text-white w-52">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {verificationRequests.length > 0 ? (
                verificationRequests
                  .slice(
                    (currentPage - 1) * ITEMS_PER_PAGE,
                    currentPage * ITEMS_PER_PAGE,
                  )
                  .map((request) => (
                    <TableRow
                      key={request.id}
                      className="hover:bg-black/5 transition-colors">
                      {/* Company */}
                      <TableCell className="pl-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-input-bg overflow-hidden border border-border-color">
                            {request.logo ? (
                              <img
                                src={request.logo}
                                alt={request.companyName}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Image
                                src={companyImage}
                                alt={request.companyName}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>

                          <div>
                            <p className="font-medium text-sm">
                              {request.companyName}
                            </p>

                            <div className="flex items-center gap-1 mt-1">
                              <HugeiconsIcon
                                icon={Location01Icon}
                                size={13}
                                className="text-black/60"
                              />

                              <p className="text-xs text-black/50">
                                {request.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      {/* Email */}
                      <TableCell>
                        <p className="text-sm ">{request.email}</p>
                      </TableCell>

                      {/* Industry */}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <HugeiconsIcon
                            icon={Building03Icon}
                            size={16}
                            className="text-main-color"
                          />

                          <p className="text-sm text-black/70">
                            {request.industry}
                          </p>
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
                            {request.documentsLenght} Files
                          </p>
                        </div>
                      </TableCell>

                      {/* Verification Status */}
                      <TableCell>
                        <VerificationStatusBadge status={request.status} />
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
                            {formatDate(request.createdAt)}
                          </p>
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell>
                        <VerificationRequestDetails
                          id={request.id}
                          token={token}
                        />
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="p-6 text-center font-medium text-black/70">
                    No Verification Requests Found ...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(verificationRequests.length / ITEMS_PER_PAGE)}
          onPageChange={setCurrentPage}
          totalItems={verificationRequests.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
    )
  );
}
