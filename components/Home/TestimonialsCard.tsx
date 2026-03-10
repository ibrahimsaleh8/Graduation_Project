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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 * index }}
      viewport={{ once: true }}
      className="w-full rounded-2xl flex flex-col gap-3 items-center">
      {/* Image */}
      <div className="w-full h-100 bg-second-dark rounded-xl overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute bottom-0 left-0 w-full bg-black/5 text-white p-5 backdrop-blur-sm">
          <p className="text-xs">
            {'"'}
            {rate} {'"'}
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between gap-1 flex-wrap">
          <p className="text-xl">{name}</p>
          <p className="text-xs px-3 py-1 bg-main-color text-white rounded-full capitalize">
            {status}{" "}
          </p>
        </div>

        <p className="text-sm text-low-color">{job}</p>
        <div className="flex items-center gap-1">
          <HugeiconsIcon
            icon={StarIcon}
            className="fill-amber-400 text-amber-400 size-5"
          />
          <HugeiconsIcon
            icon={StarIcon}
            className="fill-amber-400 text-amber-400 size-5"
          />
          <HugeiconsIcon
            icon={StarIcon}
            className="fill-amber-400 text-amber-400 size-5"
          />
          <HugeiconsIcon
            icon={StarIcon}
            className="fill-amber-400 text-amber-400 size-5"
          />
          <HugeiconsIcon
            icon={StarIcon}
            className="fill-amber-400 text-amber-400 size-5"
          />
        </div>
      </div>
    </motion.div>
  );
}
