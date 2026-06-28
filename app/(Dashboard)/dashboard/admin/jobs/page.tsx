import { cookies } from "next/headers";
import ShowAllJobsAdminDashboard from "./_components/ShowAllJobsAdminDashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jobs",
};
export default async function AdminJobsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAllJobsAdminDashboard token={token?.value ?? ""} />;
}
