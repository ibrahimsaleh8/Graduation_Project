import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Calendar02Icon } from "@hugeicons/core-free-icons";
import { Textarea } from "@/components/ui/textarea";
export default function ScheduleInterview() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-2">
      {/* Date & Time */}
      <div className="flex items-start gap-3 w-full flex-col md:flex-row">
        <div className="space-y-1 w-full md:w-fit">
          <Label className="text-sm font-medium">Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border bg-input-bg text-black md:w-80 w-full"
          />
        </div>

        <div className="space-y-4 flex-1 w-full md:w-fit">
          <div className="space-y-1">
            <Label
              className="text-sm font-medium"
              htmlFor="interview-start-time">
              Start Time <span className="text-xs">(GMT+00:00)</span>
            </Label>
            <Input
              type="time"
              id="interview-start-time"
              step="1"
              defaultValue="10:30:00"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-sm font-medium" htmlFor="interview-end-time">
              End Time <span className="text-xs">(GMT+00:00)</span>
            </Label>
            <Input
              type="time"
              id="interview-end-time"
              step="1"
              defaultValue="10:30:00"
            />
          </div>

          <p className="text-xs text-orange-600">*(GMT-Greenwich Mean Time)</p>

          <div className="space-y-1">
            <Label className="text-sm font-medium" htmlFor="addition-notes">
              Additional Notes (optional)
            </Label>
            <Textarea
              id="addition-notes"
              placeholder="Add any notes for the candidate.."
              className="h-35 w-full resize-none bg-input-bg shadow-none placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="space-y-1">
          <Label className="text-sm font-medium" htmlFor="interview-link">
            Interview Link
          </Label>
          <Input
            type="text"
            id="interview-link"
            placeholder="zoom.us/j/1231"
            className="placeholder:text-xs"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-sm font-medium" htmlFor="interviewer-name">
            Interviewer Name
          </Label>
          <Input
            className="placeholder:text-xs"
            type="text"
            id="interviewer-name"
            placeholder="john wick"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-sm font-medium" htmlFor="intervie-type">
            Interviewe Type
          </Label>
          <Input
            className="placeholder:text-xs"
            type="text"
            id="intervie-type"
            placeholder="Technical Interview"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 justify-between">
        <Button className="text-xs gap-1 h-10 bg-black/10 text-black hover:bg-black/80 hover:text-white">
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            strokeWidth={2}
            className="size-4.5"
          />
          Back
        </Button>
        <Button className="text-xs h-10 bg-main-color text-white hover:bg-main-color/80 hover:text-white">
          <HugeiconsIcon
            icon={Calendar02Icon}
            strokeWidth={2}
            className="size-4.5"
          />
          Schedule Interview
        </Button>
      </div>
    </div>
  );
}
