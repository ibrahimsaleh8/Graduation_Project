"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
};
export default function HowWorksCard({
  description,
  icon,
  title,
  delay,
}: Props) {
  return (
    <motion.div
      initial={{ scale: 0, y: 20, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", delay }}
      viewport={{ once: true }}
      className="w-full bg-second-dark rounded-2xl p-5 flex flex-col gap-4 group">
      <div className="md:w-16 md:h-16 w-13 h-13 border border-main-color duration-300 rounded-full bg-main-color group-hover:bg-second-dark group-hover:text-main-color text-black -mt-12.5 mx-auto flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-4 text-center items-center px-3">
        <p className="text-3xl font-medium">{title}</p>
        <p className="text-low-color">{description}</p>
      </div>
    </motion.div>
  );
}
