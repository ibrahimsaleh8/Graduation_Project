import { Progress } from "@/components/animate-ui/components/radix/progress";

const usages = [
  {
    label: "Active Jobs",
    value: "84 / 100",
    progress: (84 / 100) * 100,
  },
  {
    label: "Featured Posts",
    value: "10 / 10",
    progress: (10 / 10) * 100,
  },
  {
    label: "Subscription Progress",
    value: "10 / 365",
    progress: (10 / 365) * 100,
  },
];
export default function SubscriptionUsage() {
  console.log((100 - 84) / 100);
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
            <Progress value={usage.progress} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
