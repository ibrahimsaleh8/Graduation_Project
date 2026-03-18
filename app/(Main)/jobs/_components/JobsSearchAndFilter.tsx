"use client";

import { Button } from "@/components/ui/button";
import JobLocationSearch from "./JobLocationSearch";
import SearchBar from "./SearchBar";

export default function JobsSearchAndFilter() {
  return (
    <div className="w-full relative md:p-18 p-8 border-b bg-main-color text-white space-y-5">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 right-10 w-28 h-28 bg-white/10 rounded-2xl"></div>
        <div className="absolute top-16 right-2 w-20 h-20 bg-white/10 rounded-2xl"></div>
        <div className="absolute bottom-4 left-10 w-32 h-32 bg-white/10 rounded-2xl"></div>
        <div className="absolute bottom-10 left-40 w-20 h-20 bg-white/10 rounded-2xl"></div>
      </div>

      <div className="container mx-auto space-y-3">
        <div className="space-y-1 relative">
          <p className="font-medium text-xl">
            Explore Your Career Opportunities Here
          </p>
          <p className="opacity-85">
            Apply to jobs that match your skills and aspirations, and embark on
            a rewarding career journey.
          </p>
        </div>
        <div className="relative flex items-center gap-3 container mx-auto p-2 flex-col md:flex-row bg-white md:rounded-full rounded-md">
          <SearchBar />
          <JobLocationSearch />
          <Button className="mt-auto md:w-fit w-full min-w-40 h-11 text-sm bg-main-color text-white hover:bg-main-color/80 duration-500 rounded-full">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
