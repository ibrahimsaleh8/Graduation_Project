"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import CandidateCard from "./CandidateCard";
import CandidatesSearch from "./CandidatesSearch";
import { UserCircle02Icon } from "@hugeicons/core-free-icons";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Pagination from "@/components/main-layout/Pagination";
import ErrorDashboardMessage from "@/app/(Dashboard)/_components/ErrorDashboardMessage";
import { Skeleton } from "@/components/ui/skeleton";

export type Candidate = {
  id: string;
  name: string;
  image: string;
  industry: string | null;
  jobTitle: string;
  country: string;
};

export type CandidatesResponse = {
  candidates: Candidate[];
  totalCandidates: number;
  pageSize: number;
};

type Props = {
  token: string;
};

async function getAllCandidates(
  token: string,
  candidateName: string,
  country: string,
  industry: string,
  page: number,
): Promise<CandidatesResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Company/candidates?page=${page}&country=${country}&candidateName=${candidateName}&industry=${industry}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export default function ShowAllCandidatesForCompany({ token }: Props) {
  const [nameInput, setNameInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [industryInput, setIndustryInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useState({
    name: "",
    country: "",
    industry: "",
  });

  const { error, isLoading, data } = useQuery<
    CandidatesResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: [
      "company-candidates",
      searchParams.name,
      searchParams.country,
      searchParams.industry,
      currentPage,
    ],
    queryFn: () =>
      getAllCandidates(
        token,
        searchParams.name,
        searchParams.country,
        searchParams.industry,
        currentPage,
      ),
  });

  function handleSearch() {
    setCurrentPage(1);
    setSearchParams({
      name: nameInput,
      country: countryInput,
      industry: industryInput,
    });
  }

  const totalPages = data
    ? Math.ceil(
        data.totalCandidates / (data.pageSize || data.candidates.length || 1),
      )
    : 1;

  if (error) {
    const errorMessage =
      error.response?.data.message ?? error.response?.statusText;
    return (
      <ErrorDashboardMessage
        statusCode={error.response?.status}
        errorMessage={errorMessage ?? "Something Went Wrong"}
      />
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="font-medium text-xl">Candidates Search</p>
        <p className="text-sm">
          Search and access candidate profiles to find the perfect match for
          your company.
        </p>
      </div>

      {/* Search */}
      <CandidatesSearch
        name={nameInput}
        country={countryInput}
        industry={industryInput}
        setName={setNameInput}
        setCountry={setCountryInput}
        setIndustry={setIndustryInput}
        onSearch={handleSearch}
      />

      <p className="text-sm font-medium text-black/80 flex items-center gap-1 md:pl-3">
        <HugeiconsIcon
          icon={UserCircle02Icon}
          className="size-4.5"
          strokeWidth={2}
        />
        Total Result: ({isLoading ? "…" : (data?.totalCandidates ?? 0)})
        Candidates
      </p>

      {/* Candidates */}
      {isLoading ? (
        <div className="grid gap-5 sm:grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] mt-9">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border space-y-4">
              <div className="flex flex-col items-center gap-2 border-b pb-4">
                <Skeleton className="size-15 rounded-full" />
                <Skeleton className="h-4 w-32 rounded-md" />
                <Skeleton className="h-3 w-24 rounded-md" />
              </div>
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-4 w-16 rounded-md" />
                </div>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          <div className="grid gap-5  sm:grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] mt-9">
            {data?.candidates && data.candidates.length > 0 ? (
              data.candidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <p className="text-sm text-black/60 col-span-full text-center py-10">
                No candidates found.
              </p>
            )}
          </div>

          {data && totalPages > 1 && (
            <div className="flex items-center justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
