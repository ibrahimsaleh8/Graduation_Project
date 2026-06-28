import { cookies } from "next/headers";
import ShowJobDetailsPage from "./_components/ShowJobDetailsPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Job Details",
};

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowJobDetailsPage token={token?.value ?? ""} jobId={id} />;
}
