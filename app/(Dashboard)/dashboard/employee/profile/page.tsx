import { cookies } from "next/headers";
import ShowMyEmployeeProfile from "./_components/ShowMyEmployeeProfile";

export default async function PublicProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowMyEmployeeProfile token={token?.value ?? ""} />;
}
