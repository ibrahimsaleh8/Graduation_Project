import ProfileData from "./_components/ProfileData";
import ContactData from "./_components/ContactData";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserCircleIcon,
  Mail01Icon,
  Calendar02Icon,
  StarAward01Icon,
  Folder02Icon,
  LockPasswordIcon,
} from "@hugeicons/core-free-icons";
import ExperienceData from "./_components/ExperienceData";
import SkillsData from "./_components/SkillsData";
import ProfileProjects from "./_components/ProfileProjects";

export default function SettingPage() {
  return (
    <div className="space-y-6">
      <div className="pl-8">
        <p className="font-medium text-xl">Settings</p>
        <p className="text-sm">Update your Profile Data in one place.</p>
      </div>
      <Tabs
        defaultValue="profile"
        className="flex flex-col md:flex-row w-full items-start">
        <TabsList className="flex flex-col gap-3 px-4 rounded-lg py-2 items-center text-white min-w-50 flex-wrap w-full md:w-fit">
          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-3 rounded-md"
            value="profile">
            <HugeiconsIcon icon={UserCircleIcon} className="size-5" /> Profile
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-3 rounded-md"
            value="contact">
            <HugeiconsIcon icon={Mail01Icon} className="size-5" /> Contact
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-3 rounded-md"
            value="experience">
            <HugeiconsIcon icon={Calendar02Icon} className="size-5" />
            Experience
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-3 rounded-md"
            value="skills">
            <HugeiconsIcon icon={StarAward01Icon} className="size-5" /> Skills
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-3 rounded-md"
            value="projects">
            <HugeiconsIcon icon={Folder02Icon} className="size-5" /> Projects
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:text-black px-4 py-3 rounded-md"
            value="security">
            <HugeiconsIcon icon={LockPasswordIcon} className="size-5" />{" "}
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContents className="overflow-visible! w-full md:border-l border-t md:border-t-0 ">
          <TabsContent className="overflow-visible" value="profile">
            <ProfileData />
          </TabsContent>
          <TabsContent value="contact">
            <ContactData />
          </TabsContent>
          <TabsContent value="experience">
            <ExperienceData />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsData />
          </TabsContent>
          <TabsContent value="projects">
            <ProfileProjects />
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
