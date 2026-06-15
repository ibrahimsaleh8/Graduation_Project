/* eslint-disable @next/next/no-img-element */
"use client";
import { Camera03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CompanySettingsProfileDataType } from "./ShowCompanySettings";
import AlertModel from "@/components/main-layout/AlertModel";
import UpdateProfileImage from "../../../employee/setting/_components/Update_Components/UpdateProfileImage";
import CompanyProfileSettingsInput from "./CompanyProfileSettingsInput";

type Props = {
  profileData: CompanySettingsProfileDataType;
  token: string;
};

export default function CompanyProfileSettings({ profileData, token }: Props) {
  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Image */}
      <div className="flex flex-col w-full">
        <div className="w-full h-70 overflow-hidden bg-white border border-border-color rounded-2xl flex items-center justify-center relative">
          {!profileData.coverLogoUrl && (
            <p className="font-medium text-black/70">
              No Cover Image Uploaded..
            </p>
          )}
          {profileData.coverLogoUrl && (
            <img
              src={profileData.coverLogoUrl}
              alt={`${profileData.name} Cover Image`}
              className="w-full h-full object-cover object-center"
            />
          )}

          <AlertModel
            title="Update Cover Picture"
            trigger={
              <button
                aria-label="Update Cover Picture"
                className="absolute top-2 shadow-md right-3 border border-border-color bg-white text-black w-10 h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-white/80 duration-300">
                <HugeiconsIcon icon={Camera03Icon} className="size-6" />
              </button>
            }
            content={
              <UpdateProfileImage
                token={token}
                operation="cover"
                role="company"
              />
            }
            contentClassname="md:min-w-150 pb-3"
          />
        </div>

        <div className="size-36 border-3 border-white shadow rounded-full bg-main-color -mt-17 flex items-center justify-center relative">
          {profileData.logoUrl && (
            <img
              src={profileData.logoUrl}
              alt={`${profileData.name} profile image`}
              className="w-full h-full object-cover object-center rounded-full"
            />
          )}

          <AlertModel
            title="Update Profile Picture"
            trigger={
              <button
                aria-label="Update Profile Picture"
                className="absolute bottom-0 right-0 border border-border-color bg-white text-black w-9 h-8 rounded-md flex items-center justify-center cursor-pointer hover:bg-white/80 duration-300">
                <HugeiconsIcon icon={Camera03Icon} className="size-6" />
              </button>
            }
            content={
              <UpdateProfileImage
                token={token}
                operation="profile"
                role="company"
              />
            }
            contentClassname="md:min-w-150 pb-3"
          />
        </div>
      </div>

      {/* Inputs */}
      <CompanyProfileSettingsInput profileData={profileData} token={token} />
    </div>
  );
}
