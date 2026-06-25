import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { countries } from "@/lib/Countries";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
type Props = {
  updateLocation: (value: string) => void;
  deafultValue?: string;
};
export default function JobLocationSearch({
  updateLocation,
  deafultValue,
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(deafultValue ?? "");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="lg:w-fit lg:flex-1 w-full flex flex-col gap-1 py-2 md:py-0">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full flex items-center! rounded-full h-12 text-sm gap-2 bg-white font-normal border-0 shadow-none hover:text-black hover:bg-white/90 justify-start text-black">
            <HugeiconsIcon
              icon={Location01Icon}
              className="w-6! h-6! text-black/50"
            />
            <span className={cn("truncate")}>
              {value ? (
                value
              ) : (
                <span className="text-black/50 font-medium">
                  Set your country...
                </span>
              )}
            </span>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command className="bg-white border-white!">
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                className="border-b rounded-none mb-3 cursor-pointer"
                value={"AnyWhere"}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "AnyWhere" : currentValue);
                  setOpen(false);
                  updateLocation("AnyWhere");
                }}>
                <span className="truncate">AnyWhere</span>
              </CommandItem>
              {countries.map((city) => (
                <CommandItem
                  key={city}
                  className="cursor-pointer"
                  value={city}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    updateLocation(
                      currentValue === value ? "AnyWhere" : currentValue,
                    );
                  }}>
                  <span className="truncate">{city}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
