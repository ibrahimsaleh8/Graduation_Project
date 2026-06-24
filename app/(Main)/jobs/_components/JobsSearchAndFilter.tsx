"use client";

import { Button } from "@/components/ui/button";
import JobLocationSearch from "./JobLocationSearch";
import SearchBar from "./SearchBar";
import IndustrySearch from "@/components/forms/IndustrySearch";
import { useRef } from "react";

export default function JobsSearchAndFilter() {
  const search = useRef({
    title: "",
    location: "",
    industry: "",
  });

  const HandleSearch = () => {
    console.log(search.current);
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
            updateSearchTxt={(value: string) => {
              search.current = {
                ...search.current,
                title: value,
              };
            }}
          />
          <JobLocationSearch
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
            deafultIndustry=""
            classes="lg:w-fit lg:flex-1 w-full flex flex-col gap-1 py-2 md:py-0 bg-white hover:bg-white lg:border-l lg:border-t-0 border-t rounded-none"
          />

          <Button
            onClick={() => HandleSearch()}
            className="lg:mt-auto mt-3 lg:w-fit w-full min-w-40 h-11 text-sm bg-main-color text-white hover:bg-main-color/80 duration-500 rounded-md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
