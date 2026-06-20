import { cookies } from "next/headers";
import ShowAllCompaniesForAdmin from "./_components/ShowAllCompaniesForAdmin";

export default async function CompaniesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAllCompaniesForAdmin token={token?.value ?? ""} />;
}
