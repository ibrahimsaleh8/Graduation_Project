import { DashboardAuthGuard } from "@/lib/DashboardAuthGuard";
import { redirect } from "next/navigation";
import DisplayEmployeeMainData from "./_components/DisplayEmployeeMainData";

export default async function EmployeeDashboard() {
  const { role, token } = await DashboardAuthGuard();
  if (role != "APPLICANT") {
    if (role == "COMPANY") {
      redirect(`/dashboard/company`);
    } else if (role == "ADMIN") {
      redirect(`/dashboard/admin`);
    }
  }

  return <DisplayEmployeeMainData token={token} />;
}
