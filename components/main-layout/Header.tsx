"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "@images/Logo.png";
import SmallNavbar from "./SmallNavbar";
import {
  Home01Icon,
  Briefcase01Icon,
  InformationCircleIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { useUserStore } from "@/lib/UserStore";
import { UserRoleDashboardLink } from "@/lib/UserRoleDashboardLink";
import { useLogoutHandler } from "@/lib/useLogoutHandler";
import Image from "next/image";
const mainLinks = [
  {
    title: "Home",
    link: "/",
    icon: Home01Icon,
  },
  {
    title: "Jobs",
    link: "/jobs",
    icon: Briefcase01Icon,
  },
  {
    title: "About",
    link: "/about",
    icon: InformationCircleIcon,
  },
  {
    title: "Contact",
    link: "/contact",
    icon: Mail01Icon,
  },
];
export type mainLinksType = typeof mainLinks;

function isActiveLink(linkHref: string, currentPath: string): boolean {
  if (currentPath === linkHref) return true;
  const isRootLink = linkHref.split("/").filter(Boolean).length === 0; // only "/"
  if (isRootLink) return false;
  return currentPath.startsWith(linkHref + "/");
}

export default function Header() {
  const pathname = usePathname();

  const { userData } = useUserStore();
  const { logoutFn } = useLogoutHandler();

  return (
    <header
      className={`md:container md:px-9 px-3 py-4 flex items-center md:rounded-md gap-3 fixed md:left-1/2 md:-translate-x-1/2 left-0 translate-x-0 w-full justify-between md:top-2 bg-white z-1000000 duration-300`}>
      <Link href={"/"} className="text-2xl font-bold flex items-center gap-3">
        <Image
          src={logoImage}
          alt="Logo"
          className="sm:w-10 w-8"
          loading="eager"
        />
        Jobify
      </Link>
      <nav className="md:flex hidden">
        <ul className="flex items-center gap-1.5 font-medium text-sm">
          {mainLinks.map((lin) => (
            <li key={lin.title}>
              <Link
                className={`px-4 py-2 hover:text-black duration-300 ${isActiveLink(lin.link, pathname) ? "text-black" : "text-black/70"}`}
                href={lin.link}>
                {lin.title}
              </Link>
            </li>
          ))}

          {userData ? (
            <>
              <li>
                <Link
                  className="px-4 py-2 bg-main-color text-white rounded-md hover:bg-main-color/90 duration-300"
                  href={`${UserRoleDashboardLink(userData.role)}`}>
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={logoutFn}
                  className="px-4 py-2 w-full duration-300 hover:bg-red-500 text-center bg-red-600 text-white rounded-md font-medium cursor-pointer">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="px-3 py-1 hover:bg-black border hover:border-black border-transparent hover:text-white duration-200 rounded-md"
                  href={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-1 border border-black text-sm rounded-md hover:bg-black hover:text-white duration-200"
                  href={"/register"}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <SmallNavbar links={mainLinks} pathname={pathname} userData={userData} />
    </header>
  );
}
