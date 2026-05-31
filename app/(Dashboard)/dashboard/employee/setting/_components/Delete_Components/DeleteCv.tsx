import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { sileo } from "sileo";
type Props = {
  resumeId: string;
  token: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
async function deleteResume(token: string, resumeId: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Settings/delete-resume/${resumeId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function DeleteCv({ token, resumeId, setOpen }: Props) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteResume(token, id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({ title: "CV Deleted successfully!" });
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      sileo.error({
        title: "Failed to delete CV",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });
  return (
    <div className="space-y-2 flex flex-col gap-4">
      <p>This will permanently delete this CV conversation</p>
      <Button
        disabled={isPending}
        onClick={() => mutate(resumeId)}
        variant={"destructive"}
        className="ml-auto min-w-32 text-sm">
        {isPending ? <Spinner /> : "Delete"}
      </Button>
    </div>
  );
}
