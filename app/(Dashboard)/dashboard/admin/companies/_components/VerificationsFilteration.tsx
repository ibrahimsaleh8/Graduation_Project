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

export default function VerificationsFilteration() {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col w-full md:max-w-6xl">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search By Comany Name"
          className="bg-white border border-border-color w-full"
        />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="verif-status">Status</Label>
        <Select defaultValue="all">
          <SelectTrigger
            id="verif-status"
            className="w-full bg-white h-11! border border-border-color">
            <SelectValue placeholder="Verification" />
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
                value="approved">
                Approved
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="rejected">
                Rejected
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="needs_more_info">
                Needs more info
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
