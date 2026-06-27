import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { jobCategories } from "@/lib/JobCategories";
import { HugeiconsIcon } from "@hugeicons/react";
import { Briefcase01Icon } from "@hugeicons/core-free-icons";

type Props = {
  UpdateIndustry: (country: string) => void;
  deafultIndustry: string;
  classes?: string;
  withIcon: boolean;
  isInvalid?: boolean;
};
export default function IndustrySearch({
  UpdateIndustry,
  deafultIndustry,
  classes,
  withIcon,
  isInvalid,
}: Props) {
  const [value, setValue] = useState(deafultIndustry);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={`${classes ? classes : "h-11 text-low-color border-0 flex items-center justify-start hover:bg-input-bg/80 duration-300 bg-input-bg"} ${isInvalid ? "border-red-500" : ""} `}>
          <span className="text-left text-black w-full text-sm font-normal flex items-center gap-3">
            {withIcon && (
              <HugeiconsIcon
                icon={Briefcase01Icon}
                className="size-6 text-black/50"
              />
            )}

            {value ? (
              jobCategories.find((category) => category === value)
            ) : (
              <span className="text-black/50 font-medium flex items-center gap-3 justify-between w-full">
                Select Industry... <ChevronDown />
              </span>
            )}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command className="bg-white">
          <CommandInput className="bg-white" placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No Category found.</CommandEmpty>
            <CommandGroup className="bg-white">
              {jobCategories.map((country) => (
                <CommandItem
                  className="cursor-pointer"
                  key={country}
                  value={country}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    UpdateIndustry(currentValue === value ? "" : currentValue);
                  }}>
                  <span className="truncate">{country}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
