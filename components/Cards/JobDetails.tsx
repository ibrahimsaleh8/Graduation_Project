"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import {
  Bookmark01Icon,
  Building03Icon,
  Calendar02Icon,
  Location01Icon,
  MoneyBag02Icon,
  Share08Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import { useState } from "react";
import JobDescription from "./JobDescription";
import ApplicationForm from "./ApplicationForm";
import logo from "@images/company-icon.png";
import { motion, AnimatePresence } from "framer-motion";
import { JobsCardDataType } from "./JobCard";
import { formatDate } from "@/lib/FormatDate";

type Props = {
  jobDetails: JobsCardDataType;
};

export default function JobDetails({ jobDetails }: Props) {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <div className="md:p-7 p-2 flex flex-col gap-6 pt-7 w-full">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="md:text-3xl text-2xl font-medium">
            {jobDetails.jobTitle}
          </p>

          <div className="flex items-center gap-2">
            {!jobDetails.isApplied && (
              <Button
                onClick={() => setShowDescription((prev) => !prev)}
                className="bg-main-color text-white hover:bg-main-color/90 rounded-md text-sm">
                {showDescription ? "Apply Now" : "Show Description"}
              </Button>
            )}

            <Button className="bg-transparent hover:bg-black/5 text-black border border-border-color">
              <HugeiconsIcon icon={Bookmark01Icon} className="size-5!" />
            </Button>

            <Button className="bg-transparent hover:bg-black/5 text-black border border-border-color">
              <HugeiconsIcon icon={Share08Icon} className="size-5!" />
            </Button>
          </div>
        </div>

        <div className="flex gap-7 items-start flex-col sm:flex-row flex-wrap">
          <Image
            src={logo}
            alt={jobDetails.companyName}
            width={1000}
            height={1000}
            className="w-20"
          />

          <div className="flex flex-col gap-3">
            <div className="grid sm:grid-cols-2 gap-4 flex-wrap">
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Building03Icon} className="size-5" />
                {jobDetails.companyName}
              </p>
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Location01Icon} className="size-5" />
                {jobDetails.companyLocation}
              </p>

              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={MoneyBag02Icon} className="size-5" />
                {jobDetails.minSalary}$ - {jobDetails.maxSalary}$
              </p>

              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Calendar02Icon} className="size-5" />
                {formatDate(jobDetails.timeAgo.toString())}
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {jobDetails.jobType.map((type) => (
                <p
                  key={type}
                  className="px-3 py-1.5 bg-input-bg rounded-md text-sm font-medium">
                  {type}
                </p>
              ))}
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
            <JobDescription
              jobdesc={jobDetails.jobDescription}
              responsibility={jobDetails.jobRequirement}
            />
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
