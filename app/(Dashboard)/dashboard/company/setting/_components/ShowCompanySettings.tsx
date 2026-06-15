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
  LockPasswordIcon,
  Share02Icon,
  CreditCardIcon,
} from "@hugeicons/core-free-icons";
import CompanyProfileSettings from "./CompanyProfileSettings";
import ShowCompanySettingsSkeleton from "./ShowCompanySettingsSkeleton";
import CompanySocialLinks from "./CompanySocialLinks";
import CompanySubscription from "./CompanySubscription";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import SecuritySettings from "../../../employee/setting/_components/SecuritySettings";
type Props = {
  token: string;
};

export type CompanySettingsProfileDataType = {
  companyID: string;
  name: string;
  logoUrl: string | null;
  coverLogoUrl: string | null;
  industry: string;
  country: string;
  companySize: string | null;
  foundedYear: number | null;
  profileBio: string | null;
  description: string | null;
};
export type CompanySettingsProfileSocilas = {
  phoneNumber: string | null;
  headquarterAddress: string | null;
  linkedin: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
  websiteURL: string | null;
};

export type CompanySettingsResponseDataType = {
  profile: CompanySettingsProfileDataType;
  socials: CompanySettingsProfileSocilas;
};

async function getCompanyProfileSettings(
  token: string,
): Promise<CompanySettingsResponseDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/CompanySettings/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowCompanySettings({ token }: Props) {
  const { error, data, isLoading } = useQuery<
    CompanySettingsResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["company-profile-settings"],
    queryFn: () => getCompanyProfileSettings(token),
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
    <ShowCompanySettingsSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        <div className="pl-8">
          <p className="font-medium text-xl">Company Settings</p>
          <p className="text-sm">
            Manage your company profile and preferences .
          </p>
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
              value="Socials">
              <HugeiconsIcon icon={Share02Icon} className="size-5" /> Socials
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black duration-300 text-black/60 w-full font-medium text-sm data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black px-4 py-3 rounded-md"
              value="Subscription">
              <HugeiconsIcon icon={CreditCardIcon} className="size-5" />
              Subscription
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
              <CompanyProfileSettings
                profileData={data.profile}
                token={token}
              />
            </TabsContent>
            <TabsContent value="Socials">
              <CompanySocialLinks token={token} socialsData={data.socials} />
            </TabsContent>
            <TabsContent value="Subscription">
              <CompanySubscription />
            </TabsContent>
            <TabsContent value="security">
              <SecuritySettings token={token} />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    )
  );
}
