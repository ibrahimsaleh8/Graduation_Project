import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Checkbox,
  CheckboxIndicator,
} from "@/components/animate-ui/primitives/radix/checkbox";
import { Input } from "@/components/ui/input";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { InterviewStatus } from "../../../employee/interviews/_components/ShowEmployeeInterviews";

type Props = {
  UpdateSearchTxt: (value: string) => void;
  UpdateStatusFilter: (value: InterviewStatus | "All") => void;
  UpdateShowTodayInterviews: (value: boolean) => void;
  forJobDetails: boolean;
};

export default function InterviewsFilteration({
  UpdateSearchTxt,
  UpdateStatusFilter,
  UpdateShowTodayInterviews,
  forJobDetails,
}: Props) {
  return (
    <div className="w-full flex items-center gap-3 flex-wrap justify-between">
      <div className="flex items-center gap-3 flex-wrap">
        {/* Search  */}
        <div className="space-y-1 md:w-130 w-full">
          <Label htmlFor="search-name" className="text-sm">
            {`Search by (Candidate Name , Email ${forJobDetails ? "" : ", Job Title"})`}
          </Label>
          <div className="flex items-center bg-white pl-2 rounded-md border">
            <HugeiconsIcon
              icon={Search01Icon}
              className="size-4.5 text-black/40"
              strokeWidth={2}
            />
            <Input
              type="text"
              placeholder={`Search by (Candidate Name , Email ${forJobDetails ? "" : ", Job Title"})`}
              className="border-0 outline-0 focus-visible:ring-0 text-black rounded-md bg-transparent shadow-none"
              id="search-name"
              onChange={(e) => UpdateSearchTxt(e.target.value)}
            />
          </div>
        </div>

        {/* Filter By Status */}
        <div className="space-y-1 md:w-80 w-full">
          <Label htmlFor="interview-status" className="text-sm">
            Status
          </Label>
          <Select
            onValueChange={(e) =>
              UpdateStatusFilter(e as InterviewStatus | "All")
            }
            defaultValue={"All"}>
            <SelectTrigger
              id="interview-status"
              className="w-full bg-white h-11! border border-border-color">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-border-color">
              <SelectGroup>
                <SelectItem
                  className="hover:bg-input-bg! hover:text-black!"
                  value="All">
                  All
                </SelectItem>
                <SelectItem
                  className="hover:bg-input-bg! hover:text-black!"
                  value="Upcoming">
                  Upcoming
                </SelectItem>
                <SelectItem
                  className="hover:bg-input-bg! hover:text-black!"
                  value="Completed">
                  Completed
                </SelectItem>
                <SelectItem
                  className="hover:bg-input-bg! hover:text-black!"
                  value="Cancelled">
                  Cancelled
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Show Only Today */}
      <div className="flex items-center gap-1">
        <Checkbox
          onCheckedChange={(e) => UpdateShowTodayInterviews(e as boolean)}
          id="today-interviews"
          className="w-4.5 h-4.5 flex items-center justify-center border bg-white border-black/20
                  data-[state=checked]:bg-main-color
                  data-[state=checked]:border-main-color
                  data-[state=checked]:text-white rounded-[3px]">
          <CheckboxIndicator className="w-3.5 h-3.5" />
        </Checkbox>
        <Label htmlFor="today-interviews">{"Show Today's Interviews"}</Label>
      </div>
    </div>
  );
}
