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
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { useState } from "react";
const employeeLinks = [
  {
    label: "Profile",
    link: "/dashboard/employee/profile",
  },
  {
    label: "Settings",
    link: "/dashboard/employee/setting",
  },
  {
    label: "Mails",
    link: "/dashboard/employee/mails",
  },
];
export default function UserDropDown() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={setOpen} defaultOpen={open}>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent focus-visible:ring-0 ">
          <Image
            src={userImage}
            alt="User Image"
            width={1000}
            height={1000}
            className="md:size-12 size-10 object-center object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black w-40 mx-4 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          {employeeLinks.map((link) => (
            <DropdownMenuItem key={link.label}>
              <Link
                className="w-full"
                href={link.link}
                onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/"} className="w-full">
              Home Page
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/jobs"} className="w-full">
              Search For Job
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
