import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import userImage from "@images/dashboard-user-image.png";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
export default function UserProfileDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white hover:bg-white text-black hover:text-black ring-0!">
          <Image
            src={userImage}
            alt="User Image"
            width={1000}
            height={1000}
            className="md:size-12 size-8 object-center object-cover cursor-pointer"
          />
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col gap-1 text-xs">
              <span>ibrahim saleh</span>
              <span>Employee</span>
            </div>
            <HugeiconsIcon icon={ArrowDown01Icon} />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-45 bg-white mt-1 mx-1 text-black">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
