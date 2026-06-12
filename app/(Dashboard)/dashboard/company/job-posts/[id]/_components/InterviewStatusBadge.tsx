import { InterviewStatusDataType } from "./ShowJobDetailsById";

type Props = {
  status: InterviewStatusDataType;
};
export default function InterviewStatusBadge({ status }: Props) {
  const statusStyles =
    status === "Upcoming"
      ? "bg-blue-100 text-blue-700 border-blue-200"
      : status === "Completed"
        ? "bg-green-100 text-green-700 border-green-200"
        : "bg-red-100 text-red-700 border-red-200";

  return (
    <span
      className={`text-xs px-2 ${statusStyles} py-1 w-fit rounded-md font-medium border`}>
      {status}
    </span>
  );
}
