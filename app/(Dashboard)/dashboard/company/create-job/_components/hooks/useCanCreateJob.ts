import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

async function canCraeteJobPost(token: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/can-post-job`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export const useCanCreateJob = (token: string) => {
  const { data, isLoading, error } = useQuery<
    { canPost: boolean },
    AxiosError<{ message: string }>
  >({
    queryKey: ["can-create-job"],
    queryFn: () => canCraeteJobPost(token),
  });

  return { data, isLoading, error };
};
