import { cookies } from "next/headers";
import ShowJobDetailsById from "./_components/ShowJobDetailsById";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Job Details",
};
export default async function JobPostDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return <ShowJobDetailsById jobId={id} token={token?.value || ""} />;
}
