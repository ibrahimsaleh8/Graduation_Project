import { Building06Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import googleImage from "@images/Icons/google.svg";
import { AppliedJobsResponseDataType } from "./ShowAllAppliedJobs";
import AppliedJobStatus from "./AppliedJobStatus";
import { formatDate } from "@/lib/FormatDate";

export default function AppliedJobCard({
  applicationStatus,
  appliedOn,
  companyName,
  jobTitle,
  jobType,
  location,
  logoUrl,
}: AppliedJobsResponseDataType) {
  return (
    <div className="w-full p-5 bg-white rounded-2xl border flex items-center gap-4 justify-between flex-wrap">
      {/* Left */}
      <div className="flex items-start gap-4 flex-wrap">
        {/* Company Logo */}
        <div className="size-14 bg-input-bg rounded-2xl flex items-center justify-center">
          <img
            src={logoUrl ?? googleImage}
            alt={companyName}
            width={1000}
            height={1000}
            className="size-8 object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-2xl font-medium">{jobTitle} </p>
          </div>

          <div className="flex items-center gap-1 text-[0.85rem] flex-wrap">
            <p className="flex items-center gap-1">
              <HugeiconsIcon icon={Building06Icon} className="size-4" />
              {companyName}
            </p>
            <p className="flex items-center gap-1">
              <HugeiconsIcon icon={Location01Icon} className="size-4" /> Egypt,
              {location}
            </p>
          </div>

          {/* Job Types */}
          <div className="flex items-center gap-3 flex-wrap mt-3">
            {jobType.length > 0 &&
              jobType.map((jobt) => (
                <p
                  key={jobt}
                  className="text-xs px-3 py-1.5 bg-input-bg rounded-md text-black capitalize">
                  {jobt}
                </p>
              ))}

            <p className="text-xs px-3 py-1.5 bg-input-bg rounded-md text-black">
              Remote
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-5 md:items-end items-start">
        <AppliedJobStatus status={applicationStatus} />
        <div className="text-[0.85rem]">
          <p className="font-medium">Applied on:</p>
          <p className="text-black/70">{formatDate(appliedOn.toString())}</p>
        </div>
      </div>
    </div>
  );
}
