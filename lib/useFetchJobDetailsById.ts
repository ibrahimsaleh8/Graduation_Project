import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface JobDetailsByIdDataType {
  companyImage: string;
  companyName: string;
  jobCategory: string;
  jobLocation: string;
  title: string;
  minExperience: number;
  maxExperience: number;
  minSalary: number;
  maxSalary: number;
  workApproaches: string[];
  jobTypes: string[];
  postedDate: string;
  description: string;
  responsibility: string;
  requiredSkill: string[];
  isActive: boolean;
  isApplied: boolean;
  isSaved: boolean;
}

export interface SimilarJob {
  jobId: string;
  jobTitle: string;
  companyName: string;
  companyImage: string;
  jobLocation: string;
  isApplied: boolean;
  isSaved: boolean;
  workApproach: string[];
  jobType: string[];
  postedDate: string;
  minSalary: number;
  maxSalary: number;
}

export interface JobDetailsByIdResponseDataType {
  job: JobDetailsByIdDataType;
  similarJobs: SimilarJob[];
}
async function getJobDetailsById(
  id: string,
  token: string,
): Promise<JobDetailsByIdResponseDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
type Props = {
  jobId: string;
  token: string;
};
export const useFetchJobDetailsById = ({ jobId, token }: Props) => {
  const { error, isLoading, data } = useQuery<
    JobDetailsByIdResponseDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["job-details-by-id", jobId],
    queryFn: () => getJobDetailsById(jobId, token),
  });

  return { error, isLoading, data };
};
