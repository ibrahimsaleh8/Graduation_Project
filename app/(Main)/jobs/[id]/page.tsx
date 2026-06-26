import ShowJobDetails from "@/components/Cards/ShowJobDetails";
import { ChevronLeftIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <div className="py-30 container mx-auto">
      <Link
        className="xl:mx-15 px-6 py-2 bg-main-dark text-white rounded-md text-xs flex items-center gap-1 w-fit"
        href={"/jobs"}>
        <ChevronLeftIcon className="size-4" /> Show All Jobs
      </Link>
      <ShowJobDetails jobId={id} token={token?.value ?? ""} />
    </div>
  );
}
