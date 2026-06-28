"use client";
import logoImage from "@images/WhiteLogo.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import UserDropDown from "./UserDropDown";
import SmallHeader from "./SmallHeader";
import Image from "next/image";
import DashboardHeaderIcons from "./DashboardHeaderIcons";
import { useUserStore } from "@/lib/UserStore";
import { useCompanyLinks } from "./hooks/useCompanyLinks";
import {
  adminLinks,
  employeeLinks,
  smallEmployeeLinks,
  adminSmallLinks,
} from "./links/DashboardHeaderLiks";

export default function DashboardHeader() {
  const currentPath = usePathname();
  const { userData } = useUserStore();
  const { companyLinks, smallCompanyLinks, canSeeCandidatesPage } =
    useCompanyLinks();

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
        <Image src={logoImage} alt="Logo" className="xl:w-30 w-26" />
      </Link>
      <nav className="p-1 bg-[#F6F6F6] text-black rounded-md lg:flex hidden">
        <ul className="flex items-center xl:gap-3 gap-1">
          {activeLinks.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              className={`flex items-center gap-1 xl:text-sm text-[0.8rem] xl:px-4 px-3 rounded-md font-medium py-3 hover:bg-black hover:text-white duration-300 ${currentPath == link.link ? "bg-main-dark text-white" : ""}`}>
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
        <DashboardHeaderIcons
          canSeeCandidatesPage={canSeeCandidatesPage}
          currentPath={currentPath}
        />
        <UserDropDown
          email={userData?.email}
          photoUrl={userData?.photoUrl}
          role={userData?.role}
        />
      </div>
    </header>
  );
}
