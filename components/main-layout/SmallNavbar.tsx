"use client";
import { Cancel01Icon, Menu11Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainLinksType } from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SmallNavbar({
  links,
  pathname,
}: {
  links: mainLinksType;
  pathname: string;
}) {
  const tl = useRef<gsap.core.Timeline>(null);
  const [open, setOpen] = useState(false);
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(".small-navbar", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.6,
      ease: "power2.inOut",
    });
  });
  useEffect(() => {
    if (open) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [open]);
  return (
    <div className="lg:hidden flex">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-1.5 border border-border-color rounded-full cursor-pointer">
        <HugeiconsIcon
          icon={open ? Cancel01Icon : Menu11Icon}
          className="w-5 h-5 text-black"
        />
        {/* <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5 text-black"/> */}
      </button>

      <div
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }}
        className="fixed z-100000 w-screen h-screen bg-main-bg left-0 top-17.75 border-t border-border-color overflow-hidden backdrop-blur-2xl small-navbar">
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
      </div>
    </div>
  );
}
