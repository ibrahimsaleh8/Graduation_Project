import { HugeiconsIcon } from "@hugeicons/react";
import CandidateCard from "./CandidateCard";
import CandidatesSearch from "./CandidatesSearch";
import { UserCircle02Icon } from "@hugeicons/core-free-icons";

type Props = {
  token: string;
};
export default function ShowAllCandidatesForCompany({}: Props) {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-medium text-xl">Candidates Search</p>
        <p className="text-sm">
          Search and access candidate profiles to find the perfect match for
          your company.
        </p>
      </div>

      {/* Search */}
      <CandidatesSearch />

      <p className="text-sm font-medium text-black/80 flex items-center gap-1 md:pl-3">
        <HugeiconsIcon
          icon={UserCircle02Icon}
          className="size-4.5"
          strokeWidth={2}
        />
        Total Result: (30) Candidates
      </p>
      {/* Candidates */}
      <div className="grid gap-5 sm:grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] mt-9">
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
    </div>
  );
}
