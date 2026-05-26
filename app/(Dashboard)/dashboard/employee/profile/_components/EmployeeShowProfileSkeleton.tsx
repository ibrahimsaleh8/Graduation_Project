import { Skeleton } from "@/components/ui/skeleton";

export default function EmployeeShowProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-5 flex-col xl:flex-row">
        <div className="flex flex-col w-full">
          <Skeleton className="w-full h-60 rounded-2xl" />

          <div className="flex items-start xl:justify-between flex-wrap w-full">
            <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
              <Skeleton className="size-38 flex shrink-0 items-center justify-center rounded-full ml-3 -mt-20" />
              <div className="space-y-3 pl-7 mt-4">
                <Skeleton className="h-8 w-40 rounded-md" />
                <Skeleton className="h-5 w-32 rounded-md" />
                <div className="flex items-center gap-5 flex-wrap mt-3 justify-start text-center">
                  <Skeleton className="h-5 w-32 rounded-md" />
                  <Skeleton className="h-5 w-32 rounded-md" />
                  <Skeleton className="h-5 w-32 rounded-md" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:justify-start gap-4 xl:ml-auto ml-0 xl:mx-0 mx-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
              <Skeleton className="h-12 w-full lg:w-56 rounded-md" />
            </div>
          </div>
        </div>

        <div className="w-full xl:max-w-120 bg-white border border-border-color p-5 rounded-2xl space-y-4">
          <Skeleton className="h-6 w-32 rounded-md" />
          <ul className="space-y-4 mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-4 w-28 rounded-md" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3 xl:pl-7">
        <div className="flex items-start flex-col xl:flex-row gap-5">
          <div className="flex gap-5 items-start flex-col w-full">
            <div className="w-full p-5 rounded-md border border-border-color bg-white space-y-4">
              <Skeleton className="h-6 w-24 rounded-md" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
              </div>
            </div>

            <div className="w-full p-5 rounded-md border border-border-color bg-white space-y-4">
              <Skeleton className="h-6 w-32 rounded-md" />
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={index}
                    className="space-y-3 border-b pb-3 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-56 rounded-md" />
                        <Skeleton className="h-4 w-40 rounded-md" />
                        <div className="flex items-center gap-2">
                          <Skeleton className="size-4 rounded-full" />
                          <Skeleton className="h-4 w-32 rounded-md" />
                        </div>
                      </div>
                      <Skeleton className="h-9 w-24 rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="h-4 w-5/6 rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full xl:max-w-120 p-5 rounded-md border border-border-color bg-white space-y-4">
            <Skeleton className="h-6 w-20 rounded-md" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-7 rounded-md"
                  style={{ width: `${80 + (index % 4) * 20}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full p-4 rounded-md space-y-4">
          <Skeleton className="h-7 w-40 rounded-md" />
          <div className="grid md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-10">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-5 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
