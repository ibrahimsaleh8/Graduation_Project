import { HugeiconsIcon } from "@hugeicons/react";
import {
  Building06Icon,
  LinkSquare02Icon,
  Location01Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import ProfileAbout from "../../employee/profile/_components/ProfileAbout";
import CompanyProfileSocialLinks from "./_components/CompanyProfileSocialLinks";
import CompanyProfileOpenendJobs from "./_components/CompanyProfileOpenendJobs";
import CompanyProfileStatistics from "./_components/CompanyProfileStatistics";

export default function CompanyProfile() {
  return (
    <div className="space-y-6">
      {/* Top */}
      <div className="flex flex-col">
        <div className="w-full h-60 rounded-2xl bg-amber-400"></div>
        <div className="flex items-start justify-between flex-wrap">
          {/* Image & Names */}
          <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
            <div className="size-38 bg-main-color rounded-full ml-3 -mt-20"></div>
            <div className="space-y-1 pl-7 mt-4">
              <p className="text-4xl font-medium">Google</p>
              <p className="font-medium text-black/70">
                Building innovative solutions for a better tomorrow
              </p>
              <div className="flex items-center gap-5 flex-wrap mt-3 justify-center text-center">
                <p className="flex items-center gap-1 text-sm">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    className="size-5 text-black/70"
                  />
                  Cairo, Egypt
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <HugeiconsIcon
                    icon={Building06Icon}
                    className="size-5 text-black/70"
                  />
                  Software Development
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <HugeiconsIcon
                    icon={UserGroup02Icon}
                    className="size-5 text-black/70"
                  />
                  201 - 500 Employees
                </p>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-4 ml-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
            <a
              className="px-8 py-2 bg-[#dfdfdf] hover:bg-[#d3d3d3] text-black rounded-md text-sm flex items-center justify-center gap-3 transition ml-auto md:w-fit w-full"
              href="#"
              target="_blank">
              <HugeiconsIcon
                icon={LinkSquare02Icon}
                className="size-5"
                strokeWidth={2}
              />
              Visit Website
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-3 md:pl-7">
        <div className="flex gap-5 items-start flex-col lg:flex-row">
          <ProfileAbout />
          <CompanyProfileSocialLinks />
        </div>
        <div className="flex gap-5 items-start flex-col lg:flex-row">
          <CompanyProfileOpenendJobs />
          <CompanyProfileStatistics />
        </div>
      </div>
    </div>
  );
}
