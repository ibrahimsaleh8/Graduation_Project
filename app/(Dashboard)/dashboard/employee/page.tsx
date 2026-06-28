import DisplayEmployeeMainData from "./_components/DisplayEmployeeMainData";
import { cookies } from "next/headers";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Overview",
};

export default async function EmployeeDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <DisplayEmployeeMainData token={token?.value ?? ""} />;
}
