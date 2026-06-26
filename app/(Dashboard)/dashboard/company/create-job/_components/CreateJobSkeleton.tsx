import { Skeleton } from "@/components/ui/skeleton";

/** Skeleton bar used for label-like lines */
function SkeletonLabel({ width = "w-24" }: { width?: string }) {
  return <Skeleton className={`h-3.5 ${width} rounded`} />;
}

/** Skeleton for a single text-input field */
function SkeletonInput({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-11 w-full rounded-md ${className}`} />;
}

/** Skeleton for a labelled field block */
function SkeletonField({
  labelWidth,
  inputClass,
}: {
  labelWidth?: string;
  inputClass?: string;
}) {
  return (
    <div className="space-y-1.5">
      <SkeletonLabel width={labelWidth} />
      <SkeletonInput className={inputClass} />
    </div>
  );
}

/** Skeleton for a pill/chip tag */
function SkeletonPill({ width = "w-24" }: { width?: string }) {
  return <Skeleton className={`h-9 ${width} rounded-full`} />;
}

export default function CreateJobSkeleton() {
  return (
    <div className="flex gap-8 md:flex-row flex-col md:pr-10 animate-pulse">
      {/* ── Stepper (left sidebar) ── */}
      <div className="w-full md:w-52 shrink-0">
        <div className="flex gap-4 flex-wrap md:flex-col">
          {[1, 2, 3].map((n, i) => (
            <div key={n}>
              <div className="flex items-center gap-2">
                {/* step circle */}
                <Skeleton className="size-7 rounded-full shrink-0" />
                {/* step label */}
                <Skeleton className="h-3.5 w-20 rounded" />
              </div>
              {/* connector line (desktop only) */}
              {i !== 2 && (
                <Skeleton className="w-0.5 h-10 ml-3 mt-2 hidden md:block rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Form area (right) ── */}
      <div className="space-y-6 w-full">
        {/* Job Title */}
        <SkeletonField labelWidth="w-16" />

        {/* Category & Location – side by side on md */}
        <div className="flex items-start gap-3 w-full flex-col md:flex-row">
          <SkeletonField labelWidth="w-24" />
          <SkeletonField labelWidth="w-16" />
        </div>

        {/* Employment Type pills */}
        <div className="space-y-3">
          <SkeletonLabel width="w-32" />
          <div className="flex flex-wrap gap-3">
            <SkeletonPill width="w-20" />
            <SkeletonPill width="w-24" />
            <SkeletonPill width="w-20" />
            <SkeletonPill width="w-28" />
          </div>
        </div>

        {/* Work Approach pills */}
        <div className="space-y-3">
          <SkeletonLabel width="w-28" />
          <div className="flex flex-wrap gap-3">
            <SkeletonPill width="w-20" />
            <SkeletonPill width="w-16" />
            <SkeletonPill width="w-24" />
          </div>
        </div>

        {/* Experience Required */}
        <div className="space-y-4">
          <SkeletonLabel width="w-36" />
          <div className="flex md:items-end gap-3 flex-col md:flex-row pl-2">
            <div className="space-y-1.5">
              <SkeletonLabel width="w-44" />
              <Skeleton className="h-11 w-full min-w-60 rounded-md" />
            </div>
            {/* dash spacer */}
            <Skeleton className="h-4 w-3 mb-2 hidden md:block rounded" />
            <div className="space-y-1.5">
              <SkeletonLabel width="w-44" />
              <Skeleton className="h-11 w-full min-w-60 rounded-md" />
            </div>
          </div>
        </div>

        {/* Salary Range */}
        <div className="space-y-4">
          <SkeletonLabel width="w-36" />
          <div className="flex md:items-end gap-3 flex-col md:flex-row pl-2">
            <div className="space-y-1.5">
              <SkeletonLabel width="w-20" />
              <Skeleton className="h-11 md:w-48 w-full rounded-md" />
            </div>
            <Skeleton className="h-4 w-3 mb-2 hidden md:block rounded" />
            <div className="space-y-1.5">
              <SkeletonLabel width="w-20" />
              <Skeleton className="h-11 md:w-48 w-full rounded-md" />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>
    </div>
  );
}
