import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

type Props = {
  title: string;
  value: string;
  icon: IconSvgElement;
};
export default function SmallDetailsCard({ icon, title, value }: Props) {
  return (
    <div className="w-full p-3 bg-input-bg rounded-md border">
      <p className="font-medium flex items-center gap-1 text-sm">
        <HugeiconsIcon icon={icon} className="size-4" strokeWidth={2} />
        {title}
      </p>

      <p className="text-sm text-black/70 mt-1">{value}</p>
    </div>
  );
}
