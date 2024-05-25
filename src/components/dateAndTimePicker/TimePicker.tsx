import { useRef, useState } from "react";
import { MdAccessTime } from "react-icons/md";

const TimePicker = ({
  inputPlaceholder,
  onChange,
}: {
  inputPlaceholder: string;
  onChange: (value: string) => void;
}) => {
  const [timePicker, setTimePicker] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleTimeChange() {
    if (inputRef.current) {
      onChange(inputRef?.current?.value);
    }
  }

  return (
    <button
      className="flex min-w-[140px] max-md:w-[148px] bg-[#fff] items-center justify-end h-full rounded-[5px] px-2 gap-2"
      onClick={() => setTimePicker(true)}
    >
      {!timePicker ? (
        <>
          <span className="text-[15px]">{inputPlaceholder}</span>
          <MdAccessTime className="text-[19px] -mt-[2px]" />
        </>
      ) : (
        <input
          type="time"
          ref={inputRef}
          className=" custom-time-input w-full h-full  bg-transparent placeholder:text-black hover:border-none outline-none font-openSans text-[15px]"
          placeholder="Pickup Time"
          max="20:00"
          onChange={handleTimeChange}
        />
      )}
    </button>
  );
};

export default TimePicker;
