import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ShuffleIcon, UserGroup02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DiscountCouponFormType,
  discountCouponSchema,
} from "@/validations/DiscountCouponSchema";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { zodResolver } from "@hookform/resolvers/zod";

const plans = ["Basic Plan", "Premium Plan", "Enterprise Plan"];
type Props = {
  operation: "create" | "update";
};
export default function DiscountCouponForm({ operation }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<DiscountCouponFormType>({
    resolver: zodResolver(discountCouponSchema),
    mode: "onSubmit",
    defaultValues: {
      applicablePlans: [],
      isActive: true,
      totalUsageLimit: 0,
      discountValue: 0,
    },
  });
  const onSubmit: SubmitHandler<DiscountCouponFormType> = (data) => {
    console.log(data);
  };

  const HandleAddPlan = (plan: string) => {
    if (!getValues("applicablePlans").includes(plan)) {
      setValue("applicablePlans", [...getValues("applicablePlans"), plan]);
    } else {
      setValue("applicablePlans", [
        ...getValues("applicablePlans").filter((p) => p != plan),
      ]);
    }
  };

  const generateCouponCode = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let coupon = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      coupon += chars[randomIndex];
    }

    setValue("couponCode", coupon);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Coupon Code */}
      <div className="flex md:items-end md:gap-2 gap-3 flex-col md:flex-row">
        <div className="space-y-1 flex-1">
          <Label htmlFor="coupon-code">Coupon Code</Label>
          <Input
            disabled={operation == "update"}
            {...register("couponCode")}
            id="coupon-code"
            type="text"
            placeholder="code10"
          />
        </div>
        {operation == "create" && (
          <Button
            onClick={generateCouponCode}
            type="button"
            className="text-sm">
            <HugeiconsIcon icon={ShuffleIcon} strokeWidth={2} /> Generatate
          </Button>
        )}
      </div>

      {errors.couponCode && (
        <ErrorValidationMessage message={errors.couponCode.message ?? ""} />
      )}

      {/* Discount Value */}
      <div className="space-y-1">
        <Label htmlFor="coupon-value">Discount Value</Label>
        <InputGroup>
          <InputGroupInput
            min={0}
            onChange={(e) => setValue("discountValue", +e.target.value)}
            id="coupon-value"
            placeholder="10"
            type="number"
          />
          <InputGroupAddon align="inline-end">%</InputGroupAddon>
        </InputGroup>
      </div>
      {errors.discountValue && (
        <ErrorValidationMessage message={errors.discountValue.message ?? ""} />
      )}

      {/* Total Usage Limit */}
      <div className="space-y-1">
        <Label htmlFor="coupon-limit">Total Usage Limit</Label>
        <InputGroup>
          <InputGroupInput
            min={0}
            onChange={(e) => setValue("totalUsageLimit", +e.target.value)}
            id="coupon-limit"
            placeholder="20"
            type="number"
          />
          <InputGroupAddon align="inline-end">
            <HugeiconsIcon
              icon={UserGroup02Icon}
              className="size-5"
              strokeWidth={2}
            />
          </InputGroupAddon>
        </InputGroup>
      </div>
      {errors.totalUsageLimit && (
        <ErrorValidationMessage
          message={errors.totalUsageLimit.message ?? ""}
        />
      )}

      {/* Status */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Label
          htmlFor="candidate-search"
          className="flex flex-col gap-1 items-start">
          <span className="font-medium">Active Status</span>
          <span className="sm:text-sm text-xs text-black/70">
            Coupon availability status
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("isActive", e)}
          defaultChecked={true}
          id="candidate-search"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {errors.isActive && (
        <ErrorValidationMessage message={errors.isActive.message ?? ""} />
      )}

      {/* Applicable Plans */}
      <div className="space-y-3">
        <Label>Applicable Plans</Label>
        <div className="flex items-center gap-2 flex-wrap">
          {plans.map((plan) => (
            <button
              onClick={() => HandleAddPlan(plan)}
              type="button"
              key={plan}
              // eslint-disable-next-line react-hooks/incompatible-library
              className={`px-4 py-2 ${watch("applicablePlans").includes(plan) ? "bg-main-color/10 text-blue-700" : "bg-input-bg text-black"}  text-sm font-medium rounded-md cursor-pointer`}>
              {plan}
            </button>
          ))}
        </div>
      </div>
      {errors.applicablePlans && (
        <ErrorValidationMessage
          message={errors.applicablePlans.message ?? ""}
        />
      )}
      <Button
        type="submit"
        className="text-sm bg-main-color text-white hover:bg-main-color/80 w-full">
        {operation == "create" ? "Create Coupon" : "Update Coupon"}
      </Button>
    </form>
  );
}
