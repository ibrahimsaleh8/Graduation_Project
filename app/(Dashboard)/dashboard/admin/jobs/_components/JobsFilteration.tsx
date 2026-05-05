import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

export default function JobsFilteration() {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search By job title or company..."
          className="bg-white border border-border-color w-full"
        />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select defaultValue="all">
          <SelectTrigger
            id="status"
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
                value="active">
                Active
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="pending">
                Pending
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

      {/* Job Type */}
      <div className="w-full space-y-1">
        <Label htmlFor="Type">Type</Label>
        <Select defaultValue="all">
          <SelectTrigger
            id="Type"
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
                value="remote">
                Remote
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="onsite">
                Onsite
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="hybrid">
                Hybrid
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="flexible">
                Flexible
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
