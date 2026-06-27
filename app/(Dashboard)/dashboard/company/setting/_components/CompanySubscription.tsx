"use client";
import axios, { AxiosError } from "axios";
import CompanyBillingHistory from "./CompanyBillingHistory";
import CurrentPlanDetails from "./CurrentPlanDetails";
import UpgradePlanForCompany from "./UpgradePlanForCompany";
import CompanySubscriptionSkeleton from "./CompanySubscriptionSkeleton";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
type Props = {
  token: string;
};

type UsageStats = {
  used: number;
  limit: number;
};

export type CurrentPlan = {
  subscriptionId: string;
  planName: string;
  billingCycle: number;
  renewalDate: string | null;
  status: "Active" | "Cancelled" | "Pending";
  activeJobs: UsageStats;
  featuredPosts: UsageStats;
  subscriptionProgress: UsageStats;
};

export type AvailablePlan = {
  planId: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  maxActiveJobs: number;
  maxFeaturedJobs: number;
  hasAiToolsAccess: boolean;
  hasStandardSupport: boolean;
  hasCandidateSearch: boolean;
  isCurrentPlan: boolean;
};

type BillingRecord = {
  subscriptionId: string;
  planName: string;
  amount: number;
  purchaseDate: string;
  endDate: string;
  status: "Active" | "Cancelled" | "Pending";
};

export type BillingHistory = {
  totalTransactions: number;
  records: BillingRecord[];
};

export type SubscriptionOverviewResponse = {
  currentPlan: CurrentPlan;
  availablePlans: AvailablePlan[];
  billingHistory: BillingHistory;
};

async function getCompanySubscriptionsApi(
  token: string,
): Promise<SubscriptionOverviewResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Subscription/company-subscription`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.data;
}

export default function CompanySubscription({ token }: Props) {
  const { error, data, isLoading } = useQuery<
    SubscriptionOverviewResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["company-subscription"],
    queryFn: () => getCompanySubscriptionsApi(token),
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
    <CompanySubscriptionSkeleton />
  ) : (
    data && (
      <div className="w-full lg:px-4 px-2 py-4 md:py-0 space-y-5">
        {/* Header */}
        <div>
          <p className="text-lg font-medium">Billing & Subscription</p>
          <p className="text-sm text-black/70">
            Manage your current plan, billing details, and unlock premium hiring
            features to find your next top talent.
          </p>
        </div>

        <CurrentPlanDetails currentPlanData={data.currentPlan} />

        <UpgradePlanForCompany plansData={data.availablePlans} token={token} />

        <CompanyBillingHistory billingHistory={data.billingHistory} />
      </div>
    )
  );
}
