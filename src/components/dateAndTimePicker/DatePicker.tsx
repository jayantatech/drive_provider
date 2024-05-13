"use client";
import * as React from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdDateRange } from "react-icons/md";
import { Item } from "@radix-ui/react-dropdown-menu";

export default function DatePicker({
  inputPlaceholder,
  onChange,
}: {
  inputPlaceholder: string;
  onChange: (value: Date | undefined) => void;
}) {
  const [date, setDate] = React.useState<Date>();
  React.useEffect(() => {
    onChange(date);
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="min-w-[165px] max-md:w-[190px] flex bg-white items-center justify-start h-full rounded-[5px] px-3 gap-2">
          <MdDateRange className="text-[19px] -mt-1" />
          <span className="text-[15px]">
            {" "}
            {date ? format(date, "PPP") : <span>{inputPlaceholder}</span>}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none " align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="rounded-[4px] border-none bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}
