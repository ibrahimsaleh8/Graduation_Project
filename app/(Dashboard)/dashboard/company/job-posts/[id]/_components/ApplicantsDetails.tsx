"use client";
import { useState } from "react";
import ShowApplicantsDetails from "./ShowApplicantsDetails";
import ScheduleInterview from "./ScheduleInterview";

export default function ApplicantsDetails() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div>
      {showDetails ? (
        <ShowApplicantsDetails setShowDetails={setShowDetails} />
      ) : (
        <ScheduleInterview />
      )}
    </div>
  );
}
