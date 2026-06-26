"use client";
import { useCandidatePageStore } from "@/lib/canSeeCandidatesPage";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  hasCandidatesSearch: boolean;
};
export default function UpdateCanSeeCandidatesPage({
  children,
  hasCandidatesSearch,
}: Props) {
  const { setCanSeeCandidatesPage } = useCandidatePageStore();

  useEffect(() => {
    setCanSeeCandidatesPage(hasCandidatesSearch);
  }, [hasCandidatesSearch, setCanSeeCandidatesPage]);
  return <>{children}</>;
}
