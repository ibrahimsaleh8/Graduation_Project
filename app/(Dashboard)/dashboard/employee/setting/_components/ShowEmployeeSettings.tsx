"use client";
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
import ExperienceData from "./ExperienceData";
import SkillsData from "./SkillsData";
import ProfileProjects from "./ProfileProjects";
import SecuritySettings from "./SecuritySettings";
import ProfileData from "./ProfileData";
import ContactData from "./ContactData";
import { useGetEmployeeProfile } from "@/hooks/useGetEmployeeProfile";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";

type Props = {
  token: string;
};

export default function ShowEmployeeSettings({ token }: Props) {
  const { data, error, isLoading } = useGetEmployeeProfile(token);

  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <div className="flex items-center justify-center h-full">
      <p className="text-lg">Loading...</p>
    </div>
  ) : (
    data && (
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
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="profile">
              <HugeiconsIcon icon={UserCircleIcon} className="size-5" /> Profile
            </TabsTrigger>

            <TabsTrigger
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="contact">
              <HugeiconsIcon icon={Mail01Icon} className="size-5" /> Contact
            </TabsTrigger>

            <TabsTrigger
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="experience">
              <HugeiconsIcon icon={Calendar02Icon} className="size-5" />
              Experience
            </TabsTrigger>

            <TabsTrigger
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="skills">
              <HugeiconsIcon icon={StarAward01Icon} className="size-5" /> Skills
            </TabsTrigger>

            <TabsTrigger
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="projects">
              <HugeiconsIcon icon={Folder02Icon} className="size-5" /> Projects
            </TabsTrigger>

            <TabsTrigger
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="security">
              <HugeiconsIcon icon={LockPasswordIcon} className="size-5" />{" "}
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContents className="overflow-visible! w-full md:border-l border-t md:border-t-0">
            <TabsContent className="overflow-visible" value="profile">
              <ProfileData
                fullName={data.fullName}
                jobTitle={data.jobTitle}
                location={data.location}
                aboutMe={data.aboutMe}
                profilePicUrl={data.profilePicUrl}
                coverPhotoUrl={data.coverPhotoUrl}
                token={token}
              />
            </TabsContent>
            <TabsContent value="contact">
              <ContactData
                token={token}
                phone={data.phoneNumber}
                address={""}
                linkedin={data.linkedin}
                github={data.github}
                facebook={data.facebook}
                behance={""}
                dribbble={""}
                portfolio={""}
              />
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
            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    )
  );
}
