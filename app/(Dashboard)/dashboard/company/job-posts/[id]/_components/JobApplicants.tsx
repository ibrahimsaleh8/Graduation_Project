import AlertModel from "@/components/main-layout/AlertModel";
import JobApplicantsFilter from "./JobApplicantsFilter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import ApplicantsDetails from "./ApplicantsDetails";
import {
  ApplicantStatusDetailsType,
  JobDetailsApplicantDetailsType,
} from "./ShowJobDetailsById";
import { formatDate } from "@/lib/FormatDate";
import CandidateApplicationStatus from "./CandidateApplicationStatus";
import { useMemo, useState } from "react";

type Props = {
  candidates: JobDetailsApplicantDetailsType[];
  token: string;
};

export default function JobApplicants({ candidates, token }: Props) {
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
        (candidate) => candidate.status === filterStatus,
      );
    }

    if (searchTxt.trim() !== "") {
      filteredCandidates = filteredCandidates.filter((candidate) =>
        candidate.applicantName.toLowerCase().includes(searchTxt.toLowerCase()),
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
                key={candidate.applicantionId}
                className="border-b hover:bg-black/5">
                <TableCell>
                  <div className="flex items-start gap-3">
                    {/* User Image */}
                    <div className="size-12 rounded-full bg-input-bg">
                      <Image
                        src={candidate.imageUrl}
                        alt="User Image"
                        width={40}
                        height={40}
                        className="rounded-full w-full object-cover"
                      />
                    </div>
                    {/* User Info */}
                    <div className="text-sm space-y-0.5">
                      <p className="font-medium">{candidate.applicantName}</p>
                      <p className="text-black/70 text-xs">{candidate.email}</p>
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
                    <p>{formatDate(candidate.appliedDate)}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <CandidateApplicationStatus status={candidate.status} />
                </TableCell>
                <TableCell>
                  <AlertModel
                    title={`${candidate.applicantName}'s Application`}
                    trigger={
                      <Button className="text-xs h-9.5 bg-main-color text-white justify-start hover:bg-main-color/80 hover:text-white gap-1.5">
                        <Eye className="sie-5" /> View Details
                      </Button>
                    }
                    content={
                      <ApplicantsDetails
                        ApplicationId={candidate.applicantionId}
                        token={token}
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
