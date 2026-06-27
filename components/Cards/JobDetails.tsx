/* eslint-disable @next/next/no-img-element */
"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import {
  Building03Icon,
  Calendar02Icon,
  CheckmarkCircle02Icon,
  Location01Icon,
  MoneyBag02Icon,
  WorkHistoryIcon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";
import JobDescription from "./JobDescription";
import ApplicationForm from "./ApplicationForm";
import logo from "@images/company-icon.png";
import { motion, AnimatePresence } from "framer-motion";
import { formatDate } from "@/lib/FormatDate";
import { JobDetailsByIdDataType } from "@/lib/useFetchJobDetailsById";
import SaveJobButton from "./SaveJobButton";
import Link from "next/link";
import SharJob from "./SharJob";
import { useUserStore } from "@/lib/UserStore";

type Props = {
  jobDetails: JobDetailsByIdDataType;
  jobId: string;
  token: string;
};

export default function JobDetails({ jobDetails, jobId, token }: Props) {
  const [showDescription, setShowDescription] = useState(true);
  const user = useUserStore((data) => data.userData);
  console.log(user);
  return (
    <div className="md:p-7 p-2 flex flex-col gap-6 pt-7 w-full">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="md:text-3xl text-2xl font-medium">{jobDetails.title}</p>

          <div className="flex items-center gap-2">
            {!user ? (
              <Link
                className="bg-main-color text-white hover:bg-main-color/90 rounded-md text-sm h-11 flex items-center justify-center px-4 py-2 "
                href={"/login"}>
                Login
              </Link>
            ) : user.role == "APPLICANT" && jobDetails.isApplied ? (
              <p className="text-sm px-4 text-green-700 font-medium flex items-center gap-1">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4.5"
                  strokeWidth={2}
                />
                Applied
              </p>
            ) : (
              user.role == "APPLICANT" && (
                <Button
                  onClick={() => setShowDescription((prev) => !prev)}
                  className="bg-main-color text-white hover:bg-main-color/90 rounded-md text-sm">
                  {showDescription ? "Apply Now" : "Show Description"}
                </Button>
              )
            )}

            <SaveJobButton
              isSaved={jobDetails.isSaved}
              jobId={jobId}
              size="small"
            />

            <SharJob jobId={jobId} />
          </div>
        </div>

        <div className="flex gap-7 items-start flex-col sm:flex-row flex-wrap">
          <img
            src={jobDetails.companyImage ?? logo.src}
            alt={jobDetails.companyName ?? jobDetails.title}
            width={1000}
            height={1000}
            className="w-20 rounded-full"
          />

          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4 flex-wrap">
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Building03Icon} className="size-5" />
                {jobDetails.companyName}
              </p>
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Location01Icon} className="size-5" />
                {jobDetails.jobLocation}
              </p>

              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={MoneyBag02Icon} className="size-5" />
                {jobDetails.minSalary}$ - {jobDetails.maxSalary}$
              </p>

              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={Calendar02Icon} className="size-5" />
                {formatDate(jobDetails.postedDate)}
              </p>
              <p className="flex items-center gap-1 text-sm text-low-color font-medium">
                <HugeiconsIcon icon={WorkHistoryIcon} className="size-5" />
                Experience:{"  "}
                {`${jobDetails.minExperience} Years - ${jobDetails.maxExperience} Years`}
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {[...jobDetails.jobTypes, ...jobDetails.workApproaches].map(
                (type) => (
                  <p
                    key={type}
                    className="px-3 py-1 bg-input-bg rounded-md text-sm font-medium">
                    {type}
                  </p>
                ),
              )}
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
              jobdesc={jobDetails.description}
              responsibility={jobDetails.responsibility}
              skills={jobDetails.requiredSkill}
            />
          </motion.div>
        ) : (
          <motion.div
            key="apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <ApplicationForm
              jobId={jobId}
              token={token}
              setShowDescription={setShowDescription}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
