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

export default function InterviewsFilteration() {
  return (
    <div className="w-full flex items-center gap-3 flex-wrap justify-between">
      {/* Filter By Status */}
      <div className="space-y-1 sm:w-50 w-full">
        <Label htmlFor="interview-status">Status</Label>
        <Select defaultValue={"all"}>
          <SelectTrigger
            id="job-location"
            className="w-full bg-white h-11! border border-border-color">
            <SelectValue placeholder="Status" />
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
                value="pending">
                Pending
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="completed">
                Completed
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="canceled">
                Canceled
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Show Only Today */}
      <div className="flex items-center gap-1">
        <Checkbox
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
