"use client";
import {
  File02Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ShowMyExperience from "./ShowMyExperience";
import MyProjects from "./MyProjects";
import ProfileAbout from "./ProfileAbout";
import ShowSkills from "./ShowSkills";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import EmployeeShowProfileSkeleton from "./EmployeeShowProfileSkeleton";
import ProfileSocialLinks from "./ProfileContact";
type Props = {
  token: string;
};
export type ApplicantProfileResponse = {
  applicantID: string;
  fullName: string;
  jobTitle?: string;
  location: string;
  aboutMe?: string;
  profilePicUrl?: string;
  coverPhotoUrl?: string;
  email: string;
  phoneNumber?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  portfolio?: string;
  experiences?: ExperienceType[];
  skills?: SkillType[];
  projects?: ProjectType[];
};

export type ExperienceType = {
  experienceID: string;
  companyName: string;
  location: string;
  jobTitle: string;
  description: string;
  jobType: number;
  startDate: Date;
  endDate: Date;
  applicantID: string;
};

export type SkillType = {
  applicantSkillID: string;
  skillID: string;
  skillName: string;
};

export type ProjectType = {
  projectID: string;
  title: string;
  description: string;
  projectUrl: string;
  githubRepoUrl?: string;
  imageUrl: string;
  createdAt: string;
};

async function GetMyProfileEmployee(
  token: string,
): Promise<ApplicantProfileResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Profile/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowMyEmployeeProfile({ token }: Props) {
  const { error, isLoading, data } = useQuery<
    ApplicantProfileResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["get-my-profile-employee"],
    queryFn: () => GetMyProfileEmployee(token),
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
  console.log("data", data);
  return isLoading ? (
    <EmployeeShowProfileSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        <div className="flex items-start gap-5 flex-col xl:flex-row">
          {/* Top */}
          <div className="flex flex-col w-full">
            <div className="w-full h-60 rounded-2xl bg-amber-400"></div>
            <div className="flex items-start xl:justify-between flex-wrap w-full">
              {/* Image & Names */}
              <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
                <div className="size-38 flex shrink-0 items-center justify-center bg-main-color rounded-full ml-3 -mt-20"></div>
                <div className="space-y-1 pl-7 mt-4">
                  <p className="text-4xl font-medium">{data.fullName}</p>
                  <p className="font-medium text-black/70">{data.jobTitle}</p>
                  <div className="flex items-center gap-5 flex-wrap mt-3 justify-start text-center">
                    <p className="flex items-center gap-2 text-sm">
                      <HugeiconsIcon
                        icon={Mail01Icon}
                        className="size-5 text-black/70"
                      />
                      {data.email}
                    </p>
                    {data.location && (
                      <p className="flex items-center gap-2 text-sm">
                        <HugeiconsIcon
                          icon={Location01Icon}
                          className="size-5 text-black/70"
                        />
                        {data.location}
                      </p>
                    )}

                    {data.phoneNumber && (
                      <p className="flex items-center gap-2 text-sm">
                        <HugeiconsIcon
                          icon={Call02Icon}
                          className="size-5 text-black/70"
                        />
                        {data.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* CV */}
              <div className="flex items-center justify-center xl:justify-start gap-4 xl:ml-auto ml-0 xl:mx-0 mx-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
                <a
                  className="px-8 py-2 bg-black hover:bg-black/80 text-white rounded-md text-sm flex items-center justify-center gap-3 transition md:w-fit w-full"
                  href="#"
                  target="_blank">
                  <HugeiconsIcon
                    icon={File02Icon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Show CV
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <ProfileSocialLinks
            linkedin={data.linkedin}
            facebook={data.facebook}
            github={data.github}
            portfolio={data.portfolio}
          />
        </div>

        <div className="space-y-3 xl:pl-7">
          <div className="flex items-start flex-col xl:flex-row gap-5">
            {/* About & Social Links */}
            <div className="flex gap-5 items-start flex-col w-full">
              <ProfileAbout aboutMe={data.aboutMe ?? ""} />
              <ShowMyExperience experience={data.experiences} />
            </div>

            {/* Skills */}
            <ShowSkills skills={data.skills} />
          </div>

          <MyProjects projects={data.projects} />
        </div>
      </div>
    )
  );
}
