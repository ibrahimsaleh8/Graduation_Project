import { cookies } from "next/headers";
import DisplayUsersForAdmin from "./_components/DisplayUsersForAdmin";

export default async function AdminUsersPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <DisplayUsersForAdmin token={token?.value ?? ""} />;
}
