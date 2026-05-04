import {
  BarChartHorizontalIcon,
  Mail01Icon,
  Settings02Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function DashboardHeaderIcons({
  currentPath,
}: {
  currentPath: string;
}) {
  const activeLinks: "employee" | "company" | "admin" =
    currentPath.split("/")[2] === "employee"
      ? "employee"
      : currentPath.split("/")[2] === "company"
        ? "company"
        : "admin";

  return (
    <div className="items-center gap-2 lg:flex hidden">
      {activeLinks === "employee" ? (
        <>
          <Link
            title="Mail"
            href={"/dashboard/employee/mails"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/employee/mails" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Mail01Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Settings"
            href={"/dashboard/employee/setting"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/employee/setting" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Settings02Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Profile"
            href={"/dashboard/employee/profile"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/employee/profile" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={UserCircleIcon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
        </>
      ) : activeLinks == "company" ? (
        <>
          <Link
            title="Mail"
            href={"/dashboard/company/mails"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/mails" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Mail01Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Settings"
            href={"/dashboard/company/setting"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/setting" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Settings02Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Profile"
            href={"/dashboard/company/profile"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/profile" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={UserCircleIcon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
        </>
      ) : (
        <>
          <Link
            title="Reports"
            href={"/dashboard/admin/reports"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/admin/reports" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={BarChartHorizontalIcon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Mail"
            href={"/dashboard/admin/mails"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/admin/mails" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Mail01Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Settings"
            href={"/dashboard/admin/setting"}
            className={`size-10 flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/admin/setting" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Settings02Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
        </>
      )}
    </div>
  );
}
