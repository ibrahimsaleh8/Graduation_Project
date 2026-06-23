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
  UpdateSerchTxt: (value: string) => void;
  UpdatePlanFilter: (value: string) => void;
  UpdateStatusFilter: (value: "all" | "active" | "expired") => void;
  plans: string[];
};

export default function SubscriptionFilteration({
  UpdatePlanFilter,
  UpdateSerchTxt,
  UpdateStatusFilter,
  plans,
}: Props) {
  return (
    <div className="flex items-center gap-3 md:flex-row flex-col">
      {/* Search */}
      <div className="w-full space-y-1">
        <Label htmlFor="search">Search</Label>
        <Input
          onChange={(e) => UpdateSerchTxt(e.target.value)}
          id="search"
          type="text"
          placeholder="Search By Company Name..."
          className="bg-white border border-border-color w-full"
        />
      </div>
      {/* Plan */}

      {plans.length > 0 && (
        <div className="w-full space-y-1">
          <Label htmlFor="plan">Plan</Label>
          <Select onValueChange={(e) => UpdatePlanFilter(e)} defaultValue="all">
            <SelectTrigger
              id="plan"
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
                {plans.map((plan) => (
                  <SelectItem
                    key={plan}
                    className="hover:bg-input-bg! hover:text-black! capitalize"
                    value={plan}>
                    {plan}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Status */}
      <div className="w-full space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select
          onValueChange={(e: "all" | "active" | "expired") =>
            UpdateStatusFilter(e)
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
                value="expired">
                Expired
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
