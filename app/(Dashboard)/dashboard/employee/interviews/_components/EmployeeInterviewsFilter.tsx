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
import { Label } from "@/components/ui/label";
import { InterviewStatus } from "./ShowEmployeeInterviews";

type Props = {
  updateFilterStatus: (status: InterviewStatus | "all") => void;
  toggleTodayInterviews: (value: boolean) => void;
};

export default function EmployeeInterviewsFilter({
  updateFilterStatus,
  toggleTodayInterviews,
}: Props) {
  return (
    <div className="w-full flex items-center justify-between flex-wrap gap-5">
      <div className="w-full space-y-1 max-w-80">
        <Label htmlFor="interview-status" className="text-sm font-medium">
          Filter by Interview Status
        </Label>
        <Select defaultValue="all" onValueChange={updateFilterStatus}>
          <SelectTrigger
            id="interview-status"
            className="w-full bg-white h-11! border border-border-color">
            <SelectValue placeholder="Interview Status" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black border border-border-color">
            <SelectGroup>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="all">
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

      <div className="flex items-center gap-1.5">
        <Checkbox
          onCheckedChange={(e: boolean) => toggleTodayInterviews(e)}
          id="today-interviews"
          className="w-4.5 h-4.5 flex items-center justify-center bg-white border [&[data-state=checked],&[data-state=indeterminate]]:bg-main-color [&[data-state=checked],&[data-state=indeterminate]]:text-white rounded-[3px]">
          <CheckboxIndicator className="w-3.5 h-3.5" />
        </Checkbox>
        <Label htmlFor="today-interviews" className="cursor-pointer">
          Show {"Today's"} Interviews
        </Label>
      </div>
    </div>
  );
}
