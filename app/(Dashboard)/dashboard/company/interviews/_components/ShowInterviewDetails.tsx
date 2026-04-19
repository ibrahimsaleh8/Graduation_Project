"use client";

import Image from "next/image";
import userImage from "@images/user-image.png";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  ComputerVideoCallIcon,
  File02Icon,
  Mail01Icon,
  UserCircleIcon,
  Video01Icon,
} from "@hugeicons/core-free-icons";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function ShowInterviewDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 border-t py-4 px-2 pr-3 w-full overflow-y-auto">
      {/* User Data */}
      <div className="flex flex-col text-center w-full items-center gap-3 relative">
        <p className="absolute left-2 -top-1 px-4 py-2 text-xs font-medium bg-[#FCF4C3] w-fit rounded-sm text-[#a26f19] border border-[#FCF4C3]">
          Pending
        </p>

        <div className="size-20 rounded-full bg-amber-300">
          <Image
            src={userImage}
            alt="User Image"
            className="rounded-full w-full object-cover"
          />
        </div>

        <div className="text-lg space-y-px">
          <p className="font-medium underline">Ibrahim Saleh</p>
          <p className="text-sm">Frontend Developer</p>

          <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
            <p className="text-black/70 text-sm flex items-center gap-1 line-clamp-1">
              <HugeiconsIcon
                icon={Mail01Icon}
                className="size-4"
                strokeWidth={2}
              />
              <span className="max-w-40 md:max-w-50 text-ellipsis overflow-clip">
                ebrihm576@gmail.com
              </span>
            </p>

            <Link
              href={"/"}
              className="text-sm flex items-center gap-1 px-3 py-1.5 bg-main-color hover:opacity-85 duration-300 hover:underline text-white rounded-sm">
              <HugeiconsIcon
                icon={File02Icon}
                className="size-4"
                strokeWidth={2}
              />
              Show User CV
            </Link>
          </div>
        </div>
      </div>

      {/* Interview Details */}
      <div className="space-y-2">
        <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
            <HugeiconsIcon
              icon={Calendar02Icon}
              className="size-4"
              strokeWidth={2}
            />
            Date & Time:
          </p>
          <p>24 May 2026</p>
          <p>10:30 AM - 11:30 AM</p>
        </div>

        <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
            <HugeiconsIcon
              icon={UserCircleIcon}
              className="size-4"
              strokeWidth={2}
            />
            Interviewer
          </p>
          <p className="line-clamp-1 font-medium">Sarah Jenkins</p>
          <p>Technical Interview</p>
        </div>

        <div className="w-full bg-input-bg p-4 rounded-md space-y-1 text-sm flex flex-col items-center flex-wrap">
          <p className="flex items-center gap-1 text-sm text-black/90 mb-2">
            <HugeiconsIcon
              icon={Video01Icon}
              className="size-4"
              strokeWidth={2}
            />
            Interview Link:
          </p>
          <p className="line-clamp-1 max-w-60 text-ellipsis">
            zoom.us/j/827391283
          </p>

          <div className="flex items-center gap-3 flex-wrap mt-3">
            <a
              href={"/"}
              target="_blank"
              className="flex items-center gap-2 px-4 py-1.5 text-sm bg-purple-700 hover:bg-purple-900 duration-300 text-white rounded-sm">
              <HugeiconsIcon
                icon={ComputerVideoCallIcon}
                className="size-4"
                strokeWidth={2}
              />
              Join Meet
            </a>

            <button
              title="Copy Meet Link"
              className="bg-white rounded-sm px-4 py-1.5 cursor-pointer">
              <Copy className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
