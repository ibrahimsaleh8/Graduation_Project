import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { sileo } from "sileo";
type Props = {
  token: string;
  planId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function deletePlanApi(token: string, planId: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/SubscriptionPlan/delete/${planId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function DeleteSubscriptionPlan({
  planId,
  token,
  setOpen,
}: Props) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deletePlanApi(planId, token),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["subscription-plans"],
      });
      if (setOpen) {
        setOpen(false);
      }
      sileo.success({
        title: `Plan deleted successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete plan`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <div className="space-y-5">
      <p className="text-sm font-medium">
        Are you sure you want to delete this subscription plan? This action
        cannot be undone and may affect users currently subscribed to this plan.
      </p>

      <div className="w-full flex items-center justify-end">
        <Button
          onClick={() => mutate()}
          disabled={isPending}
          className="text-sm w-32"
          variant={"destructive"}>
          {isPending ? <Spinner /> : "Delete"}
        </Button>
      </div>
    </div>
  );
}
