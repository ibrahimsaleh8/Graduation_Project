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
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Spinner } from "@/components/ui/spinner";
import { DiscountCodeDataType } from "./ShowCupons";
import { useCouponForm } from "./hooks/useCouponForm";
import { Dispatch, SetStateAction } from "react";

type Props = {
  operation: "create" | "update";
  token: string;
  plans: {
    name: string;
    id: string;
  }[];
  couponData?: DiscountCodeDataType;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function DiscountCouponForm({
  operation,
  plans,
  token,
  couponData,
  setOpen,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    generateCouponCode,
    HandleAddPlan,
    onSubmit,
    isPending,
    errors,
    setValue,
    getValues,
  } = useCouponForm({
    operation,
    token,
    couponData,
    setOpen,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Coupon Code */}
      <div className="flex md:items-end md:gap-2 gap-3 flex-col md:flex-row">
        <div className="space-y-1 flex-1">
          <Label htmlFor="coupon-code">Coupon Code</Label>
          <Input
            disabled={operation == "update"}
            {...register("couponCode")}
            aria-invalid={errors.couponCode ? "true" : "false"}
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
            defaultValue={getValues("discountValue")}
            aria-invalid={errors.discountValue ? "true" : "false"}
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
            defaultValue={getValues("totalUsageLimit")}
            min={0}
            aria-invalid={errors.totalUsageLimit ? "true" : "false"}
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
          defaultChecked={getValues("isActive")}
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
              onClick={() => HandleAddPlan(plan.id, plan.name)}
              type="button"
              key={plan.id}
              className={`px-4 py-2 ${watch("applicablePlans").findIndex((pl) => pl.id == plan.id) != -1 ? "bg-main-color/10 text-blue-700" : "bg-input-bg text-black"}  text-sm font-medium rounded-md cursor-pointer`}>
              {plan.name}
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
        disabled={isPending}
        type="submit"
        className="text-sm bg-main-color text-white hover:bg-main-color/80 w-full">
        {isPending ? (
          <Spinner />
        ) : operation == "create" ? (
          "Create Coupon"
        ) : (
          "Update Coupon"
        )}
      </Button>
    </form>
  );
}
