import React from "react";

export default function PlanOverview() {
  return (
    <div className="bg-white p-5 w-full rounded-md border space-y-6">
      <p className="font-medium">Plan Overview</p>

      <div className="space-y-3">
        {/* Current Plan */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Current Plan</p>
          <p className="font-medium">Premium Plan</p>
        </div>

        {/* Price */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Price</p>
          <p className="font-medium">$120 /year</p>
        </div>

        {/* Billing Cycle */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Billing Cycle</p>
          <p className="font-medium">Annually</p>
        </div>

        {/* Renewal Date */}
        <div className="w-full flex items-center justify-between gap-3 text-sm border-b pb-1">
          <p className="text-black/80">Renewal Date</p>
          <p className="font-medium">Jan 12, 2026</p>
        </div>

        {/* Status */}
        <div className="w-full flex items-center justify-between gap-3 text-sm pb-1">
          <p className="text-black/80">Status</p>
          <p className="font-medium px-2 py-1.5 bg-green-700 text-white rounded-sm">
            Active
          </p>
        </div>
      </div>
    </div>
  );
}
