import { Button } from "@/components/ui/button";
import { Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function DeleteMailBtn() {
  return (
    <Button
      className="bg-white text-black border hover:bg-red-500 hover:text-white"
      size={"icon-lg"}>
      <HugeiconsIcon icon={Delete02Icon} className="size-5!" />
    </Button>
  );
}
