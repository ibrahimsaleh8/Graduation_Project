import { Progress } from "@/components/animate-ui/components/radix/progress";
import { PlanUsage } from "./hooks/useSubscriptionDetails";
type Props = {
  planUsage: PlanUsage;
};

export default function SubscriptionUsage({ planUsage }: Props) {
  const usages = [
    {
      label: "Active Jobs",
      value: `${planUsage.activeJobs.used} / ${planUsage.activeJobs.limit}`,
      progress:
        (planUsage.activeJobs.used / planUsage.activeJobs.limit == 0
          ? 1
          : planUsage.activeJobs.limit) * 100,
    },
    {
      label: "Featured Posts",
      value: `${planUsage.featuredPosts.used} / ${planUsage.featuredPosts.limit}`,
      progress:
        (planUsage.featuredPosts.used / planUsage.featuredPosts.limit == 0
          ? 1
          : planUsage.featuredPosts.limit) * 100,
    },
    {
      label: "Subscription Progress",
      value: `${planUsage.subscriptionProgress.used} / ${planUsage.subscriptionProgress.limit}`,
      progress:
        (planUsage.subscriptionProgress.used /
          planUsage.subscriptionProgress.limit) *
        100,
    },
  ];
  console.log("planUsage", planUsage);
  return (
    <div className="bg-white p-5 w-full rounded-md border space-y-6">
      <p className="font-medium">Plan Usage</p>

      <div className="space-y-4">
        {usages.map((usage) => (
          <div key={usage.label} className="w-full space-y-1">
            <div className="w-full flex items-center justify-between flex-wrap gap-4 text-sm">
              <p>{usage.label}</p>
              <p>{usage.value}</p>
            </div>
            <Progress
              value={usage.progress > 100 ? 100 : usage.progress}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
