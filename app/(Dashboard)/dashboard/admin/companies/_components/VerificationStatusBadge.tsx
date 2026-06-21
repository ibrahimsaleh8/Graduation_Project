import { VerificationRequestStatusDataType } from "./hooks/useVerificationRequest";

export default function VerificationStatusBadge({
  status,
}: {
  status: VerificationRequestStatusDataType;
}) {
  const statusClasses =
    status == "Approved"
      ? "bg-green-600 text-white border-green-500"
      : status == "Pending"
        ? "bg-yellow-300 text-black border-yellow-300"
        : status == "NeedsMoreInformation"
          ? "bg-blue-600 text-white border-blue-300"
          : "bg-red-600 text-white border-red-500";
  return (
    <p
      className={`text-xs px-2 py-1 w-fit rounded-md font-medium border ${statusClasses}`}>
      {status == "NeedsMoreInformation" ? "Need More Details" : status}
    </p>
  );
}
