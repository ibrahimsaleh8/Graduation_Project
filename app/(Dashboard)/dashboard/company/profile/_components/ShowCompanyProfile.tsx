/* eslint-disable @next/next/no-img-element */
"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Building06Icon,
  LinkSquare02Icon,
  Location01Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import CompanyProfileSocialLinks from "./CompanyProfileSocialLinks";
import CompanyProfileOpenendJobs from "./CompanyProfileOpenendJobs";
import CompanyProfileStatistics from "./CompanyProfileStatistics";
import ProfileAbout from "../../../employee/profile/_components/ProfileAbout";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import CompanyProfileSkeleton from "./CompanyProfileSkeleton";
type Props = {
  token: string;
};

export type CompanyProfileDetailsResponseDataType = {
  companyId: string;
  name: string;
  logoUrl: string;
  coverLogoUrl: string | null;
  tagline: string | null;
  about: string | null;
  location: string;
  country: string | null;
  industry: string;
  websiteUrl: string | null;
  companySize: string | null;
  foundedYear: string | null;
  socialLinks: CompanySocialLinks;
  stats: CompanyProfileHighlightsDataType;
  openVacancies: CompanyProfilOpenVacancyDataType[];
};

export type CompanySocialLinks = {
  facebook: string | null;
  linkedin: string | null;
  instagram: string | null;
  twitter: string | null;
};

export type CompanyProfileHighlightsDataType = {
  totalJobs: number;
  activeJobs: number;
};

export type CompanyProfilOpenVacancyDataType = {
  jobId: string;
  title: string;
  description: string;
  minSalary: number;
  maxSalary: number;
  salaryCurrency: string;
  jobType: string;
  workApproach: string;
  postedAt: string;
};

async function getCompanyProfile(
  token: string,
): Promise<CompanyProfileDetailsResponseDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/my-profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowCompanyProfile({ token }: Props) {
  const { error, isLoading, data } = useQuery<
    CompanyProfileDetailsResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["company-profile"],
    queryFn: () => getCompanyProfile(token),
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
    <CompanyProfileSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        {/* Top */}
        <div className="flex flex-col">
          <div className="w-full h-60 rounded-2xl bg-white overflow-hidden border">
            {data.coverLogoUrl && (
              <img
                src={data.coverLogoUrl}
                alt={`${data.name} Cover Image`}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>{" "}
          <div className="flex items-start justify-between flex-wrap">
            {/* Image & Names */}
            <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
              <div className="size-38 bg-main-dark rounded-full ml-3 -mt-20">
                {data.logoUrl && (
                  <img
                    src={data.logoUrl}
                    alt={`${data.name} profile image`}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </div>
              <div className="space-y-1 pl-7 mt-4">
                <p className="text-4xl font-medium">{data.name}</p>
                <p className="font-medium text-black/70">
                  {data.tagline ?? ""}
                </p>
                <div className="flex items-center gap-5 flex-wrap mt-3 justify-start text-center">
                  {data.location && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={Location01Icon}
                        className="size-5 text-black/70"
                      />
                      {data.location}
                    </p>
                  )}

                  {data.industry && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={Building06Icon}
                        className="size-5 text-black/70"
                      />
                      {data.industry}
                    </p>
                  )}

                  {data.companySize && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={UserGroup02Icon}
                        className="size-5 text-black/70"
                      />
                      {data.companySize}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-4 ml-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
              {data.websiteUrl && (
                <a
                  className="px-8 py-2 bg-[#dfdfdf] hover:bg-[#d3d3d3] text-black rounded-md text-sm flex items-center justify-center gap-3 transition ml-auto md:w-fit w-full"
                  href={data.websiteUrl}
                  target="_blank">
                  <HugeiconsIcon
                    icon={LinkSquare02Icon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3 md:pl-7">
          <div className="flex gap-5 items-start flex-col lg:flex-row">
            <ProfileAbout aboutMe={data.about} />
            <CompanyProfileSocialLinks socialLinks={data.socialLinks} />
          </div>
          <div className="flex gap-5 items-start flex-col lg:flex-row">
            <CompanyProfileOpenendJobs openVacancies={data.openVacancies} />
            <CompanyProfileStatistics
              country={data.country}
              foundedYear={data.foundedYear}
              stats={data.stats}
            />
          </div>
        </div>
      </div>
    )
  );
}
