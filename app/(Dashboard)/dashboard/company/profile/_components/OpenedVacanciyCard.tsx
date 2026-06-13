import Link from "next/link";
import { CompanyProfilOpenVacancyDataType } from "./ShowCompanyProfile";

type Props = {
  openedJobData: CompanyProfilOpenVacancyDataType;
};

function truncateHtml(html: string, maxLength: number = 120): string {
  const plainText = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plainText.length <= maxLength) return plainText;
  return plainText.slice(0, maxLength).trimEnd() + "…";
}

export default function OpenedVacancyCard({ openedJobData }: Props) {
  const {
    title,
    description,
    minSalary,
    maxSalary,
    jobType,
    workApproach,
    jobId,
  } = openedJobData;

  return (
    <div className="bg-input-bg/50 w-full p-4 rounded-md space-y-2 border">
      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm text-black/60 leading-snug">
        {truncateHtml(description)}
      </p>
      <p className="text-sm pl-1">
        <span className="font-bold">
          ${minSalary} – ${maxSalary}
        </span>
        /Month
      </p>
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-3 flex-wrap mt-3">
          <p className="text-xs font-medium p-2 bg-white text-black rounded-md">
            {jobType}
          </p>
          <p className="text-xs font-medium p-2 bg-white text-black rounded-md">
            {workApproach}
          </p>
        </div>
        <Link
          href={`/dashboard/company/job-posts/${jobId}`}
          className="px-6 py-2 text-sm bg-main-color text-white rounded-sm hover:bg-main-color/80 duration-200">
          View Details
        </Link>
      </div>
    </div>
  );
}
