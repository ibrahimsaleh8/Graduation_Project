"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar03Icon,
  CreditCardIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
import Link from "next/link";
import SubscriptionFilteration from "./SubscriptionFilteration";

const initialSubscriptionsData = [
  {
    id: 1,
    companyName: "Techify Solutions",
    companyEmail: "contact@techify.com",
    plan: "Premium Plan",
    billingCycle: "Monthly",
    amount: "$49",
    employees: 25,
    startDate: "May 3, 2026",
    expiryDate: "Jun 3, 2026",
    status: "Active",
  },
  {
    id: 2,
    companyName: "VisionX Agency",
    companyEmail: "hello@visionx.com",
    plan: "Enterprise Plan",
    billingCycle: "Yearly",
    amount: "$499",
    employees: 80,
    startDate: "Apr 22, 2026",
    expiryDate: "Apr 22, 2027",
    status: "Expired",
  },
  {
    id: 3,
    companyName: "CodeCraft",
    companyEmail: "support@codecraft.com",
    plan: "Basic Plan",
    billingCycle: "Monthly",
    amount: "$19",
    employees: 12,
    startDate: "May 10, 2026",
    expiryDate: "Jun 10, 2026",
    status: "Pending",
  },
  {
    id: 4,
    companyName: "NextGen Labs",
    companyEmail: "team@nextgen.com",
    plan: "Premium Plan",
    billingCycle: "Yearly",
    amount: "$399",
    employees: 45,
    startDate: "Jan 15, 2026",
    expiryDate: "Jan 15, 2027",
    status: "Active",
  },
  {
    id: 5,
    companyName: "Digital Hive",
    companyEmail: "admin@digitalhive.com",
    plan: "Basic Plan",
    billingCycle: "Monthly",
    amount: "$19",
    employees: 8,
    startDate: "Apr 5, 2026",
    expiryDate: "May 5, 2026",
    status: "Cancelled",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Expired: "bg-red-100 text-red-700",
  Cancelled: "bg-gray-200 text-gray-700",
};

export default function AllSubscriptionsTable() {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptionsData);

  const [isAsc, setIsAsc] = useState(true);

  const sortBy = (
    method: "company" | "plan" | "start_date" | "expiry_date" | "employees",
  ) => {
    const sorted = [...subscriptions].sort((a, b) => {
      if (method === "company") {
        return isAsc
          ? a.companyName.localeCompare(b.companyName)
          : b.companyName.localeCompare(a.companyName);
      }

      if (method === "plan") {
        return isAsc
          ? a.plan.localeCompare(b.plan)
          : b.plan.localeCompare(a.plan);
      }

      if (method === "employees") {
        return isAsc ? a.employees - b.employees : b.employees - a.employees;
      }

      if (method === "start_date") {
        return isAsc
          ? new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          : new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      }

      if (method === "expiry_date") {
        return isAsc
          ? new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
          : new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime();
      }

      return 0;
    });

    setSubscriptions(sorted);
    setIsAsc(!isAsc);
  };

  return (
    <div className="space-y-3">
      <SubscriptionFilteration />

      <Table className="bg-white rounded-xl overflow-hidden inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark">
            <TableHead className="pl-4 py-4">
              <TableReSortData
                label="Company"
                sortFn={() => sortBy("company")}
              />
            </TableHead>

            <TableHead className="py-4">
              <TableReSortData
                label="Subscription Plan"
                sortFn={() => sortBy("plan")}
              />
            </TableHead>

            <TableHead className="py-4">Billing</TableHead>

            <TableHead className="py-4">
              <TableReSortData
                label="Employees"
                sortFn={() => sortBy("employees")}
              />
            </TableHead>

            <TableHead className="py-4">Status</TableHead>

            <TableHead className="py-4">
              <TableReSortData
                label="Start Date"
                sortFn={() => sortBy("start_date")}
              />
            </TableHead>

            <TableHead className="py-4">
              <TableReSortData
                label="Expiry Date"
                sortFn={() => sortBy("expiry_date")}
              />
            </TableHead>

            <TableHead className="py-4 w-40">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow
              key={subscription.id}
              className="hover:bg-black/5 transition-colors">
              {/* Company */}
              <TableCell className="pl-4">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-input-bg flex items-center justify-center overflow-hidden">
                    <Image
                      src={companyImage}
                      alt={subscription.companyName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-sm">
                      {subscription.companyName}
                    </p>

                    <p className="text-xs text-black/60 max-w-52 truncate">
                      {subscription.companyEmail}
                    </p>
                  </div>
                </div>
              </TableCell>

              {/* Subscription Plan */}
              <TableCell>
                <div>
                  <p className="text-sm font-medium">{subscription.plan}</p>

                  <p className="text-xs text-black/60">{subscription.amount}</p>
                </div>
              </TableCell>

              {/* Billing */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CreditCardIcon}
                    size={16}
                    className="text-black/60"
                  />

                  <p className="text-sm text-black/70">
                    {subscription.billingCycle}
                  </p>
                </div>
              </TableCell>

              {/* Employees */}
              <TableCell>
                <p className="text-sm text-black/70">
                  {subscription.employees} Employees
                </p>
              </TableCell>

              {/* Status */}
              <TableCell>
                <div
                  className={`px-4 py-2 rounded-lg text-xs font-medium w-fit flex items-center gap-2 ${
                    statusStyles[subscription.status]
                  }`}>
                  <span
                    className={`size-1.5 rounded-full ${
                      subscription.status === "Active"
                        ? "bg-green-600"
                        : subscription.status === "Pending"
                          ? "bg-yellow-600"
                          : subscription.status === "Expired"
                            ? "bg-red-600"
                            : "bg-gray-600"
                    }`}
                  />

                  {subscription.status}
                </div>
              </TableCell>

              {/* Start Date */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    size={16}
                    className="text-black/50"
                  />

                  <p className="text-sm text-black/70">
                    {subscription.startDate}
                  </p>
                </div>
              </TableCell>

              {/* Expiry Date */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    size={16}
                    className="text-black/50"
                  />

                  <p className="text-sm text-black/70">
                    {subscription.expiryDate}
                  </p>
                </div>
              </TableCell>

              {/* Action */}
              <TableCell>
                <Link
                  className="text-[0.77rem] w-fit flex items-center justify-center text-center px-8 py-2.5 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5"
                  href={`/dashboard/admin/subscriptions/${2}`}>
                  <HugeiconsIcon
                    icon={Settings01Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
