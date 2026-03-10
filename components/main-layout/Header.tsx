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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-100 bg-main-bg px-1 border-b md:px-8 py-2 ${scrolled ? "border-border" : "border-transparent"} duration-300`}>
      <div className="container mx-auto flex items-center gap-3 justify-between p-3">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Logo size="small" />
        </div>
        <nav className="md:flex hidden">
          <ul className="flex items-center gap-2 font-medium pl-10">
            {mainLinks.map((lin) => (
              <li key={lin.title}>
                <Link
                  className={`hover:bg-black hover:text-white px-4 py-2 duration-300 text-sm rounded-sm ${pathname == lin.link ? "bg-black text-white" : ""}`}
                  href={lin.link}>
                  {lin.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-10">
          <div className="md:flex hidden items-center gap-3 text-sm">
            <Link
              className="px-4 py-2 hover:opacity-75 duration-300 bg-black text-white rounded-md font-medium"
              href={"/login"}>
              Login
            </Link>
            <Link
              className="px-4 py-2 hover:opacity-75 duration-300 bg-main-color text-white rounded-md font-medium"
              href={"/register"}>
              Register
            </Link>
          </div>

          <SmallNavbar links={mainLinks} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
