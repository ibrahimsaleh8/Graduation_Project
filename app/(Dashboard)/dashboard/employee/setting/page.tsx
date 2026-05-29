import { cookies } from "next/headers";
import ShowEmployeeSettings from "./_components/ShowEmployeeSettings";

export default async function SettingPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowEmployeeSettings token={token?.value || ""} />;
}
