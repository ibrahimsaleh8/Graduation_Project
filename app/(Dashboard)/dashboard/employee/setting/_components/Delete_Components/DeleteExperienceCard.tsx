import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { sileo } from "sileo";
type Props = {
  token: string;
  id: string;

  setOpen?: Dispatch<SetStateAction<boolean>>;
};
async function DeleteExperience(token: string, id: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Experience/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function DeleteExperienceCard({ token, id, setOpen }: Props) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => DeleteExperience(token, id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Experience deleted successfully!`,
      });
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete experience`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });
  return (
    <div className="space-y-2 flex flex-col gap-4">
      <p>This will permanently delete this Experience card.</p>
      <Button
        disabled={isPending}
        variant={"destructive"}
        className="ml-auto min-w-32"
        onClick={() => mutate()}>
        {isPending ? <Spinner /> : "Delete"}
      </Button>
    </div>
  );
}
