import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type CompanyDashboardResponseDataType = {
  statistics: CompanyDashboardStatistics;
  monthlyStats: CompanyDashboardMonthlyStat[];
  recentJobPosting: CompanyDashboardRecentJobPosting[];
  applicants: CompanyDashboardApplicant[];
};

export type CompanyDashboardStatistics = {
  totalJobPosts: number;
  activeJobPosts: number;
  totalApplicants: number;
  scheduledInterviews: number;
};

export type CompanyDashboardMonthlyStat = {
  month: string;
  applicantsCount: number;
  jobPostedCount: number;
};

export type CompanyDashboardRecentJobPosting = {
  id: string;
  jobTitle: string;
  totalApplication: string;
  postedAt: string;
};

export type CompanyDashboardApplicant = {
  applicantId: string;
  applicantName: string;
  jobAppliedFor: string;
  appliedAt: string;
};
async function getCompanyDashboardData(
  token: string,
): Promise<CompanyDashboardResponseDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/get-dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export const useGetCompanyDashboardData = ({ token }: { token: string }) => {
  const { data, isLoading, error } = useQuery<
    CompanyDashboardResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["company-dashboard"],
    queryFn: () => getCompanyDashboardData(token),
  });
  return { data, isLoading, error };
};
