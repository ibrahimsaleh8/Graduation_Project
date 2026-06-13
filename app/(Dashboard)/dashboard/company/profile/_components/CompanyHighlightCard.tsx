import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

type Props = {
  title: string;
  value: string | null;
  icon: IconSvgElement;
  iconColor: string;
  iconBackgroundColor: string;
};
export default function CompanyHighlightCard({
  title,
  value,
  icon,
  iconBackgroundColor,
  iconColor,
}: Props) {
  return (
    value && (
      <div className="flex gap-3 items-center">
        {/* Icon */}
        <div
          style={{
            backgroundColor: iconBackgroundColor,
          }}
          className="size-10.5 rounded-full bg-main-color/10 flex items-center justify-center">
          <HugeiconsIcon
            style={{
              color: iconColor,
            }}
            icon={icon}
            className="size-5"
            strokeWidth={2}
          />
        </div>
        <div className="space-y-px">
          <p className="font-medium">{title}</p>
          <p className="text-sm">{value}</p>
        </div>
      </div>
    )
  );
}
