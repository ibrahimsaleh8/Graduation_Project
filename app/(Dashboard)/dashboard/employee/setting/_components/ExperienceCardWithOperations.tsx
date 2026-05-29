import {
  Delete02Icon,
  Location01Icon,
  PencilEdit02Icon,
  WorkHistoryIcon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Settings2 } from "lucide-react";

import AlertModel from "@/components/main-layout/AlertModel";

import DeleteExperienceCard from "./Delete_Components/DeleteExperienceCard";

import { ExperienceType } from "@/hooks/useGetEmployeeProfile";
import ExperienceForm from "./Add_Components/ExperienceForm";

type Props = {
  experience: ExperienceType;
  token: string;
};

export default function ExperienceCardWithOperations({
  experience,
  token,
}: Props) {
  const { companyName, jobTitle, location, startDate, endDate, description } =
    experience;

  const formattedStartDate = new Date(startDate).getFullYear();
  const formattedEndDate = endDate
    ? new Date(endDate).getFullYear()
    : "Present";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-md
        border
        border-border-color
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:shadow-md
      ">
      {/* Top */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        {/* Left Content */}
        <div className="flex items-start gap-4">
          <div
            className="
              hidden
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-main-color/10
              md:flex
              shrink-0
            ">
            <HugeiconsIcon
              icon={WorkHistoryIcon}
              className="size-6 text-main-color"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-black">{jobTitle}</h3>

            <p className="text-sm font-medium text-black/80">{companyName}</p>

            {location && (
              <div className="flex items-center gap-1.5 text-sm text-black/60">
                <HugeiconsIcon icon={Location01Icon} className="size-4" />

                <span>{location}</span>
              </div>
            )}

            <div className="flex items-start gap-2 text-sm leading-6 text-black/75">
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Date Badge */}
          <div
            className="
              rounded-md
              border
              border-blue-100
              bg-blue-50
              px-3
              py-2
              text-xs
              font-medium
              text-blue-700
            ">
            {formattedStartDate} - {formattedEndDate}
          </div>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="
                px-6 py-2
                  rounded-md
                  border
                  border-border-color
                  bg-white
                  text-black
                  shadow-none
                  transition-all
                  hover:bg-input-bg
                ">
                <Settings2 className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="
                mr-2
                flex
                w-44
                flex-col
                gap-1
                rounded-xl
                border
                bg-white
                p-2
              ">
              {/* Edit */}
              <AlertModel
                title="Edit Experience"
                trigger={
                  <Button
                    className="
                      h-10
                      w-full
                      justify-start
                      gap-2
                      rounded-lg
                      bg-input-bg
                      text-sm
                      text-black
                      hover:bg-green-600
                      hover:text-white
                    ">
                    <HugeiconsIcon icon={PencilEdit02Icon} className="size-4" />
                    Edit
                  </Button>
                }
                content={
                  <ExperienceForm
                    opeartion="update"
                    token={token}
                    dealtValues={{
                      companyName: experience.companyName,
                      jobTitle: experience.jobTitle,
                      location: experience.location,
                      startDate: experience.startDate.toString(),
                      endDate: experience.endDate?.toString(),
                      description: experience.description,
                      locationType: "hybride",
                      id: experience.experienceID,
                    }}
                  />
                }
                contentClassname="md:min-w-[650px]"
              />

              {/* Delete */}
              <AlertModel
                title="Delete Experience"
                trigger={
                  <Button
                    className="
                      h-10
                      w-full
                      justify-start
                      gap-2
                      rounded-lg
                      bg-input-bg
                      text-sm
                      text-red-500
                      hover:bg-red-500
                      hover:text-white
                    ">
                    <HugeiconsIcon icon={Delete02Icon} className="size-4" />
                    Delete
                  </Button>
                }
                content={
                  <DeleteExperienceCard
                    token={token}
                    id={experience.experienceID}
                  />
                }
                contentClassname="md:min-w-[500px] pb-3"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
