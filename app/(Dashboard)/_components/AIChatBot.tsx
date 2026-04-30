"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Navigation03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Paperclip } from "lucide-react";
import aiChatImage from "@images/ai-chatbot-head.png";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  suggestedPrompit: string[];
};
export default function AIChatBot({ suggestedPrompit }: Props) {
  return (
    <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col justify-between">
      {/* Content */}
      <div className="w-full ">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex items-center flex-col gap-3 pt-12">
          {/* Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}>
            <Image
              src={aiChatImage}
              alt="Ai Chatbot"
              width={120}
              height={120}
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={item} className="space-y-2 text-center">
            <p className="text-4xl font-semibold">How can I help you today?</p>
            <p className="max-w-2xl text-black/60 text-sm">
              {"I'm"} your AI career assistant. I can help you find jobs,
              improve your CV, and prepare for interviews.
            </p>
          </motion.div>

          {/* Prompts */}
          <motion.div
            variants={item}
            className="space-y-3 flex items-center flex-col mt-10">
            <p className="text-lg font-medium text-black/80">Try asking:</p>

            <motion.ul
              variants={container}
              className="flex items-center justify-center gap-3 max-w-2xl flex-wrap">
              {suggestedPrompit.map((suggest) => (
                <motion.li
                  key={suggest}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm px-4 py-1.5 border rounded-full bg-white border-dashed cursor-pointer hover:bg-black hover:text-white transition">
                  {suggest}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full p-5 container mx-auto">
        <motion.div
          whileFocus={{ scale: 1.01 }}
          className="bg-white border rounded-2xl p-2 shadow-md transition">
          <Textarea
            className="h-20 w-full resize-none bg-transparent focus-visible:ring-0 border-0 shadow-none"
            placeholder="Ask anything..."
          />

          {/* Actions */}
          <div className="flex items-center gap-2 justify-end mt-2">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button className="bg-input-bg text-black/70 hover:bg-input-bg/50 border rounded-full">
                <Paperclip className="size-4.5" />
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button className="rounded-full hover:opacity-80">
                <HugeiconsIcon
                  icon={Navigation03Icon}
                  className="size-4.5"
                  strokeWidth={2}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
