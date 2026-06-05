import { DashboardAuthGuard } from "@/lib/DashboardAuthGuard";
import { redirect } from "next/navigation";
import ShowCompanyProfile from "./_components/ShowCompanyProfile";

export default async function CompanyDashboard() {
  const { role, token } = await DashboardAuthGuard();
  if (role != "COMPANY") {
    if (role == "ADMIN") {
      redirect(`/dashboard/admin`);
    } else if (role == "APPLICANT") {
      redirect(`/dashboard/employee`);
    }
  }
  return <ShowCompanyProfile token={token} />;
}
