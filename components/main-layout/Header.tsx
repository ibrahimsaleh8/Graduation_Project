"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import SmallNavbar from "./SmallNavbar";
import {
  Home01Icon,
  Briefcase01Icon,
  InformationCircleIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";
import { useUserStore } from "@/lib/UserStore";
import { UserRoleDashboardLink } from "@/lib/UserRoleDashboardLink";
import { useLogoutHandler } from "@/lib/useLogoutHandler";
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

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { userData } = useUserStore();
  const { logoutFn } = useLogoutHandler();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky w-full top-0 z-100  bg-white backdrop-blur-md border-b md:px-8 px-5 py-3 ${scrolled ? "border-border" : "border-transparent"} duration-300`}>
      <div className="flex items-center gap-3 justify-between p-3">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Logo size="small" />
        </div>
        <nav className="lg:flex hidden">
          <ul className="flex items-center gap-2 font-semibold pl-10">
            {mainLinks.map((lin) => (
              <li key={lin.title}>
                <Link
                  className={`hover:text-black px-5 py-2 duration-300 ${pathname == lin.link ? "text-black" : "text-black/60"}`}
                  href={lin.link}>
                  {lin.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-10">
          <div className="hidden lg:flex w-full items-center gap-0">
            {userData ? (
              <>
                <Link
                  className="px-8 w-full duration-300 group-hover:bg-main-color/80 py-2 text-center bg-main-color text-white rounded-2xl font-medium mr-1 "
                  href={`${UserRoleDashboardLink(userData.role)}`}>
                  Dashboard
                </Link>
                <button
                  onClick={logoutFn}
                  className="px-8 w-full duration-300 group-hover:bg-red-700 py-2 text-center bg-red-600 text-white rounded-2xl font-medium cursor-pointer">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="pr-6 text-center font-semibold"
                  href={"/login"}>
                  Login
                </Link>
                <Link className="flex items-end group" href={"/register"}>
                  <span className="px-8 w-full duration-300 group-hover:bg-main-color/80 py-2 text-center bg-main-color text-white rounded-2xl font-medium">
                    Register
                  </span>
                  <span className="w-12 flex items-center duration-300 group-hover:bg-main-color/80 justify-center text-main-color bg-main-color rounded-full">
                    <svg
                      id="uuid-ef17ad8d-6f20-44a3-8a22-5c0ca330cf8e"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 77.85 77.85">
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              ".uuid-2d3ad023-e644-408e-9446-777fdb053c0a{fill:none;stroke:none;stroke-miterlimit:8.01;stroke-width:1.6px;}",
                          }}
                        />
                      </defs>

                      <g id="uuid-76f663d7-c443-4f89-b5ff-f74fac38013d">
                        <g>
                          <path
                            fill="#ffff"
                            d="M44.45,29.47c-.88,.08-1.36,.08-1.76,.24-4.57,.96-8.65-.24-12.49-2.64-1.44-.88-1.44-1.2-.48-2.64,.4-.64,.8-1.36,1.28-2,.96-1.44,1.36-1.6,2.72-.48,3.36,2.72,7.21,3.92,11.53,3.2,2.24-.32,4.33-1.2,6.09-2.64,.88-.72,1.6-.64,2.4,.16,.08,.08,.16,.16,.16,.24,2.8,2.8,2.24,2.16,.64,4.89-2.8,4.73-2.96,9.53,0,14.26,.56,.88,1.12,1.84,1.76,2.64,.64,.8,.48,1.44-.32,1.92-.64,.4-1.2,.8-1.84,1.2-2.16,1.36-2.72,1.2-3.92-1.04-1.84-3.6-2.64-7.37-2.08-11.37,.08-.48,.08-.96,.08-1.52-.16-.08-.24-.16-.4-.16-1.04,1.04-2.16,2.08-3.28,3.2-2.48,2.48-4.89,4.97-7.37,7.45-3.68,3.68-7.29,7.37-10.97,11.05-.64,.64-1.84,1.44-2.16,1.28-1.12-.72-2.08-1.84-2.88-2.96-.16-.16,.4-1.12,.8-1.52,5.77-5.77,11.53-11.53,17.3-17.3,1.36-1.36,2.72-2.64,4-4,.4-.4,.64-.72,1.2-1.44h0Z"
                          />

                          <path
                            className="uuid-2d3ad023-e644-408e-9446-777fdb053c0a"
                            d="M77.05,38.93C77.05,17.86,59.99,.8,38.93,.8S.8,17.86,.8,38.93s17.06,38.12,38.12,38.12,38.12-17.06,38.12-38.12Z"
                          />
                        </g>
                      </g>
                    </svg>
                    {/* <Image src={flesher} alt="Flesher" className="size-full" /> */}
                  </span>
                </Link>
              </>
            )}
          </div>

          <SmallNavbar
            links={mainLinks}
            pathname={pathname}
            userData={userData}
          />
        </div>
      </div>
    </header>
  );
}
