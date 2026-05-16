import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import SubscriptionPlanCardWithOperations from "./SubscriptionPlanCardWithOperations";
import SubscriptionPlanForm from "./SubscriptionPlanForm";

export default function AllSubscriptionPlans() {
  return (
    <div>
      {/* Top */}
      <div className="flex items-center justify-between gap-4 flex-wrap px-5">
        <p className="font-medium">Subscription Plans</p>
        <AlertModel
          title="Create New Plan"
          trigger={
            <Button className="text-xs h-9.5 md:w-fit w-full bg-main-color text-white justify-center md:justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={Add01Icon}
                className="size-4.5"
                strokeWidth={2}
              />
              Create New Plan
            </Button>
          }
          content={<SubscriptionPlanForm operation="create" />}
          contentClassname="md:min-w-150 pb-3"
        />
      </div>

      {/* All Plans */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-6 gap-4">
        <SubscriptionPlanCardWithOperations />
        <SubscriptionPlanCardWithOperations />
        <SubscriptionPlanCardWithOperations />
      </div>
    </div>
  );
}
