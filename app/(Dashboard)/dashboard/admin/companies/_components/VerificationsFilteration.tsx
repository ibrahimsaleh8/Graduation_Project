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
import { VerificationRequestStatusDataType } from "./hooks/useVerificationRequest";
type Props = {
  updateSearchTxt: (value: string) => void;
  updateStatus: (value: "All" | VerificationRequestStatusDataType) => void;
};

export default function VerificationsFilteration({
  updateSearchTxt,
  updateStatus,
}: Props) {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col w-full ">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="request-company-search">Search</Label>
        <Input
          onChange={(e) => updateSearchTxt(e.target.value)}
          id="request-company-search"
          type="text"
          placeholder="Search By Company Name or Email"
          className="bg-white border border-border-color w-full"
        />
      </div>

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="verif-status">Status</Label>
        <Select
          onValueChange={(e: "All" | VerificationRequestStatusDataType) =>
            updateStatus(e)
          }
          defaultValue="All">
          <SelectTrigger
            id="verif-status"
            className="w-full bg-white h-11! border border-border-color">
            <SelectValue placeholder="Verification" />
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
                value="Pending">
                Pending
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="Approved">
                Approved
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="Rejected">
                Rejected
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="NeedsMoreInformation">
                Need more Details
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
