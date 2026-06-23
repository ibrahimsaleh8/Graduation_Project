import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

async function subscriptionDetailsApi(
  id: string,
  token: string,
): Promise<CompanySubscriptionOverview> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Subscription/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
type Props = {
  token: string;
  id: string;
};
export type CompanyInfo = {
  companyId: string;
  companyName: string;
  companyEmail: string;
  industry: string;
  location: string;
  joinedAt: string;
  companyLogoUrl: string;
};

export type CurrentSubscription = {
  subscriptionId: string;
  planName: string;
  planDescription: string;
  price: number;
  billingCycle: string;
  startDate: string;
  endDate: string;
  daysLeft: number;
  isActive: boolean;
  status: string;
};

export type UsageMetric = {
  used: number;
  limit: number;
};

export type PlanUsage = {
  activeJobs: UsageMetric;
  featuredPosts: UsageMetric;
  subscriptionProgress: UsageMetric;
};

export type AllowedFeaturesDataType = {
  activeJobPostsLimit: number;
  featuredJobsLimit: number;
  hasAiToolsAccess: boolean;
  hasPrioritySupport: boolean;
  hasCandidateSearch: boolean;
};

export type SubscriptionHistoryRecord = {
  number: number;
  id: string;
  planName: string;
  price: number;
  billingDate: string;
  status: string;
};

export type CompanySubscriptionOverview = {
  company: CompanyInfo;
  currentSubscription: CurrentSubscription;
  planUsage: PlanUsage;
  allowedFeatures: AllowedFeaturesDataType;
  subscriptionHistory: {
    totalSubscriptions: number;
    records: SubscriptionHistoryRecord[];
  };
};

export const useSubscriptionDetails = ({ id, token }: Props) => {
  const { data, isLoading, error } = useQuery<
    CompanySubscriptionOverview,
    AxiosError<{ message: string; errors: string[] }>
  >({
    queryKey: ["subscription-details", id],
    queryFn: () => subscriptionDetailsApi(id, token),
  });

  return { data, isLoading, error };
};
