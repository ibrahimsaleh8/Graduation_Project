"use client";
import { Activity, useState } from "react";
import ShowApplicantsDetails from "./ShowApplicantsDetails";
import ScheduleInterview from "./ScheduleInterview";

export default function ApplicantsDetails() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div>
      <Activity mode={showDetails ? "visible" : "hidden"}>
        <ShowApplicantsDetails setShowDetails={setShowDetails} />
      </Activity>
      <Activity mode={!showDetails ? "visible" : "hidden"}>
        <ScheduleInterview setShowDetails={setShowDetails} />
      </Activity>
    </div>
  );
}
