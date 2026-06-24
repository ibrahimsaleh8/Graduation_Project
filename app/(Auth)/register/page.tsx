"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";

import { motion } from "framer-motion";
import Image from "next/image";
import registerImage from "@images/RegisterImage.png";
import Link from "next/link";
import RegisterUserForm from "@/components/forms/RegisterUserForm";
import RegisterCompaniesForm from "@/components/forms/RegisterCompaniesForm";
import Logo from "@/components/Logo";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home03Icon } from "@hugeicons/core-free-icons";

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen flex relative">
      {/* Image */}
      <div className="lg:w-[43%] h-screen">
        <div className="lg:w-[43%] h-screen fixed left-0 top-0 lg:flex overflow-hidden items-center justify-center hidden bg-second-dark">
          <span className="absolute left-0 top-0 w-full h-full bg-black/50"></span>
          <div className="w-full h-full object-cover object-center">
            <Image
              src={registerImage}
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
          <Logo size="small" />

          <p className="text-3xl font-medium">Create An Account</p>
          <p className="text-low-text text-center">
            Enter your details to join us (Employee or Company)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="md:w-3/4 w-full mx-auto flex flex-col gap-5">
          <Tabs defaultValue="employee">
            <TabsList className="bg-main-dark sm:w-fit w-full justify-between flex gap-4 px-4 rounded-lg py-2 items-center text-white">
              <TabsTrigger
                className="cursor-pointer w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-1.5 rounded-md"
                value="employee">
                Employee
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-1.5 rounded-md"
                value="company">
                Company
              </TabsTrigger>
            </TabsList>

            <div className="overflow-visible! mt-7">
              <TabsContent className="overflow-visible" value="employee">
                <RegisterUserForm />
              </TabsContent>
              <TabsContent value="company">
                <RegisterCompaniesForm />
              </TabsContent>
            </div>
          </Tabs>
          <p className="flex items-center gap-1 text-sm">
            {"Already have account ?"}
            <Link className="text-main-color font-medium" href={"/login"}>
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
