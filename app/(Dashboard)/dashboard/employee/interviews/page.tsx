import { cookies } from "next/headers";
import ShowEmployeeInterviews from "./_components/ShowEmployeeInterviews";

export default async function EmployeeInterviews() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowEmployeeInterviews token={token?.value || ""} />;
}
