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
import { employmentTypes, workApproaches } from "@/lib/EmploymentType";

type Props = {
  updateSearchTxt: (txt: string) => void;
  updateStatusFilter: (status: "All" | "Active" | "Inactive") => void;
  updateTypeFilter: (type: string) => void;
};

export default function JobPostsFilteration({
  updateSearchTxt,
  updateStatusFilter,
  updateTypeFilter,
}: Props) {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          onChange={(e) => updateSearchTxt(e.target.value)}
          type="text"
          placeholder="Search By job title or company..."
          className="bg-white border border-border-color w-full"
        />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select
          defaultValue="All"
          onValueChange={(e) =>
            updateStatusFilter(e as "All" | "Active" | "Inactive")
          }>
          <SelectTrigger
            id="status"
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
                value="Active">
                Active
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="Inactive">
                Inactive
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Job Type */}
      <div className="w-full space-y-1">
        <Label htmlFor="Type">Type</Label>
        <Select defaultValue="All" onValueChange={(e) => updateTypeFilter(e)}>
          <SelectTrigger
            id="Type"
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

              {employmentTypes.map((emType) => (
                <SelectItem
                  key={emType}
                  className="hover:bg-input-bg! hover:text-black!"
                  value={emType}>
                  {emType}
                </SelectItem>
              ))}
              {workApproaches.map((workApproach) => (
                <SelectItem
                  key={workApproach}
                  className="hover:bg-input-bg! hover:text-black!"
                  value={workApproach}>
                  {workApproach}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
