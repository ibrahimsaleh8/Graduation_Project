import { JobStatusDataType } from "./ShowJobDetailsById";

export default function JobStatusBadge({
  jobStatus,
}: {
  jobStatus: JobStatusDataType;
}) {
  const statusBg =
    jobStatus == "Approved"
      ? "bg-green-600 text-white border-green-500"
      : jobStatus == "Pending"
        ? "bg-yellow-300 text-black border-yellow-400"
        : "bg-red-500 text-white border-red-500";
  return (
    <span
      className={`text-xs px-2 ${statusBg} py-1 w-fit rounded-md font-medium border`}>
      {jobStatus}
    </span>
  );
}
