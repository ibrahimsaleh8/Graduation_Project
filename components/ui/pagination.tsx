"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: Props) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Build page numbers with ellipsis
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 pb-1 px-1">
      {/* Info */}
      <p className="text-sm text-black/50 select-none">
        Showing{" "}
        <span className="font-semibold text-black/70">{startItem}</span>–
        <span className="font-semibold text-black/70">{endItem}</span> of{" "}
        <span className="font-semibold text-black/70">{totalItems}</span>{" "}
        results
      </p>

      {/* Controls */}
      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="flex items-center justify-center size-8 rounded-md border border-border-color bg-white text-black/60 hover:bg-main-color hover:text-white hover:border-main-color disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft className="size-4" />
        </button>

        {/* Page Numbers */}
        {pages.map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="flex items-center justify-center size-8 text-sm text-black/40 select-none"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={`flex items-center justify-center size-8 rounded-md text-sm font-medium border transition-all duration-200 ${
                page === currentPage
                  ? "bg-main-color text-white border-main-color shadow-sm"
                  : "bg-white text-black/70 border-border-color hover:bg-main-color/10 hover:border-main-color hover:text-main-color"
              }`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="flex items-center justify-center size-8 rounded-md border border-border-color bg-white text-black/60 hover:bg-main-color hover:text-white hover:border-main-color disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
