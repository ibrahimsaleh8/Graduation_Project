import {
  Call02Icon,
  File02Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ShowMyExperience from "./_components/ShowMyExperience";
import MyProjects from "./_components/MyProjects";
import ProfileAbout from "./_components/ProfileAbout";
import ProfileSocialLinks from "./_components/ProfileSocialLinks";
import ShowSkills from "./_components/ShowSkills";

export default function PublicProfile() {
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
              <p className="text-4xl font-medium">Ibrahim Saleh</p>
              <p className="font-medium text-black/70">Frontend Developer</p>
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
                    icon={Mail01Icon}
                    className="size-5 text-black/70"
                  />
                  ebrihm576@gmail.com
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <HugeiconsIcon
                    icon={Call02Icon}
                    className="size-5 text-black/70"
                  />
                  +201015405904
                </p>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-4 ml-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
            <a
              className="px-8 py-2 bg-black hover:bg-black/80 text-white rounded-md text-sm flex items-center justify-center gap-3 transition ml-auto md:w-fit w-full"
              href="#"
              target="_blank">
              <HugeiconsIcon
                icon={File02Icon}
                className="size-5"
                strokeWidth={2}
              />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-3 md:pl-7">
        {/* About & Social Links */}
        <div className="flex gap-5 items-start flex-col lg:flex-row">
          <ProfileAbout />
          <ProfileSocialLinks />
        </div>
        {/* Experience & Skills */}
        <div className="flex gap-5 items-start flex-col lg:flex-row">
          <ShowMyExperience />
          <ShowSkills />
        </div>

        <MyProjects />
      </div>
    </div>
  );
}
