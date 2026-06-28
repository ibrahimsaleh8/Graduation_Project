import { DashboardAuthGuard } from "@/lib/DashboardAuthGuard";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const { role } = await DashboardAuthGuard();
  if (role != "ADMIN") {
    if (role == "COMPANY") {
      redirect(`/dashboard/company`);
    } else if (role == "APPLICANT") {
      redirect(`/dashboard/employee`);
    }
  }

  return <>{children}</>;
}
