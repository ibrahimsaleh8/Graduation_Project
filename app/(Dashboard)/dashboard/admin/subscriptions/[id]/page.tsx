import AllowedFeatures from "./_components/AllowedFeatures";
import CompanyMainInfo from "./_components/CompanyMainInfo";
import PlanOverview from "./_components/PlanOverview";
import SubscriptionDetailsBreadcrumb from "./_components/SubscriptionDetailsBreadcrumb";
import SubscriptionsHistory from "./_components/SubscriptionsHistory";
import SubscriptionUsage from "./_components/SubscriptionUsage";

export default async function SubscriptionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="space-y-3 container mx-auto">
      {/* Breadcrumb */}
      <SubscriptionDetailsBreadcrumb />

      {/* Company Details & Plan Overview */}
      <div className="w-full flex items-start gap-4 lg:flex-row flex-col">
        {/* Company Details */}
        <CompanyMainInfo />
        <PlanOverview />
      </div>

      <div className="w-full flex items-start gap-4 lg:flex-row flex-col">
        <SubscriptionUsage />
        <AllowedFeatures />
      </div>

      <SubscriptionsHistory />
    </div>
  );
}
