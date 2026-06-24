"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockPasswordIcon, Share02Icon } from "@hugeicons/core-free-icons";
import ManageProjectSocialLinks from "./ManageProjectSocialLinks";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import ShowAdminSettingsSkeleton from "./ShowAdminSettingsSkeleton";
import SecuritySettings from "../../../employee/setting/_components/SecuritySettings";

type Props = {
  token: string;
};

async function getProjectSettings(token: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/website-settings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export type ProjectSettingsResponse = {
  linkedInUrl: string | null;
  facebookUrl: string | null;
  instagramUrl: string | null;
  twitterUrl: string | null;
  youtubeUrl: string | null;
};

export default function ShowAdminSettings({ token }: Props) {
  const { error, data, isLoading } = useQuery<
    ProjectSettingsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["project-socials"],
    queryFn: () => getProjectSettings(token),
  });

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
    <ShowAdminSettingsSkeleton />
  ) : (
    data && (
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
          <div className="w-full md:border-l border-t md:border-t-0">
            <TabsContent value="Socials">
              <ManageProjectSocialLinks socialsData={data} token={token} />
            </TabsContent>
            <TabsContent value="security">
              <SecuritySettings token={token} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    )
  );
}
