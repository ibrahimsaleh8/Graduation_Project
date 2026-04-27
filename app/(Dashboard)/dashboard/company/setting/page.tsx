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
  LockPasswordIcon,
} from "@hugeicons/core-free-icons";
import CompanyProfileSettings from "./_components/CompanyProfileSettings";

export default function CompanySettingsPage() {
  return (
    <div className="space-y-6">
      <div className="pl-8">
        <p className="font-medium text-xl">Company Settings</p>
        <p className="text-sm">Manage your company profile and preferences .</p>
      </div>
      <Tabs
        defaultValue="profile"
        className="flex flex-col md:flex-row w-full items-start">
        <TabsList className="flex flex-col gap-3 md:px-4 rounded-lg py-2 items-center text-white min-w-50 flex-wrap w-full md:w-fit">
          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
            value="profile">
            <HugeiconsIcon icon={UserCircleIcon} className="size-5" />
            Profile
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
            value="contact">
            <HugeiconsIcon icon={Mail01Icon} className="size-5" /> Contact Info
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
            value="security">
            <HugeiconsIcon icon={LockPasswordIcon} className="size-5" />
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContents className="w-full md:border-l border-t md:border-t-0">
          <TabsContent value="profile">
            <CompanyProfileSettings />
          </TabsContent>
          <TabsContent value="contact">
            <></>
          </TabsContent>
          <TabsContent value="experience">
            <></>
          </TabsContent>
          <TabsContent value="skills">
            <></>
          </TabsContent>
          <TabsContent value="projects">
            <></>
          </TabsContent>
          <TabsContent value="security">
            <></>
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
