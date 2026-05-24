import { cookies } from "next/headers";
import ShowAllSavedJobs from "./_components/ShowAllSavedJobs";

export default async function SavedJobs() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return <ShowAllSavedJobs token={token?.value ?? ""} />;
}
