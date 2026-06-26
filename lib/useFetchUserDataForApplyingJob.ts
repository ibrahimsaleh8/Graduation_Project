import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type userDataForApplingDataType = {
  applicantName: string;
  email: string;
  resumes: {
    resumeId: string;
    filePath: string;
    fileName: string;
  }[];
};

async function fetchEmployeeApplyingData(
  token: string,
): Promise<userDataForApplingDataType> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Applicant/Application`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export const useFetchUserDataForApplyingJob = (token: string) => {
  const { error, isLoading, data } = useQuery<
    userDataForApplingDataType,
    AxiosError<{ message: string }>
  >({
    queryKey: ["user-data-for-applying-job"],
    queryFn: () => fetchEmployeeApplyingData(token),
  });
  return { error, isLoading, data };
};
