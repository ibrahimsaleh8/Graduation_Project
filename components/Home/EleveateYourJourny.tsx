"use client";

import upperImage from "@images/ElevateImage.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function EleveateYourJourny() {
  return (
    <div className="py-20">
      <div className="w-full text-black flex border rounded-2xl max-w-[90%] mx-auto">
        <div className="overflow-hidden lg:clip-path-right-card flex rounded-tl-2xl lg:h-120 lg:rounded-tr-none lg:rounded-br-none rounded-br-2xl rounded-tr-2xl rounded-bl-2xl bg-input-bg flex-1 md:p-10 sm:p-5 p-3 flex-col items-center justify-between lg:items-start text-center lg:text-left xl:gap-3 gap-2.5 pt-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="xl:text-[2.8rem] lg:text-3xl text-2xl font-bold lg:w-[90%]">
            Elevate Your Professional Journey
            <br />
            Take Control of Your Professional Future
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="xl:text-xl leading-[1.7] sm:text-base text-sm font-medium opacity-70 lg:w-[80%] text-black/80 lg:line-clamp-5">
            We provide the tools and strategic guidance you need to navigate
            every stage of your career. From your next opportunity to long-term
            growth, we help you make smarter moves with proven strategies—so
            every step brings you closer to your professional goals, faster and
            with confidence.
          </motion.p>
          <Link
            href={"/register"}
            className="px-8 py-4 md:text-base text-sm hover:opacity-80 duration-500 bg-black text-white w-fit rounded-md font-medium">
            Register Now
          </Link>
        </div>

        <div className="relative clip-path-lefy-card w-130 lg:flex hidden justify-end items-center h-120 -ml-19.25 rounded-tr-2xl rounded-br-2xl bg-main-dark">
          <Image
            src={upperImage}
            alt="upperImage"
            className="w-3/4 hidden md:block -mt-6 drop-shadow-sm drop-shadow-main-color/20"
          />
        </div>
      </div>
    </div>
  );
}
