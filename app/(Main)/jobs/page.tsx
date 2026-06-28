import { cookies } from "next/headers";
import DisplayJobsForSearch from "./_components/DisplayJobsForSearch";
import DisplayJobsForSearchSkeleton from "./_components/DisplayJobsForSearchSkeleton";
import JobsSearchAndFilter from "./_components/JobsSearchAndFilter";
import { Suspense } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jobs",
};
export interface JobSearchDataType {
  companyName: string;
  companyLogoUrl: string | null;
  location: string;
  category: string;
  title: string;
  description: string;
  minSalary: number;
  maxSalary: number;
  maxExperience: number;
  minExperience: number;
  isApplied: boolean;
  isSaved: boolean;
  postedDate: string;
  jobTypes: string[];
  workApproaches: string[];
  jobID: string;
}

export interface JobsResponse {
  items: JobSearchDataType[];
  totalCount: number;
  page: number;
  pageSize: number;
}
export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{
    title: string;
    location: string;
    industry: string;
    page: string;
  }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const params = await searchParams;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/JobPosting?title=${params.title ?? ""}&location=${params.location == "AnyWhere" ? "" : (params.location ?? "")}&category=${params.industry ?? ""}${params.page ? `&page=${params.page}` : ""}`,
    {
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );
  if (!res.ok) {
    console.log(await res.json());
    throw new Error("Failed to fetch jobs");
  }
  const jobs: JobsResponse = await res.json();
  return (
    <div className="space-y-6 px-1 pt-20 pb-30">
      <JobsSearchAndFilter params={params} />

      <Suspense fallback={<DisplayJobsForSearchSkeleton />}>
        <DisplayJobsForSearch
          params={{
            industry: params.industry,
            location: params.location,
            title: params.title,
            page: params.page,
          }}
          token={token?.value ?? ""}
          initialJobs={jobs}
        />
      </Suspense>
    </div>
  );
}
