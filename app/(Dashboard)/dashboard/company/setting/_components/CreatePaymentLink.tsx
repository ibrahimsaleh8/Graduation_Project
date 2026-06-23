import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Coupon02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sileo } from "sileo";

async function createPaymentLinkApi(
  token: string,
  planId: string,
  billingCycle: string,
  couponCode: string,
): Promise<{ checkoutUrl: string }> {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Subscription/checkout`,
    {
      subscriptionPlanId: planId,
      billingCycle: 1,
      couponCode,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

type Props = {
  billingType: "monthly" | "yearly";
  token: string;
  planId: string;
  planName: string;
  monthlyPrice: number;
  yearlyPrice: number;
};
export default function CreatePaymentLink({
  billingType,
  monthlyPrice,
  planId,
  planName,
  token,
  yearlyPrice,
}: Props) {
  const [couponCode, setCouponCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(
    billingType == "monthly" ? monthlyPrice : yearlyPrice,
  );
  const route = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (couponCode: string) =>
      createPaymentLinkApi(token, planId, billingType, couponCode),

    onSuccess: (respnse) => {
      route.push(respnse.checkoutUrl);
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to create payment link`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  return (
    <div className="space-y-6">
      {/* Plan Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p>Plan:</p>
          <p className="font-medium capitalize">{planName}</p>
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p>Billing Cycle:</p>
          <p className="font-medium capitalize">{billingType}</p>
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p>Amount:</p>
          <p className="font-medium capitalize">${finalPrice}</p>
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="coupon-code">Do you have Discount Code?</Label>

        <div className="flex sm:items-center items-end sm:gap-5 gap-2 sm:flex-row flex-col">
          <Input
            onChange={(e) => setCouponCode(e.target.value)}
            id="coupon-code"
            type="text"
            placeholder="Discount Code"
          />
          <Button
            disabled={couponCode.trim().length == 0}
            className="text-sm bg-main-color hover:bg-main-color/80 duration-300 w-fit">
            <HugeiconsIcon
              icon={Coupon02Icon}
              className="size-4.5!"
              strokeWidth={2}
            />{" "}
            Apply
          </Button>
        </div>
      </div>

      <Button
        onClick={() => mutate(couponCode)}
        disabled={isPending}
        className="w-full text-sm">
        {isPending ? <Spinner /> : `Pay ${finalPrice}$`}
      </Button>
    </div>
  );
}
