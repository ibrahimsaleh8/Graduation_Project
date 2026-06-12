import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import InterviewDetails from "../../../interviews/_components/InterviewDetails";
import InterviewsFilteration from "../../../interviews/_components/InterviewsFilteration";
import { JobDetailsInterviews } from "./ShowJobDetailsById";
import InterviewStatusBadge from "./InterviewStatusBadge";
import { formatTime } from "@/lib/InterviewDateFormater";
type Props = {
  token: string;
  interviewsData: JobDetailsInterviews[];
  jobId: string;
};
export default function JobInterviews({ interviewsData, token, jobId }: Props) {
  return (
    <div className="space-y-5 w-full">
      <InterviewsFilteration />
      <Table className="bg-white rounded-md overflow-hidden pb-2 inline-table">
        <TableHeader>
          <TableRow className="bg-main-dark hover:bg-main-dark/90 rounded-t-md">
            <TableHead className="text-white py-4 pl-4">
              Candidate Name
            </TableHead>
            <TableHead className="text-white py-4">Date & Time</TableHead>
            <TableHead className="text-white py-4">Status</TableHead>
            <TableHead className="text-white py-4 w-30">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {interviewsData.length > 0 ? (
            interviewsData.map((interview) => (
              <TableRow
                key={interview.interviewId}
                className="hover:bg-black/5">
                <TableCell>
                  <div className="flex items-start gap-3">
                    {/* User Image */}
                    <div className="size-12 rounded-full bg-input-bg">
                      <Image
                        src={interview.imageUrl}
                        alt={interview.applicantName}
                        width={100}
                        height={100}
                        className="rounded-full w-full object-cover"
                      />
                    </div>
                    {/* User Info */}
                    <div className="text-sm space-y-0.5">
                      <p className="font-medium capitalize">
                        {interview.applicantName}
                      </p>
                      <p className="text-black/70 text-xs">{interview.email}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div>
                    <p>{interview.interviewDate}</p>
                    <p>
                      {formatTime(interview.startTime)} -{" "}
                      {formatTime(interview.endTime)}{" "}
                      <span className="text-xs">(GMT)</span>
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <InterviewStatusBadge status={interview.interviewStatus} />
                </TableCell>
                <TableCell>
                  <InterviewDetails
                    interviewId={interview.interviewId}
                    token={token}
                    jobId={jobId}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-black/5">
              <TableCell>No Interviews Scheduled yet..</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
