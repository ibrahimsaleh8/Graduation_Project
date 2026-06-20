import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  variant?: "dark" | "light";
  size?: "small" | "large";
};

export default function DashboardCardStatisticsSkeleton({
  variant = "light",
  size = "small",
}: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={`
        w-full ${size === "large" ? "p-5 gap-4" : "p-4 gap-3"} rounded-md border 
        duration-300 flex flex-col
        ${isDark ? "bg-main-dark" : "bg-white"}
      `}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton
          className={`${size === "large" ? "h-6 w-28" : "h-5 w-24"} ${isDark ? "bg-white/15" : "bg-black/10"}`}
        />
        <Skeleton
          className={`${size === "large" ? "size-12" : "size-11"} rounded-xl ${isDark ? "bg-white/15" : "bg-black/10"}`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <Skeleton
          className={`${size === "large" ? "h-12 w-20" : "h-9 w-14"} ${isDark ? "bg-white/15" : "bg-black/10"}`}
        />
        <Skeleton
          className={`${size === "large" ? "h-4 w-36 mt-4" : "h-4 w-32 mt-2"} ${isDark ? "bg-white/15" : "bg-black/10"}`}
        />
      </div>
    </div>
  );
}
