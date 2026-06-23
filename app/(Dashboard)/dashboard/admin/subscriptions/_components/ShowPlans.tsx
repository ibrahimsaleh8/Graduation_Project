import { useState } from "react";
import { SubscriptionPlanDataType } from "./DisplaySubscriptionPage";
import SubscriptionPlanCardWithOperations from "./SubscriptionPlanCardWithOperations";

type Props = {
  plans: SubscriptionPlanDataType[];
  token: string;
};
export default function ShowPlans({ plans, token }: Props) {
  const [billingType, setBillingType] = useState<"monthly" | "yearly">(
    "monthly",
  );
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-4 bg-white rounded-full py-2 border w-fit">
        <button
          onClick={() => setBillingType("monthly")}
          className={`text-[0.85rem] px-4 py-2 ${billingType == "monthly" ? "bg-main-dark text-white" : ""} rounded-full cursor-pointer`}>
          Monthly
        </button>
        <button
          onClick={() => setBillingType("yearly")}
          className={`text-[0.85rem] px-4 py-2 ${billingType == "yearly" ? "bg-main-dark text-white" : ""} rounded-full cursor-pointer`}>
          Yearly
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-6 gap-4">
        {plans.map((plan) => (
          <SubscriptionPlanCardWithOperations
            token={token}
            planDetails={plan}
            billingType={billingType}
            key={plan.id}
          />
        ))}
      </div>
    </div>
  );
}
