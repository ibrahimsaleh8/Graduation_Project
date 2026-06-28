import { cookies } from "next/headers";
import ShowEmployeeInterviews from "./_components/ShowEmployeeInterviews";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Interviews",
};

export default async function EmployeeInterviews() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowEmployeeInterviews token={token?.value || ""} />;
}
