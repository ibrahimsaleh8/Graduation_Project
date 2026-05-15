import { Button } from "@/components/ui/button";

export default function DeleteSubscriptionPlan() {
  return (
    <div className="space-y-5">
      <p className="text-sm font-medium">
        Are you sure you want to delete this subscription plan? This action
        cannot be undone and may affect users currently subscribed to this plan.
      </p>

      <div className="w-full flex items-center justify-end">
        <Button className="text-sm w-32" variant={"destructive"}>
          Delete
        </Button>
      </div>
    </div>
  );
}
