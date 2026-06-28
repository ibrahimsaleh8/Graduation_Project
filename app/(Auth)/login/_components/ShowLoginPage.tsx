"use client";
import Image from "next/image";
import authImage from "@images/loginImage.webp";
import { motion } from "framer-motion";
import LoginUserForm from "@/components/forms/LoginUserForm";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home03Icon } from "@hugeicons/core-free-icons";
import logo from "@images/Logo.png";

export default function ShowLoginPage() {
  return (
    <div className="w-full min-h-screen flex">
      {/* Image */}
      <div className="lg:w-[43%] h-screen">
        <div className="lg:w-[43%] h-screen fixed left-0 top-0 lg:flex overflow-hidden items-center justify-center hidden bg-second-dark">
          <span className="absolute left-0 top-0 w-full h-full bg-black/50"></span>
          <div className="w-full h-full object-cover object-center">
            <Image
              src={authImage}
              alt="auth Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-md p-5 md:pt-36 py-20 flex flex-col gap-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
          }}
          className="bg-main-color text-white hover:bg-transparent hover:text-main-color border-2 hover:border-main-color duration-300 size-13 flex items-center justify-center rounded-full absolute right-7 top-7">
          <Link
            className="w-full h-full flex items-center justify-center"
            href={"/"}>
            <HugeiconsIcon icon={Home03Icon} className="size-6" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="flex flex-col gap-5 items-center justify-center w-full">
          <Link
            href={"/"}
            className="w-fit flex items-center gap-1.5 text-3xl font-medium">
            <Image src={logo} alt="logo" className={"md:w-9.5 w-8"} /> Jobify
          </Link>
          <p className="text-3xl font-medium">Welcome Back!</p>
          <p className="text-low-text text-center">
            Enter your details to login into your account (Employee or Company)
          </p>
        </motion.div>

        <LoginUserForm />
      </div>
    </div>
  );
}
