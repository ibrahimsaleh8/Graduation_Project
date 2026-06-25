"use client";

import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const generatePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50">
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          className="size-5"
          strokeWidth={2}
        />
      </button>

      {generatePages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`h-10 w-10 rounded-lg border transition cursor-pointer ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-100"
            }`}>
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer">
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          className="size-5"
          strokeWidth={2}
        />
      </button>
    </div>
  );
};

export default Pagination;
