import {
  CreditCardIcon,
  RoboticIcon,
  Settings02Icon,
  UserCircleIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function DashboardHeaderIcons({
  currentPath,
  canSeeCandidatesPage,
}: {
  currentPath: string;
  canSeeCandidatesPage: boolean;
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
            title="Ai Chat bot"
            href={"/dashboard/employee/ai-chat"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/employee/ai-chat" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={RoboticIcon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Settings"
            href={"/dashboard/employee/setting"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/employee/setting" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Settings02Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Profile"
            href={"/dashboard/employee/profile"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/employee/profile" ? "bg-white text-black" : ""}`}>
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
            title="Ai Chat"
            href={"/dashboard/company/ai-chat"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/ai-chat" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={RoboticIcon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          {canSeeCandidatesPage && (
            <Link
              title="Candidates"
              href={"/dashboard/company/candidates"}
              className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/candidates" ? "bg-white text-black" : ""}`}>
              <HugeiconsIcon
                icon={UserGroupIcon}
                className="size-5.5"
                strokeWidth={2}
              />
            </Link>
          )}
          <Link
            title="Settings"
            href={"/dashboard/company/setting"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/setting" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={Settings02Icon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            title="Profile"
            href={"/dashboard/company/profile"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/company/profile" ? "bg-white text-black" : ""}`}>
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
            title="Subscriptions"
            href={"/dashboard/admin/subscriptions"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/admin/subscriptions" ? "bg-white text-black" : ""}`}>
            <HugeiconsIcon
              icon={CreditCardIcon}
              className="size-5.5"
              strokeWidth={2}
            />
          </Link>

          <Link
            title="Settings"
            href={"/dashboard/admin/setting"}
            className={`size-10 bg-second-black-card flex items-center justify-center hover:bg-white hover:text-black rounded-full duration-300 ${currentPath == "/dashboard/admin/setting" ? "bg-white text-black" : ""}`}>
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
