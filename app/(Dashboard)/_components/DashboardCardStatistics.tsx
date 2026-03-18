import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

type Props = {
  title: string;
  value: number;
  description: string;
  icon: IconSvgElement;
  iconColor: string;
  iconBg: string;
  background: string;
  textColor: string;
  descriptionColor: string;
};

export default function DashboardCardStatistics({
  icon,
  title,
  value,
  iconColor,
  description,
  background,
  textColor,
  iconBg,
  descriptionColor,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: background,
        color: textColor,
      }}
      className="group w-full p-5 rounded-md bg-main-dark border 
    duration-300 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">{title}</p>

        <div className="p-3 rounded-xl" style={{ backgroundColor: iconBg }}>
          <HugeiconsIcon
            icon={icon}
            style={{ color: iconColor }}
            className="size-6"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <SlidingNumber className="text-5xl font-medium" number={value} />
        {description && (
          <p style={{ color: descriptionColor }} className="text-sm mt-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
