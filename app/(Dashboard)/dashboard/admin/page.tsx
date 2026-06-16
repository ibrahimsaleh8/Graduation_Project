import { DashboardAuthGuard } from "@/lib/DashboardAuthGuard";
import { redirect } from "next/navigation";
import ShowAdminDashboardOverview from "./_components/ShowAdminDashboardOverview";

export default async function AdmindDashboard() {
  const { role, token } = await DashboardAuthGuard();
  if (role != "ADMIN") {
    if (role == "COMPANY") {
      redirect(`/dashboard/company`);
    } else if (role == "APPLICANT") {
      redirect(`/dashboard/employee`);
    }
  }
  return <ShowAdminDashboardOverview token={token} />;
}
