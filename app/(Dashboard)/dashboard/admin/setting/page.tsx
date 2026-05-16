import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockPasswordIcon, Share02Icon } from "@hugeicons/core-free-icons";
import ManageAdminSecurtiyProfile from "./_components/ManageAdminSecurtiyProfile";
import ManageProjectSocialLinks from "./_components/ManageProjectSocialLinks";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="pl-8">
        <p className="font-medium text-xl">Admin Settings</p>
        <p className="text-sm">
          Manage your profile security and website socials.
        </p>
      </div>
      <Tabs
        defaultValue="Socials"
        className="flex flex-col md:flex-row w-full items-start">
        <TabsList className="flex flex-col gap-3 md:px-4 rounded-lg py-2 items-center text-white min-w-50 flex-wrap w-full md:w-fit">
          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
            value="Socials">
            <HugeiconsIcon icon={Share02Icon} className="size-5" /> Socials
          </TabsTrigger>

          <TabsTrigger
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
            value="security">
            <HugeiconsIcon icon={LockPasswordIcon} className="size-5" />
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContents className="w-full md:border-l border-t md:border-t-0">
          <TabsContent value="Socials">
            <ManageProjectSocialLinks />
          </TabsContent>
          <TabsContent value="security">
            <ManageAdminSecurtiyProfile />
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
