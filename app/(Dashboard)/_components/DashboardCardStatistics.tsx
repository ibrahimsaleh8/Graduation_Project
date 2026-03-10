import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
type Props = {
  title: string;
  value: number;
  icon: IconSvgElement;
  background: string;
  iconColor: string;
};
export default function DashboardCardStatistics({
  icon,
  title,
  value,
  background,
  iconColor,
}: Props) {
  return (
    <div
      style={{ background }}
      className="w-full p-5 rounded-2xl flex flex-col items-center gap-5">
      <HugeiconsIcon
        style={{ color: iconColor }}
        icon={icon}
        className="size-7"
      />
      <div className="flex flex-col gap-1 items-center">
        <SlidingNumber className="text-4xl" number={value} />
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}
