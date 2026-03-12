import {
  Call02Icon,
  File02Icon,
  GithubIcon,
  Linkedin02Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import ShowMyExperience from "./_components/ShowMyExperience";
import MySkills from "./_components/MySkills";
import MyProjects from "./_components/MyProjects";

export default function PublicProfile() {
  return (
    <div className="space-y-6">
      {/* Top */}
      <div className="flex flex-col">
        <div className="w-full h-60 rounded-2xl bg-amber-400"></div>
        <div className="flex items-start justify-between flex-wrap">
          {/* Image & Names */}
          <div>
            <div className="size-38 bg-main-color rounded-full ml-3 -mt-20"></div>
            <div className="space-y-1.5 pl-7 mt-4">
              <p className="text-4xl font-medium">Ibrahim Saleh</p>
              <p className="font-medium">Frontend Developer</p>
              <p className="text-sm max-w-xl">
                Passionate developer with 8+ years of experience building
                scalable web applications. Specializing in React, Node.js, and
                cloud architecture.
              </p>
              <div className="flex items-center gap-5 flex-wrap mt-3">
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
          <div className="flex items-center gap-4  flex-wrap mt-4 pr-4 pl-7">
            <a
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm flex items-center gap-3 transition"
              href="#"
              target="_blank">
              <HugeiconsIcon icon={GithubIcon} className="size-5" />
              GitHub
            </a>

            <a
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm flex items-center gap-3 transition"
              href="#"
              target="_blank">
              <HugeiconsIcon icon={Linkedin02Icon} className="size-5" />
              Linkedin
            </a>

            <a
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm flex items-center gap-3 transition"
              href="#"
              target="_blank">
              <HugeiconsIcon icon={File02Icon} className="size-5" />
              My CV
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-3 pl-7">
        <Tabs defaultValue="experience">
          <TabsList className="flex items-center gap-4 text-lg">
            <TabsTrigger
              className="cursor-pointer font-medium text-sm data-[state=active]:bg-input-bg data-[state=active]:text-black p-4 py-3 rounded-md"
              value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer font-medium text-sm data-[state=active]:bg-input-bg data-[state=active]:text-black p-4 py-3 rounded-md"
              value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer font-medium text-sm data-[state=active]:bg-input-bg data-[state=active]:text-black p-4 py-3 rounded-md"
              value="projects">
              Projects
            </TabsTrigger>
          </TabsList>
          <TabsContents className="mt-4 container">
            <TabsContent value="experience">
              <ShowMyExperience />
            </TabsContent>
            <TabsContent value="skills">
              <MySkills />
            </TabsContent>
            <TabsContent value="projects">
              <MyProjects />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    </div>
  );
}
