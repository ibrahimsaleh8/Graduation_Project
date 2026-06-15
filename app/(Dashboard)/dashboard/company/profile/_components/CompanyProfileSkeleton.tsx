import { Skeleton } from "@/components/ui/skeleton";

export default function CompanyProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* ── Top: Banner/Avatar + Social Links (side-by-side at xl) ── */}
      <div className="flex items-start gap-5 flex-col xl:flex-row md:pl-7">
        <div className="flex flex-col w-full">
          {/* Banner */}
          <div className="w-full h-60 rounded-2xl overflow-hidden border">
            <Skeleton className="w-full h-full rounded-none" />
          </div>

          <div className="flex items-start justify-between flex-wrap">
            {/* Avatar & Names */}
            <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
              {/* Avatar */}
              <Skeleton className="size-38 rounded-full ml-3 -mt-20 shrink-0" />

              <div className="space-y-1 pl-7 mt-4">
                {/* Company name */}
                <Skeleton className="h-9 w-48 rounded-md" />
                {/* Tagline */}
                <Skeleton className="h-4 w-72 rounded-md" />

                {/* Meta pills: location / industry / employees */}
                <div className="flex items-center gap-5 flex-wrap mt-3 justify-start text-center">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-4 w-36 rounded-md" />
                  <Skeleton className="h-4 w-32 rounded-md" />
                </div>
              </div>
            </div>

            {/* Visit Website button */}
            <div className="flex items-center gap-4 ml-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
              <Skeleton className="h-9 w-36 rounded-md ml-auto md:w-fit" />
            </div>
          </div>
        </div>

        {/* CompanyProfileSocialLinks skeleton */}
        <div className="w-full xl:max-w-100 bg-white p-5 rounded-2xl border border-border-color space-y-4">
          <Skeleton className="h-5 w-28 rounded-md" />
          <ul className="space-y-6 mt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="flex items-center gap-2">
                <Skeleton className="size-5 rounded-full shrink-0" />
                <Skeleton className="h-4 w-20 rounded-md" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="space-y-3 md:pl-7">
        <div className="flex items-start flex-col xl:flex-row gap-5">
          {/* Left column: About + Open Vacancies stacked */}
          <div className="flex gap-5 items-start flex-col w-full">
            {/* ProfileAbout skeleton */}
            <div className="w-full p-5 rounded-md border border-border-color bg-white space-y-4">
              <Skeleton className="h-5 w-16 rounded-md" />
              <div className="space-y-2 pt-1">
                <Skeleton className="h-3.5 w-full rounded-md" />
                <Skeleton className="h-3.5 w-full rounded-md" />
                <Skeleton className="h-3.5 w-5/6 rounded-md" />
                <Skeleton className="h-3.5 w-4/6 rounded-md" />
              </div>
            </div>

            {/* CompanyProfileOpenedJobs skeleton */}
            <div className="w-full bg-white border p-5 rounded-md space-y-4">
              <Skeleton className="h-5 w-32 rounded-md" />
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-input-bg/50 w-full p-4 rounded-md space-y-2">
                    {/* Job title */}
                    <Skeleton className="h-6 w-64 rounded-md" />
                    {/* Description lines */}
                    <Skeleton className="h-3.5 w-full rounded-md" />
                    <Skeleton className="h-3.5 w-5/6 rounded-md" />
                    {/* Salary */}
                    <Skeleton className="h-4 w-32 rounded-md" />
                    {/* Badges */}
                    <div className="flex items-center gap-3 mt-3">
                      <Skeleton className="h-7 w-20 rounded-md" />
                      <Skeleton className="h-7 w-20 rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CompanyProfileStatistics skeleton */}
          <div className="w-full xl:max-w-lg bg-white border p-5 rounded-md space-y-4">
            <Skeleton className="h-5 w-24 rounded-md" />
            <div className="grid md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3 items-center">
                  {/* Icon circle */}
                  <Skeleton className="size-10 rounded-full shrink-0" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-20 rounded-md" />
                    <Skeleton className="h-3.5 w-14 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
