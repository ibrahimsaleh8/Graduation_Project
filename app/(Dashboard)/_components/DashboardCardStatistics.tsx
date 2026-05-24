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
  size: "small" | "large";
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
  size,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: background,
        color: textColor,
      }}
      className={`
      group w-full ${size == "large" ? "p-5 gap-4" : "p-4 gap-3"} rounded-md bg-main-dark border 
    duration-300 flex flex-col`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <p
          className={`${size == "large" ? "text-xl" : "text-base"} font-medium`}>
          {title}
        </p>

        <div className="p-3 rounded-xl" style={{ backgroundColor: iconBg }}>
          <HugeiconsIcon
            icon={icon}
            style={{ color: iconColor }}
            className={`${size == "large" ? "size-6" : "size-5"}`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <SlidingNumber
          className={`${size == "large" ? "text-5xl" : "text-3xl"} font-medium`}
          number={value ?? 0}
        />
        {description && (
          <p
            style={{ color: descriptionColor }}
            className={`${size == "large" ? "text-sm mt-4" : "text-[0.85rem] mt-2"} `}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
