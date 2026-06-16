"use client";
import { motion } from "framer-motion";
import PendingApprovalCard from "./PendingApprovalCard";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AdminDashboardPendingApprovalDataType } from "./ShowAdminDashboardOverview";
type Props = {
  pendingJobs: AdminDashboardPendingApprovalDataType[];
};
export default function AdminDashboardPendingApproval({ pendingJobs }: Props) {
  return (
    <div className="lg:mt-11 mt-5 xl:w-1/2 w-full space-y-3">
      <div className="flex justify-between gap-4 flex-wrap items-center pr-3">
        <p className="font-medium">Pending Approvals</p>
        <Link
          className="flex items-center gap-1 font-medium text-[0.85rem]"
          href={"/dashboard/admin/jobs"}>
          See All
          <HugeiconsIcon icon={CircleArrowRight01Icon} className="size-5" />
        </Link>
      </div>
      <div className="space-y-2.5">
        {pendingJobs.length > 0 ? (
          pendingJobs.map((job, i) => (
            <motion.div
              key={job.jobId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}>
              <PendingApprovalCard {...job} />
            </motion.div>
          ))
        ) : (
          <p className="text-center font-medium p-5 text-black/70">
            No Pending Jobs Found
          </p>
        )}
      </div>
    </div>
  );
}
