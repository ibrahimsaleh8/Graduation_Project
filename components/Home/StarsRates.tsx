"use client";

import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";

export default function StarsRates() {
  return (
    <div className="px-4 py-1.5 w-fit mx-auto bg-main-dark rounded-sm sm:rounded-full flex items-center sm:flex-row flex-col sm:gap-2 text-black">
      <div className="flex items-center text-yellow-500 gap-1">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
          viewport={{ once: true }}>
          <HugeiconsIcon icon={StarIcon} className="fill-yellow-500 w-4" />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 250,
            delay: 0.3,
          }}
          viewport={{ once: true }}>
          <HugeiconsIcon icon={StarIcon} className="fill-yellow-500 w-4" />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 250,
            delay: 0.6,
          }}
          viewport={{ once: true }}>
          <HugeiconsIcon icon={StarIcon} className="fill-yellow-500 w-4" />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 250,
            delay: 0.9,
          }}
          viewport={{ once: true }}>
          <HugeiconsIcon icon={StarIcon} className="fill-yellow-500 w-4" />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 1.3,
            type: "spring",
            stiffness: 250,
            delay: 1.2,
          }}
          viewport={{ once: true }}>
          <HugeiconsIcon icon={StarIcon} className="fill-yellow-500 w-4" />
        </motion.span>
      </div>
      <p className="text-sm font-semibold text-white">
        Rated 5/5 From over 600 reviews
      </p>
    </div>
  );
}
