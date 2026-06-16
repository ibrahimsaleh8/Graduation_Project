import { cookies } from "next/headers";
import ShowAllJobsAdminDashboard from "./_components/ShowAllJobsAdminDashboard";

export default async function AdminJobsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAllJobsAdminDashboard token={token?.value ?? ""} />;
}
