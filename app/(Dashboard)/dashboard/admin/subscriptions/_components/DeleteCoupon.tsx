import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { sileo } from "sileo";

type Props = {
  token: string;
  codeId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function deleteCouponApi(token: string, id: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Coupon/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function DeleteCoupon({ codeId, token, setOpen }: Props) {
  const queryClinet = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteCouponApi(token, codeId),
    onSuccess: () => {
      queryClinet.refetchQueries({ queryKey: ["coupons"] });
      if (setOpen) setOpen(false);
      sileo.success({
        title: `Code deleted successfully`,
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to delete code`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <div className="space-y-5">
      <p className="text-sm font-medium">
        Are you sure you want to delete this coupon code? This action cannot be
        undone, and the coupon will no longer be available for users.
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
