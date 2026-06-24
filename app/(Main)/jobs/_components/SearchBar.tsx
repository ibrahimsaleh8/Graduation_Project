"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";

type Job = {
  id: number;
  title: string;
};

const jobsData: Job[] = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "Backend Developer" },
  { id: 3, title: "Full Stack Engineer" },
  { id: 4, title: "React Developer" },
  { id: 5, title: "Next.js Developer" },
];

type Props = {
  updateSearchTxt: (value: string) => void;
};

export default function SearchBar({ updateSearchTxt }: Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const filtered = jobsData.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase()),
    );
    return query.trim().length > 0 ? filtered : jobsData;
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            type="search"
            placeholder="Search your job title or keyword..."
            className="border-0 outline-0 focus-visible:ring-0 text-black rounded-md bg-transparent h-12 shadow-none"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              updateSearchTxt(e.target.value);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Search Results Dropdown */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-full rounded-md bg-white text-black border border-black/20 p-4 max-h-60 overflow-y-auto shadow-lg flex flex-col gap-1 z-10000">
            {results.length === 0 ? (
              <p className="text-sm text-black/65">No results found</p>
            ) : (
              results.map((job, index) => (
                <motion.p
                  key={job.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  onClick={() => {
                    setQuery(job.title);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer rounded-md p-2 text-sm hover:bg-muted hover:text-white transition">
                  {job.title}
                </motion.p>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}
