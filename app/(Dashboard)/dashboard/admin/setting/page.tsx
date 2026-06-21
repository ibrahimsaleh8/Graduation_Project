import { cookies } from "next/headers";
import ShowAdminSettings from "./_components/ShowAdminSettings";

export default async function AdminSettingsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAdminSettings token={token?.value ?? ""} />;
}
