import { cookies } from "next/headers";
import ShowCompanySettings from "./_components/ShowCompanySettings";

export default async function CompanySettingsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowCompanySettings token={token?.value ?? ""} />;
}
