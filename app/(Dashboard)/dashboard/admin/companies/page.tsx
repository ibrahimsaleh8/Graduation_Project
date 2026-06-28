import { cookies } from "next/headers";
import ShowAllCompaniesForAdmin from "./_components/ShowAllCompaniesForAdmin";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Companies",
};
export default async function CompaniesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAllCompaniesForAdmin token={token?.value ?? ""} />;
}
