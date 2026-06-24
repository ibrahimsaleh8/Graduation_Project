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
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import AllSubscriptionPlans from "./AllSubscriptionPlans";
import AllSubscriptionsTable from "./AllSubscriptionsTable";
import ShowCupons from "./ShowCupons";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { useMemo } from "react";
import DisplaySubscriptionPageSkeleton from "./DisplaySubscriptionPageSkeleton";

export type SubscriptionPlanDataType = {
  id: string;
  name: string;
  shortDescription: string;
  numberOfUser: number;
  monthlyPrice: number;
  yearlyPrice: number;
  maxJobPostsPerMonth: number;
  featuredJobPostsPerMonth: number;
  hasAiToolsAccess: boolean;
  hasCandidateSearch: boolean;
  hasPrioritySupport: boolean;
  isPublished: boolean;
  createdAt: string;
};

type SubscriptionStatsResponse = {
  totalSubscribers: number;
  newSubscriptions: number;
  activeSubscriptions: number;
  cancelledSubscriptions: number;
  plans: SubscriptionPlanDataType[];
};

type Props = {
  token: string;
};

async function getPlansApi(token: string): Promise<SubscriptionStatsResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Subscription/dashboard-overview`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function DisplaySubscriptionPage({ token }: Props) {
  const { error, isLoading, data } = useQuery<
    SubscriptionStatsResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["subscription-plans"],
    queryFn: () => getPlansApi(token),
  });

  const subscriptionsStats = useMemo(() => {
    if (!data) return undefined;

    return [
      {
        title: "Total Subscribers",
        value: data.totalSubscribers,
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
        value: data.newSubscriptions,
        icon: CheckmarkCircle02Icon,
        iconColor: "#1D4ED8",
        iconBg: "#DBEAFE",
        description: "Purchased this month",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Active Subscriptions",
        value: data.activeSubscriptions,
        icon: CheckmarkCircle02Icon,
        iconColor: "#16A34A",
        iconBg: "#DCFCE7",
        description: "Currently active subscriptions",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
      {
        title: "Expired Plans",
        value: data.cancelledSubscriptions,
        icon: Cancel01Icon,
        iconColor: "#991B1B",
        iconBg: "#FEE2E2",
        description: "Total Expired Plans",
        background: "#ffffff",
        textColor: "#000000",
        descriptionColor: "#2e2e2e",
      },
    ];
  }, [data]);

  if (error) {
    console.log("error", error.response);
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return isLoading ? (
    <DisplaySubscriptionPageSkeleton />
  ) : (
    data && (
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
          {subscriptionsStats &&
            subscriptionsStats.map((stat) => (
              <DashboardCardStatistics
                size="small"
                {...stat}
                key={stat.title}
              />
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
          <div className="overflow-visible! mt-7">
            <TabsContent value="plans">
              <AllSubscriptionPlans plans={data.plans} token={token} />
            </TabsContent>
            <TabsContent value="subscriptions">
              <AllSubscriptionsTable
                token={token}
                plans={data.plans.map((plan) => plan.name)}
              />
            </TabsContent>
            <TabsContent value="coupons">
              <ShowCupons
                token={token}
                plans={data.plans.map((plan) => ({
                  name: plan.name,
                  id: plan.id,
                }))}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    )
  );
}
