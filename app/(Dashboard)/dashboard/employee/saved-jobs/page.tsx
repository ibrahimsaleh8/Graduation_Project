import { cookies } from "next/headers";
import ShowAllSavedJobs from "./_components/ShowAllSavedJobs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Saved Jobs",
};

export default async function SavedJobs() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return <ShowAllSavedJobs token={token?.value ?? ""} />;
}
