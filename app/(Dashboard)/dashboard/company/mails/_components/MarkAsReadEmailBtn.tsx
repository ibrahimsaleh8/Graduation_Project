import { Button } from "@/components/ui/button";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function MarkAsReadEmailBtn() {
  return (
    <Button
      size={"icon-lg"}
      className="bg-white text-black border hover:bg-black/5">
      <HugeiconsIcon icon={Mail01Icon} className="size-5!" />
    </Button>
  );
}
