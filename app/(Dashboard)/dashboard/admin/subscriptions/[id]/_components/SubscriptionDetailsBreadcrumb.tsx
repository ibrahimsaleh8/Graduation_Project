import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function SubscriptionDetailsBreadcrumb() {
  return (
    <div className="flex items-center sm:text-sm text-xs gap-1">
      <Link
        href={"/dashboard/admin"}
        className="text-black/70 hover:text-black">
        Dashboard
      </Link>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        className="size-3.5"
        strokeWidth={2}
      />
      <Link
        href={"/dashboard/admin/subscriptions"}
        className="text-black/80 hover:text-black">
        Subscriptions
      </Link>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        className="size-3.5"
        strokeWidth={2}
      />
      <Link
        href={"/dashboard/admin/subscriptions/2"}
        className="font-medium line-clamp-1 overflow-hidden text-ellipsis w-32 md:w-60">
        Techify Solutions
      </Link>
    </div>
  );
}
