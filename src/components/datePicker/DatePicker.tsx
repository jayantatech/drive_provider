"use client";
import * as React from "react";
import { CiCalendar } from "react-icons/ci";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";

export default function DatePicker({
  placeholderText,
  onChange,
}: {
  placeholderText: string;
  onChange: (dateRange: DateRange) => void;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>();
  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: new Date(),
  //   to: addDays(new Date(), 20),
  // });

  const handleDateSelect = (selectedDateRange: DateRange | undefined) => {
    if (selectedDateRange) {
      console.log(selectedDateRange);
      setDate(selectedDateRange);
      onChange(selectedDateRange);
    }
  };
  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[250px] justify-start text-left font-normal bg-white rounded-[5px] hover:bg-white",
              !date && "text-muted-foreground"
            )}
          >
            <CiCalendar className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholderText}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(event) => handleDateSelect(event)}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
