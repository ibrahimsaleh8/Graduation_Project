import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
import { Menu11Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
type Props = {
  links: {
    link: string;
    label: string;
    icon: IconSvgElement;
  }[];
  currentPath: string;
};
function isActiveLink(linkHref: string, currentPath: string): boolean {
  if (currentPath === linkHref) return true;
  const isRootLink = linkHref.split("/").filter(Boolean).length <= 2;
  if (isRootLink) return false;
  return currentPath.startsWith(linkHref + "/");
}
export default function SmallHeader({ links, currentPath }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="cursor-pointer lg:hidden flex">
        <HugeiconsIcon icon={Menu11Icon} className="size-5" strokeWidth={2} />
      </SheetTrigger>
      <SheetContent className="border-black lg:hidden flex max-w-[80%]">
        <SheetHeader>
          <SheetTitle className="pt-2 text-lg">Dashboard</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col w-full items-center gap-3 mt-5">
          {links.map((link) => (
            <li key={link.label} className="w-full">
              <Link
                onClick={() => setOpen(false)}
                href={link.link}
                className={`flex items-center text-white gap-2 px-4 rounded-md font-medium py-3 ${isActiveLink(link.link, currentPath) ? "bg-main-dark text-white" : ""}`}>
                <HugeiconsIcon
                  icon={link.icon}
                  className="size-5"
                  strokeWidth={2}
                />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
