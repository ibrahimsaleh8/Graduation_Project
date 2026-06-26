import {
  DashboardSquare03Icon,
  Bookmark02Icon,
  TaskDone01Icon,
  UserCircleIcon,
  Settings02Icon,
  Calendar03Icon,
  Home03Icon,
  Briefcase01Icon,
  Building01Icon,
  CreditCardIcon,
} from "@hugeicons/core-free-icons";

export const employeeLinks = [
  {
    link: "/dashboard/employee",
    label: "Dashboard",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/employee/saved-jobs",
    label: "Saved",
    icon: Bookmark02Icon,
  },
  {
    link: "/dashboard/employee/applied-jobs",
    label: "Applications",
    icon: TaskDone01Icon,
  },
  {
    link: "/dashboard/employee/interviews",
    label: "Interviews",
    icon: Calendar03Icon,
  },
];
export const smallEmployeeLinks = [
  {
    link: "/dashboard/employee",
    label: "Dashboard",
    icon: DashboardSquare03Icon,
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

export const adminLinks = [
  {
    link: "/dashboard/admin",
    label: "Overview",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/admin/jobs",
    label: "Jobs",
    icon: Briefcase01Icon,
  },
  {
    link: "/dashboard/admin/users",
    label: "Users",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/admin/companies",
    label: "Companies",
    icon: Building01Icon,
  },
];

export const adminSmallLinks = [
  {
    link: "/dashboard/admin",
    label: "Overview",
    icon: Home03Icon,
  },
  {
    link: "/dashboard/admin/users",
    label: "Users",
    icon: UserCircleIcon,
  },
  {
    link: "/dashboard/admin/companies",
    label: "Companies",
    icon: Building01Icon,
  },
  {
    link: "/dashboard/admin/jobs",
    label: "Jobs",
    icon: Briefcase01Icon,
  },
  {
    link: "/dashboard/admin/subscriptions",
    label: "Subscriptions",
    icon: CreditCardIcon,
  },

  {
    link: "/dashboard/company/setting",
    label: "Settings",
    icon: Settings02Icon,
  },
];
