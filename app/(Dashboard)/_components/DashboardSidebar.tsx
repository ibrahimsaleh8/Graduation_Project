"use client";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/animate-ui/components/radix/sidebar";
import Logo from "@/components/Logo";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
  DashboardSquare03Icon,
  Search01Icon,
  Bookmark02Icon,
  TaskDone01Icon,
  Message01Icon,
  UserCircleIcon,
  Settings02Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";

const employeeLinks = [
  {
    link: "/dashboard/employee",
    label: "Dashboard",
    icon: DashboardSquare03Icon,
  },
  {
    link: "/dashboard/employee/jobs",
    label: "Discover Jobs",
    icon: Search01Icon,
  },
  {
    link: "/dashboard/employee/saved-jobs",
    label: "Saved Jobs",
    icon: Bookmark02Icon,
  },
  {
    link: "/dashboard/employee/applied-jobs",
    label: "Job Applications",
    icon: TaskDone01Icon,
  },
  {
    link: "/dashboard/employee/interviews",
    label: "Interviews",
    icon: Calendar03Icon,
  },
  {
    link: "/dashboard/employee/mails",
    label: "Mails",
    icon: Message01Icon,
  },
  {
    link: "/dashboard/employee/profile",
    label: "Public Profile",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/employee/setting",
    label: "Settings",
    icon: Settings02Icon,
  },
];
export default function DashboardSidebar() {
  const currentPath = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="pt-4">
        <div className="flex items-center justify-center">
          <Logo size="small" />
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <SidebarGroup>
          <SidebarMenu className="space-y-2">
            {employeeLinks.map((link) => (
              <SidebarMenuItem key={link.label} className="flex">
                <Link
                  onClick={() => setOpenMobile(false)}
                  href={link.link}
                  className={`w-full flex items-center gap-3 font-medium p-4 rounded-md text-sm hover:bg-white duration-300
                  ${currentPath == link.link ? "bg-white" : ""}
                  `}>
                  <HugeiconsIcon icon={link.icon} className="size-5" />
                  {link.label}
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex">
            <LogoutButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
