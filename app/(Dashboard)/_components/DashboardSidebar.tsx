import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
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
} from "@hugeicons/core-free-icons";
import LogoutButton from "./LogoutButton";

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
    link: "/dashboard/employee/messages",
    label: "Messages",
    icon: Message01Icon,
  },
  {
    link: "/dashboard/employee/profile",
    label: "Public Profile",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/employee/profile",
    label: "Settings",
    icon: Settings02Icon,
  },
];
export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="pt-4">
        <div className="flex items-center justify-center">
          <Logo size="small" />
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <SidebarGroup>
          <SidebarMenu className="space-y-2.5">
            {employeeLinks.map((link) => (
              <SidebarMenuItem key={link.label} className="flex">
                <Link
                  href={"/dashboard"}
                  className="w-full flex items-center gap-3 font-medium py-3 rounded-md px-4 text-sm">
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
