import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import {
  CheckmarkCircle02Icon,
  Delete02Icon,
  Edit02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleX } from "lucide-react";
import SubscriptionPlanForm from "./SubscriptionPlanForm";
import DeleteSubscriptionPlan from "./DeleteSubscriptionPlan";

export default function SubscriptionPlanCardWithOperations() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 space-y-5 border border-border-color">
      {/* Top */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="text-xl font-medium">Basic</p>
          <p className="text-sm text-black/70">For startups & small teams</p>
        </div>
        <p className="text-xs px-4 py-1.5 bg-black rounded-full text-white">
          1,204 Active
        </p>
      </div>

      {/* Price */}
      <p className="text-3xl font-medium">
        $199 <span className="text-sm">/Month</span>
      </p>

      {/* Features */}
      <ul className="space-y-2">
        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />

          <span className=" text-sm"> 5 Active Job Posts </span>
        </li>

        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />
          <span className=" text-sm"> 2 Featured Jobs </span>
        </li>

        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />
          <span className=" text-sm">AI Tools Access</span>
        </li>

        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />
          <span className=" text-sm"> Standard Support </span>
        </li>

        <li className="flex items-center gap-1">
          <CircleX className="size-5 fill-red-700 text-white" />
          <span className=" text-sm"> Candidate Search </span>
        </li>
      </ul>

      <div className="flex items-center gap-3 mt-7">
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
          content={<SubscriptionPlanForm operation="edit" />}
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
          content={<DeleteSubscriptionPlan />}
          contentClassname="md:min-w-150 pb-3"
        />
      </div>
    </div>
  );
}
