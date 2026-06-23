"use client";
import { useState } from "react";
import SubscriptionPlanCardForCompany from "./SubscriptionPlanCardForCompany";
import { AvailablePlan } from "./CompanySubscription";
type Props = {
  plansData: AvailablePlan[];
  token: string;
};
export default function UpgradePlanForCompany({ plansData, token }: Props) {
  const [billingType, setBillingType] = useState<"monthly" | "yearly">(
    "monthly",
  );
  return (
    <div className="md:p-5 space-y-5">
      <div className="w-full flex items-center justify-between gap-4 flex-wrap">
        <p className="font-medium pl-3 md:pl-0">Upgrade Your Plan</p>

        {/* Monthly & Yearly */}
        <div className="flex items-center gap-2 px-4 bg-white rounded-full py-2 border">
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
      </div>

      <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {plansData.map((plan) => (
          <SubscriptionPlanCardForCompany
            billingType={billingType}
            token={token}
            planDetails={plan}
            key={plan.planId}
          />
        ))}
      </div>
    </div>
  );
}
