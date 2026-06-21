import { Skeleton } from "@/components/ui/skeleton";

export default function ShowAdminSettingsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pl-8 space-y-2">
        <Skeleton className="h-7 w-40 rounded-md" />
        <Skeleton className="h-4 w-80 rounded-md" />
      </div>

      <div className="flex flex-col md:flex-row w-full items-start">
        {/* Sidebar Tab List */}
        <div className="flex flex-col gap-3 md:px-4 rounded-lg py-2 items-center min-w-50 w-full md:w-fit">
          <Skeleton className="h-11 w-full md:w-48 rounded-md" />
          <Skeleton className="h-11 w-full md:w-48 rounded-md" />
        </div>

        {/* Tab Content (default Socials layout) */}
        <div className="w-full md:border-l border-t md:border-t-0 border-border-color">
          <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
            <div className="flex flex-col gap-4 w-full">
              {/* Facebook Input */}
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              {/* Linkedin Input */}
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              {/* Instagram Input */}
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              {/* Youtube Input */}
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              {/* Twitter Input */}
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              {/* Save Button */}
              <div className="pt-1">
                <Skeleton className="h-10 w-45 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
