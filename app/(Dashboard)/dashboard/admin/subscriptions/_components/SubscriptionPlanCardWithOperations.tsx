import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Delete02Icon, Edit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SubscriptionPlanForm from "./SubscriptionPlanForm";
import DeleteSubscriptionPlan from "./DeleteSubscriptionPlan";
import { SubscriptionPlanDataType } from "./DisplaySubscriptionPage";
import PlanFeatureBadge from "./PlanFeatureBadge";

type Props = {
  planDetails: SubscriptionPlanDataType;
  token: string;
  billingType: "monthly" | "yearly";
};

export default function SubscriptionPlanCardWithOperations({
  planDetails,
  token,
  billingType,
}: Props) {
  return (
    <div className="w-full bg-white rounded-2xl p-6 flex flex-col gap-6 border border-border-color">
      {/* Top */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="text-xl font-medium">{planDetails.name}</p>
          <p className="text-sm text-black/70">
            {planDetails.shortDescription}
          </p>
        </div>
        <p className="text-xs px-4 py-1.5 bg-black rounded-full text-white">
          {planDetails.numberOfUser} Active
        </p>
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
            label={`${planDetails.maxJobPostsPerMonth} Active Job Posts`}
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={true}
            label={`${planDetails.featuredJobPostsPerMonth} Featured Jobs`}
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={planDetails.hasPrioritySupport}
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

      <div className="flex items-center gap-3 mt-auto">
        <AlertModel
          title="Edit Plan"
          trigger={
            <Button className="text-xs flex-1 items-center justify-center h-9.5 bg-main-color text-white hover:bg-main-color/80 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={Edit02Icon}
                className="size-4"
                strokeWidth={2}
              />
              Edit Plan
            </Button>
          }
          content={
            <SubscriptionPlanForm
              operation="edit"
              deafultValues={planDetails}
              token={token}
            />
          }
          contentClassname="md:min-w-150 pb-3"
        />

        <AlertModel
          title="Delete Plan"
          trigger={
            <Button className="text-xs h-9.5 bg-red-600 text-white justify-start hover:bg-red-700 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={Delete02Icon}
                className="size-4"
                strokeWidth={2}
              />
              Delete
            </Button>
          }
          content={
            <DeleteSubscriptionPlan planId={planDetails.id} token={token} />
          }
          contentClassname="md:min-w-150 pb-3"
        />
      </div>
    </div>
  );
}
