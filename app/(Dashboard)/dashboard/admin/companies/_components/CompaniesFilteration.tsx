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

export default function CompaniesFilteration() {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col w-full">
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
        <Label htmlFor="verification">Verification</Label>
        <Select defaultValue="all">
          <SelectTrigger
            id="verification"
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
                value="verified">
                Verified
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="not-verified">
                Not Verified
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="subscription">Subscription</Label>
        <Select defaultValue="all">
          <SelectTrigger
            id="subscription"
            className="w-full bg-white h-11! border border-border-color">
            <SelectValue placeholder="Subscription" />
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
                value="free">
                Free
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="premium">
                Premium
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="business">
                Business
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="enterprise">
                Enterprise
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
