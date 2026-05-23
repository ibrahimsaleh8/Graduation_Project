import { DashboardAuthGuard } from "@/lib/DashboardAuthGuard";
import { redirect } from "next/navigation";
import React from "react";

export default async function Dashboard() {
  const { role } = await DashboardAuthGuard();
  if (role == "APPLICANT") {
    redirect(`/dashboard/employee`);
  } else if (role == "COMPANY") {
    redirect(`/dashboard/company`);
  } else if (role == "ADMIN") {
    redirect(`/dashboard/admin`);
  }
  return <div>Dashboard</div>;
}
