import { formatDate } from "@/lib/FormatDate";
import SubscriptionStatusBadge from "../../_components/SubscriptionStatusBadge";
import { CurrentSubscription } from "./hooks/useSubscriptionDetails";

type Props = {
  planData: CurrentSubscription;
};

export default function PlanOverview({ planData }: Props) {
  return (
    <div className="bg-white p-5 w-full rounded-md border space-y-6">
      <p className="font-medium">Plan Overview</p>

      <div className="space-y-3">
        {/* Current Plan */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Current Plan</p>
          <p className="font-medium">{planData.planName}</p>
        </div>

        {/* Price */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Price</p>
          <p className="font-medium">
            ${planData.price} /{planData.billingCycle}
          </p>
        </div>

        {/* Billing Cycle */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Billing Cycle</p>
          <p className="font-medium">{planData.billingCycle}</p>
        </div>

        {/* Renewal Date */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Start Date</p>
          <p className="font-medium">{formatDate(planData.startDate)}</p>
        </div>
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">End Date</p>
          <p className="font-medium">{formatDate(planData.endDate)}</p>
        </div>

        {/* Status */}
        <div className="w-full flex items-center justify-between gap-3 text-sm pb-1">
          <p className="text-black/80">Status</p>

          <SubscriptionStatusBadge isActive={planData.isActive} />
        </div>
      </div>
    </div>
  );
}
