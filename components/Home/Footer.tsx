import Logo from "@/components/Logo";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-main-dark text-white md:p-15 p-5 md:pt-20 pt-10">
      <div className="flex flex-col gap-10 container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-start justify-between">
          <div className="flex flex-col gap-3">
            <Logo size="large" />
            <p className="text-sm text-white/80 md:w-3/4">
              Jobify is a smart job-matching platform that connects talented
              professionals with the right opportunities faster.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-white">Main Links:</p>
            <ul className="flex text-white/80 flex-col gap-2">
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

          <div className="flex flex-col gap-4">
            <p className="font-medium text-white">Auth Links:</p>
            <ul className="flex flex-col gap-2 text-white/80">
              <li>
                <Link href={"/"}>Login</Link>
              </li>
              <li>
                <Link href={"/"}>Register</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium text-white">Socials:</p>
            <ul className="flex flex-wrap gap-3">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex p-2 rounded-md text-white bg-[#1877f2]">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Linkedin"
                  className="flex p-2 rounded-md text-white bg-[#0a66c2]">
                  <FaLinkedin className="size-6 " />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex p-2 rounded-md text-white bg-[#c13584]">
                  <FaInstagram className="size-6 " />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Youtube"
                  className="flex p-2 rounded-md text-white bg-[#ff0000]">
                  <FaYoutube className="size-6" />
                </a>
              </li>
            </ul>
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
