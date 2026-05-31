/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import userImage from "@images/dashboard-user-image.png";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Home03Icon,
  JobSearchIcon,
  RoboticIcon,
  Settings02Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  email?: string;
  role?: string;
  photoUrl?: string;
};
const employeeLinks = [
  {
    label: "Profile",
    link: "/dashboard/employee/profile",
    icon: UserCircleIcon,
  },
  {
    label: "Settings",
    link: "/dashboard/employee/setting",
    icon: Settings02Icon,
  },
  {
    label: "Ai Chat",
    link: "/dashboard/employee/ai-chat",
    icon: RoboticIcon,
  },
];
export default function UserDropDown({ email, photoUrl, role }: Props) {
  const [open, setOpen] = useState(false);
  return !email || !photoUrl || !role ? (
    <Skeleton className="w-38 h-10" />
  ) : (
    <DropdownMenu onOpenChange={setOpen} defaultOpen={open}>
      <DropdownMenuTrigger asChild>
        <Button className="bg-second-black-card px-0! pr-3! pl-1! overflow-hidden text-[0.85rem] sm:h-10 h-8 hover:bg-[#3b3b3b] focus-visible:ring-0 ">
          <img
            src={photoUrl ?? userImage}
            alt="User Image"
            width={1000}
            height={1000}
            className="sm:size-10 size-8 object-center object-cover rounded-full"
          />
          <span className="truncate w-16 hidden sm:flex">{email}</span>
          <HugeiconsIcon icon={ArrowDown01Icon} className="size-4 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black w-40 mx-4 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <ul>
            {employeeLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="w-full flex items-center gap-1.5 text-black text-sm font-medium hover:bg-main-dark hover:text-white px-1 py-1.5 rounded-sm"
                  href={link.link}
                  onClick={() => setOpen(false)}>
                  <HugeiconsIcon
                    icon={link.icon}
                    className="size-4.5"
                    strokeWidth={2}
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <ul>
            <li>
              <Link
                className="w-full flex items-center gap-1.5 text-black text-sm font-medium hover:bg-main-dark hover:text-white px-1 py-1.5 rounded-sm"
                href={"/"}
                onClick={() => setOpen(false)}>
                <HugeiconsIcon
                  icon={Home03Icon}
                  className="size-4.5"
                  strokeWidth={2}
                />
                Home Page
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="w-full flex items-center gap-1.5 text-black text-sm font-medium hover:bg-main-dark hover:text-white px-1 py-1.5 rounded-sm"
                href={"/"}
                onClick={() => setOpen(false)}>
                <HugeiconsIcon
                  icon={JobSearchIcon}
                  className="size-4.5"
                  strokeWidth={2}
                />
                Search For Job
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
