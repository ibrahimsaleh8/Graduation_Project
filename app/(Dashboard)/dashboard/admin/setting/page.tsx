import { cookies } from "next/headers";
import ShowAdminSettings from "./_components/ShowAdminSettings";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Settings",
};

export default async function AdminSettingsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAdminSettings token={token?.value ?? ""} />;
}
