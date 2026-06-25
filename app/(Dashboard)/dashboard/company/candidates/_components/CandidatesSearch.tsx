"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CountrySelect from "@/components/forms/CountrySelect";
import IndustrySearch from "@/components/forms/IndustrySearch";
import { Button } from "@/components/ui/button";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Props = {
  name: string;
  country: string;
  industry: string;
  setName: (value: string) => void;
  setCountry: (value: string) => void;
  setIndustry: (value: string) => void;
  onSearch: () => void;
};

export default function CandidatesSearch({
  name,
  country,
  industry,
  setName,
  setCountry,
  setIndustry,
  onSearch,
}: Props) {
  return (
    <div className="flex items-end gap-3 md:flex-row flex-col w-full ">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search By Candidate Name"
          className="bg-white border border-border-color w-full shadow-none"
        />
      </div>

      {/* Country */}
      <div className="w-full space-y-1">
        <Label>Country</Label>
        <CountrySelect
          UpdateCountry={(value: string) => {
            setCountry(value);
          }}
          deafultCountry={country}
          classes="w-full space-y-1 bg-white border border-border-color hover:bg-white"
        />
      </div>

      {/* Industry */}
      <div className="w-full space-y-1">
        <Label>Industry</Label>
        <IndustrySearch
          withIcon={false}
          UpdateIndustry={(value: string) => {
            setIndustry(value);
          }}
          deafultIndustry={industry}
          classes="w-full space-y-1 bg-white border border-border-color hover:bg-white"
        />
      </div>

      <Button
        onClick={onSearch}
        className="text-sm bg-main-color text-white hover:bg-main-color/80 duration-300 sm:w-32 w-full gap-2">
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
