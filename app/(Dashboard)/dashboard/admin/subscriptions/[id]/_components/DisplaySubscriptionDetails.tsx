"use client";
import AllowedFeatures from "./AllowedFeatures";
import CompanyMainInfo from "./CompanyMainInfo";
import PlanOverview from "./PlanOverview";
import SubscriptionsHistory from "./SubscriptionsHistory";
import SubscriptionUsage from "./SubscriptionUsage";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import BackButton from "./BackButton";
import { useSubscriptionDetails } from "./hooks/useSubscriptionDetails";
import DisplaySubscriptionDetailsSkeleton from "./DisplaySubscriptionDetailsSkeleton";
type Props = {
  token: string;
  id: string;
};

export default function DisplaySubscriptionDetails({ id, token }: Props) {
  const { data, error, isLoading } = useSubscriptionDetails({
    id,
    token,
  });
  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.errors[0] ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <DisplaySubscriptionDetailsSkeleton />
  ) : (
    data && (
      <div className="space-y-3 container mx-auto">
        {/* Breadcrumb */}
        <BackButton />

        {/* Company Details & Plan Overview */}
        <div className="w-full flex gap-4 lg:flex-row flex-col">
          <CompanyMainInfo companyData={data.company} />
          <PlanOverview planData={data.currentSubscription} />
        </div>

        <div className="w-full flex gap-4 lg:flex-row flex-col">
          <SubscriptionUsage planUsage={data.planUsage} />
          <AllowedFeatures allowedFeatures={data.allowedFeatures} />
        </div>

        <SubscriptionsHistory subscriptionHistory={data.subscriptionHistory} />
      </div>
    )
  );
}
