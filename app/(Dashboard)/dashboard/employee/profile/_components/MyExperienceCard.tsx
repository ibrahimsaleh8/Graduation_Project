import { Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ExperienceType } from "./ShowMyEmployeeProfile";

export default function MyExperienceCard({
  companyName,
  description,
  endDate,
  jobTitle,
  jobType,
  location,
  startDate,
}: ExperienceType) {
  return (
    <div className="space-y-3 p-4">
      {/* Top */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-2">
          <div className="size-2 bg-black rounded-full mt-2.5"></div>
          <div>
            <p className="md:text-lg font-medium flex items-center gap-2">
              {jobTitle}
            </p>
            <p className="font-medium text-sm">
              {companyName} ,{jobType}
            </p>
            <p className="flex items-center gap-1 text-sm">
              <HugeiconsIcon icon={Location01Icon} className="size-4.5" />
              {location}
            </p>
          </div>
        </div>

        <p className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-md">
          {new Date(startDate).getFullYear()} -{" "}
          {new Date(endDate).getFullYear()}
        </p>
      </div>

      <div className="pl-4 text-sm md:text-base">
        <p>{description}</p>
      </div>
    </div>
  );
}
