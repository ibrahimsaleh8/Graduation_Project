import { ApplicantStatusDetailsType } from "./ShowJobDetailsById";

export default function CandidateApplicationStatus({
  status,
}: {
  status: ApplicantStatusDetailsType;
}) {
  const statusClasses =
    status == "Pending"
      ? "bg-yellow-300 text-black"
      : status == "Accepted"
        ? "bg-green-600 text-white"
        : status == "Rejected"
          ? "bg-red-600 text-white"
          : "bg-blue-500 text-white";
  return (
    <p
      className={`text-xs px-3 py-1.5 rounded-md w-fit font-medium ${statusClasses}`}>
      {status}
    </p>
  );
}
