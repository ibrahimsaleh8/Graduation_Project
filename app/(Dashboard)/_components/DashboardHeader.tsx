import { SidebarTrigger } from "@/components/animate-ui/components/radix/sidebar";
import UserProfileDropDown from "./UserProfileDropDown";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Message01Icon, Settings02Icon } from "@hugeicons/core-free-icons";

export default function DashboardHeader() {
  return (
    <header className="p-4 flex items-center justify-between w-full sticky top-0 left-0 bg-white">
      <SidebarTrigger />
      <div className="flex items-center md:gap-4 gap-3">
        <Link
          href={"/"}
          className="bg-sidebar md:size-12 size-10 flex items-center justify-center rounded-full">
          <HugeiconsIcon icon={Settings02Icon} className="md:size-5.5 size-4" />
        </Link>
        <Link
          href={"/"}
          className="bg-sidebar md:size-12 size-10 flex items-center justify-center rounded-full">
          <HugeiconsIcon className="md:size-5.5 size-4" icon={Message01Icon} />
        </Link>

        <UserProfileDropDown />
      </div>
    </header>
  );
}
