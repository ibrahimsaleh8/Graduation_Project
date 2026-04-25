import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

type Props = {
  label: string;
  value: string;
  bg: string;
  color: string;
  icon: IconSvgElement;
};
export default function JobPostStaticsCard({
  label,
  value,
  bg,
  color,
  icon,
}: Props) {
  return (
    <div className="p-4 flex items-center gap-5 bg-white shadow border w-full rounded-md">
      {/* Icon */}
      <div
        style={{
          backgroundColor: bg,
        }}
        className="size-10 rounded-sm flex items-center justify-center">
        <HugeiconsIcon
          icon={icon}
          strokeWidth={2}
          className="size-5"
          style={{
            color,
          }}
        />
      </div>

      {/* Text */}
      <div>
        <p className="font-medium text-xl">{value}</p>
        <p className="text-sm -mt-1 text-black/60">{label}</p>
      </div>
    </div>
  );
}
