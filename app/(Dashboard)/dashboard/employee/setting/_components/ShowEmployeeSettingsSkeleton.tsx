import { Skeleton } from "@/components/ui/skeleton";

export default function ShowEmployeeSettingsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pl-8">
        <Skeleton className="h-7 w-24 mb-2" />
        <Skeleton className="h-4 w-80" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full items-start gap-4">
        {/* Tabs Sidebar */}
        <div className="flex flex-col gap-3 px-4 rounded-lg py-2 items-center min-w-50 flex-wrap w-full md:w-fit">
          {/* Tab Items */}
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-11 w-full md:w-48 rounded-md" />
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="w-full md:border-l border-t md:border-t-0 border-border-color">
          <div className="w-full px-4 py-4 md:py-0">
            {/* Body */}
            <div className="flex flex-col gap-3">
              {/* Cover Image */}
              <div className="flex flex-col w-full">
                <Skeleton className="w-full h-70 rounded-2xl" />

                {/* Profile Picture */}
                <div className="relative -mt-17">
                  <Skeleton className="size-36 rounded-full" />
                </div>
              </div>

              {/* Text Form Fields */}
              <div className="flex gap-5 flex-col w-full mt-5 px-3">
                {/* Input Fields Row */}
                <div className="flex items-start gap-4 w-full flex-col lg:flex-row">
                  {/* Full Name */}
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-11 w-full" />
                  </div>

                  {/* Job Title */}
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-11 w-full" />
                  </div>

                  {/* Country */}
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-11 w-full" />
                  </div>
                </div>

                {/* About Me Editor */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-32 w-full" />
                </div>

                {/* CV Section */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  {/* File Card */}
                  <div className="flex items-start flex-col w-fit">
                    <div className="w-fit px-5 pt-4 pb-4 bg-white rounded-md border flex flex-col gap-2 items-center">
                      <Skeleton className="size-10 rounded" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <div className="flex gap-1 items-center pt-1 w-full">
                      <Skeleton className="h-8 w-20 rounded-md" />
                      <Skeleton className="h-8 w-20 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="ml-3">
                <Skeleton className="h-10 w-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
