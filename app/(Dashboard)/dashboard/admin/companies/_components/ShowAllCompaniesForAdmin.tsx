"use client";
import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  Building03Icon,
  CheckmarkBadge01Icon,
  Alert02Icon,
} from "@hugeicons/core-free-icons";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import ShowAllCompanies from "./ShowAllCompanies";
import VerificationRequestes from "./VerificationRequestes";
import ShowAllCompaniesForAdminSkeleton from "./ShowAllCompaniesForAdminSkeleton";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo } from "react";

type Props = {
  token: string;
};

export type CompanyStatusDataType = "Active" | "Verified" | "Blocked";

type CompanyStats = {
  totalCompanies: number;
  verifiedCompanies: number;
  verificationRequests: number;
};

export type CompanyAdminDashboardDataType = {
  companyId: string;
  name: string;
  location: string;
  logo: string;
  country: string | null;
  email: string;
  industry: string;
  totalJobs: number;
  status: CompanyStatusDataType;
  joinedDate: string;
  subscriptionPlan: string;
};

type CompaniesResponseDataType = {
  stats: CompanyStats;
  companies: CompanyAdminDashboardDataType[];
};

async function getCompaniesForAdminApi(token: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Admin/companies`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowAllCompaniesForAdmin({ token }: Props) {
  const { error, isLoading, data } = useQuery<
    CompaniesResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["all-companies-admin-dashboard"],
    queryFn: () => getCompaniesForAdminApi(token),
  });

  const companiesStats = useMemo(() => {
    if (!data) return undefined;

    return [
      {
        title: "Total Companies",
        value: data.stats.totalCompanies,
        icon: Building03Icon,
        iconColor: "#ffffff",
        iconBg: "#125af7a6",
        description: "Registered companies",
        background: "#1b1b1b",
        textColor: "#ffffff",
        descriptionColor: "#ffffff",
      },
      {
        title: "Verified Companies",
        value: data.stats.verifiedCompanies,
        icon: CheckmarkBadge01Icon,
        iconColor: "#1D4ED8",
        iconBg: "#DBEAFE",
        description: "Verified business accounts",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Verification Requests",
        value: data.stats.verificationRequests,
        icon: Alert02Icon,
        iconColor: "#B45309",
        iconBg: "#FEF3C7",
        description: "Pending approval requests",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
    ];
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
    <ShowAllCompaniesForAdminSkeleton />
  ) : (
    data && (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="font-medium text-xl">Companies Management</p>
          <p className="text-sm">Track and manage all registered companies</p>
        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {companiesStats &&
            companiesStats.map((stat) => (
              <DashboardCardStatistics
                size="small"
                {...stat}
                key={stat.title}
              />
            ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="companies">
          <TabsList className="w-fit flex flex-wrap items-center justify-center gap-4 text-white px-3 md:rounded-4xl rounded-md">
            <TabsTrigger
              className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-white/70 text-sm aria-selected:border aria-selected:bg-white aria-selected:text-black px-4 py-2 hover:text-black"
              value="companies">
              Companies
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-white/70 text-sm aria-selected:border aria-selected:bg-white aria-selected:text-black px-4 py-2 hover:text-black"
              value="verifi-req">
              Verification Requestes
            </TabsTrigger>
          </TabsList>
          <div className="overflow-visible! mt-7">
            <TabsContent value="companies">
              <ShowAllCompanies companiesData={data.companies} token={token} />
            </TabsContent>
            <TabsContent value="verifi-req">
              <VerificationRequestes token={token} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    )
  );
}
