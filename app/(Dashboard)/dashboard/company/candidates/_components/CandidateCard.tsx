/* eslint-disable @next/next/no-img-element */
import {
  Briefcase01Icon,
  Location01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Candidate } from "./ShowAllCandidatesForCompany";

type Props = {
  candidate: Candidate;
};

export default function CandidateCard({ candidate }: Props) {
  return (
    <div className="p-5 bg-white rounded-2xl border flex flex-col">
      {/* Top */}
      <div className="flex flex-col items-center gap-2 border-b pb-4">
        <div className="rounded-full bg-input-bg size-15 overflow-hidden">
          {candidate.image ? (
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-full h-full object-cover object-center"
            />
          ) : null}
        </div>
        {/* text */}
        <div className="text-sm text-center">
          <p className="font-medium">{candidate.name}</p>
          <p>{candidate.jobTitle ?? "Not specified"}</p>
        </div>
      </div>

      {/* Body */}
      <div className="pt-4 flex flex-col items-center gap-6 w-full mt-auto">
        {/* Industry & Location  */}
        <div className="flex items-center gap-6 flex-wrap">
          {candidate.industry && (
            <p className="flex items-center gap-1 text-sm">
              <HugeiconsIcon
                icon={Briefcase01Icon}
                className="size-4"
                strokeWidth={2}
              />
              {candidate.industry}
            </p>
          )}
          <p className="flex items-center gap-1 text-sm">
            <HugeiconsIcon
              icon={Location01Icon}
              className="size-4"
              strokeWidth={2}
            />
            {candidate.country}
          </p>
        </div>

        <Link
          className="w-full text-sm px-4 py-3 bg-main-dark hover:bg-main-dark/90 duration-300 mt-auto text-white rounded-md flex items-center justify-center gap-1.5"
          href={`/dashboard/company/candidates/${candidate.id}`}>
          <HugeiconsIcon
            icon={UserCircleIcon}
            className="size-4.5"
            strokeWidth={2}
          />{" "}
          View Profile
        </Link>
      </div>
    </div>
  );
}
