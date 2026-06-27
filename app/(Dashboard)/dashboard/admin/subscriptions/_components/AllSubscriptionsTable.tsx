/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Settings01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import companyImage from "@images/company-icon.png";
import Link from "next/link";
import SubscriptionFilteration from "./SubscriptionFilteration";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { formatDate } from "@/lib/FormatDate";
import { useSubscriptions } from "./hooks/useSubscriptions";
import SubscriptionStatusBadge from "./SubscriptionStatusBadge";
import AllSubscriptionsTableSkeleton from "./AllSubscriptionsTableSkeleton";
import Pagination from "@/components/ui/pagination";
import { useState } from "react";

type Props = {
  token: string;
  plans: string[];
};

export default function AllSubscriptionsTable({ token, plans }: Props) {
  const {
    subscriptions,
    error,
    isLoading,
    UpdateStatusFilter: _UpdateStatusFilter,
    UpdatePlanFilter: _UpdatePlanFilter,
    UpdateSerchTxt: _UpdateSerchTxt,
  } = useSubscriptions({ token });

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const UpdateSerchTxt = (value: string) => {
    _UpdateSerchTxt(value);
    setCurrentPage(1);
  };
  const UpdateStatusFilter = (value: Parameters<typeof _UpdateStatusFilter>[0]) => {
    _UpdateStatusFilter(value);
    setCurrentPage(1);
  };
  const UpdatePlanFilter = (value: Parameters<typeof _UpdatePlanFilter>[0]) => {
    _UpdatePlanFilter(value);
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
    <AllSubscriptionsTableSkeleton />
  ) : (
    subscriptions && (
      <div className="space-y-3">
        <SubscriptionFilteration
          UpdatePlanFilter={UpdatePlanFilter}
          UpdateSerchTxt={UpdateSerchTxt}
          UpdateStatusFilter={UpdateStatusFilter}
          plans={plans}
        />

        <Table className="bg-white rounded-xl overflow-hidden inline-table">
          <TableHeader>
            <TableRow className="bg-main-dark hover:bg-main-dark">
              <TableHead className="pl-4 py-4">Company</TableHead>
              <TableHead className="py-4">Subscription Plan</TableHead>
              <TableHead className="py-4">Billing</TableHead>
              <TableHead className="py-4">Status</TableHead>
              <TableHead className="py-4">Start Date</TableHead>
              <TableHead className="py-4">Expiry Date</TableHead>
              <TableHead className="py-4 w-40">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {subscriptions.length > 0 ? (
              subscriptions
                .slice(
                  (currentPage - 1) * ITEMS_PER_PAGE,
                  currentPage * ITEMS_PER_PAGE,
                )
                .map((subscription) => (
                <TableRow
                  key={subscription.id}
                  className="hover:bg-black/5 transition-colors">
                  {/* Company */}
                  <TableCell className="pl-4">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-full bg-input-bg flex items-center justify-center overflow-hidden">
                        {subscription.logoUrl ? (
                          <img
                            src={subscription.logoUrl}
                            alt={subscription.companyName}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <Image
                            src={companyImage}
                            alt={subscription.companyName}
                            className="w-full h-full object-cover rounded-full"
                          />
                        )}
                      </div>

                      <div>
                        <p className="font-medium text-sm">
                          {subscription.companyName}
                        </p>

                        <p className="text-xs text-black/60 max-w-52 truncate">
                          {/* {subscription.companyEmail} */}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Subscription Plan */}
                  <TableCell>
                    <div>
                      <p className="text-sm font-medium">
                        {subscription.planName}
                      </p>

                      <p className="text-xs text-black/60">
                        {subscription.paidAmount}
                      </p>
                    </div>
                  </TableCell>

                  {/* Billing */}
                  <TableCell>
                    <p className="text-sm text-black/70">
                      {subscription.billingCycle}
                    </p>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <SubscriptionStatusBadge isActive={subscription.isActive} />
                  </TableCell>

                  {/* Start Date */}
                  <TableCell>
                    <p className="text-sm text-black/70">
                      {formatDate(subscription.startDate)}
                    </p>
                  </TableCell>

                  {/* Expiry Date */}
                  <TableCell>
                    <p className="text-sm text-black/70">
                      {formatDate(subscription.endDate)}
                    </p>
                  </TableCell>

                  {/* Action */}
                  <TableCell>
                    <Link
                      className="text-[0.77rem] w-fit flex items-center justify-center text-center px-8 py-2.5 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5"
                      href={`/dashboard/admin/subscriptions/${subscription.id}`}>
                      <HugeiconsIcon
                        icon={Settings01Icon}
                        strokeWidth={2}
                        className="size-4"
                      />
                      Details
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-black/5 transition-colors">
                <TableCell
                  className="p-5 text-center font-medium text-black/80"
                  colSpan={6}>
                  No Subscriptions Found...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(subscriptions.length / ITEMS_PER_PAGE)}
          onPageChange={setCurrentPage}
          totalItems={subscriptions.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
    )
  );
}
