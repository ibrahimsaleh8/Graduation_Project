import ShowAllAppliedJobs from "./_components/ShowAllAppliedJobs";
import { cookies } from "next/headers";

export default async function AppliedJobs() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAllAppliedJobs token={token?.value ?? ""} />;
}
