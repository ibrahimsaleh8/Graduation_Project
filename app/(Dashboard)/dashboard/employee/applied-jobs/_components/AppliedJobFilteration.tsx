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
import { employmentTypes } from "@/lib/EmploymentType";
type Props = {
  UpdateSearchTxt: (text: string) => void;
  UpdateSearchType: (type: string) => void;
  UpdateSearchStatus: (status: string) => void;
};
export default function AppliedJobFilteration({
  UpdateSearchTxt,
  UpdateSearchStatus,
  UpdateSearchType,
}: Props) {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          onChange={(e) => UpdateSearchTxt(e.target.value)}
          id="search"
          type="text"
          placeholder="Search By job title or company..."
          className="bg-white border border-border-color w-full"
        />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select onValueChange={(e) => UpdateSearchStatus(e)} defaultValue="all">
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
                value="Accepted">
                Accepted
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="Pending">
                Pending
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="Reviewed">
                Reviewed
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="Rejected">
                Rejected
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Job Type */}
      <div className="w-full space-y-1">
        <Label htmlFor="Type">Type</Label>
        <Select onValueChange={(e) => UpdateSearchType(e)} defaultValue="all">
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

              {employmentTypes.map((empType) => (
                <SelectItem
                  key={empType}
                  className="hover:bg-input-bg! hover:text-black! capitalize"
                  value={empType}>
                  {empType}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
