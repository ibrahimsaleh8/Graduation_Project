import { Button } from "@/components/ui/button";

export default function DeleteCoupon() {
  return (
    <div className="space-y-5">
      <p className="text-sm font-medium">
        Are you sure you want to delete this coupon code? This action cannot be
        undone, and the coupon will no longer be available for users.
      </p>

      <div className="w-full flex items-center justify-end">
        <Button className="text-sm w-32" variant={"destructive"}>
          Delete
        </Button>
      </div>
    </div>
  );
}
