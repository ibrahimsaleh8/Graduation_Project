import ShowCompanyProfile from "./_components/ShowCompanyProfile";
import { cookies } from "next/headers";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Overview",
};
export default async function CompanyDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowCompanyProfile token={token?.value ?? ""} />;
}
