"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import {
  Bookmark01Icon,
  Calendar02Icon,
  Location01Icon,
  MoneyBag02Icon,
  Share08Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import logo from "@images/Icons/microsoft-6.svg";
import { useState } from "react";
import JobDescription from "./JobDescription";
import ApplicationForm from "./ApplicationForm";

import { motion, AnimatePresence } from "framer-motion";

export default function JobDetails() {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <div className="md:p-7 p-2 flex flex-col gap-6 pt-7 w-full">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="md:text-3xl text-2xl font-medium">
            Fronted Developer React.js
          </p>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowDescription((prev) => !prev)}
              className="bg-main-color text-white hover:bg-main-color/90 rounded-full text-sm">
              {showDescription ? "Apply Now" : "Show Description"}
            </Button>

            <Button className="bg-transparent hover:bg-black/5 text-black border border-border-color">
              <HugeiconsIcon icon={Bookmark01Icon} className="size-5!" />
            </Button>

            <Button className="bg-transparent hover:bg-black/5 text-black border border-border-color">
              <HugeiconsIcon icon={Share08Icon} className="size-5!" />
            </Button>
          </div>
        </div>

        <div className="flex gap-7 items-start flex-wrap">
          <div className="flex flex-col gap-3">
            <Image
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              className="w-30"
            />
            <p className="font-medium text-main-color">Microsoft</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Location01Icon} className="size-5" />
                Cairo, Egypt
              </p>
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={MoneyBag02Icon} className="size-5" />
                240$/hr
              </p>
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Calendar02Icon} className="size-5" />3 day
                ago
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <p className="px-3 py-1.5 bg-input-bg rounded-md text-sm font-medium">
                Part-time
              </p>
              <p className="px-3 py-1.5 bg-input-bg rounded-md text-sm font-medium">
                Remote
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Section */}
      <AnimatePresence mode="wait">
        {showDescription ? (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <JobDescription />
          </motion.div>
        ) : (
          <motion.div
            key="apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <ApplicationForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
