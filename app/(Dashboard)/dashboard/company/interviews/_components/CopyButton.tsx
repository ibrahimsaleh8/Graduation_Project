import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({
  interviewLink,
}: {
  interviewLink: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(interviewLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      title="Copy Meet Link"
      onClick={handleCopy}
      className={`rounded-sm px-4 py-1.5 cursor-pointer duration-300 ${
        copied ? "bg-green-600 text-white" : "bg-white"
      }`}>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}>
            <Check className="size-4" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}>
            <Copy className="size-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
