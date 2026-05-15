import AlertModel from "@/components/main-layout/AlertModel";
import { Button } from "@/components/ui/button";
import {
  CheckmarkCircle02Icon,
  SlidersHorizontalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CircleX } from "lucide-react";
import EditAllowedFeatures from "./EditAllowedFeatures";

export default function AllowedFeatures() {
  return (
    <div className="bg-white p-5 w-full lg:max-w-xl rounded-md border space-y-3">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="font-medium">Allowed Features</p>

        <AlertModel
          title="Create New Plan"
          trigger={
            <Button className="text-xs h-9.5 bg-main-color text-white justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
              <HugeiconsIcon
                icon={SlidersHorizontalIcon}
                className="size-4"
                strokeWidth={2}
              />
              Manage Access
            </Button>
          }
          content={<EditAllowedFeatures />}
          contentClassname="md:min-w-150 pb-3"
        />
      </div>

      {/* Fearures */}
      <ul className="space-y-2">
        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />

          <span className=" text-sm"> 5 Active Job Posts </span>
        </li>

        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />
          <span className=" text-sm"> 2 Featured Jobs </span>
        </li>

        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />
          <span className=" text-sm">AI Tools Access</span>
        </li>

        <li className="flex items-center gap-1">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            className="size-5 fill-green-700 text-white"
            strokeWidth={2}
          />
          <span className=" text-sm"> Standard Support </span>
        </li>

        <li className="flex items-center gap-1">
          <CircleX className="size-5 fill-red-700 text-white" />
          <span className=" text-sm"> Candidate Search </span>
        </li>
      </ul>
    </div>
  );
}
