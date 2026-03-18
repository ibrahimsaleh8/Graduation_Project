"use client";

import Image, { StaticImageData } from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";

export type TestimonialsCardDataType = {
  image: StaticImageData;
  name: string;
  rate: string;
  job: string;
  status: "new member" | "Pro member";
  index: number;
};

export default function TestimonialsCard({
  image,
  job,
  name,
  rate,
  status,
  index,
}: TestimonialsCardDataType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 * index }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="
      group
      w-full
      rounded-2xl
      border border-border-color
      bg-white
      p-6
      flex flex-col gap-5
      shadow-sm
      hover:shadow-xl
      transition-all">
      {/* Quote */}
      <p className="text-sm text-low-color leading-relaxed">“{rate}”</p>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <HugeiconsIcon
            key={i}
            icon={StarIcon}
            className="fill-amber-400 text-amber-400 size-4"
          />
        ))}
      </div>

      {/* User */}
      <div className="flex items-center gap-4 mt-2">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-semibold text-main-dark">{name}</p>
          <p className="text-xs text-low-color">{job}</p>
        </div>

        {/* Status */}
        <span
          className="
          text-[11px]
          px-3 py-1
          rounded-full
          bg-main-color/10
          text-main-color
          font-medium
          capitalize">
          {status}
        </span>
      </div>
    </motion.div>
  );
}
