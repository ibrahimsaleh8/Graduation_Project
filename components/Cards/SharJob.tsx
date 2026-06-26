"use client";

import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share08Icon } from "@hugeicons/core-free-icons";
import { sileo } from "sileo";

type Props = {
  jobId: string;
};

export default function ShareJob({ jobId }: Props) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/jobs/${jobId}`,
      );
      sileo.success({ title: "Job Link Copied Success!" });
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className="bg-transparent hover:bg-black/5 text-black border border-border-color z-10000">
      <HugeiconsIcon icon={Share08Icon} className="size-5!" />
    </Button>
  );
}
