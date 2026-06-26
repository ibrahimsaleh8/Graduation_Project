"use client";
import { CompanyDashboardApplicant } from "./hooks/useGetCompanyDashboardData";
import NewApplicantsCard from "./NewApplicantsCard";
import { motion } from "framer-motion";
type Props = {
  applicants: CompanyDashboardApplicant[];
};
export default function RecentEmployeesApplied({ applicants }: Props) {
  console.log("applicants", applicants);
  return (
    <div className="md:mt-8 xl:w-1/2 w-full overflow-x-hidden">
      <p className="font-medium mb-3">New Applicants</p>
      <div className="space-y-2.5">
        <>
          {applicants.length > 0 ? (
            applicants.map((applic, index) => (
              <motion.div
                key={applic.applicantId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}>
                <NewApplicantsCard applicationData={applic} />
              </motion.div>
            ))
          ) : (
            <p className="text-center font-medium p-5 text-black/70">
              No Applications Found
            </p>
          )}
        </>
      </div>
    </div>
  );
}
