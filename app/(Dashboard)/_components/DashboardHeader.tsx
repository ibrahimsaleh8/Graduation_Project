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
  Briefcase01Icon,
  Building01Icon,
  ChartHistogramIcon,
} from "@hugeicons/core-free-icons";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import UserDropDown from "./UserDropDown";
import SmallHeader from "./SmallHeader";
import Image from "next/image";
import DashboardHeaderIcons from "./DashboardHeaderIcons";

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

const companyLinks = [
  {
    link: "/dashboard/company",
    label: "Dashboard",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/company/job-posts",
    label: "Job Posts",
    icon: TaskDone01Icon,
  },
  {
    link: "/dashboard/company/create-job",
    label: "Create Job Post",
    icon: Briefcase01Icon,
  },
  {
    link: "/dashboard/company/interviews",
    label: "Interviews",
    icon: Calendar03Icon,
  },
];

const smallCompanyLinks = [
  {
    link: "/dashboard/company",
    label: "Dashboard",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/company/job-posts",
    label: "Job Posts",
    icon: TaskDone01Icon,
  },
  {
    link: "/dashboard/company/interviews",
    label: "Interviews",
    icon: Calendar03Icon,
  },
  {
    link: "/dashboard/company/mails",
    label: "Mails",
    icon: Mail01Icon,
  },
  {
    link: "/dashboard/company/profile",
    label: "Public Profile",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/company/setting",
    label: "Settings",
    icon: Settings02Icon,
  },
];

const adminLinks = [
  {
    link: "/dashboard/admin",
    label: "Overview",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/admin/jobs",
    label: "Jobs",
    icon: Briefcase01Icon,
  },
  {
    link: "/dashboard/admin/users",
    label: "Users",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/admin/companies",
    label: "Companies",
    icon: Building01Icon,
  },
];

const adminSmallLinks = [
  {
    link: "/dashboard/admin",
    label: "Overview",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/admin/users",
    label: "Users",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/admin/companies",
    label: "Companies",
    icon: Building01Icon,
  },
  {
    link: "/dashboard/admin/jobs",
    label: "Jobs",
    icon: Briefcase01Icon,
  },
  {
    link: "/dashboard/admin/reports",
    label: "Reports",
    icon: ChartHistogramIcon,
  },
  {
    link: "/dashboard/admin/mails",
    label: "Mails",
    icon: Mail01Icon,
  },
  {
    link: "/dashboard/company/setting",
    label: "Settings",
    icon: Settings02Icon,
  },
];

export default function DashboardHeader() {
  const currentPath = usePathname();
  console.log(currentPath.split("/")[2]);
  const activeLinks =
    currentPath.split("/")[2] === "employee"
      ? employeeLinks
      : currentPath.split("/")[2] === "admin"
        ? adminLinks
        : companyLinks;
  const activeSmallLinks =
    currentPath.split("/")[2] === "employee"
      ? smallEmployeeLinks
      : currentPath.split("/")[2] === "admin"
        ? adminSmallLinks
        : smallCompanyLinks;

  return (
    <header className="w-full flex items-center justify-between gap-4 bg-main-dark text-white p-4">
      <Link href={"/"}>
        <Image src={logoImage} alt="Logo" className="md:w-30 w-26" />
      </Link>
      <nav className="p-1 bg-[#F6F6F6] text-black rounded-md lg:flex hidden">
        <ul className="flex items-center xl:gap-3 gap-1">
          {activeLinks.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              className={`flex items-center gap-1 text-sm px-4 rounded-md font-medium py-3 hover:bg-black hover:text-white duration-300 ${currentPath == link.link ? "bg-main-dark text-white" : ""}`}>
              <HugeiconsIcon
                icon={link.icon}
                className="size-4.5"
                strokeWidth={2}
              />
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <SmallHeader links={activeSmallLinks} currentPath={currentPath} />
        <DashboardHeaderIcons currentPath={currentPath} />
        <UserDropDown />
      </div>
    </header>
  );
}
