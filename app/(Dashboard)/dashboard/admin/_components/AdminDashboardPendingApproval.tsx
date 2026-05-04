"use client";
import { motion } from "framer-motion";
import PendingApprovalCard from "./PendingApprovalCard";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function AdminDashboardPendingApproval() {
  return (
    <div className="lg:mt-8 mt-30 lg:w-1/2 w-full space-y-3">
      <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
        <p className="font-medium">Pending Approvals</p>
        <Link
          className="flex items-center gap-1 font-medium text-[0.85rem]"
          href={"/dashboard/company/job-posts"}>
          See All
          <HugeiconsIcon icon={CircleArrowRight01Icon} className="size-5" />
        </Link>
      </div>
      <div className="space-y-2.5">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}>
            <PendingApprovalCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
