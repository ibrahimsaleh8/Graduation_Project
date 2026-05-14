import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import CreateSubscriptionPlanForm from "./CreateSubscriptionPlanForm";

export default function AllSubscriptionPlans() {
  return (
    <div>
      {/* Top */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="font-medium">Subscription Plans</p>
        <AlertModel
          title="Create New Plan"
          trigger={
            <Button className="text-xs h-9.5 bg-main-color text-white justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={Add01Icon}
                className="size-4.5"
                strokeWidth={2}
              />
              Create New Plan
            </Button>
          }
          content={<CreateSubscriptionPlanForm />}
          contentClassname="md:min-w-150 pb-3"
        />
      </div>

      {/* All Plans */}
      <div>Plans</div>
    </div>
  );
}
