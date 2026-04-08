"use client";
import NewApplicantsCard from "./NewApplicantsCard";
import { motion } from "framer-motion";

export default function RecentEmployeesApplied() {
  return (
    <div className="md:mt-8 lg:w-1/2 w-full overflow-x-hidden">
      <p className="font-medium mb-3">New Applicants</p>
      <div className="space-y-2.5">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}>
            <NewApplicantsCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
