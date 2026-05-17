import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-main-dark text-white md:p-15 p-5 md:pt-20 pt-10 md:px-10 px-3">
      <div className="flex flex-col gap-10">
        <div className="flex items-end gap-10 md:flex-row flex-col">
          <div className="flex items-start flex-col w-full gap-8">
            <div className="flex flex-col gap-3 w-fit">
              <p className="xl:text-[10rem] lg:text-8xl md:text-7xl text-4xl font-medium">
                Jobify
              </p>
              <p className="text-white/80 max-w-2xl">
                Jobify is a smart job-matching platform that connects talented
                professionals with the right opportunities faster.
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-start gap-4 text-xl">
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1 underline">
                Facebook
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1 underline">
                Twitter
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1 underline">
                Instagram
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1 underline">
                Linkedin
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>

          <div className="flex items-start w-full gap-10 md:flex-row flex-col">
            <div className="flex flex-col gap-4 w-full">
              <p className="font-medium text-xl text-white">Main Links:</p>
              <ul className="flex text-white/80 flex-col gap-4 text-xl">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>Jobs</Link>
                </li>
                <li>
                  <Link href={"/"}>About</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <p className="font-medium text-white text-xl">Auth Links:</p>
              <ul className="flex flex-col gap-4 text-xl text-white/80">
                <li>
                  <Link href={"/"}>Login</Link>
                </li>
                <li>
                  <Link href={"/"}>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/40 flex items-center sm:justify-between flex-wrap justify-center">
          <p className="text-white/80">@Copyright 2026 Jobify</p>
          <p>
            Developed with ❤️ By <span className="text-sky-300">Our Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
