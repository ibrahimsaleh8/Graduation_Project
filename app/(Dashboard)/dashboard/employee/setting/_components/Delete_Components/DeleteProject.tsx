import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { sileo } from "sileo";
type Props = {
  projectId: string;
  token: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
async function DeleteProjectApi(projectId: string, token: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Project/${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function DeleteProject({ projectId, token, setOpen }: Props) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => DeleteProjectApi(projectId, token),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Project deleted successfully!`,
      });
      if (setOpen) setOpen(false);
    },
    onError: (error: AxiosError<{ errors: string[] }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete project`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });
  return (
    <div className="space-y-2 flex flex-col gap-4">
      <p>This will permanently delete this Project conversation</p>
      <Button
        variant={"destructive"}
        className="ml-auto min-w-32 text-sm"
        onClick={() => mutate()}
        disabled={isPending}>
        {isPending ? <Spinner /> : "Delete"}
      </Button>
    </div>
  );
}
