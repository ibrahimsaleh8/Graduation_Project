"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CountrySelect from "@/components/forms/CountrySelect";
import IndustrySearch from "@/components/forms/IndustrySearch";
import { Button } from "@/components/ui/button";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
export default function CandidatesSearch() {
  return (
    <div className="flex items-end gap-3 md:flex-row flex-col w-full ">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search By Candidate Name"
          className="bg-white border border-border-color w-full shadow-none"
        />
      </div>

      {/* Country */}
      <div className="w-full space-y-1">
        <Label>Country</Label>
        <CountrySelect
          UpdateCountry={(value: string) => {
            console.log(value);
          }}
          deafultCountry=""
          classes="w-full space-y-1 bg-white border border-border-color hover:bg-white"
        />
      </div>

      {/* Industry */}
      <div className="w-full space-y-1">
        <Label>Industry</Label>
        <IndustrySearch
          UpdateCountry={(value: string) => {
            console.log(value);
          }}
          deafultCountry=""
          classes="w-full space-y-1 bg-white border border-border-color hover:bg-white"
        />
      </div>

      <Button className="text-sm bg-main-color text-white hover:bg-main-color/80 duration-300 sm:w-32 w-full gap-2">
        <HugeiconsIcon
          icon={Search01Icon}
          className="size-4.5!"
          strokeWidth={2}
        />{" "}
        Search
      </Button>
    </div>
  );
}
