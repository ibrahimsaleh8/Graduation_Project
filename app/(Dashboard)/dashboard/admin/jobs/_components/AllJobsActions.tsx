"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Settings01Icon } from "@hugeicons/core-free-icons";
import JobDetailsForCheetContent from "./JobDetailsForCheetContent";
import AdminJobAction from "./AdminJobAction";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import JobCandidates from "./JobCandidates";

export default function AllJobsActions() {
  const [currentTab, setCurrentTab] = useState<"Details" | "Candidates">(
    "Details",
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-[0.77rem] h-9 w-30 flex items-center justify-center text-center px-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 gap-1.5">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} /> Details
        </Button>
      </SheetTrigger>

      <SheetContent className="border-black bg-white text-black! md:w-124 w-[90%] relative h-screen">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg text-black">
            Job Details
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        {/* Job Details */}
        <div className="w-full relative h-full flex flex-col overflow-hidden gap-3">
          {/* Tabs */}
          <div className="w-full flex items-center pb-4 relative">
            <button
              onClick={() => setCurrentTab("Details")}
              className={`w-full py-3 px-2 border-r border-black/5 md:text-sm text-xs cursor-pointer transition-colors duration-300 ${
                currentTab == "Details"
                  ? "bg-main-dark text-white"
                  : "bg-input-bg text-black"
              }`}>
              Details
            </button>

            <button
              onClick={() => setCurrentTab("Candidates")}
              className={`w-full py-3 px-2 md:text-sm text-xs cursor-pointer transition-colors duration-300 ${
                currentTab == "Candidates"
                  ? "bg-main-dark text-white"
                  : "bg-input-bg text-black"
              }`}>
              Candidates (30)
            </button>
          </div>

          {/* Tabs Content */}
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {currentTab === "Details" ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-3 absolute inset-0">
                  <JobDetailsForCheetContent />
                  <AdminJobAction />
                </motion.div>
              ) : (
                <motion.div
                  key="candidates"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 overflow-y-auto">
                  <JobCandidates />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
