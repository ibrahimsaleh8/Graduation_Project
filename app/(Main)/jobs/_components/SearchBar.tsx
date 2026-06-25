"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Props = {
  updateSearchTxt: (value: string) => void;
  deafultValue: string;
};

export default function SearchBar({ updateSearchTxt, deafultValue }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      className="relative lg:w-fit lg:flex-1 w-full lg:border-r border-b lg:border-b-0">
      <div className="flex flex-col gap-1">
        <div className="flex items-center rounded-full pl-5 bg-white">
          <HugeiconsIcon
            icon={Search01Icon}
            className="w-6 h-6 opacity-80 text-black/50"
          />
          <Input
            id="search"
            defaultValue={deafultValue}
            type="search"
            placeholder="Search your job title or keyword..."
            className="border-0 outline-0 focus-visible:ring-0 text-black rounded-md bg-transparent h-12 shadow-none"
            onChange={(e) => {
              updateSearchTxt(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
