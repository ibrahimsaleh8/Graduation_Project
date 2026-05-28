import { InterviewStatus } from "./ShowEmployeeInterviews";

export default function InterviewStatusBadge({
  status,
}: {
  status: InterviewStatus;
}) {
  const statusStyles: Record<InterviewStatus, string> = {
    Upcoming: "bg-blue-50 text-blue-600 border border-blue-100",

    Completed: "bg-green-50 text-green-600 border border-green-100",

    Cancelled: "bg-red-50 text-red-600 border border-red-100",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
