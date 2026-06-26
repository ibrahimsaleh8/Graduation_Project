"use client";

import { Bookmark01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { useJobsContext } from "@/app/(Main)/jobs/_context/JobsContext";

type Props = {
  jobId: string;
  isSaved: boolean;
  size: "small" | "large";
};

export default function SaveJobButton({ isSaved: initialIsSaved, jobId, size }: Props) {
  const { isSaved, toggleSaveJob, isPending } = useJobsContext();

  // Use the context's optimistic value; fall back to the server-provided value
  // for jobs that haven't been interacted with yet in this session.
  const saved = isSaved(jobId) ?? initialIsSaved;

  return (
    <Button
      disabled={isPending(jobId)}
      onClick={() => toggleSaveJob(jobId, saved)}
      className={`
        ${saved ? "bg-main-dark hover:bg-main-dark/90 text-white" : "bg-transparent hover:bg-black/5 text-black"}
        border border-border-color
      `}
    >
      <HugeiconsIcon
        icon={Bookmark01Icon}
        className={`${size === "large" ? "size-5!" : "size-4!"}`}
      />
    </Button>
  );
}

