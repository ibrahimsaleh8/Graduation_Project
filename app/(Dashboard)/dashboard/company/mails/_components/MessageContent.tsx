"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MarkAsReadEmailBtn from "./MarkAsReadEmailBtn";
import DeleteMailBtn from "./DeleteMailBtn";
import userImage from "@images/dashboard-user-image.png";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, SentIcon } from "@hugeicons/core-free-icons";
import { Paperclip } from "lucide-react";

type Props = {
  toggleShowEmailContent: (show: boolean) => void;
  showEmailContent: boolean;
};

export default function MessageContent({
  toggleShowEmailContent,
  showEmailContent,
}: Props) {
  return (
    <div className="flex-1 p-4 md:max-h-220 h-full md:flex flex-col gap-4 overflow-hidden">
      <Button
        onClick={() => toggleShowEmailContent(true)}
        className="mb-3 bg-black/5 border text-black hover:bg-black/10 w-fit flex md:hidden">
        <HugeiconsIcon icon={ArrowLeft02Icon} className="size-5!" />
      </Button>

      <AnimatePresence mode="wait">
        {showEmailContent && (
          <motion.div
            key="email-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-4 h-full ">
            {/* Top */}
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex gap-2">
                <div className="size-13 bg-white rounded-full">
                  <Image
                    src={userImage}
                    alt="user image"
                    width={1000}
                    height={1000}
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Ibrahim saleh</p>
                  <p className="text-black/50 text-sm">
                    Lead Recruiter at TechNova
                  </p>
                  <p className="text-sm text-black/50">
                    Oct 14, 2023 at 10:42 AM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <MarkAsReadEmailBtn />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark As Read</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <DeleteMailBtn />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete Mail</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <p className="text-xl font-bold">
              Frontend Engineer Role at Vercel - Next Steps
            </p>

            {/* Content */}
            <div className="space-y-3 h-130 overflow-y-auto">
              <p>Hi Ibrahim,</p>
              <p>
                Thanks for taking the time to speak with our engineering team
                yesterday. We were all very impressed by your background.
              </p>
              <p>
                {` We'd love to move forward to the final stage of our interview
                process.`}
              </p>
              <p>
                {`I've attached a brief document outlining what to expect in the
                technical round.`}
              </p>
              <p>
                Please let me know your availability for next Tuesday or
                Wednesday.
              </p>
              <p>
                Best regards, <br /> Sarah
              </p>
            </div>

            {/* Reply Box */}
            <div className="w-full p-2 rounded-2xl bg-input-bg mt-auto flex flex-col gap-2">
              <Textarea
                placeholder="Write your reply..."
                className="focus-visible:ring-0 ring-0 border-0 shadow-none resize-none max-h-40"
              />

              <div className="flex items-center justify-between gap-4 flex-wrap px-3">
                <Button className="bg-transparent text-black/50 hover:bg-black/5">
                  <Paperclip className="size-5" />
                </Button>

                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Send
                  <HugeiconsIcon icon={SentIcon} className="size-5!" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
