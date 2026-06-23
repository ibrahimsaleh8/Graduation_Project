"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const route = useRouter();
  return (
    <Button
      onClick={() => route.back()}
      className="text-xs justify-center h-9 bg-main-dark">
      <HugeiconsIcon
        icon={ArrowLeft01Icon}
        className="size-4!"
        strokeWidth={2}
      />
      Back
    </Button>
  );
}
