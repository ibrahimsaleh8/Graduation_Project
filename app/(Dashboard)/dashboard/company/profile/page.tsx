import { cookies } from "next/headers";
import ShowCompanyProfile from "./_components/ShowCompanyProfile";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile",
};
export default async function CompanyProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowCompanyProfile token={token?.value ?? ""} />;
}
