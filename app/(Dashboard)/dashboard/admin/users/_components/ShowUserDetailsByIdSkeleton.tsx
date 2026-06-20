import { Skeleton } from "@/components/ui/skeleton";
import SmallDetailsCardSkeleton from "../../_components/SmallDetailsCardSkeleton";
import SmallStatisticCardForDetailsSkeleton from "../../_components/SmallStatisticCardForDetailsSkeleton";
import UserDetailsSocialsSkeleton from "./UserDetailsSocialsSkeleton";

export default function ShowUserDetailsByIdSkeleton() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-3">
      <div className="space-y-5 px-4 pb-2 w-full">
        {/* Top User Info */}
        <div className="w-full flex md:items-end items-center text-center md:text-left md:flex-row flex-col gap-4 flex-wrap">
          {/* Avatar */}
          <Skeleton className="size-18 rounded-full bg-black/10" />

          {/* User Main Data */}
          <div>
            <Skeleton className="h-6 w-16 rounded-sm bg-black/10" />
            <Skeleton className="h-5 w-32 mt-2 bg-black/10" />
            <Skeleton className="h-4 w-40 mt-2 bg-black/10" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SmallDetailsCardSkeleton key={index} />
          ))}
        </div>

        {/* Statistics */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-20 bg-black/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SmallStatisticCardForDetailsSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-14 bg-black/10" />

          <div className="flex items-center gap-2 flex-wrap">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-7 rounded-sm bg-black/10"
                style={{ width: `${60 + index * 14}px` }}
              />
            ))}
          </div>
        </div>

        {/* Social Links */}
        <UserDetailsSocialsSkeleton />
      </div>

      {/* Bottom Action Bar */}
      <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center flex-col gap-4">
        <div className="w-full flex items-center gap-4">
          <Skeleton className="h-10 w-full rounded-md bg-black/10" />
          <Skeleton className="h-10 w-full rounded-md bg-black/10" />
        </div>

        <Skeleton className="h-10 w-full rounded-md bg-black/10" />
      </div>
    </div>
  );
}
