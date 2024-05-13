import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { format } from "date-fns";

const DateAndTimePicker = ({
  dateInputPlaceholder,
  timeInputPlaceholder,
  onChange,
}: {
  dateInputPlaceholder: string;
  timeInputPlaceholder: string;
  onChange: (value: object) => void;
}) => {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  function handleDate(value: Date | undefined) {
    if (!value) return null;
    const formatDate = format(value?.toString(), "dd-MM-yyyy");
    setDate(formatDate);
  }

  function handleTime(value: string) {
    setTime(value);
  }

  useEffect(() => {
    if (date && time) {
      onChange({ date: date, time: time });
    }
  }, [date, time]);

  return (
    <div className=" min-w-[320px] h-[40px] p-1  rounded-[5px] bg-blue_light gap-2 flex items-center justify-center">
      <DatePicker
        inputPlaceholder={dateInputPlaceholder}
        onChange={handleDate}
      />
      <TimePicker
        inputPlaceholder={timeInputPlaceholder}
        onChange={handleTime}
      />
    </div>
  );
};

export default DateAndTimePicker;
