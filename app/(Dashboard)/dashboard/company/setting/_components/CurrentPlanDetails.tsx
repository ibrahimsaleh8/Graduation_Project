import { CreditCardPosIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Progress } from "@/components/animate-ui/components/radix/progress";
import { CurrentPlan } from "./CompanySubscription";
import SubscriptionStatusBadge from "../../../admin/subscriptions/_components/SubscriptionStatusBadge";
import { formatDate } from "@/lib/FormatDate";
type Props = {
  currentPlanData: CurrentPlan;
};
const calculateProgress = (used: number, limit: number) => {
  if (!limit) return 0;
  return Math.min((used / limit) * 100, 100);
};

export default function CurrentPlanDetails({ currentPlanData }: Props) {
  const usages = [
    {
      label: "Active Jobs",
      value: `${currentPlanData.activeJobs.used} / ${currentPlanData.activeJobs.limit}`,
      progress: calculateProgress(
        currentPlanData.activeJobs.used,
        currentPlanData.activeJobs.limit,
      ),
    },
    {
      label: "Featured Posts",
      value: `${currentPlanData.featuredPosts.used} / ${currentPlanData.featuredPosts.limit}`,
      progress: calculateProgress(
        currentPlanData.featuredPosts.used,
        currentPlanData.featuredPosts.limit,
      ),
    },
    {
      label: "Subscription Progress",
      value: `${currentPlanData.subscriptionProgress.used} / ${currentPlanData.subscriptionProgress.limit}`,
      progress: calculateProgress(
        currentPlanData.subscriptionProgress.used,
        currentPlanData.subscriptionProgress.limit,
      ),
    },
  ];
  return (
    <div className="p-5 bg-white rounded-2xl w-full">
      {/* Top */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-3 border-b">
        <p className="font-medium">Current Plan Details</p>

        <SubscriptionStatusBadge
          isActive={currentPlanData.status == "Active"}
        />
      </div>

      {/* Plan Details */}
      <div className="flex items-start gap-4 pt-6 flex-col lg:flex-row">
        {/* Plan Main data */}
        <div className="space-y-5 w-full md:max-w-xl">
          {/* Name */}
          <div className="flex items-start gap-3">
            <div className="size-12 flex items-center justify-center bg-blue-50 text-blue-700 rounded-md">
              <HugeiconsIcon
                icon={CreditCardPosIcon}
                className="size-6"
                strokeWidth={2}
              />
            </div>
            <div>
              <p className="text-sm text-black/70">Plan Name</p>
              <p className="font-medium">{currentPlanData.planName}</p>
            </div>
          </div>

          {/* billing Cycle & Finish on */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="p-3 bg-input-bg rounded-md text-sm">
              <p className="text-black/70">Billing</p>
              <p className="font-medium">{currentPlanData.billingCycle}</p>
            </div>
            <div className="p-3 bg-input-bg rounded-md text-sm">
              <p className="text-black/70">Renewal</p>
              <p className="font-medium">
                {formatDate(currentPlanData.renewalDate)}
              </p>
            </div>
          </div>
        </div>

        {/* Plan Numbers */}
        <div className="space-y-4 w-full">
          {usages.map((usage) => (
            <div key={usage.label} className="w-full space-y-1">
              <div className="w-full flex items-center justify-between flex-wrap gap-4 text-sm">
                <p>{usage.label}</p>
                <p>{usage.value}</p>
              </div>
              <Progress value={usage.progress} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
