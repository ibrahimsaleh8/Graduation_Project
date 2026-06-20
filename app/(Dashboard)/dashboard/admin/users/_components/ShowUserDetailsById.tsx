/* eslint-disable @next/next/no-img-element */
"use client";
import {
  CallIcon,
  Briefcase08Icon,
  Calendar02Icon,
  Location01Icon,
  Mail01Icon,
  LinkCircle02Icon,
} from "@hugeicons/core-free-icons";
import userImage from "@images/HR.png";
import Link from "next/link";
import SmallDetailsCard from "../../_components/SmallDetailsCard";
import SmallStatisticCardForDetails from "../../_components/SmallStatisticCardForDetails";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import UserStatusBadge from "./UserStatusBadge";
import { formatDate } from "@/lib/FormatDate";
import { Dispatch, SetStateAction, useMemo } from "react";
import UserDetailsSocials from "./UserDetailsSocials";
import BlockAndUnBlockUser from "./BlockAndUnBlockUser";
import ShowUserDetailsByIdSkeleton from "./ShowUserDetailsByIdSkeleton";
import DeleteProfiles from "../../_components/DeleteProfiles";

type Props = {
  token: string;
  userId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type ApplicantProfileResponseDataType = {
  applicantId: string;
  fullName: string;
  imageUrl: string;
  jobTitle: string | null;
  isBlocked: boolean;
  joinedDate: string;
  email: string;
  phoneNumber: string | null;
  location: string;
  applicationsCount: number;
  savedJobsCount: number;
  interviewsCount: number;
  projectsCount: number;
  skills: string[];
  cvUrl: string | null;
  portfolio: string | null;
  facebook: string | null;
  linkedin: string | null;
  github: string | null;
};

async function getUserDetailsById(
  token: string,
  userId: string,
): Promise<ApplicantProfileResponseDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}

export default function ShowUserDetailsById({ token, userId, setOpen }: Props) {
  const { error, isLoading, data } = useQuery<
    ApplicantProfileResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["user-details", userId],
    queryFn: () => getUserDetailsById(token, userId),
  });

  const userCards = useMemo(() => {
    if (!data) return;
    const details = [
      {
        title: "Email Address",
        value: data.email,
        icon: Mail01Icon,
      },
      {
        title: "Phone Number",
        value: data.phoneNumber,
        icon: CallIcon,
      },
      {
        title: "Location",
        value: data.location,
        icon: Location01Icon,
      },
      {
        title: "Job Title",
        value: data.jobTitle,
        icon: Briefcase08Icon,
      },
    ];

    const userStatistics = [
      {
        value: data.applicationsCount,
        label: "Applications",
      },
      {
        value: data.savedJobsCount,
        label: "Saved Jobs",
      },
      {
        value: data.interviewsCount,
        label: "Interviews",
      },
      {
        value: data.projectsCount,
        label: "Projects",
      },
    ];

    return {
      userStatistics,
      details,
    };
  }, [data]);

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
    <ShowUserDetailsByIdSkeleton />
  ) : (
    data && (
      <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-3">
        <div className="space-y-5 px-4 pb-2 w-full">
          {/* Top User Info */}
          <div className="w-full flex md:items-end items-center text-center md:text-left md:flex-row flex-col gap-4 flex-wrap">
            {/* Avatar */}
            <div className="size-18 rounded-full overflow-hidden border-4 border-input-bg bg-input-bg">
              {data.imageUrl ? (
                <img
                  src={data.imageUrl}
                  alt={data.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={userImage.src}
                  alt={data.fullName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* User Main Data */}
            <div>
              <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <UserStatusBadge isBlocked={data.isBlocked} />
              </div>

              <p className="text-lg font-medium mt-2">Ibrahim Saleh</p>

              <div className="flex items-center gap-4 flex-wrap text-sm text-black/70 justify-center md:justify-start">
                <p className="flex items-center gap-1">
                  <HugeiconsIcon
                    icon={Calendar02Icon}
                    className="size-4"
                    strokeWidth={2}
                  />
                  Joined {formatDate(data.joinedDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userCards &&
              userCards.details
                .filter((detail) => detail.value != null)
                .map((detail) => (
                  <SmallDetailsCard
                    icon={detail.icon}
                    title={detail.title}
                    value={detail.value ?? ""}
                    key={detail.title}
                  />
                ))}
          </div>

          {/* Statistics */}
          <div className="space-y-3">
            <p className="font-medium text-sm">Statistics</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userCards &&
                userCards.userStatistics.map((statistic) => (
                  <SmallStatisticCardForDetails
                    label={statistic.label}
                    value={statistic.value.toString()}
                    key={statistic.label}
                  />
                ))}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="space-y-2">
              <p className="font-medium text-sm">Skills</p>

              <div className="flex items-center gap-2 flex-wrap">
                {data.skills.map((skill) => (
                  <p
                    key={skill}
                    className="px-3 py-1.5 bg-input-bg text-xs rounded-sm border">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {(data.cvUrl ||
            data.facebook ||
            data.github ||
            data.linkedin ||
            data.portfolio) && (
            <UserDetailsSocials
              cvUrl={data.cvUrl}
              facebook={data.facebook}
              github={data.github}
              linkedin={data.linkedin}
              portfolio={data.portfolio}
            />
          )}
        </div>

        <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
          <div className="w-full flex items-center gap-4">
            <BlockAndUnBlockUser
              token={token}
              userId={userId}
              isBlocked={data.isBlocked}
            />

            <DeleteProfiles
              setOpen={setOpen}
              token={token}
              id={userId}
              profile="user"
            />
          </div>

          <Link
            href={`/profile/${userId}`}
            target="_blank"
            className="w-full text-sm bg-main-color text-white h-10 rounded-md text-center flex gap-1 items-center justify-center">
            <HugeiconsIcon
              icon={LinkCircle02Icon}
              className="size-5"
              strokeWidth={2}
            />
            Show User Profile
          </Link>
        </div>
      </div>
    )
  );
}
