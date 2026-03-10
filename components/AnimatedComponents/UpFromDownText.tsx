"use client";
import { motion } from "motion/react";

type Props = {
  text: string;
  classes?: string;
};

export default function UpFromDownText({ text, classes }: Props) {
  return (
    <p
      className={`h-16 text-center overflow-hidden relative w-full mx-auto sm:min-w-100 ${classes ?? ""}`}>
      <motion.span
        initial={{ bottom: "-100%" }}
        whileInView={{ bottom: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute left-0 w-full h-full">
        {text}
      </motion.span>
    </p>
  );
}
