import { Button } from "@/components/ui/button";
import { Logout01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function LogoutButton() {
  return (
    <Button className="w-full h-10 flex items-center text-sm bg-red-400 text-white hover:bg-red-600 duration-300">
      <HugeiconsIcon icon={Logout01Icon} className="size-5" />
      Logout
    </Button>
  );
}
