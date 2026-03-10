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
import { UseFormSetValue } from "react-hook-form";
import { UserRegisterDataType } from "@/validations/RegisterValidationSchema";
import { countries } from "@/lib/Countries";

export default function CountrySelect({
  setCountryValue,
}: {
  setCountryValue: UseFormSetValue<UserRegisterDataType>;
}) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="h-11 text-low-color border flex justify-start hover:bg-input-bg/80 duration-300 bg-input-bg">
          <span className="text-left text-black w-full text-sm">
            {value ? (
              countries.find((country) => country === value)
            ) : (
              <span className="text-low-color flex items-center gap-3 justify-between w-full">
                Select Country <ChevronDown />
              </span>
            )}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country}
                  value={country}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setCountryValue("location", currentValue);
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
