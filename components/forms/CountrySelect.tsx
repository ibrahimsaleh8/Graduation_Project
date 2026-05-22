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
import { countries } from "@/lib/Countries";

type Props = {
  UpdateCountry: (country: string) => void;
};

export default function CountrySelect({ UpdateCountry }: Props) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="h-11 text-low-color border-0 flex justify-start hover:bg-input-bg/80 duration-300 bg-input-bg">
          <span className="text-left text-black w-full text-sm font-normal">
            {value ? (
              countries.find((country) => country === value)
            ) : (
              <span className="text-black/30 flex items-center gap-3 justify-between w-full">
                Select Country <ChevronDown />
              </span>
            )}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command className="bg-white">
          <CommandInput className="bg-white" placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup className="bg-white">
              {countries.map((country) => (
                <CommandItem
                  className="cursor-pointer"
                  key={country}
                  value={country}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    UpdateCountry(currentValue);
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
