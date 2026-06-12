import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function JobApplicantsLoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-2">
      {/* Top */}
      <div className="w-full flex items-center justify-between gap-4">
        {/* User Image & Info */}
        <div className="flex items-start gap-3">
          <Skeleton className="size-20 rounded-full" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-52" />
            <Skeleton className="h-4 w-28 mt-2" />
          </div>
        </div>

        {/* Match Circle */}
        <div className="flex flex-col gap-1 items-center">
          <Skeleton className="size-17.5 rounded-full" />
        </div>
      </div>

      {/* CV Details */}
      <div className="w-full bg-input-bg p-4 rounded-md flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-sm" />

          <div>
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        <Skeleton className="h-9 w-24 rounded-sm" />
      </div>

      {/* Status & Schedule Button */}
      <div className="space-y-2 mt-5">
        <div className="flex items-center justify-between gap-4">
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 w-full mt-6">
          <Skeleton className="h-10 w-1/2 rounded-md" />
          <Skeleton className="h-10 w-1/2 rounded-md" />
        </div>
      </div>
    </motion.div>
  );
}
