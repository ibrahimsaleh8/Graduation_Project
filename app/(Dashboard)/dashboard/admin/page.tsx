import { cookies } from "next/headers";
import ShowAdminDashboardOverview from "./_components/ShowAdminDashboardOverview";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Overview",
};
export default async function AdmindDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAdminDashboardOverview token={token?.value ?? ""} />;
}
