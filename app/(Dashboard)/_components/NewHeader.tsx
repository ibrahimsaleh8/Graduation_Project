"use client";
import logoImage from "@images/WhiteLogo.png";

import Link from "next/link";
import {
  DashboardSquare03Icon,
  Bookmark02Icon,
  TaskDone01Icon,
  Message01Icon,
  UserCircleIcon,
  Settings02Icon,
  Calendar03Icon,
  Home03Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import UserDropDown from "./UserDropDown";
import SmallHeader from "./SmallHeader";
import Image from "next/image";

const employeeLinks = [
  {
    link: "/dashboard/employee",
    label: "Dashboard",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/employee/saved-jobs",
    label: "Saved Jobs",
    icon: Bookmark02Icon,
  },
  {
    link: "/dashboard/employee/applied-jobs",
    label: "Job Applications",
    icon: TaskDone01Icon,
  },
  {
    link: "/dashboard/employee/interviews",
    label: "Interviews",
    icon: Calendar03Icon,
  },
];
const smallEmployeeLinks = [
  {
    link: "/dashboard/employee",
    label: "Dashboard",
    icon: DashboardSquare03Icon,
  },
  {
    link: "/dashboard/employee/saved-jobs",
    label: "Saved Jobs",
    icon: Bookmark02Icon,
  },
  {
    link: "/dashboard/employee/applied-jobs",
    label: "Job Applications",
    icon: TaskDone01Icon,
  },
  {
    link: "/dashboard/employee/interviews",
    label: "Interviews",
    icon: Calendar03Icon,
  },
  {
    link: "/dashboard/employee/mails",
    label: "Mails",
    icon: Message01Icon,
  },
  {
    link: "/dashboard/employee/profile",
    label: "Public Profile",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/employee/setting",
    label: "Settings",
    icon: Settings02Icon,
  },
];
export default function DashboardHeader() {
  const currentPath = usePathname();

  return (
    <header className="w-full flex items-center justify-between gap-4 bg-main-dark text-white p-4">
      <Link href={"/"}>
        <Image src={logoImage} alt="Logo" className="md:w-30 w-26" />
      </Link>
      <nav className="p-1 bg-[#F6F6F6] text-black rounded-md lg:flex hidden">
        <ul className="flex items-center xl:gap-3 gap-1">
          {employeeLinks.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              className={`flex items-center gap-1 text-sm px-4 rounded-md font-medium py-3 hover:bg-black hover:text-white duration-300 ${currentPath == link.link ? "bg-main-dark text-white" : ""}`}>
              <HugeiconsIcon icon={link.icon} className="size-4.5" />
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <SmallHeader links={smallEmployeeLinks} currentPath={currentPath} />
        <div className="items-center gap-2 lg:flex hidden">
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
        </div>
        <UserDropDown />
      </div>
    </header>
  );
}
