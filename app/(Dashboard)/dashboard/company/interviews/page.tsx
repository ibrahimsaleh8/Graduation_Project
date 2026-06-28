import { cookies } from "next/headers";
import DisplayAllInterviews from "./_components/DisplayAllInterviews";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Interviews",
};
export default async function CompanyInterviewsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <DisplayAllInterviews token={token?.value ?? ""} />;
}
