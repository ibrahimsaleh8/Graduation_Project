import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function JobApplicantsFilter() {
  return (
    <div className="w-full flex items-center gap-3 justify-between">
      {/* Search By Candidate name */}
      <div className="space-y-1 w-full">
        <Label htmlFor="search-name" className="text-sm">
          Search by Candidate Name
        </Label>
        <div className="flex items-center bg-white pl-2 rounded-md border">
          <HugeiconsIcon
            icon={Search01Icon}
            className="size-4.5 text-black/40"
            strokeWidth={2}
          />
          <Input
            type="text"
            placeholder="Search by Candidate Name"
            className="border-0 outline-0 focus-visible:ring-0 text-black rounded-md bg-transparent shadow-none"
            id="search-name"
          />
        </div>
      </div>

      {/* Filter By Status */}
      <div className="space-y-1 md:w-50 w-full">
        <Label htmlFor="interview-status" className="text-sm">
          Status
        </Label>
        <Select defaultValue={"all"}>
          <SelectTrigger
            id="interview-status"
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
                value="interviewed">
                Interviewed
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="reviewed">
                Reviewed
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="rejected">
                Rejected
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
