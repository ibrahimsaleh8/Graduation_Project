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

type Props = {
  updateSearchTxt: (value: string) => void;
  updateStatus: (value: "all" | "active" | "blocked") => void;
};

export default function UsersFilter({ updateSearchTxt, updateStatus }: Props) {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          onChange={(e) => updateSearchTxt(e.target.value)}
          id="search"
          type="text"
          placeholder="Search By Name or Email..."
          className="bg-white border border-border-color w-full"
        />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select
          onValueChange={(value) =>
            updateStatus(value as "all" | "active" | "blocked")
          }
          defaultValue="all">
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
                value="blocked">
                Blocked
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
