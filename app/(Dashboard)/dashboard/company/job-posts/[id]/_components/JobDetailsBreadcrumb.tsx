import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
type Props = {
  jobTitle: string;
  jobId: string;
  jobslink: string;
  dashboardLink: string;
};
export default function JobDetailsBreadcrumb({
  jobTitle,
  jobId,
  dashboardLink,
  jobslink,
}: Props) {
  return (
    <div className="flex items-center sm:text-sm text-xs gap-1 sm:pl-2">
      <Link href={dashboardLink} className="text-black/70 hover:text-black">
        Dashboard
      </Link>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        className="size-3.5"
        strokeWidth={2}
      />
      <Link href={jobslink} className="text-black/80 hover:text-black">
        Job Posts
      </Link>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        className="size-3.5"
        strokeWidth={2}
      />
      <Link
        href={`${jobslink}/${jobId}`}
        className="font-medium line-clamp-1 overflow-hidden text-ellipsis w-32 md:w-60">
        {jobTitle}
      </Link>
    </div>
  );
}
