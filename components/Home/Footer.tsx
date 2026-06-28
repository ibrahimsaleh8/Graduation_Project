import logo from "@images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <div className="w-full sm:px-8 px-3 pt-20 bg-main-dark rounded-t-2xl text-white flex items-center gap-10">
      <div className="flex flex-col items-center gap-12 sm:p-6 p-3 w-full h-full">
        <Link
          href={"/"}
          className="sm:text-6xl text-2xl font-medium flex items-center sm:gap-4 gap-2.5">
          <Image src={logo} alt="Logo" className="sm:w-15 w-8 invert" /> Jobify
        </Link>

        <ul className="flex items-center gap-8 text-xl flex-wrap justify-center">
          <li>
            <Link
              href={"/about"}
              className="flex items-center text-sm sm:text-base gap-4 text-white/90 hover:text-white/60 duration-300">
              About
              <span className="size-2 rounded-full bg-[#464545]"></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/jobs"}
              className="flex items-center text-sm sm:text-base gap-4 text-white/90 hover:text-white/60 duration-300">
              Find Jobs
              <span className="size-2 rounded-full bg-[#464545]"></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/login"}
              className="flex items-center text-sm sm:text-base gap-4 text-white/90 hover:text-white/60 duration-300">
              Login
              <span className="size-2 rounded-full bg-[#464545]"></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/register"}
              className="flex items-center text-sm sm:text-base gap-4 text-white/90 hover:text-white/60 duration-300">
              Register
              <span className="size-2 rounded-full bg-[#464545]"></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="text-white/90 hover:text-white/60 duration-300 text-sm sm:text-base">
              Contact
            </Link>
          </li>
        </ul>
        <FooterSocials />
        <div className="w-full border-t border-white/20 p-4">
          <p className="text-center text-white/90">
            &#169; {new Date().getFullYear()} All right reserved
          </p>
        </div>
      </div>
    </div>
  );
}
