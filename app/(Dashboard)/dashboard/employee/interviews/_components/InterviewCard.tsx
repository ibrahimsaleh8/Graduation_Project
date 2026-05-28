import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  AlarmClockIcon,
  File02Icon,
  UserIcon,
  ComingSoon02Icon,
  Briefcase04Icon,
  Video01Icon,
  NoteEditIcon,
} from "@hugeicons/core-free-icons";
import { InterviewDataType } from "./ShowEmployeeInterviews";
import InterviewStatusBadge from "./InterviewStatusBadge";
import AlertModel from "@/components/main-layout/AlertModel";
import ShowInterviewNotes from "./ShowInterviewNotes";
export default function InterviewCard({
  interviewId,
  jobTitle,
  companyName,
  companyLogoUrl,
  date,
  startAt,
  endAt,
  interviewType,
  status,
  interviewerName,
  meetingLink,
  notes,
}: InterviewDataType) {
  const interviewDetails = [
    {
      label: "Date",
      value: date,
      icon: Calendar02Icon,
    },
    {
      label: "Type",
      value: interviewType,
      icon: File02Icon,
    },
    {
      label: "Start Time",
      value: `${startAt} GMT`,
      icon: AlarmClockIcon,
    },
    {
      label: "End Time",
      value: `${endAt} GMT`,
      icon: ComingSoon02Icon,
    },

    {
      label: "Interviewer",
      value: interviewerName,
      icon: UserIcon,
    },
  ];

  return (
    <div
      className="group w-full rounded-md border border-border-color bg-white p-5
      transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/5 pb-4">
        {/* Company + Role */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-black/5 p-2">
            <img
              src={companyLogoUrl}
              alt={companyName}
              width={40}
              height={40}
              className="size-10 object-contain"
            />
          </div>

          <div>
            <p className="text-base font-semibold text-black">{jobTitle}</p>
            <p className="text-sm text-black/60">{companyName}</p>
          </div>
        </div>

        {/* Status */}
        <InterviewStatusBadge status={status} />
      </div>

      {/* Body */}
      <div className="space-y-4 py-5">
        {/* Items */}
        <div className="grid grid-cols-2 gap-4">
          {interviewDetails.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="rounded-lg bg-black/5 p-2">
                <HugeiconsIcon
                  icon={item.icon}
                  className="size-4 text-black/70"
                />
              </div>

              <div>
                <p className="text-xs text-black/50">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}

          {notes && (
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-black/5 p-2">
                <HugeiconsIcon
                  icon={NoteEditIcon}
                  className="size-4 text-black/70"
                />
              </div>

              <div>
                <p className="text-xs text-black/50">Notes</p>
                <AlertModel
                  title="Interview Notes"
                  trigger={
                    <button className="text-sm font-medium cursor-pointer text-main-color">
                      Show Notes
                    </button>
                  }
                  content={<ShowInterviewNotes notes={notes} />}
                  contentClassname="md:min-w-150 pb-3"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 border-t border-black/5 pt-3">
        <a
          href={`/employee/interviews/${interviewId}`}
          className="flex items-center gap-2 rounded-md bg-main-color px-6 py-2 text-sm text-white duration-300 hover:bg-main-color/80">
          <HugeiconsIcon icon={Briefcase04Icon} className="size-4" />
          Job Details
        </a>

        <a
          href={meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-main-dark px-6 py-2 text-sm text-white duration-300 hover:bg-main-dark/80">
          <HugeiconsIcon icon={Video01Icon} className="size-4" />
          Join Meeting
        </a>
      </div>
    </div>
  );
}
