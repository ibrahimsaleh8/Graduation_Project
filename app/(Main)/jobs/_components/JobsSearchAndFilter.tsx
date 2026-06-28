"use client";

import { Button } from "@/components/ui/button";
import JobLocationSearch from "./JobLocationSearch";
import SearchBar from "./SearchBar";
import IndustrySearch from "@/components/forms/IndustrySearch";
import { useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { jobSearchQueryDataType } from "./DisplayJobsForSearch";
import { Loader2Icon } from "lucide-react";

type Props = {
  params: jobSearchQueryDataType;
};

export default function JobsSearchAndFilter({ params }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const search = useRef({
    title: params.title ?? "",
    location: params.location ?? "",
    industry: params.industry ?? "",
  });

  const HandleSearch = () => {
    const searchParams = new URLSearchParams({
      title: search.current.title,
      location: search.current.location,
      industry: search.current.industry,
      page: "1",
    });
    startTransition(() => {
      router.push(`?${searchParams.toString()}`);
    });
  };
  return (
    <div className="w-full relative md:p-18 p-8 border-b bg-main-color text-white space-y-5 rounded-md">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 right-10 w-28 h-28 bg-white/10 rounded-2xl"></div>
        <div className="absolute top-16 right-2 w-20 h-20 bg-white/10 rounded-2xl"></div>
        <div className="absolute bottom-4 left-10 w-32 h-32 bg-white/10 rounded-2xl"></div>
        <div className="absolute bottom-10 left-40 w-20 h-20 bg-white/10 rounded-2xl"></div>
      </div>

      <div className="container mx-auto space-y-3">
        <div className="space-y-1 relative">
          <p className="font-medium text-3xl">
            Explore Your Career Opportunities Here
          </p>
          <p className="opacity-85">
            Apply to jobs that match your skills and aspirations, and embark on
            a rewarding career journey.
          </p>
        </div>
        <div className="relative flex items-center lg:gap-3 container mx-auto p-2 flex-col lg:flex-row bg-white rounded-md">
          <SearchBar
            deafultValue={params.title ?? ""}
            updateSearchTxt={(value: string) => {
              search.current = {
                ...search.current,
                title: value,
              };
            }}
          />
          <JobLocationSearch
            deafultValue={params.location ?? ""}
            updateLocation={(value: string) => {
              search.current = {
                ...search.current,
                location: value,
              };
            }}
          />
          <IndustrySearch
            withIcon={true}
            UpdateIndustry={(value: string) => {
              search.current = {
                ...search.current,
                industry: value,
              };
            }}
            deafultIndustry={params.industry ?? ""}
            classes="lg:w-fit lg:flex-1 w-full flex flex-col gap-1 py-2 md:py-0 bg-white hover:bg-white lg:border-l lg:border-t-0 border-t rounded-none"
          />

          <Button
            onClick={() => HandleSearch()}
            disabled={isPending}
            className="lg:mt-auto mt-3 lg:w-fit w-full min-w-40 h-11 text-sm bg-main-color text-white hover:bg-main-color/80 duration-500 rounded-md">
            {isPending ? (
              <Loader2Icon className="size-4 animate-spin" />
            ) : (
              "Search"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
