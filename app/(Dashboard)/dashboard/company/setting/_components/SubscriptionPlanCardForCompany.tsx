import { Button } from "@/components/ui/button";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleX } from "lucide-react";

export default function SubscriptionPlanCardForCompany() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 space-y-5 border border-border-color">
      {/* Top */}
      <div>
        <p className="text-xl font-medium">Basic</p>
        <p className="text-sm text-black/70">For startups & small teams</p>
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

      <Button className="w-full text-sm rounded-md mt-4 hover:bg-main-dark/80 bg-main-dark">
        Subscribe
      </Button>
    </div>
  );
}
