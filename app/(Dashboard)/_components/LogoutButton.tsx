import { Button } from "@/components/ui/button";
import { useLogoutHandler } from "@/lib/useLogoutHandler";
import { Logout01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function LogoutButton() {
  const { logoutFn } = useLogoutHandler();

  return (
    <Button
      onClick={logoutFn}
      className="w-full h-8 flex items-center justify-start text-sm bg-red-400 text-white hover:bg-red-600 duration-300">
      <HugeiconsIcon icon={Logout01Icon} className="size-4.5" strokeWidth={2} />
      Logout
    </Button>
  );
}
