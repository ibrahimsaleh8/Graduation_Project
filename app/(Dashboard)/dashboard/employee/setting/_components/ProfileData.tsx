/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CountrySelect from "@/components/forms/CountrySelect";
import TextEditor from "@/app/(Dashboard)/_components/TextEditor";
import ProfileDataCv from "./ProfileDataCv";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  profileDataSchema,
  ProfileDataSchemaType,
} from "@/validations/EmployeeProfileDataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Spinner } from "@/components/ui/spinner";
import { HugeiconsIcon } from "@hugeicons/react";
import { Camera03Icon } from "@hugeicons/core-free-icons";
import AlertModel from "@/components/main-layout/AlertModel";
import UpdateProfileImage from "./Update_Components/UpdateProfileImage";
import { EmployeeResumeDataType } from "@/hooks/useGetEmployeeProfile";
type Props = {
  fullName: string;
  jobTitle?: string;
  location: string;
  aboutMe?: string;
  profilePicUrl?: string;
  coverPhotoUrl?: string;
  resumes: EmployeeResumeDataType[];
  token: string;
};
async function UpdateMainDataProfileData(
  token: string,
  data: ProfileDataSchemaType,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/profile`,
    {
      country: data.location,
      jobTitle: data.jobTitle,
      aboutMe: data.aboutMe,
      fullName: data.fullName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}

export default function ProfileData({
  fullName,
  jobTitle,
  location,
  aboutMe,
  profilePicUrl,
  coverPhotoUrl,
  token,
  resumes,
}: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileDataSchemaType>({
    resolver: zodResolver(profileDataSchema),
    mode: "onSubmit",
    defaultValues: {
      fullName,
      jobTitle,
      location,
      aboutMe,
    },
  });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: ProfileDataSchemaType) =>
      UpdateMainDataProfileData(token, data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: "Profile updated successfully!",
      });
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to update profile",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<ProfileDataSchemaType> = (data) => {
    if (
      fullName === data.fullName &&
      jobTitle === data.jobTitle &&
      location === data.location &&
      aboutMe === data.aboutMe
    ) {
      sileo.warning({
        title: "No changes to update!",
        description: "You haven't made any changes to your profile.",
      });
      return;
    }
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-4 py-4 md:py-0">
      {/* Body */}
      <div className="flex flex-col gap-3">
        {/* Image */}
        <div className="flex flex-col w-full">
          <div className="w-full h-70 overflow-hidden bg-white border border-border-color rounded-2xl flex items-center justify-center relative">
            {coverPhotoUrl ? (
              <img
                src={coverPhotoUrl}
                alt={`${fullName} Cover Image`}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <p className="font-medium text-black/70">
                No Cover Image Uploaded..
              </p>
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
                  role="employee"
                />
              }
              contentClassname="md:min-w-150 pb-3"
            />
          </div>

          <div className="size-36 border-3 border-white shadow rounded-full bg-main-color -mt-17 flex items-center justify-center relative">
            <img
              src={profilePicUrl}
              alt={`${fullName} profile image`}
              className="w-full h-full object-cover object-center rounded-full"
            />

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
                  role="employee"
                />
              }
              contentClassname="md:min-w-150 pb-3"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex gap-5 flex-col w-full mt-5 px-3">
          <div className="flex items-start gap-4 w-full flex-col lg:flex-row">
            {/* Full Name */}
            <div className="space-y-1 w-full">
              <div className="space-y-1">
                <Label htmlFor="full-name">Full Name</Label>
                <Input
                  type="text"
                  aria-invalid={!!errors.fullName}
                  id="full-name"
                  {...register("fullName")}
                  placeholder="Full Name"
                  className="bg-white border border-border-color placeholder:text-black/30 shadow-none"
                />
              </div>

              {errors.fullName && (
                <ErrorValidationMessage
                  message={errors.fullName.message ?? ""}
                />
              )}
            </div>

            {/* Job Title */}
            <div className="space-y-1 w-full">
              <div className="space-y-1 w-full">
                <Label htmlFor="job-title">Job Title</Label>
                <Input
                  type="text"
                  id="job-title"
                  aria-invalid={!!errors.jobTitle}
                  {...register("jobTitle")}
                  placeholder="Job Title"
                  className="bg-white border border-border-color placeholder:text-black/30 shadow-none"
                />
              </div>
              {errors.jobTitle && (
                <ErrorValidationMessage
                  message={errors.jobTitle.message ?? ""}
                />
              )}
            </div>

            {/* Country */}
            <div className="space-y-1 w-full">
              <div className="space-y-1 w-full">
                <Label>Country</Label>
                <CountrySelect
                  classes="h-11 text-low-color border border-border-color hover:bg-white/80! w-full flex justify-start hover:bg-input-bg/80 duration-300 bg-white"
                  deafultCountry={location ?? ""}
                  UpdateCountry={(value: string) => {
                    setValue("location", value);
                  }}
                />
              </div>
              {errors.location && (
                <ErrorValidationMessage
                  message={errors.location.message ?? ""}
                />
              )}
            </div>
          </div>

          <div className="space-y-1">
            <TextEditor
              deafultValue={aboutMe ?? ""}
              label="About Me"
              updateFn={(value: string) => {
                setValue("aboutMe", value);
              }}
            />

            {errors.aboutMe && (
              <ErrorValidationMessage message={errors.aboutMe.message ?? ""} />
            )}
          </div>

          <ProfileDataCv token={token} resumes={resumes} />
        </div>

        <Button
          type="submit"
          className="w-45 bg-main-color hover:bg-main-color/90 text-white h-10 text-sm ml-3"
          disabled={isPending}>
          {isPending ? <Spinner /> : "Save"}
        </Button>
      </div>
    </form>
  );
}
