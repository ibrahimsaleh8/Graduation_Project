import OpenedVacanciyCard from "./OpenedVacanciyCard";
import { CompanyProfilOpenVacancyDataType } from "./ShowCompanyProfile";
type Props = {
  openVacancies: CompanyProfilOpenVacancyDataType[];
};
export default function CompanyProfileOpenendJobs({ openVacancies }: Props) {
  return (
    <div className="w-full bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Open vacancies</p>
      {openVacancies.length > 0 ? (
        <div className="space-y-4">
          {openVacancies.map((vacancy) => (
            <OpenedVacanciyCard key={vacancy.jobId} openedJobData={vacancy} />
          ))}
        </div>
      ) : (
        <p className="p-4 text-center font-medium text-black/70">
          No Opend Jobs Found
        </p>
      )}
    </div>
  );
}
