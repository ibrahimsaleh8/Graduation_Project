import { cookies } from "next/headers";
import DisplayAllInterviews from "./_components/DisplayAllInterviews";
export default async function CompanyInterviewsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return <DisplayAllInterviews token={token?.value ?? ""} />;
}
