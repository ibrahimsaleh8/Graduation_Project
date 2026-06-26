/* eslint-disable @next/next/no-img-element */
import InterviewsFilteration from "./InterviewsFilteration";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InterviewDetails from "./InterviewDetails";
import { CompanyAllInterviewsDataType } from "./DisplayAllInterviews";
import { formatTime } from "@/lib/InterviewDateFormater";
import InterviewStatusBadge from "../../job-posts/[id]/_components/InterviewStatusBadge";
import { useMemo, useState } from "react";
import { InterviewStatus } from "../../../employee/interviews/_components/ShowEmployeeInterviews";
type Props = {
  interviews: CompanyAllInterviewsDataType[];
  token: string;
};
export default function ShowAllInterviews({ interviews, token }: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [statusFilter, setStatusFilter] = useState<InterviewStatus | "All">(
    "All",
  );

  const [showTodayInterviews, setShowTodayInterviews] = useState(false);

  const UpdateSearchTxt = (value: string) => {
    setSearchTxt(value);
  };

  const UpdateStatusFilter = (value: InterviewStatus | "All") => {
    setStatusFilter(value);
  };
  const UpdateShowTodayInterviews = (value: boolean) => {
    setShowTodayInterviews(value);
  };

  const allInterviews = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];

    return interviews.filter((interview) => {
      const matchesSearch =
        searchTxt.trim() === "" ||
        interview.candidateName
          .toLowerCase()
          .includes(searchTxt.toLowerCase()) ||
        interview.email.toLowerCase().includes(searchTxt.toLowerCase()) ||
        interview.jobTitle.toLowerCase().includes(searchTxt.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || interview.status === statusFilter;

      const matchesToday =
        !showTodayInterviews || interview.scheduledDate === today;

      return matchesSearch && matchesStatus && matchesToday;
    });
  }, [interviews, searchTxt, statusFilter, showTodayInterviews]);

  return (
    <div className="space-y-2">
      <InterviewsFilteration
        UpdateSearchTxt={UpdateSearchTxt}
        UpdateStatusFilter={UpdateStatusFilter}
        UpdateShowTodayInterviews={UpdateShowTodayInterviews}
        forJobDetails={false}
      />
      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="text-white py-4 pl-4">
              Candidate Name
            </TableHead>
            <TableHead className="text-white py-4">Job Position</TableHead>
            <TableHead className="text-white py-4">Date & Time</TableHead>
            <TableHead className="text-white py-4">Status</TableHead>
            <TableHead className="text-white py-4 w-30">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allInterviews.length > 0 ? (
            allInterviews.map((interview) => (
              <TableRow key={interview.interviewId}>
                <TableCell>
                  <div className="flex items-start gap-3">
                    {/* User Image */}
                    <div className="size-12 rounded-full bg-input-bg overflow-hidden">
                      <img
                        src={interview.imageUrl}
                        alt={interview.candidateName}
                        width={200}
                        height={200}
                        className="rounded-full w-full object-cover"
                      />
                    </div>
                    {/* User Info */}
                    <div className="text-sm space-y-0.5">
                      <p className="font-medium">{interview.candidateName}</p>
                      <p className="text-black/70 text-xs">{interview.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  {interview.jobTitle}
                </TableCell>
                <TableCell>
                  <div>
                    <p>{interview.scheduledDate}</p>
                    <p>
                      {formatTime(interview.startTime)} -{" "}
                      {formatTime(interview.endTime)}{" "}
                      <span className="text-xs">(GMT)</span>
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <InterviewStatusBadge status={interview.status} />
                </TableCell>
                <TableCell>
                  <InterviewDetails
                    interviewId={interview.interviewId}
                    token={token}
                    jobId={interview.jobId}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="font-medium text-center text-background/70 p-4">
              <TableCell className="p-5 text-center" colSpan={5}>
                No Interviews Found...
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
