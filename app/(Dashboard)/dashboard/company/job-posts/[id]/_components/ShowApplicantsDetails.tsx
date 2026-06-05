import Image from "next/image";
import MatchCircle from "./MatchCircle";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  Cancel01Icon,
  CheckmarkCircle03Icon,
  LicenseIcon,
  Link04Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { CandidateApplicationDetailsDataType } from "./ApplicantsDetails";
import CandidateApplicationStatus from "./CandidateApplicationStatus";

type Props = {
  setShowDetails: Dispatch<SetStateAction<boolean>>;
  applicationData: CandidateApplicationDetailsDataType;
};
export default function ShowApplicantsDetails({
  setShowDetails,
  applicationData,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="space-y-2">
      {/* Top */}
      <div className="w-full flex items-center justify-between gap-4">
        {/* User Image & Name */}
        <div className="flex items-start gap-3">
          {/* User Image */}
          <div className="size-20 rounded-full bg-input-bg">
            <Image
              src={applicationData.portfolioLink}
              width={80}
              height={80}
              alt="User Image"
              className="rounded-full w-full object-cover"
            />
          </div>
          {/* User Info */}
          <div className="text-sm space-y-0.5">
            <p className="font-medium">{applicationData.name}</p>
            <p className="text-black/70 text-xs font-medium">
              {applicationData.email}
            </p>
            <p className="mt-1.5 text-sm flex items-center gap-1 pb-0 w-fit underline font-medium">
              <HugeiconsIcon
                icon={UserCircleIcon}
                className="size-4"
                strokeWidth={2}
              />
              Show Portfolio
            </p>
          </div>
        </div>
        {/* Match Bar */}
        <div className="flex flex-col gap-1 items-center">
          <MatchCircle percentage={80} size={70} strokeWidth={5} />
        </div>
      </div>

      {/* Details */}
      <div className="w-full bg-input-bg p-4 rounded-md flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-white text-black rounded-sm flex items-center justify-center">
            <HugeiconsIcon
              icon={LicenseIcon}
              strokeWidth={2}
              className="size-4.5"
            />
          </div>
          <div className="text-sm">
            <p>{applicationData.cvName}</p>
          </div>
        </div>

        <a
          href={applicationData.cvPath}
          target="_blank"
          className="flex items-center gap-1 px-4 py-2 text-xs bg-main-color text-white rounded-sm w-fit hover:bg-main-color/80 duration-300">
          <HugeiconsIcon icon={Link04Icon} className="size-4" strokeWidth={2} />{" "}
          View CV
        </a>
      </div>

      {/* Buttons */}
      <div className="space-y-2 mt-5">
        <div className="flex items-center justify-between gap-4">
          <CandidateApplicationStatus
            status={applicationData.applicationStatus}
          />
          <Button
            onClick={() => setShowDetails(false)}
            className="text-xs h-10 bg-purple-700 font-medium hover:bg-purple-800">
            <HugeiconsIcon
              icon={Calendar02Icon}
              strokeWidth={2}
              className="size-4.5"
            />
            Schedule Interview
          </Button>
        </div>

        <div className="flex items-center gap-1 w-full mt-6">
          <Button className="w-1/2 text-xs h-10 bg-blue-700 hover:bg-blue-800 ">
            <HugeiconsIcon
              icon={CheckmarkCircle03Icon}
              strokeWidth={2}
              className="size-4.5"
            />{" "}
            Mark As Reviewed
          </Button>
          <Button className="w-1/2 text-xs h-10 bg-red-600 hover:bg-red-700">
            <HugeiconsIcon
              icon={Cancel01Icon}
              strokeWidth={2}
              className="size-4.5"
            />{" "}
            Reject
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
