import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleX } from "lucide-react";

type Props = {
  label: string;
  isActive: boolean;
};

export default function PlanFeatureBadge({ isActive, label }: Props) {
  return (
    <p className="flex items-center gap-1">
      {isActive ? (
        <HugeiconsIcon
          icon={CheckmarkCircle02Icon}
          className="size-5 fill-green-700 text-white"
          strokeWidth={2}
        />
      ) : (
        <CircleX className="size-5 fill-red-700 text-white" />
      )}

      <span className="text-sm">{label}</span>
    </p>
  );
}
