import CompanyBillingHistory from "./CompanyBillingHistory";
import CurrentPlanDetails from "./CurrentPlanDetails";
import UpgradePlanForCompany from "./UpgradePlanForCompany";

export default function CompanySubscription() {
  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      {/* Header */}
      <div>
        <p className="text-lg font-medium">Billing & Subscription</p>
        <p className="text-sm text-black/70">
          Manage your current plan, billing details, and unlock premium hiring
          features to find your next top talent.
        </p>
      </div>

      <CurrentPlanDetails />

      <UpgradePlanForCompany />

      <CompanyBillingHistory />
    </div>
  );
}
