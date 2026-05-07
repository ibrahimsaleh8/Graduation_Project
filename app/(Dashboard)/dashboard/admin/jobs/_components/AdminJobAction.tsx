import { Button } from "@/components/ui/button";
import {
  CancelCircleIcon,
  CheckmarkCircle03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function AdminJobAction() {
  return (
    <div className="sticky mt-auto left-0 bottom-0 w-full bg-input-bg border-t p-10 pt-6 pb-4 flex items-center md:flex-row flex-col  gap-4">
      <Button className="md:flex-1 md:w-fit w-full bg-green-600 text-white hover:bg-green-700 text-sm">
        <HugeiconsIcon
          icon={CheckmarkCircle03Icon}
          strokeWidth={2}
          className="size-5"
        />
        Approve & Publish
      </Button>

      <Button className="md:flex-1 md:w-fit w-full bg-red-600 text-white hover:bg-red-700 text-sm">
        <HugeiconsIcon
          icon={CancelCircleIcon}
          strokeWidth={2}
          className="size-5"
        />
        Reject Job
      </Button>
    </div>
  );
}
