/* eslint-disable @next/next/no-img-element */
import SmallDetailsCard from "../../_components/SmallDetailsCard";
import SmallStatisticCardForDetails from "../../_components/SmallStatisticCardForDetails";
import Link from "next/link";
import {
  Building03Icon,
  ImageNotFound01Icon,
  LinkCircle02Icon,
  Location01Icon,
  Mail01Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import axios, { AxiosError } from "axios";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useQuery } from "@tanstack/react-query";
import { CompanyStatusDataType } from "./ShowAllCompaniesForAdmin";
import { Dispatch, SetStateAction, useMemo } from "react";
import SubscriptionBadge from "./SubscriptionBadge";
import BlockCompany from "./BlockCompany";
import CompanyStatusBadge from "./CompanyStatusBadge";
import DeleteProfiles from "../../_components/DeleteProfiles";
import ShowCompanyDetailsSkeleton from "./ShowCompanyDetailsSkeleton";

type Props = {
  token: string;
  companyId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type CompanyDetailsDataType = {
  companyId: string;
  name: string;
  description: string;
  logoUrl: string;
  coverLogoUrl: string;
  email: string;
  industry: string;
  location: string;
  country: string | null;
  companySize: string;
  status: CompanyStatusDataType;
  subscriptionPlan: string;
  totalJobs: number;
  activeJobs: number;
  totalApplicants: number;
  totalInterviews: number;
};

async function getJobDetailsById({
  companyId,
  token,
}: {
  token: string;
  companyId: string;
}) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/companies/${companyId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowCompanyDetails({
  companyId,
  token,
  setOpen,
}: Props) {
  const { error, isLoading, data } = useQuery<
    CompanyDetailsDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["company-details-for-admin", companyId],
    queryFn: () => getJobDetailsById({ companyId, token }),
  });

  const companyCards = useMemo(() => {
    if (!data) return;
    const details = [
      {
        title: "Email Address",
        value: data.email,
        icon: Mail01Icon,
      },
      {
        title: "Industry",
        value: data.industry,
        icon: Building03Icon,
      },
      {
        title: "Location",
        value: data.location,
        icon: Location01Icon,
      },
      {
        title: "Employees",
        value: data.companySize,
        icon: UserGroup02Icon,
      },
    ];
    const companyStatistics = [
      {
        value: data.totalJobs,
        label: "Total Jobs",
      },
      {
        value: data.activeJobs,
        label: "Active Jobs",
      },
      {
        value: data.totalApplicants,
        label: "Total Applicants",
      },
      {
        value: data.totalInterviews,
        label: "Total Interviews",
      },
    ];
    return { companyStatistics, details };
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
    <ShowCompanyDetailsSkeleton />
  ) : (
    data && (
      <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-4">
        {/* Top */}
        <div>
          {/* Wide Image */}
          <div className="w-full h-40 bg-input-bg overflow-hidden flex items-center justify-center">
            {!data.coverLogoUrl && (
              <p className="font-medium flex items-center gap-2 text-black/80">
                <HugeiconsIcon
                  icon={ImageNotFound01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
                No Cover Image
              </p>
            )}
            {data.coverLogoUrl && (
              <img
                src={data.coverLogoUrl}
                alt={`cover image ${data.name}`}
                className="w-full object-cover"
              />
            )}
          </div>
          {/* Company Logo */}
          <div className="size-20 bg-input-bg -mt-10 ml-3 rounded-full">
            {!data.logoUrl && (
              <p className="font-medium flex items-center justify-center gap-2 w-full h-full text-black/80">
                <HugeiconsIcon
                  icon={ImageNotFound01Icon}
                  className="size-7"
                  strokeWidth={2}
                />
              </p>
            )}
            {data.logoUrl && (
              <img
                src={data.logoUrl}
                alt={`Logo ${data.name}`}
                className="w-full object-cover rounded-full"
              />
            )}
          </div>
        </div>

        <div className="px-4 space-y-4">
          {/* Title & Desc */}
          <div className="space-y-3">
            <div className="flex items-center flex-wrap justify-between gap-4">
              <p className="text-lg font-medium">{data.name}</p>

              <div className="ml-auto flex items-center gap-2">
                <CompanyStatusBadge status={data.status} />
                <SubscriptionBadge subscription={data.subscriptionPlan} />
              </div>
            </div>
            {data.description && (
              <div
                className="text-xs  ProseMirror"
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
              />
            )}
          </div>

          {/* Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {companyCards &&
              companyCards.details
                .filter((detail) => detail.value)
                .map((detail) => (
                  <SmallDetailsCard
                    icon={detail.icon}
                    title={detail.title}
                    value={detail.value}
                    key={detail.title}
                  />
                ))}
          </div>

          {/* Statistics */}
          <div className="space-y-3">
            <p className="font-medium text-sm">Statistics</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyCards &&
                companyCards.companyStatistics.map((statistic) => (
                  <SmallStatisticCardForDetails
                    label={statistic.label}
                    value={statistic.value.toString()}
                    key={statistic.label}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
          <div className="w-full flex items-center gap-4">
            <BlockCompany
              companyId={companyId}
              status={data.status}
              token={token}
            />
            <DeleteProfiles
              id={companyId}
              token={token}
              profile="company"
              setOpen={setOpen}
            />
          </div>

          <Link
            href={`/profile/${companyId}`}
            target="_blank"
            className="w-full text-sm bg-main-color text-white h-10 rounded-md text-center flex gap-1 items-center justify-center">
            <HugeiconsIcon
              icon={LinkCircle02Icon}
              className="size-5"
              strokeWidth={2}
            />
            Show Company Profile
          </Link>
        </div>
      </div>
    )
  );
}
