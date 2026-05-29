import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
type Props = {
  id: string;
  setValue: (date: Date | undefined) => void;
  isInvalid: boolean;
  dealtValues?: Date;
};
export default function SelectExperienceDate({
  id,
  setValue,
  isInvalid,
  dealtValues,
}: Props) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(dealtValues);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-invalid={isInvalid}
          variant="outline"
          id={id}
          className="justify-start font-normal w-full bg-input-bg text-sm hover:bg-input-bg/80 hover:text-black">
          {date ? date.toLocaleDateString() : "Select date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto overflow-hidden p-0 bg-input-bg text-black"
        align="start">
        <Calendar
          mode="single"
          selected={date}
          defaultMonth={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
            setValue(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
