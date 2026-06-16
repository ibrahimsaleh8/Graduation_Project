/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AdminDashboardPendingApprovalDataType } from "./ShowAdminDashboardOverview";
import { formatDate } from "@/lib/FormatDate";
import { ArrowRight } from "lucide-react";

export default function PendingApprovalCard({
  logo,
  createdAt,
  jobId,
  jobTitle,
}: AdminDashboardPendingApprovalDataType) {
  return (
    <Link
      href={`/dashboard/admin/jobs/${jobId}`}
      className="flex md:items-center md:flex-row flex-col justify-between gap-5 pb-3 md:pb-1 border-b hover:bg-white px-2 duration-200">
      {/* Logo */}
      <div className="flex items-center flex-col md:flex-row gap-4">
        <div className="size-14 flex items-center justify-center bg-white rounded-full overflow-hidden">
          <img
            src={logo}
            alt={jobTitle + jobId}
            className="w-full object-cover rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="font-medium">{jobTitle}</p>
          <p className="text-sm text-black/70">{formatDate(createdAt)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="px-6 py-2 bg-main-color text-white text-xs rounded-sm flex gap-2">
          Show
          <ArrowRight className="size-4" />
        </p>
      </div>
    </Link>
  );
}
