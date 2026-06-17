/* eslint-disable @next/next/no-img-element */
import AlertModel from "@/components/main-layout/AlertModel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { formatDate } from "@/lib/FormatDate";
import { useMemo, useState } from "react";
import { JobDetailsCandidatesDataType } from "./ShowJobDetailsPage";
import { ApplicantStatusDetailsType } from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/ShowJobDetailsById";
import CandidateApplicationStatus from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/CandidateApplicationStatus";
import ApplicantsDetails from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/ApplicantsDetails";
import JobApplicantsFilter from "@/app/(Dashboard)/dashboard/company/job-posts/[id]/_components/JobApplicantsFilter";

type Props = {
  candidates: JobDetailsCandidatesDataType[];
  token: string;
  jobId: string;
};
export default function JobApplicantsForAdmin({
  candidates,
  jobId,
  token,
}: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "All" | ApplicantStatusDetailsType
  >("All");

  const UpdateSearchTxt = (txt: string) => {
    setSearchTxt(txt);
  };

  const UpdateFilterStatus = (status: "All" | ApplicantStatusDetailsType) => {
    setFilterStatus(status);
  };

  const AllCandidates = useMemo(() => {
    let filteredCandidates = candidates;

    if (filterStatus !== "All") {
      filteredCandidates = filteredCandidates.filter(
        (candidate) => candidate.applicationStatus === filterStatus,
      );
    }

    if (searchTxt.trim() !== "") {
      filteredCandidates = filteredCandidates.filter((candidate) =>
        candidate.fullName.toLowerCase().includes(searchTxt.toLowerCase()),
      );
    }
    return filteredCandidates;
  }, [candidates, filterStatus, searchTxt]);

  return (
    <div className="w-full space-y-5">
      <JobApplicantsFilter
        UpdateSearchTxt={UpdateSearchTxt}
        UpdateFilterStatus={UpdateFilterStatus}
      />

      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="text-white py-4 pl-4">
              Candidate Name
            </TableHead>
            <TableHead className="text-white py-4">Match</TableHead>
            <TableHead className="text-white py-4">Applied At</TableHead>
            <TableHead className="text-white py-4">Status</TableHead>
            <TableHead className="text-white py-4 w-40">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AllCandidates.length > 0 ? (
            AllCandidates.map((candidate) => (
              <TableRow
                key={candidate.applicationId}
                className="border-b hover:bg-black/5">
                <TableCell>
                  <div className="flex items-center gap-3">
                    {/* User Image */}
                    <div className="size-11 rounded-full bg-input-bg">
                      <img
                        src={candidate.avatarUrl}
                        alt={candidate.fullName}
                        className="rounded-full w-full object-cover"
                      />
                    </div>
                    {/* User Info */}
                    <div className="text-sm space-y-0.5">
                      <p className="font-medium">{candidate.fullName}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="px-3 py-1.5 text-xs font-medium bg-[#E8F5E9] w-fit rounded-sm text-[#236426] border border-[#d8eed9] ">
                    90%
                  </p>
                </TableCell>
                <TableCell>
                  <div>
                    <p>{formatDate(candidate.appliedAgo)}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <CandidateApplicationStatus
                    status={candidate.applicationStatus}
                  />
                </TableCell>
                <TableCell>
                  <AlertModel
                    title={`${candidate.fullName}'s Application`}
                    trigger={
                      <Button className="text-xs h-9.5 bg-main-color text-white justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
                        <Eye className="sie-5" /> View Details
                      </Button>
                    }
                    content={
                      <ApplicantsDetails
                        ApplicationId={candidate.applicationId}
                        token={token}
                        jobId={jobId}
                        role="admin"
                      />
                    }
                    contentClassname="md:min-w-150 pb-3"
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10">
                <p className="text-sm text-black/70 font-medium ">
                  No applicants found.
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
