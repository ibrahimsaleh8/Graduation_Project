import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  token: string;
  skillId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function DeleteSkillApi(token: string, skillId: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Skill/${skillId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function DeleteSkill({ title, token, skillId, setOpen }: Props) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (skillId: string) => DeleteSkillApi(token, skillId),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Skill deleted successfully!`,
      });
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete skill`,
        description:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    },
  });
  return (
    <div className="space-y-2 flex flex-col gap-4">
      <p>Are you sure you want to delete {`"${title}"`} skill?</p>
      <Button
        variant={"destructive"}
        className="ml-auto min-w-32"
        onClick={() => mutate(skillId)}
        disabled={isPending}>
        {isPending ? <Spinner /> : "Delete"}
      </Button>
    </div>
  );
}
