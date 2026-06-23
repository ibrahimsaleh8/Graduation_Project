import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import { Add01Icon, CreditCardNotFoundIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SubscriptionPlanForm from "./SubscriptionPlanForm";
import { SubscriptionPlanDataType } from "./DisplaySubscriptionPage";
import ShowPlans from "./ShowPlans";

type Props = {
  token: string;
  plans: SubscriptionPlanDataType[];
};

export default function AllSubscriptionPlans({ plans, token }: Props) {
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
          content={<SubscriptionPlanForm operation="create" token={token} />}
          contentClassname="md:min-w-150 pb-3"
        />
      </div>

      {/* All Plans */}
      {plans.length > 0 ? (
        <ShowPlans plans={plans} token={token} />
      ) : (
        <div className="w-full capitalize flex items-center justify-center p-10 text-black/80 font-medium">
          <p className="flex items-center gap-2">
            <HugeiconsIcon
              icon={CreditCardNotFoundIcon}
              className="size-5"
              strokeWidth={2}
            />
            No plans added yet ...
          </p>
        </div>
      )}
    </div>
  );
}
