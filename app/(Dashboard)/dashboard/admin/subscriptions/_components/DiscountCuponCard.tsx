import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import {
  CouponPercentIcon,
  Delete02Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import DiscountCouponForm from "./DiscountCouponForm";
import DeleteCoupon from "./DeleteCoupon";

const cuponData = [
  {
    label: "Percent",
    value: "30%",
  },
  {
    label: "Users",
    value: "30/100",
  },
  {
    label: "Plans",
    value: "All Plans",
  },
];
export default function DiscountCuponCard() {
  return (
    <div className="w-full bg-white rounded-md p-4 space-y-5 border border-border-color overflow-hidden">
      {/* Top */}
      <div className="flex items-center gap-4">
        <div className="size-7 bg-main-color text-white rounded-sm flex items-center justify-center">
          <HugeiconsIcon
            icon={CouponPercentIcon}
            className="size-5"
            strokeWidth={2}
          />
        </div>
        <p className="text-lg font-medium">SUMMER30</p>
      </div>

      {/* Data */}
      <div className="space-y-3">
        {cuponData.map((data) => (
          <div
            key={data.label}
            className="flex items-center justify-between border-b pb-1 text-sm">
            <p>{data.label}</p>
            <p className="font-medium">{data.value}</p>
          </div>
        ))}

        <div className="flex items-center justify-between text-sm">
          <p>Status</p>
          <p className="px-2 py-1.5 bg-green-700 text-white rounded-sm">
            Active
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full flex items-center gap-3 flex-col md:flex-row">
        <AlertModel
          title="Edit Coupon"
          trigger={
            <Button className="text-xs h-9.5 w-full md:w-fit flex-1 bg-main-color text-white items-center justify-center hover:bg-main-color/80 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={Settings02Icon}
                className="size-4.5"
                strokeWidth={2}
              />
              Edit Coupon
            </Button>
          }
          content={<DiscountCouponForm operation="update" />}
          contentClassname="md:min-w-160 pb-3"
        />
        <AlertModel
          title="Delete Coupon"
          trigger={
            <Button className="text-xs h-9.5 w-full md:w-fit bg-red-600 text-white items-center justify-center hover:bg-red-700 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={Delete02Icon}
                className="size-4.5"
                strokeWidth={2}
              />
              Delete Coupon
            </Button>
          }
          content={<DeleteCoupon />}
          contentClassname="md:min-w-150 pb-3"
        />
      </div>
    </div>
  );
}
