import { cookies } from "next/headers";
import ShowCompanyProfile from "./_components/ShowCompanyProfile";

export default async function CompanyProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowCompanyProfile token={token?.value ?? ""} />;
}
