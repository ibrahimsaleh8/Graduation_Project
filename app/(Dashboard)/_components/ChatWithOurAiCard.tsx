"use client";

import { AiAudioIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import aiImage from "@images/ai_chatbot.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ChatWithOurAiCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative lg:w-1/2 w-full rounded-md overflow-hidden p-6 flex flex-col items-center border gap-6
                 bg-linear-to-br from-[#2563eb]/20 via-[#93c5fd]/10 to-[#e0f2fe]/10
                 transition-shadow duration-300">
      {/* Background Glow Circles */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-main-color/30 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-blue-400/20 blur-[100px] rounded-full animate-pulse-slow"></div>

      {/* Floating SVG Shapes */}
      <svg
        className="absolute -top-10 -right-10 w-32 h-32 opacity-20 rotate-25"
        viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#2563eb" />
      </svg>
      <svg
        className="absolute -bottom-8 -left-8 w-24 h-24 opacity-25 rotate-45"
        viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="#93c5fd" />
      </svg>

      {/* AI Image with floating animation */}
      <motion.div
        className="relative w-40 h-40 z-10 drop-shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
        <Image src={aiImage} alt="Chat bot" fill className="object-contain" />
      </motion.div>

      {/* CTA Button with scale hover */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10">
        <Link
          href="/dashboard/employee/ai-chat"
          className="flex items-center gap-2 px-6 py-2 bg-main-color text-white font-semibold
                     rounded-full text-sm hover:bg-blue-700 transition-colors duration-400 shadow-lg">
          <HugeiconsIcon icon={AiAudioIcon} className="w-5 h-5" />
          Chat with our AI
        </Link>
      </motion.div>
    </motion.div>
  );
}
