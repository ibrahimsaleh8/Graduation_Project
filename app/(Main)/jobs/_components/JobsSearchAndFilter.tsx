"use client";

import { Button } from "@/components/ui/button";
import JobLocationSearch from "./JobLocationSearch";
import SearchBar from "./SearchBar";

export default function JobsSearchAndFilter() {
  return (
    <div className="w-full md:p-8 p-4 border-b">
      <div className="flex items-center gap-3 container mx-auto flex-col md:flex-row">
        <SearchBar />
        <JobLocationSearch />
        <Button className="mt-auto md:w-fit w-full min-w-32 h-11 text-sm bg-main-color text-white hover:bg-main-color/80 duration-500 rounded-full">
          Search
        </Button>
      </div>
    </div>
  );
}
