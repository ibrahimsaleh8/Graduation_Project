import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
type Props = {
  title: string;
  description: string;
  icon: IconSvgElement;
};
export default function JobCategoryCard({ description, icon, title }: Props) {
  return (
    <div className="space-y-2">
      {/* Top */}
      <div className="flex items-start gap-3">
        <HugeiconsIcon
          icon={icon}
          className="size-6 text-white/70 shrink-0 mt-1"
          strokeWidth={2}
        />
        <div className="space-y-4">
          <p className="font-medium text-2xl">{title}</p>
          <div className="w-50 h-px bg-white"></div>
          <p className="md:text-lg max-w-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
