"use client";
import { ChampionIcon, Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";

// Import all icons
import airbnb from "@images/Icons/airbnb.svg";
import discord from "@images/Icons/discord-wordmark-1.svg";
import Google from "@images/Icons/google-6.svg";
import microsoft from "@images/Icons/microsoft-6.svg";
import facebook from "@images/Icons/facebook-7.svg";
import Image from "next/image";
import StarsRates from "./StarsRates";
import { TypingAnimation } from "../ui/typing-animation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const icons = [airbnb, discord, Google, microsoft, facebook];

export default function Hero() {
  return (
    <div className="w-full relative rounded-2xl overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#DCECF9] via-[#eef8ff] to-[#f9fafb]" />

      {/* Topographic background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid slice">
        <path
          d="M-50,100 Q100,50 200,150 T450,100"
          fill="none"
          className="stroke-black/5"
        />
        <path
          d="M-50,200 Q150,150 250,250 T450,200"
          fill="none"
          className="stroke-black/5"
        />
        <path
          d="M-50,300 Q120,280 220,350 T450,320"
          fill="none"
          className="stroke-black/5"
        />
        <path
          d="M-50,400 Q180,350 280,450 T450,420"
          fill="none"
          className="stroke-black/5"
        />
        <path
          d="M-50,500 Q100,480 200,550 T450,520"
          fill="none"
          className="stroke-black/5"
        />
        <circle
          cx="100"
          cy="200"
          r="40"
          fill="none"
          className="stroke-black/5"
        />
        <circle
          cx="300"
          cy="400"
          r="60"
          fill="none"
          className="stroke-black/5"
        />
      </svg>
      {/* Your Content/Components */}
      <div className="w-full flex flex-col relative gap-10 md:py-30 py-20 h-full min-h-[calc(100vh-8rem)] rounded-2xl px-1">
        {/* Stars */}

        <StarsRates />
        {/* Text */}
        <div className="text-center font-medium flex flex-col gap-7">
          <div className="xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center font-medium  flex items-center flex-col justify-center">
            <p className="flex items-center gap-3 justify-center">
              Find Top
              <span className="hidden sm:flex relative rotate-23 rounded-md overflow-hidden text-black lg:w-13 lg:h-13 md:w-10 md:h-10 w-6 h-6 justify-center items-center ">
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{
                    height: "100%",
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full block absolute left-0 bottom-0 bg-main-color -z-1"></motion.span>
                <HugeiconsIcon
                  icon={ChampionIcon}
                  className="lg:w-9 lg:h-9 md:w-7 md:h-7 w-4 h-4 text-white"
                />
              </span>{" "}
              Employees To Bring
            </p>
            <p className="flex items-center gap-1">
              {" "}
              Your Vision To Life
              <span className="flex sm:hidden relative rotate-23 rounded-md overflow-hidden text-black w-7 h-7 justify-center items-center ">
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{
                    height: "100%",
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full block absolute left-0 bottom-0 bg-main-color -z-1"></motion.span>
                <HugeiconsIcon
                  icon={ChampionIcon}
                  className="w-5 h-5 text-white"
                />
              </span>
            </p>
          </div>

          <TypingAnimation
            duration={50}
            className="sm:text-base text-sm text-low-color capitalize">
            discover your next career move with confifence and ease
          </TypingAnimation>
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-3 px-3 max-w-4xl w-full bg-white mx-auto  rounded-2xl">
          <div className="flex items-center gap-1 p-2 w-full">
            <HugeiconsIcon icon={Search02Icon} />
            <Input
              type="text"
              placeholder="Search Job"
              className="bg-white w-full border-0 focus-visible:ring-0 shadow-none focus-visible:border-0"
            />
          </div>
          <Button className="px-8 h-12 w-full sm:w-36 hover:opacity-80 duration-300">
            Search
          </Button>
        </div>

        {/* <div className="flex items-center justify-center sm:gap-10 gap-3 mt-8 flex-wrap sm:flex-row flex-col">
          <motion.div
            initial={{ scale: 0, y: 20, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
            viewport={{ once: true }}>
            <Link
              className="md:px-8 md:py-4 flex items-center gap-1 px-6 py-3 text-sm md:text-base bg-black text-white rounded-md font-medium hover:opacity-80 duration-300"
              href={"/"}>
              <HugeiconsIcon icon={ArrowRightDoubleIcon} />
              Hire Employee
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0, y: 20, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}>
            <Link
              className="md:px-8 md:py-4 flex items-center gap-2 px-6 py-3 text-sm md:text-base border border-border-color bg-white text-black rounded-md font-medium hover:opacity-80 duration-300"
              href={"/"}>
              <HugeiconsIcon icon={JobLinkIcon} />
              Apply Jobs
            </Link>
          </motion.div>
        </div> */}

        <div className="w-full flex flex-col  gap-9 flex-wrap mt-auto">
          <p className="text-center font-medium ">Trusted By</p>
          <div className="w-full flex items-center justify-center gap-4 flex-wrap mt-auto">
            {icons.map((src, idx) => (
              <motion.div
                initial={{ scale: 0, y: 20, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", delay: idx * 0.3 }}
                viewport={{ once: true }}
                key={idx}>
                <Image
                  src={src}
                  alt="Brand Logo"
                  loading="lazy"
                  decoding="async"
                  className="mx-6 md:w-32 w-28 grayscale object-contain transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
