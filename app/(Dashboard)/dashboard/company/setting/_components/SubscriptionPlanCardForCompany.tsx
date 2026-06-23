import { Button } from "@/components/ui/button";
import { AvailablePlan } from "./CompanySubscription";
import PlanFeatureBadge from "../../../admin/subscriptions/_components/PlanFeatureBadge";
import AlertModel from "@/components/main-layout/AlertModel";
import CreatePaymentLink from "./CreatePaymentLink";
type Props = {
  planDetails: AvailablePlan;
  billingType: "monthly" | "yearly";
  token: string;
};

export default function SubscriptionPlanCardForCompany({
  planDetails,
  billingType,
  token,
}: Props) {
  return (
    <div className="w-full bg-white rounded-2xl p-6 flex flex-col gap-5 border border-border-color">
      {/* Top */}
      <div>
        <p className="text-xl font-medium">{planDetails.name}</p>
        <p className="text-sm text-black/70">{planDetails.description}</p>
      </div>

      {/* Price */}
      {billingType == "monthly" ? (
        <p className="text-3xl font-medium">
          ${planDetails.monthlyPrice} <span className="text-sm">/Month</span>
        </p>
      ) : (
        <p className="text-3xl font-medium">
          ${planDetails.yearlyPrice} <span className="text-sm">/Year</span>
        </p>
      )}

      {/* Features */}
      <ul className="space-y-2">
        <li>
          <PlanFeatureBadge
            isActive={true}
            label={`${planDetails.maxActiveJobs} Active Job Posts Per Month`}
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={true}
            label={`${planDetails.maxFeaturedJobs} Featured Jobs Per Month`}
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={planDetails.hasAiToolsAccess}
            label="AI Tools Access"
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={planDetails.hasStandardSupport}
            label="Priority Support"
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={planDetails.hasCandidateSearch}
            label="Candidate Search"
          />
        </li>
      </ul>

      <AlertModel
        title="Create a payment"
        trigger={
          <Button className="w-full text-sm rounded-md hover:bg-main-dark/80 bg-main-dark mt-auto">
            Subscribe
          </Button>
        }
        content={
          <CreatePaymentLink
            token={token}
            billingType={billingType}
            planId={planDetails.planId}
            planName={planDetails.name}
            monthlyPrice={planDetails.monthlyPrice}
            yearlyPrice={planDetails.yearlyPrice}
          />
        }
        contentClassname="md:min-w-150 pb-3"
      />
    </div>
  );
}
