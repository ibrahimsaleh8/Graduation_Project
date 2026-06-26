import axios, { AxiosError } from "axios";
import { SavedJobType } from "../ShowAllSavedJobs";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

type Props = {
  token: string;
};
async function getSavedJobsApi(token: string): Promise<SavedJobType[]> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Applicant/MysavedJobs`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export const useSavedJobs = ({ token }: Props) => {
  const { data, isLoading, error } = useQuery<
    SavedJobType[],
    AxiosError<{ message: string }>
  >({
    queryKey: ["employee-saved-jobs"],
    queryFn: () => getSavedJobsApi(token),
  });

  const [serachedTxt, setSerachedTxt] = useState("");
  const [serachedType, setSerachedType] = useState("all");

  const jobs = useMemo(() => {
    if (!data) return undefined;

    let filteredJobs = data;

    if (serachedTxt.trim().length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(serachedTxt.trim().toLowerCase()),
      );
    }

    if (serachedType !== "all") {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobType.includes(serachedType),
      );
    }

    return filteredJobs;
  }, [data, serachedTxt, serachedType]);

  const UpdateSearchTxt = (text: string) => {
    setSerachedTxt(text);
  };
  const UpdateSearchType = (type: string) => {
    setSerachedType(type);
  };

  return {
    UpdateSearchType,
    UpdateSearchTxt,
    jobs,
    isLoading,
    error,
  };
};
