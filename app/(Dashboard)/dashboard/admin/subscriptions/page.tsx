"use client";

import DashboardCardStatistics from "@/app/(Dashboard)/_components/DashboardCardStatistics";
import {
  CreditCardIcon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import AllSubscriptionPlans from "./_components/AllSubscriptionPlans";

const subscriptionsStats = [
  {
    title: "Total Subscribers",
    value: 1248,
    icon: CreditCardIcon,
    iconColor: "#ffffff",
    iconBg: "#125af7a6",
    description: "All subscribed companies",
    background: "#1b1b1b",
    textColor: "#ffffff",
    descriptionColor: "#ffffff",
  },
  {
    title: "New Subscriptions",
    value: 64,
    icon: CheckmarkCircle02Icon,
    iconColor: "#1D4ED8",
    iconBg: "#DBEAFE",
    description: "Purchased this month",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Active Plans",
    value: 986,
    icon: CheckmarkCircle02Icon,
    iconColor: "#16A34A",
    iconBg: "#DCFCE7",
    description: "Currently active subscriptions",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
  {
    title: "Cancelled Plans",
    value: 19,
    icon: Cancel01Icon,
    iconColor: "#991B1B",
    iconBg: "#FEE2E2",
    description: "Expired or cancelled",
    background: "#ffffff",
    textColor: "#000000",
    descriptionColor: "#2e2e2e",
  },
];

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="font-medium text-xl">Subscriptions Management</p>
        <p className="text-sm">
          Monitor and manage platform subscription plans
        </p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {subscriptionsStats.map((stat) => (
          <DashboardCardStatistics size="small" {...stat} key={stat.title} />
        ))}
      </div>

      <Tabs defaultValue="plans">
        <TabsList className="md:w-100 w-full flex flex-col md:flex-row gap-4 items-center text-white">
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-black/70 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="plans">
            Plans
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-black/70 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="subscriptions">
            Subscriptions
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer duration-300 hover:bg-white w-full font-medium text-black/70 text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md"
            value="coupons">
            Coupons
          </TabsTrigger>
        </TabsList>
        <TabsContents className="overflow-visible! mt-7">
          <TabsContent value="plans">
            <AllSubscriptionPlans />
          </TabsContent>
          <TabsContent value="subscriptions">
            <>subscriptions</>
          </TabsContent>
          <TabsContent value="coupons">
            <>coupons</>
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
