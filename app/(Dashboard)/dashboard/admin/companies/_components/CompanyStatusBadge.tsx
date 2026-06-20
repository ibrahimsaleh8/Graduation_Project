import { CompanyStatusDataType } from "./ShowAllCompaniesForAdmin";

export default function CompanyStatusBadge({
  status,
}: {
  status: CompanyStatusDataType;
}) {
  const statusBg =
    status == "Verified"
      ? "bg-green-600 text-white border-green-500"
      : status == "Blocked"
        ? "bg-yellow-300 text-black border-yellow-400"
        : "bg-blue-500 text-white border-blue-500";
  return (
    <p
      className={`text-xs px-2 ${statusBg} py-1 w-fit rounded-md font-medium border`}>
      {status}
    </p>
  );
}
