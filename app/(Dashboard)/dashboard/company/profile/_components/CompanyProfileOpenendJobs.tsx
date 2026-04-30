import React from "react";
import OpenedVacanciyCard from "./OpenedVacanciyCard";

export default function CompanyProfileOpenendJobs() {
  return (
    <div className="w-full bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Open vacancies</p>

      <div className="space-y-4">
        <OpenedVacanciyCard />
        <OpenedVacanciyCard />
      </div>
    </div>
  );
}
