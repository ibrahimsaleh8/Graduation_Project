import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { sileo } from "sileo";

type Props = {
  token: string;
  jobId: string;
};

async function DeleteJobPostApi({ jobId, token }: Props) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting/${jobId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function DeleteJob({ jobId, token }: Props) {
  const queryClient = useQueryClient();
  const route = useRouter();
  const { isPending, mutate } = useMutation({
    mutationFn: () => DeleteJobPostApi({ jobId, token }),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["company-job-posts"] });
      route.push("/dashboard/company/job-posts");
      sileo.success({
        title: "Job Posted Deleted successfully!",
      });
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to delete job post",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <p>
        Are you sure you want to delete this job post? This action cannot be
        undone.
      </p>
      <Button
        onClick={() => mutate()}
        disabled={isPending}
        className="bg-red-600 text-white hover:bg-red-700 mt-4 ml-auto text-sm w-40">
        {isPending ? <Spinner /> : "Delete Job Post"}
      </Button>
    </div>
  );
}
