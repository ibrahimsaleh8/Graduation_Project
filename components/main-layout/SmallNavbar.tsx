"use client";
import { Cancel01Icon, Menu11Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { mainLinksType } from "./Header";
export default function SmallNavbar({
  links,
  pathname,
}: {
  links: mainLinksType;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-1.5 border border-border-color rounded-full cursor-pointer">
        <HugeiconsIcon
          icon={open ? Cancel01Icon : Menu11Icon}
          className="w-5 h-5 text-black"
        />
        {/* <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5 text-black"/> */}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "100%" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          opacity: { delay: open ? 0 : 0.5, duration: 0.3 },
          height: { duration: 0.5 },
        }}
        className="fixed z-1000 w-full bg-main-bg/40 left-0 top-17.75 border-t border-border-color overflow-hidden backdrop-blur-2xl">
        <ul className="flex flex-col items-start gap-10 py-10 px-6 w-full">
          {links.map((lin) => (
            <li key={lin.title} className="w-full">
              <Link
                onClick={() => setOpen(false)}
                className={`px-4 hover:bg-main-color hover:text-white duration-300 py-1.5 text-lg w-full font-medium flex items-center gap-3 rounded-md ${pathname == lin.link ? "bg-main-color text-white" : ""}`}
                href={lin.link}>
                <HugeiconsIcon icon={lin.icon} className="w-5 h-5" />
                {lin.title}
              </Link>
            </li>
          ))}

          <div className="flex w-full text-base items-center gap-0 mt-9">
            <Link
              onClick={() => setOpen(false)}
              className="clip-path-right hover:opacity-75 duration-300 -mr-5 px-10 py-1.5 w-full text-center bg-black text-white rounded-md font-medium"
              href={"/login"}>
              Login
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="clip-path-left px-10 w-full hover:opacity-75 duration-300 py-1.5 text-center bg-main-color text-white rounded-md font-medium"
              href={"/register"}>
              Register
            </Link>
          </div>
        </ul>
      </motion.div>
    </div>
  );
}
