"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import MessageCard from "./MessageCard";

type Props = {
  toggleShowEmailContent: (show: boolean) => void;
  toggleShowEmailContentForPC: (show: boolean) => void;
};

export default function ShowAllMessages({
  toggleShowEmailContent,
  toggleShowEmailContentForPC,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="xl:w-100 md:w-80 w-full h-full max-h-220 border-r overflow-y-auto pb-4 p-2">
      {/* Top */}
      <div className="p-4">
        <div className="flex items-center bg-input-bg rounded-md pl-3">
          <HugeiconsIcon icon={Search01Icon} className="text-black/40 size-5" />
          <Input
            type="text"
            placeholder="Search mails..."
            className="ring-0 focus-visible:ring-0 border-0"
          />
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-1.5 w-full">
        <MessageCard
          toggleShowEmailContentForPC={toggleShowEmailContentForPC}
          toggleShowEmailContent={toggleShowEmailContent}
        />
      </div>
    </motion.div>
  );
}
